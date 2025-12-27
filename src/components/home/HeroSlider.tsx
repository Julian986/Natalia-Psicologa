import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    quote: '"Sé inteligente, ayúdate ahora"',
    author: 'Mahatma Gandhi',
    image: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1766872779/LEMOCEUARVAQVGEHWCM6YCLC4Q_lc5evv.webp'
  },
  {
    id: 2,
    quote: '"La enfermedad mental no es un mito"',
    author: 'Nelson Mandela',
    image: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1766872777/Nelson-Mandela-presidente-de-Sudafrica-nobel-de-Paz_v3fpur.webp'
  },
  {
    id: 3,
    quote: '"La vida es demasiado corta para esperar"',
    author: 'Anónimo',
    image: 'slide-3'
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="jumbotron relative w-full h-[280px] md:h-[350px] lg:h-[400px] mb-6 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background image */}
          {slide.image && typeof slide.image === 'string' && slide.image.startsWith('http') ? (
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-[#1FA7DA] to-[#178bb8]"></div>
          )}
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Content */}
          <div className="jumbotron-content px-4 md:px-6">
            <h1 className="jumbotron-content__title text-2xl sm:text-3xl md:text-4xl lg:text-[42px]">
              {slide.quote}
            </h1>
            <div className="jumbotron-content__description text-base sm:text-lg md:text-xl lg:text-2xl">
              <p><i>–</i> {slide.author}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex gap-2 z-10">
        <button
          onClick={goToPrevious}
          className="w-10 h-10 md:w-12 md:h-12 rounded-sm flex items-center justify-center transition-all shadow-md hover:shadow-lg hover:scale-105 group cursor-pointer"
          style={{ backgroundColor: 'rgb(250 250 250 / 65%)' }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-[#676b6f] group-hover:text-[#1FA7DA] transition-colors" strokeWidth={2.5} />
        </button>
        
        <button
          onClick={goToNext}
          className="w-10 h-10 md:w-12 md:h-12 rounded-sm flex items-center justify-center transition-all shadow-md hover:shadow-lg hover:scale-105 group cursor-pointer"
          style={{ backgroundColor: 'rgb(250 250 250 / 65%)' }}
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-[#676b6f] group-hover:text-[#1FA7DA] transition-colors" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
