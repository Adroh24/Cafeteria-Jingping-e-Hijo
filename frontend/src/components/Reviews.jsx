import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Sílvia Saa',
      text: 'Lovely café in Chamberí. The service was excellent. My family and I are a bit particular about our coffee and matcha orders, and they made them perfectly, just the way we wanted them. The toast and sandwiches we ordered were delicious! The space is beautiful… it couldn\'t be more lovely.',
      rating: 5,
      timeAgo: 'hace 9 meses',
    },
    {
      id: 2,
      name: 'Andrea González Rodríguez',
      text: 'Una joya que todo Chamberí debería visitar, para probar una variedad de bebidas con café de especialidad y el mejor matcha de Madrid. Al visitar el lugar, se nota que el concepto es completamente orgánico. Nada más entrar, percibes la pasión detrás de cada detalle.',
      rating: 5,
      timeAgo: 'hace 11 meses',
    },
    {
      id: 3,
      name: 'Nerea García Rivera',
      text: 'Estuve ayer en el café con mi madre y nos encantó tanto la comida como el propio café. Pedimos la tostada de huevo Mayak y el sándwich de ternera bulgogi, y todo estaba delicioso. ¡Definitivamente volveremos!',
      rating: 5,
      timeAgo: 'hace 1 mes',
    },
    {
      id: 4,
      name: 'Kat',
      text: 'I love this spot — such a great place to do some work too, the staff are super welcoming, coffee is great, and the matcha is pretty good too. Aesthetically stunning and open space. Feels like you can come and chat with friends without being on top of other people. 5/5 ❤️',
      rating: 5,
      timeAgo: 'hace 5 meses',
    },
    {
      id: 5,
      name: 'Noelia López',
      text: '¡Qué descubrimiento! El lugar es precioso, pensado hasta el último detalle, con música ambiente e iluminación. Además, el trato amable del dueño. El helado con agua de coco es increíble 🤍 Al igual que el café de especialidad y la tarta de zanahoria.',
      rating: 5,
      timeAgo: 'hace 4 meses',
    },
    {
      id: 6,
      name: 'Pablo Portilla Prieto',
      text: '¡Qué café más chulo! La decoración es espectacular, llena de personalidad—un espacio perfecto para disfrutar de un buen café. Tenían café Nomad de Ruanda, lo que ya garantiza buena calidad. El servicio fue excelente; definitivamente volveré :)',
      rating: 5,
      timeAgo: 'hace 6 meses',
    },
    {
      id: 7,
      name: 'Aruzhan Konyrbay',
      text: 'Had a hard time searching for good matcha in Madrid and Jingping matcha did not disappoint!! It had a smooth matcha flavour and the honey syrup compliments the tea. The interior is cute and the barista was really sweet.',
      rating: 5,
      timeAgo: 'hace 5 meses',
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Get visible reviews (3 on desktop, 1 on mobile)
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <section
      id="resenas"
      className="py-20 md:py-32 bg-white"
      data-testid="reviews-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#B8C480] text-sm font-medium tracking-widest uppercase mb-4">
            Testimonios
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-medium text-[#2C2C2C] leading-tight mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg max-w-2xl mx-auto">
            Cada visita es una oportunidad para crear momentos especiales. 
            Estas son algunas de las experiencias de quienes nos han visitado.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Desktop: Show 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {getVisibleReviews().map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="bg-[#FDFBF7] rounded-2xl p-8 relative group hover:shadow-lg transition-shadow duration-300"
                data-testid={`review-card-${review.id}`}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-[#B8C480]/30">
                  <Quote className="w-10 h-10" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#B8C480] text-[#B8C480]"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#4A3B32] text-sm leading-relaxed mb-6 line-clamp-5">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#E5E0D8]">
                  <div className="w-10 h-10 bg-[#B8C480]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#4A3B32] font-medium text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#2C2C2C] text-sm">
                      {review.name}
                    </h4>
                    <span className="text-xs text-[#6B6B6B]">{review.timeAgo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Show 1 card */}
          <div className="md:hidden">
            <div
              className="bg-[#FDFBF7] rounded-2xl p-6 relative"
              data-testid={`review-card-mobile-${reviews[currentIndex].id}`}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-[#B8C480]/30">
                <Quote className="w-8 h-8" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#B8C480] text-[#B8C480]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#4A3B32] text-sm leading-relaxed mb-6">
                "{reviews[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E5E0D8]">
                <div className="w-10 h-10 bg-[#B8C480]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#4A3B32] font-medium text-sm">
                    {reviews[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-[#2C2C2C] text-sm">
                    {reviews[currentIndex].name}
                  </h4>
                  <span className="text-xs text-[#6B6B6B]">
                    {reviews[currentIndex].timeAgo}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="w-12 h-12 rounded-full bg-[#FDFBF7] hover:bg-[#B8C480] text-[#4A3B32] hover:text-white flex items-center justify-center transition-all duration-300"
              aria-label="Reseña anterior"
              data-testid="review-prev-btn"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="w-12 h-12 rounded-full bg-[#FDFBF7] hover:bg-[#B8C480] text-[#4A3B32] hover:text-white flex items-center justify-center transition-all duration-300"
              aria-label="Siguiente reseña"
              data-testid="review-next-btn"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#B8C480] w-6' : 'bg-[#E5E0D8]'
                }`}
                aria-label={`Ir a reseña ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Cafeter%C3%ADa+JINGPING+E+HIJO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FDFBF7] hover:bg-[#B8C480] text-[#4A3B32] hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
            data-testid="google-reviews-cta"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
};
