import { MapPin, Clock, Phone, Mail, Star } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="bg-[#4A3B32] text-white"
      data-testid="footer-section"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column - Info */}
          <div>
            {/* Logo */}
            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-medium mb-6">
              Jingping <span className="text-[#B8C480]">e</span> Hijo
            </h3>
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md">
              Un rincón donde la precisión asiática se encuentra con la calidez 
              madrileña. Café de especialidad, matcha ceremonial y brunch fusión 
              en el corazón de Chamberí.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#B8C480] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-white">C. de Galileo, 3</span>
                  <span className="text-white/60 text-sm">Chamberí, 28015 Madrid</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-[#B8C480] flex-shrink-0" />
                <div>
                  <span className="block text-white">Lun - Vie: 8:00 - 20:00</span>
                  <span className="text-white/60 text-sm">Sáb - Dom: 9:00 - 20:00</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#B8C480] flex-shrink-0" />
                <span className="text-white">+34 912 345 678</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#B8C480] flex-shrink-0" />
                <span className="text-white">hola@jingpingehijo.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.instagram.com/jingpingehijo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center social-link hover:bg-[#B8C480]"
                data-testid="footer-instagram"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@jingpingehijo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center social-link hover:bg-[#B8C480]"
                data-testid="footer-tiktok"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://maps.app.goo.gl/BNARCBco5Dej7R1U8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full social-link hover:bg-[#B8C480]"
                data-testid="footer-reviews"
              >
                <Star className="w-4 h-4" fill="currentColor" />
                <span className="text-sm font-medium">Google Reviews</span>
              </a>
            </div>
          </div>

          {/* Right Column - Map */}
          <div>
            <h4 className="font-['Playfair_Display'] text-xl font-medium mb-6">
              Encuéntranos
            </h4>
            <div className="map-container h-[300px] md:h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.8762!2d-3.7118845!3d40.4304964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229b8a0c34373%3A0x788b63fbb16d4d84!2sCafeter%C3%ADa%20JINGPING%20E%20HIJO!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Jingping e Hijo"
                data-testid="google-map"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {currentYear} Jingping e Hijo. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
