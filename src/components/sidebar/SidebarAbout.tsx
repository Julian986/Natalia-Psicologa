import React from 'react';

const SidebarAbout: React.FC = () => {
  return (
    <div className="widget widget-about-us bg-white border border-gray-200 rounded overflow-hidden mb-6">
      {/* Tag */}
      <a href="#sobre-mi" className="about-us__tag block text-center bg-[#1FA7DA] hover:bg-[#178bb8]">
        MN 12345, Especialista en TCC
      </a>

      {/* Image */}
      <div className="relative">
        <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span className="text-gray-400 font-medium">Foto de Natalia</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h5 className="about-us__name">Lic. Natalia Domecq</h5>
        <p className="about-us__description">
          Psicóloga clínica con sede en Bahía Blanca. Me especializo en terapia 
          cognitivo-conductual y tengo experiencia trabajando con diversos problemas 
          emocionales. Completé mi formación en Psicología Clínica y cuento con un 
          posgrado en Neurociencias Cognitivas.
        </p>
        <a href="#sobre-mi" className="read-more">
          Leer más
        </a>
      </div>
    </div>
  );
};

export default SidebarAbout;

