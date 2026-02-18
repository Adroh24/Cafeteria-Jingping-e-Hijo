import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CartaPage = () => {
  const navigate = useNavigate();

  const menuData = {
    cafes: {
      chinese: '咖啡',
      title: 'CAFÉS',
      items: [
        { name: 'Espresso', price: '2,7' },
        { name: 'Americano', price: '3,0' },
        { name: 'Cortado', price: '3,0' },
        { name: 'Latte / Cappuccino', price: '3,4' },
        { name: 'Flat White', price: '3,8' },
        { name: 'Batch Brew', price: '3,8' },
        { name: 'Hand Brew', price: '7,0 - 12,0' },
        { name: 'Chai Latte', price: '4,0', note: 'Dirty Chai Latte 5,0' },
        { name: 'Matcha Latte', price: '5,2' },
        { name: 'Mocha', price: '5,5' },
        { name: 'Chocolate Caliente', price: '4,5' },
        { name: 'Variedad de Tés', price: '4,0 - 6,0', note: 'Consulta las diferentes opciones' },
      ],
    },
    bebidasFrias: {
      chinese: '冰饮',
      title: 'BEBIDAS FRÍAS',
      items: [
        { name: 'Iced Latte', price: '4,5' },
        { name: 'Iced Chai', price: '4,5' },
        { name: 'Iced Matcha', price: '5,5', note: 'Opción Agua de coco y Leche Vegetal +0,50' },
        { name: 'Iced Tea', price: '4,2' },
        { name: 'Cold Brew', price: '4,2' },
      ],
    },
    granola: {
      chinese: '麦片',
      title: 'GRANOLA',
      items: [
        { name: 'Granola Bowl', price: '6,9' },
        { name: 'Matcha Bowl', price: '9,9' },
      ],
    },
    sandwiches: {
      chinese: '三明治',
      title: 'SANDWICHES',
      items: [
        { name: 'Jamón y Queso', price: '7,9' },
        { name: 'Pollo Teriyaki', price: '9,9' },
        { name: 'Egg Mayo', price: '6,4' },
        { name: 'Kimchi Tuna', price: '7,9' },
        { name: 'Bulgogi', price: '11,9' },
      ],
    },
    tostadas: {
      chinese: '吐司',
      title: 'TOSTADAS',
      items: [
        { name: 'Tomate', price: '3,9' },
        { name: 'Mantequilla', price: '3,9' },
        { name: 'Aguacate', price: '6,4' },
        { name: 'Mayak', price: '8,4' },
      ],
    },
    vinos: {
      chinese: '酒水',
      title: 'VINOS Y OTRAS',
      items: [
        { name: 'Tintos', price: '4,0', note: 'Consulta las diferentes opciones' },
        { name: 'Blancos', price: '4,0', note: 'Consulta las diferentes opciones' },
        { name: 'Tsingtao', price: '3,2' },
        { name: 'Rio Cocktail', price: '4,2', note: 'Consulta las diferentes opciones' },
      ],
    },
    refrescos: {
      chinese: '软饮',
      title: 'REFRESCOS',
      items: [
        { name: 'Bebidas Fritz', price: '3,5', note: 'Consulta las diferentes opciones' },
        { name: 'Lemonaid+', price: '3,5', note: 'Consulta las diferentes opciones' },
        { name: 'Botella de agua', price: '2,5' },
      ],
    },
  };

  const MenuSection = ({ chinese, title, items }) => (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[#8D5A44] text-2xl font-light leading-none">{chinese}</span>
        <h3 className="text-[#8D5A44] text-xl md:text-2xl font-semibold tracking-wide">{title}</h3>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-start">
            <div className="flex-1 pr-4">
              <span className="text-[#4A3B32] text-base">{item.name}</span>
              {item.note && (
                <span className="block text-[#8D5A44]/70 text-xs italic mt-0.5">{item.note}</span>
              )}
            </div>
            <span className="text-[#8D5A44] font-medium whitespace-nowrap">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #F5F0E8 0%, #E8E0D5 100%)',
      }}
      data-testid="carta-page"
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F5F0E8]/95 backdrop-blur-sm border-b border-[#D4C4B0]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#4A3B32] hover:text-[#8D5A44] transition-colors"
            data-testid="carta-back-btn"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Volver</span>
          </button>
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="flex items-center gap-1">
                <div className="flex flex-col gap-0.5">
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 bg-[#8D5A44]"></div>
                    <div className="w-2 h-2 bg-[#8D5A44]"></div>
                    <div className="w-2 h-2 bg-[#8D5A44]"></div>
                  </div>
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 bg-[#8D5A44]"></div>
                    <div className="w-2 h-2 bg-[#8D5A44]"></div>
                    <div className="w-2 h-2 bg-[#8D5A44]"></div>
                  </div>
                </div>
                <span className="text-[#8D5A44] text-lg font-medium ml-1">静平</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#4A3B32] tracking-wider mb-2">
            JINGPING<span className="text-[#8D5A44] text-xl align-middle mx-1">E</span>HIJO
          </h1>
          <div className="text-[#6B6B6B] text-sm space-y-0.5">
            <p>Lunes a Viernes: 08:00 - 20:00</p>
            <p>Sábado y Domingo: 09:00 - 20:00</p>
            <p className="text-[#8D5A44]">@jingpingehijo</p>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {/* Left Column */}
          <div>
            <MenuSection {...menuData.cafes} />
            <MenuSection {...menuData.granola} />
            <MenuSection {...menuData.sandwiches} />
            <MenuSection {...menuData.refrescos} />
          </div>

          {/* Right Column */}
          <div>
            <MenuSection {...menuData.bebidasFrias} />
            <MenuSection {...menuData.tostadas} />
            <MenuSection {...menuData.vinos} />
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-[#6B6B6B] border-t border-[#D4C4B0] pt-6">
          <p>Leche vegetal disponible sin coste adicional</p>
          <p className="mt-1">Preguntar por alérgenos</p>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://www.instagram.com/jingpingehijo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8D5A44] hover:text-[#4A3B32] transition-colors"
            data-testid="carta-instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://maps.app.goo.gl/BNARCBco5Dej7R1U8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8D5A44] hover:text-[#4A3B32] transition-colors"
            data-testid="carta-maps"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
};

export default CartaPage;
