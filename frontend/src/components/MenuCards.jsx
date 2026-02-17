import { Coffee, Leaf, UtensilsCrossed, ArrowRight } from 'lucide-react';

export const MenuCards = () => {
  const menuItems = [
    {
      id: 'coffee',
      title: 'Specialty Coffee',
      subtitle: 'Café de Especialidad',
      description: 'Granos de origen único, tostados artesanalmente. V60, AeroPress, Chemex y el mejor espresso.',
      image: 'https://images.unsplash.com/photo-1770579673855-ab18aabe71a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBwb3VyJTIwb3ZlciUyMG1pbmltYWxpc3QlMjBjYWZlfGVufDB8fHx8MTc3MTM1OTc5OHww&ixlib=rb-4.1.0&q=85',
      icon: Coffee,
      price: 'Desde 3.50€',
      highlight: 'Granos de Colombia y Etiopía',
    },
    {
      id: 'matcha',
      title: 'Ceremonial Matcha',
      subtitle: 'Matcha Ceremonial',
      description: 'Matcha premium importado de Uji, Japón. Batido a mano con chasen tradicional.',
      image: 'https://images.unsplash.com/photo-1634568574054-0ab278fdc1e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGFydCUyMG1pbmltYWxpc3QlMjBjdXB8ZW58MHx8fHwxNzcxMzU5Nzk0fDA&ixlib=rb-4.1.0&q=85',
      icon: Leaf,
      price: 'Desde 4.50€',
      highlight: 'Grado ceremonial de Uji',
    },
    {
      id: 'brunch',
      title: 'Fusion Brunch',
      subtitle: 'Brunch Fusión',
      description: 'Tostadas de aguacate con kimchi, huevos benedictinos con twist asiático, y más.',
      image: 'https://images.unsplash.com/photo-1642689690565-bf0afb7eb41e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwzfHxnb3VybWV0JTIwYnJ1bmNoJTIwYXZvY2FkbyUyMHRvYXN0JTIwcGFuY2FrZXMlMjBtaW5pbWFsaXN0JTIwcGxhdGV8ZW58MHx8fHwxNzcxMzU5ODA3fDA&ixlib=rb-4.1.0&q=85',
      icon: UtensilsCrossed,
      price: 'Desde 12.00€',
      highlight: 'Sábados y domingos',
    },
  ];

  return (
    <section
      id="menu"
      className="py-20 md:py-32 bg-white"
      data-testid="menu-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#B8C480] text-sm font-medium tracking-widest uppercase mb-4">
            Nuestra Carta
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-medium text-[#2C2C2C] leading-tight mb-6">
            Lo mejor de dos mundos
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg max-w-2xl mx-auto">
            Cada elemento de nuestra carta está cuidadosamente seleccionado para 
            ofrecerte una experiencia única que fusiona lo mejor de Oriente y Occidente.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="menu-card bg-white rounded-2xl overflow-hidden border border-[#E5E0D8] hover:border-[#B8C480] group cursor-pointer"
              data-testid={`menu-card-${item.id}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-sm font-medium text-[#2C2C2C]">{item.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#B8C480]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#B8C480] transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-[#4A3B32] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-medium text-[#2C2C2C] mb-1">
                      {item.title}
                    </h3>
                    <span className="text-sm text-[#8D5A44]">{item.subtitle}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlight */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E5E0D8]">
                  <span className="text-xs text-[#B8C480] font-medium tracking-wide uppercase">
                    {item.highlight}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#4A3B32] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
