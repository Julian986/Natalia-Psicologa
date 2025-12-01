import React from 'react';

interface Service {
  title: string;
  description: string;
  link: string;
  image?: string;
}

const ServicesGrid: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Terapia para Niños',
      description:
        'Hay muchos problemas emocionales que encuentran un rincón en nuestro corazón y se niegan a desaparecer. Con el tiempo, estos problemas pueden transformarse en una especie de tumor emocional que impacta negativamente en nuestra vida diaria, como la falta de...',
      link: '#terapia-ninos',
      image: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1764600214/Las-claves-de-la-psicoterapia-infantil2_ehfdur.webp',
    },
    {
      title: 'Terapia de Pareja',
      description:
        'Una relación pasa por numerosas fases durante su ciclo de vida, y es obvio que tenga algunos momentos difíciles. Sin embargo, la fortaleza de una relación se refleja en cómo las parejas enfrentan esos ...',
      link: '#terapia-pareja',
      image: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1764600214/foto-principal-1_tlsknm.webp',
    },
    {
      title: 'Recuperación Post-Divorcio',
      description:
        'Nuestro enfoque sistemático hacia la terapia de pareja se define en función de mejorar la comunicación entre los socios y establecer metas a corto y largo plazo, donde ambos socios estarían...',
      link: '#post-divorcio',
      image: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1764600214/dividir-vivienda.jpg.optimal_rtwxoz.webp',
    },
  ];

  return (
    <div className="mb-10">
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="page-box page-box--block bg-white border border-gray-200 rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Image */}
            <a href={service.link} className="page-box__picture block">
              <div className="w-full h-60 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden group">
                {service.image ? (
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-[#1FA7DA]/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-gray-400 font-medium">Imagen</span>
                  </div>
                )}
              </div>
            </a>

            {/* Content */}
            <div className="page-box__content p-6">
              <h5 className="page-box__title text-[#2c3e50] mb-3">
                <a href={service.link} className="hover:text-[#1FA7DA] transition-colors">
                  {service.title.toUpperCase()}
                </a>
              </h5>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <p>
                <a href={service.link} className="read-more">
                  Leer más
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;

