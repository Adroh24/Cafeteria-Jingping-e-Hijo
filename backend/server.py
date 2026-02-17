from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


# Reservation Models
class Reservation(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    date: str  # Format: YYYY-MM-DD
    time: str  # Format: HH:MM
    guests: str
    notes: Optional[str] = ""
    status: str = "pending"  # pending, confirmed, cancelled
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ReservationCreate(BaseModel):
    name: str
    phone: str
    date: str
    time: str
    guests: str
    notes: Optional[str] = ""


# Status Routes
@api_router.get("/")
async def root():
    return {"message": "Jingping e Hijo API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# Reservation Routes
@api_router.post("/reservations", response_model=Reservation)
async def create_reservation(input: ReservationCreate):
    """Create a new reservation"""
    reservation_dict = input.model_dump()
    reservation_obj = Reservation(**reservation_dict)
    
    doc = reservation_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    _ = await db.reservations.insert_one(doc)
    
    logging.info(f"New reservation created: {reservation_obj.name} for {reservation_obj.date} at {reservation_obj.time}")
    
    return reservation_obj

@api_router.get("/reservations", response_model=List[Reservation])
async def get_reservations():
    """Get all reservations"""
    reservations = await db.reservations.find({}, {"_id": 0}).to_list(1000)
    
    for reservation in reservations:
        if isinstance(reservation.get('created_at'), str):
            reservation['created_at'] = datetime.fromisoformat(reservation['created_at'])
    
    return reservations

@api_router.get("/reservations/{reservation_id}", response_model=Reservation)
async def get_reservation(reservation_id: str):
    """Get a specific reservation by ID"""
    reservation = await db.reservations.find_one({"id": reservation_id}, {"_id": 0})
    
    if not reservation:
        raise HTTPException(status_code=404, detail="Reservation not found")
    
    if isinstance(reservation.get('created_at'), str):
        reservation['created_at'] = datetime.fromisoformat(reservation['created_at'])
    
    return reservation

@api_router.patch("/reservations/{reservation_id}/status")
async def update_reservation_status(reservation_id: str, status: str):
    """Update reservation status (pending, confirmed, cancelled)"""
    if status not in ["pending", "confirmed", "cancelled"]:
        raise HTTPException(status_code=400, detail="Invalid status")
    
    result = await db.reservations.update_one(
        {"id": reservation_id},
        {"$set": {"status": status}}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Reservation not found")
    
    return {"message": f"Reservation status updated to {status}"}

@api_router.delete("/reservations/{reservation_id}")
async def delete_reservation(reservation_id: str):
    """Delete a reservation"""
    result = await db.reservations.delete_one({"id": reservation_id})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Reservation not found")
    
    return {"message": "Reservation deleted successfully"}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
