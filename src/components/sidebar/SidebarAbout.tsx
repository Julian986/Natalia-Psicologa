import React, { useState } from 'react';

const SidebarAbout: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<'nati1' | 'nati2'>('nati1');

  const toggleImage = () => {
    setCurrentImage(currentImage === 'nati1' ? 'nati2' : 'nati1');
  };

  return (
    <div className="widget widget-about-us bg-white border border-gray-200 rounded overflow-hidden mb-6">
      {/* Image */}
      <div className="relative">
        <img 
          src={currentImage === 'nati1' ? "https://res.cloudinary.com/dzoupwn0e/image/upload/v1761258760/Foto_Nati_nzkzsy.webp" : "https://res.cloudinary.com/dzoupwn0e/image/upload/v1761258760/Foto_Nati2_n3y9cu.webp"} 
          alt="Lic. Natalia Domecq - Psicóloga" 
          className="w-full h-64 object-cover cursor-pointer transition-opacity duration-300"
          onClick={toggleImage}
        />
        
        {/* Tag */}
        <a 
          href="#sobre-mi" 
          className="about-us__tag absolute top-4 left-4 bg-[#1FA7DA] hover:bg-[#178bb8] transition-colors"
        >
          MN 12345, Psicóloga Clínica
        </a>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h5 className="about-us__name">Lic. Natalia Domecq</h5>
        <p className="about-us__description">
          Psicóloga clínica con sede en Bahía Blanca. Trabajo con diversos problemas 
          emocionales en adultos, niños y adolescentes. Completé mi formación en 
          Psicología Clínica y cuento con un posgrado en Neurociencias Cognitivas.
        </p>
        <a href="#sobre-mi" className="read-more">
          Leer más
        </a>
      </div>
    </div>
  );
};

export default SidebarAbout;

