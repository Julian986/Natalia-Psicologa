import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote:
      'Hemos tenido muchos problemas financieros a lo largo de los años; pérdida de salud física, trabajo y bancarrota. El acompañamiento de Natalia nos dio esperanza y una nueva visión para que podamos crear nuestras vidas juntos.',
    author: 'María G.',
    role: 'Madre de dos hijos',
  },
  {
    id: 2,
    quote:
      'La terapia con Natalia me ayudó a superar momentos muy difíciles. Su profesionalismo y empatía hicieron que me sintiera comprendida desde la primera sesión.',
    author: 'Ana Martínez',
    role: 'Paciente desde 2022',
  },
  {
    id: 3,
    quote:
      'Después de años luchando con la ansiedad, finalmente encontré el apoyo que necesitaba. Las técnicas que aprendí han transformado mi vida completamente.',
    author: 'Carlos Rodríguez',
    role: 'Empresario',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex] = useState(0);

  return (
    <div className="mb-10">
      <div className="testimonial grey-wrap">
        <h2 className="widget-title text-center">Testimonios</h2>
        
        <div className="relative">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-300 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className="max-w-3xl mx-auto text-center px-4">
                  <blockquote>
                    <p className="testimonial__quote mb-6">
                      {testimonial.quote}
                    </p>
                    <cite className="not-italic">
                      <div className="testimonial__author">
                        {testimonial.author}
                      </div>
                      <div className="testimonial__author-description">
                        {testimonial.role}
                      </div>
                    </cite>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

