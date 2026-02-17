export const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1767034244655-dc41dcfcdec0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwxfHxqYXBhbmRpJTIwY2FmZSUyMGludGVyaW9yJTIwd29vZCUyMHBsYW50cyUyMG1pbmltYWxpc3R8ZW58MHx8fHwxNzcxMzU5ODAyfDA&ixlib=rb-4.1.0&q=85',
      alt: 'Interior del café con decoración Japandi',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1647774469542-d8df9c2e23cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBwb3VyJTIwb3ZlciUyMG1pbmltYWxpc3QlMjBjYWZlfGVufDB8fHx8MTc3MTM1OTc5OHww&ixlib=rb-4.1.0&q=85',
      alt: 'Preparación de café specialty',
      span: 'md:col-span-1',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1770494347729-891046add494?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBwb3VyJTIwb3ZlciUyMG1pbmltYWxpc3QlMjBjYWZlfGVufDB8fHx8MTc3MTM1OTc5OHww&ixlib=rb-4.1.0&q=85',
      alt: 'Detalle de café vertido',
      span: 'md:col-span-1',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1534255536879-fa4b8f173d74?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHw0fHxnb3VybWV0JTIwYnJ1bmNoJTIwYXZvY2FkbyUyMHRvYXN0JTIwcGFuY2FrZXMlMjBtaW5pbWFsaXN0JTIwcGxhdGV8ZW58MHx8fHwxNzcxMzU5ODA3fDA&ixlib=rb-4.1.0&q=85',
      alt: 'Plato de brunch gourmet',
      span: 'md:col-span-2',
    },
  ];

  return (
    <section
      id="galeria"
      className="py-20 md:py-32 bg-[#FDFBF7]"
      data-testid="gallery-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#B8C480] text-sm font-medium tracking-widest uppercase mb-4">
            Nuestro Espacio
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-medium text-[#2C2C2C] leading-tight mb-6">
            Un rincón de calma en Madrid
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg max-w-2xl mx-auto">
            Madera natural, plantas, luz suave y el aroma del café recién hecho. 
            Un espacio diseñado para desconectar y disfrutar.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`gallery-item relative rounded-2xl overflow-hidden ${image.span} min-h-[250px] md:min-h-[300px]`}
              data-testid={`gallery-item-${image.id}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#2C2C2C]/0 hover:bg-[#2C2C2C]/20 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/jingpingehijo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#4A3B32] hover:text-[#B8C480] font-medium transition-colors duration-300"
            data-testid="instagram-link"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Síguenos en Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};
