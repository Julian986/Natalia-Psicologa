import React from 'react';

const ChildrenAdolescents: React.FC = () => {
  return (
    <section className="mb-10">
      <h3 className="widget-title mb-6">Acompañamiento a Niños y Adolescentes</h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Content */}
        <div className="space-y-4">
          <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
             Trabajo con adultos, niños y adolescentes en diversos aspectos de su desarrollo emocional 
              y bienestar psicológico. Mi enfoque se centra en crear un espacio seguro donde 
              puedan expresarse libremente y desarrollar herramientas para enfrentar los 
              desafíos propios de cada etapa.
            </p>
            <p className="mb-4">
              Disfruto mucho trabajando con esta población y tengo experiencia en el área, 
              siempre manteniendo un enfoque profesional y ético en mi práctica.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#1FA7DA] p-4 rounded">
              <p className="text-sm text-gray-700">
                <strong>Mi compromiso:</strong> Ofrecer un acompañamiento respetuoso y 
                profesional, reconociendo las particularidades de cada edad y manteniendo 
                siempre la ética profesional en mi práctica.
              </p>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="space-y-4">
          {/* Children Image */}
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1761258761/photo-1503454537195-1dcabb73ffb9_wbpjnp.webp" 
              alt="Niños en terapia psicológica" 
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-semibold text-lg">Niños</h4>
              <p className="text-sm opacity-90">Desarrollo emocional y bienestar</p>
            </div>
          </div>

          {/* Adolescents Image */}
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1761258760/photo-1529156069898-49953e39b3ac_nnhb0g.webp" 
              alt="Adolescentes en consulta psicológica" 
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-semibold text-lg">Adolescentes</h4>
              <p className="text-sm opacity-90">Acompañamiento en la transición</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildrenAdolescents;
