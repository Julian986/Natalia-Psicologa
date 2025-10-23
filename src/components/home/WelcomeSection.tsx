import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 mt-6 md:mt-0">
      {/* Welcome Text */}
      <div>
        <div className="text-gray-700 leading-relaxed space-y-3 md:space-y-4">
          <p className="text-sm md:text-base">
            Como psicóloga clínica, he trabajado con 
            cientos de pacientes y comprendo las complejidades de los diversos 
            problemas psicológicos que enfrentan las personas de todas las edades.
          </p>
          <p className="text-sm md:text-base">
            Mi objetivo es compartir una perspectiva profesional sobre la salud mental,
            ofreciendo información confiable en un mundo donde circula mucha información
            sin fundamento. Aquí encontrarás contenido basado en mi experiencia y 
            formación profesional.
          </p>
          <p>
            <a href="#sobre-mi" className="read-more">Leer más</a>
          </p>
        </div>
      </div>

      {/* Services Inline List */}
      <div className="space-y-4">
        {/* Depression Treatment */}
        <div className="page-box page-box--inline flex gap-4 items-start">
          <a href="#depresion" className="page-box__picture flex-shrink-0">
            <div className="w-[100px] h-[70px] bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center text-xs text-gray-500">
              Imagen
            </div>
          </a>
          <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-2">
              <a href="#depresion" className="hover:text-[#1FA7DA] transition-colors">
                TRATAMIENTO DE DEPRESIÓN
              </a>
            </h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              La depresión es una enfermedad mental, que uno no debe confundir …
            </p>
          </div>
        </div>

        {/* Individual Treatment */}
        <div className="page-box page-box--inline flex gap-4 items-start">
          <a href="#individual" className="page-box__picture flex-shrink-0">
            <div className="w-[100px] h-[70px] bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center text-xs text-gray-500">
              Imagen
            </div>
          </a>
          <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-2">
              <a href="#individual" className="hover:text-[#1FA7DA] transition-colors">
                TRATAMIENTO INDIVIDUAL
              </a>
            </h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              El tratamiento individual a menudo se denomina psicoterapia, y es …
            </p>
          </div>
        </div>

        {/* Anxiety Treatment */}
        <div className="page-box page-box--inline flex gap-4 items-start">
          <a href="#ansiedad" className="page-box__picture flex-shrink-0">
            <div className="w-[100px] h-[70px] bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center text-xs text-gray-500">
              Imagen
            </div>
          </a>
          <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-2">
              <a href="#ansiedad" className="hover:text-[#1FA7DA] transition-colors">
                TRATAMIENTO DE ANSIEDAD
              </a>
            </h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ya sea fobia social, fobia específica, estrés postraumático …
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

