import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

export const Header = ({ onReserveClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#historia', label: 'Historia' },
    { href: '#menu', label: 'Menú' },
    { href: '#galeria', label: 'Galería' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const goToCarta = () => {
    setIsMobileMenuOpen(false);
    navigate('/carta');
  };

  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'header-scrolled py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => scrollToSection(e, '#inicio')}
          className="flex items-center gap-2"
          data-testid="logo"
        >
          <span className="font-['Playfair_Display'] text-xl md:text-2xl font-medium text-[#2C2C2C] tracking-tight">
            Jingping <span className="text-[#8D5A44]">e</span> Hijo
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="nav-link text-[#4A3B32] hover:text-[#2C2C2C] font-medium text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            onClick={onReserveClick}
            className="bg-[#B8C480] text-[#2C2C2C] hover:bg-[#A5B36B] rounded-full px-6 py-2.5 text-sm font-medium btn-primary"
            data-testid="reserve-btn-desktop"
          >
            Reservar Mesa
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#2C2C2C]"
          data-testid="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#FDFBF7]/95 backdrop-blur-lg border-b border-[#E5E0D8] transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        data-testid="mobile-menu"
      >
        <nav className="flex flex-col py-6 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="py-3 text-[#4A3B32] hover:text-[#2C2C2C] font-medium text-base border-b border-[#E5E0D8] last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onReserveClick();
            }}
            className="mt-6 bg-[#B8C480] text-[#2C2C2C] hover:bg-[#A5B36B] rounded-full px-6 py-3 text-base font-medium"
            data-testid="reserve-btn-mobile"
          >
            Reservar Mesa
          </Button>
        </nav>
      </div>
    </header>
  );
};
