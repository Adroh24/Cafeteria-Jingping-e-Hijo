import { useState } from 'react';
import '@/App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuCards } from './components/MenuCards';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { Toaster } from './components/ui/sonner';

function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleOpenReservation = () => {
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7]" data-testid="app-container">
      {/* Grain texture overlay for premium feel */}
      <div className="grain-overlay" aria-hidden="true" />
      
      {/* Header */}
      <Header onReserveClick={handleOpenReservation} />
      
      {/* Main Content */}
      <main>
        <Hero onReserveClick={handleOpenReservation} />
        <About />
        <MenuCards />
        <Reviews />
        <Gallery />
      </main>
      
      {/* Footer */}
      <Footer />
      
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
  );
}

export default App;
