import React from 'react';
import { ChevronRight } from 'lucide-react';

const BannerCTA: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-10">
      {/* Banner 1 - Privacy Policy */}
      <a
        href="#privacidad"
        className="block bg-white border border-gray-200 p-5 hover:shadow-md transition-shadow relative group"
        style={{ borderRadius: '2px' }}
      >
        <div className="text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-0.5">
          Política de Privacidad
        </div>
        <div className="text-[13px] text-gray-500">
          Entre Psicólogos y Pacientes
        </div>
        <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-hover:text-[#1FA7DA] transition-colors" />
      </a>

      {/* Banner 2 - Book Recommendations */}
      <a
        href="#recursos"
        className="block bg-white border border-gray-200 p-5 hover:shadow-md transition-shadow relative group"
        style={{ borderRadius: '2px' }}
      >
        <div className="text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-0.5">
          Recomendaciones de Libros
        </div>
        <div className="text-[13px] text-gray-500">
          Algunos Libros que Recomendamos
        </div>
        <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-hover:text-[#1FA7DA] transition-colors" />
      </a>
    </div>
  );
};

export default BannerCTA;

