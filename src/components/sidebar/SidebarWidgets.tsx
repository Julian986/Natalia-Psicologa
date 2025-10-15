import React from 'react';
import { FileText, Award } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const SidebarWidgets: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* WhatsApp/Skype Widget */}
      <div className="widget widget-skype" style={{ padding: '0' }}>
        <a
          href="https://wa.me/5492911234567"
          target="_blank"
          rel="noopener noreferrer"
          className="skype-button"
        >
          <FaWhatsapp className="w-6 h-6" />
          <p className="skype-button__title">Consulta por WhatsApp</p>
        </a>
      </div>

      {/* Forms Widget */}
      <div className="widget widget_text bg-white border border-gray-200 rounded p-6">
        <h4 className="sidebar__headings">Formularios</h4>
        <div className="text-sm text-gray-600 mb-4 leading-relaxed">
          Antes de nuestra primera sesión, por favor descarga y completa los 
          formularios relevantes según sea necesario.
        </div>
        <div className="space-y-2">
          <a
            href="#consentimiento"
            className="btn btn-default fullwidth flex items-center justify-start gap-2 w-full bg-gray-50 hover:bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 rounded transition-colors text-sm font-semibold"
          >
            <FileText className="w-4 h-4" />
            Consentimiento Informado
          </a>
          <a
            href="#historia"
            className="btn btn-default fullwidth flex items-center justify-start gap-2 w-full bg-gray-50 hover:bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 rounded transition-colors text-sm font-semibold"
          >
            <FileText className="w-4 h-4" />
            Historia Clínica
          </a>
        </div>
      </div>

      {/* Verifications Widget */}
      <div className="widget widget_text bg-white border border-gray-200 rounded p-6">
        <h4 className="sidebar__headings">Certificaciones</h4>
        <div className="grid grid-cols-3 gap-3">
          <a
            href="#cert-1"
            className="aspect-square bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
          >
            <Award className="w-8 h-8 text-gray-400" />
          </a>
          <a
            href="#cert-2"
            className="aspect-square bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
          >
            <Award className="w-8 h-8 text-gray-400" />
          </a>
          <a
            href="#cert-3"
            className="aspect-square bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
          >
            <Award className="w-8 h-8 text-gray-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarWidgets;

