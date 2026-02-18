export const Origins = () => {
  return (
    <section
      id="origenes"
      className="py-20 md:py-32 bg-white"
      data-testid="origins-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <img
                src="https://customer-assets.emergentagent.com/job_matcha-brunch/artifacts/40sy0jgk_SnapInsta.to_480482144_18127911973408390_560117855195768000_n.jpg"
                alt="Teteras tradicionales de Jingdezhen"
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#8D5A44]/10 rounded-full -z-10" />
          </div>

          {/* Text Content */}
          <div>
            <span className="inline-block text-[#B8C480] text-sm font-medium tracking-widest uppercase mb-4">
              Nuestros Orígenes
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-medium text-[#2C2C2C] leading-tight mb-6">
              El alma de{' '}
              <span className="text-[#8D5A44]">Jingdezhen</span>
            </h2>
            <p className="text-[#4A3B32] text-lg md:text-xl leading-relaxed">
              Detrás de nuestra barra, late el corazón de Jingdezhen. Crecimos en la cuna 
              histórica de la porcelana china, rodeados de una tradición que valora la 
              perfección y el detalle obsesivo.
            </p>
            
            {/* Decorative line */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#E5E0D8]" />
              <span className="text-[#8D5A44] text-2xl font-light">景德镇</span>
              <div className="h-px flex-1 bg-[#E5E0D8]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
