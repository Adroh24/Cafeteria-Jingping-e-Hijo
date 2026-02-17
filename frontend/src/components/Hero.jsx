import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero = ({ onReserveClick }) => {
  const scrollToMenu = () => {
    const element = document.querySelector('#menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      data-testid="hero-section">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://customer-assets.emergentagent.com/job_matcha-brunch/artifacts/0fcws6zu_SnapInsta.to_548837436_18147453937408390_5059494411760925664_n%20%281%29.jpg"
          alt="Jingping e Hijo Interior"
          className="w-full h-full object-cover" />

        <div className="" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 md:py-0">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="animate-fade-in-up opacity-0 mb-6">
            <span className="inline-block uppercase !font-medium !text-sm !text-center px-4 py-1.5 rounded-full text-[#4A3B32] bg-[#B8C480]/20">
              Café de Especialidad & Matcha Bar
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up opacity-0 delay-100 font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#2C2C2C] leading-tight tracking-tight mb-6">
            Precisión Asiática.
            <br />
            <span className="text-[#8D5A44]">Calidez Local.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up opacity-0 delay-200 text-lg md:text-xl text-[#6B6B6B] leading-relaxed mb-10 max-w-lg">
            Café de especialidad y Matcha Bar en el corazón de Chamberí. 
            Una fusión única de tradición oriental y sabor familiar.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up opacity-0 delay-300 flex flex-col sm:flex-row gap-4">
            <Button
              onClick={onReserveClick}
              className="bg-[#B8C480] text-[#2C2C2C] hover:bg-[#A5B36B] rounded-full px-8 py-6 text-base font-medium btn-primary group"
              data-testid="hero-reserve-btn">

              Reservar Mesa
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              onClick={scrollToMenu}
              className="bg-transparent border-2 border-[#4A3B32] text-[#4A3B32] hover:bg-[#4A3B32] hover:text-white rounded-full px-8 py-6 text-base font-medium btn-secondary"
              data-testid="hero-menu-btn">

              Ver Menú
            </Button>
          </div>

          {/* Hours Badge */}
          <div className="animate-fade-in-up opacity-0 delay-400 mt-12 flex items-center gap-4 text-sm text-[#6B6B6B]">
            <div className="w-2 h-2 bg-[#B8C480] rounded-full animate-pulse" />
            <span>Lun-Vie: 8:00 - 20:00 | Sáb-Dom: 9:00 - 20:00</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-[#4A3B32]/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#4A3B32]/50 rounded-full" />
        </div>
      </div>
    </section>);

};