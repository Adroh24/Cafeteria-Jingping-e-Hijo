import { useState } from 'react';
import { Coffee, Leaf, Wine, Droplets, ChevronDown } from 'lucide-react';

export const MenuCards = () => {
  const [activeCategory, setActiveCategory] = useState('cafes');

  const menuCategories = [
    { id: 'cafes', label: 'Cafés', icon: Coffee },
    { id: 'frias', label: 'Bebidas Frías', icon: Droplets },
    { id: 'vinos', label: 'Vinos y Otras', icon: Wine },
    { id: 'refrescos', label: 'Refrescos', icon: Leaf },
  ];

  const menuItems = {
    cafes: [
      { name: 'Espresso', price: '2.70' },
      { name: 'Americano', price: '3.00' },
      { name: 'Cortado', price: '3.00' },
      { name: 'Latte / Cappuccino', price: '3.40' },
      { name: 'Flat White', price: '3.80' },
      { name: 'Batch Brew', price: '3.80' },
      { name: 'Hand Brew', price: '7.00 - 12.00' },
      { name: 'Chai Latte', price: '4.00' },
      { name: 'Dirty Chai Latte', price: '5.00' },
      { name: 'Matcha Latte', price: '5.20' },
      { name: 'Mocha', price: '5.50' },
      { name: 'Chocolate Caliente', price: '4.50' },
      { name: 'Variedad de Tés', price: '4.00 - 6.00', note: 'Consultar opciones' },
    ],
    frias: [
      { name: 'Iced Latte', price: '4.50' },
      { name: 'Iced Chai', price: '4.50' },
      { name: 'Iced Matcha', price: '5.50', note: 'Agua de coco o Leche Vegetal +0.50' },
      { name: 'Iced Tea', price: '4.20' },
      { name: 'Cold Brew', price: '4.20' },
    ],
    vinos: [
      { name: 'Tintos', price: '4.00', note: 'Consultar opciones' },
      { name: 'Blancos', price: '4.00', note: 'Consultar opciones' },
      { name: 'Tsingtao', price: '3.20' },
      { name: 'Rio Cocktail', price: '4.20', note: 'Consultar opciones' },
    ],
    refrescos: [
      { name: 'Bebidas Fritz', price: '3.50', note: 'Consultar opciones' },
      { name: 'Lemonaid+', price: '3.50', note: 'Consultar opciones' },
      { name: 'Botella de agua', price: '2.50' },
    ],
  };

  return (
    <section
      id="menu"
      className="py-20 md:py-32 bg-white"
      data-testid="menu-section"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#B8C480] text-sm font-medium tracking-widest uppercase mb-4">
            Nuestra Carta
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-medium text-[#2C2C2C] leading-tight mb-6">
            Lo mejor de dos mundos
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg max-w-2xl mx-auto">
            Cada elemento de nuestra carta está cuidadosamente seleccionado para 
            ofrecerte una experiencia única.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#B8C480] text-[#2C2C2C]'
                  : 'bg-[#FDFBF7] text-[#6B6B6B] hover:bg-[#E5E0D8]'
              }`}
              data-testid={`menu-tab-${category.id}`}
            >
              <category.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{category.label}</span>
              <span className="sm:hidden">{category.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-[#FDFBF7] rounded-2xl p-6 md:p-10">
          <div className="space-y-1">
            {menuItems[activeCategory].map((item, index) => (
              <div
                key={index}
                className="group flex items-baseline justify-between py-3 border-b border-dashed border-[#E5E0D8] last:border-b-0 hover:bg-white/50 px-3 -mx-3 rounded-lg transition-colors duration-200"
                data-testid={`menu-item-${item.name.toLowerCase().replace(/\s/g, '-')}`}
              >
                <div className="flex-1 pr-4">
                  <span className="text-[#2C2C2C] font-medium group-hover:text-[#8D5A44] transition-colors duration-200">
                    {item.name}
                  </span>
                  {item.note && (
                    <span className="block text-xs text-[#6B6B6B] mt-0.5 italic">
                      {item.note}
                    </span>
                  )}
                </div>
                <span className="text-[#B8C480] font-semibold whitespace-nowrap">
                  {item.price}€
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-[#6B6B6B] mt-6">
          Leche vegetal disponible sin coste adicional • Preguntar por alérgenos
        </p>
      </div>
    </section>
  );
};
