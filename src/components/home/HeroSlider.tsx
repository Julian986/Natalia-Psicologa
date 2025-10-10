import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    quote: '"Sé inteligente, ayúdate ahora"',
    author: 'Mahatma Gandhi',
    image: 'slide-1'
  },
  {
    id: 2,
    quote: '"La enfermedad mental no es un mito"',
    author: 'Nelson Mandela',
    image: 'slide-2'
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
    <div className="jumbotron relative w-full h-[400px] bg-gradient-to-r from-[#1FA7DA] to-[#178bb8] mb-8">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1FA7DA] to-[#178bb8]"></div>
          
          {/* Content */}
          <div className="jumbotron-content">
            <h1 className="jumbotron-content__title">
              {slide.quote}
            </h1>
            <div className="jumbotron-content__description">
              <p><i>–</i> {slide.author}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/30 backdrop-blur-sm flex items-center justify-center transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/30 backdrop-blur-sm flex items-center justify-center transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default HeroSlider;
