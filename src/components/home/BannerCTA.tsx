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

      {/* Banner 3 - WhatsApp Consulta */}
      <a
        href="https://wa.me/5492916433000?text=Hola%20Natalia%2C%20tengo%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white border border-gray-200 p-5 hover:shadow-md transition-shadow relative group"
        style={{ borderRadius: '2px' }}
      >
        <div className="text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-0.5">
          ¿Tenés una consulta?
        </div>
        <div className="text-[13px] text-gray-500 flex items-center gap-2">
          Escribime por WhatsApp
          <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.051 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
          </svg>
        </div>
        <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-hover:text-[#1FA7DA] transition-colors" />
      </a>
    </div>
  );
};

export default BannerCTA;

