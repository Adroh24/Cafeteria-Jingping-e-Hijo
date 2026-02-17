import { Leaf, Heart } from 'lucide-react';

export const About = () => {
  return (
    <section
      id="historia"
      className="py-20 md:py-32 bg-[#FDFBF7]"
      data-testid="about-section">

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <span className="inline-block text-[#B8C480] text-sm font-medium tracking-widest uppercase mb-4">
              Nuestra Historia
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-medium text-[#2C2C2C] leading-tight mb-6">
              Donde la tradición se encuentra con la{' '}
              <span className="text-[#8D5A44]">especialidad</span>
            </h2>
            <div className="space-y-6 text-[#6B6B6B] text-base md:text-lg leading-relaxed">
              <p> [静平] es más que un nombre; es el origen de todo. Ella es la madre de Julián, el fundador de este proyecto. Este rincón nació del vínculo más sincero y profundo que existe: el de una madre y su hijo.
                <strong className="text-[#2C2C2C]">Jingping</strong>


              </p>
              <p>
                Su <strong className="text-[#8D5A44]">hijo</strong>, criado entre dos 
                culturas, añadió la calidez del brunch mediterráneo y la pasión por el 
                café de especialidad de origen único.
              </p>
              <p>
                Juntos crearon un espacio donde cada taza cuenta una historia, cada 
                plato es una fusión de mundos, y cada visita se convierte en un momento 
                de calma en el corazón de Madrid.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#B8C480]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-[#B8C480]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#2C2C2C] mb-1">Sostenibilidad</h4>
                  <p className="text-sm text-[#6B6B6B]">Productos de origen responsable</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#8D5A44]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-[#8D5A44]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#2C2C2C] mb-1">Artesanal</h4>
                  <p className="text-sm text-[#6B6B6B]">Hecho con amor y dedicación</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1634568574054-0ab278fdc1e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGFydCUyMG1pbmltYWxpc3QlMjBjdXB8ZW58MHx8fHwxNzcxMzU5Nzk0fDA&ixlib=rb-4.1.0&q=85"
                  alt="Matcha Latte Art"
                  className="w-full h-[400px] md:h-[500px] object-cover" />

              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <div className="text-center">
                  <span className="block font-['Playfair_Display'] text-4xl font-medium text-[#B8C480]">5+</span>
                  <span className="text-sm text-[#6B6B6B]">Años de experiencia</span>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#B8C480]/20 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>);

};