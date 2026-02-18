import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuCards } from './components/MenuCards';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { Origins } from './components/Origins';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { CartaPage } from './components/CartaPage';
import { Toaster } from './components/ui/sonner';

const HomePage = ({ onReserveClick }) => {
  return (
    <>
      {/* Header */}
      <Header onReserveClick={onReserveClick} />
      
      {/* Main Content */}
      <main>
        <Hero onReserveClick={onReserveClick} />
        <About />
        <MenuCards />
        <Reviews />
        <Gallery />
        <Origins />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleOpenReservation = () => {
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FDFBF7]" data-testid="app-container">
        {/* Grain texture overlay for premium feel */}
        <div className="grain-overlay" aria-hidden="true" />
        
        <Routes>
          <Route path="/" element={<HomePage onReserveClick={handleOpenReservation} />} />
          <Route path="/carta" element={<CartaPage />} />
        </Routes>
        
        {/* Reservation Modal */}
        <ReservationModal 
          isOpen={isReservationOpen} 
          onClose={handleCloseReservation} 
        />
        
        {/* Toast notifications */}
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#FDFBF7',
              border: '1px solid #E5E0D8',
              color: '#2C2C2C',
            },
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
