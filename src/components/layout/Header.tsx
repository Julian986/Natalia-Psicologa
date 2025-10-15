import React from 'react';
import { Phone, Clock, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-6 border-b border-gray-200 mb-8">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-left">
              <h1 className="text-3xl font-bold text-[#2c3e50] leading-tight">
                Lic. Natalia Domecq
              </h1>
              <p className="text-sm text-gray-600">Psicóloga Clínica</p>
            </div>
          </div>

          {/* Header Widgets */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
            {/* Icon Box - Dirección */}
            <div className="icon-box text-left">
              <MapPin className="w-10 h-10 text-[#dddddd] flex-shrink-0" />
              <div className="icon-box__text">
                <h4 className="icon-box__title">Bahía Blanca</h4>
                <span className="icon-box__subtitle">Buenos Aires, Argentina</span>
              </div>
            </div>

            {/* Icon Box - Horario */}
            <div className="icon-box text-left">
              <Clock className="w-10 h-10 text-[#dddddd] flex-shrink-0" />
              <div className="icon-box__text">
                <h4 className="icon-box__title">Lun - Vie 9.00 - 18.00</h4>
                <span className="icon-box__subtitle">Sábados con turno</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-[#1FA7DA] rounded-full flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-[#1FA7DA] rounded-full flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-[#1FA7DA] rounded-full flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white" />
              </a>
            </div>

            {/* Phone Button */}
            <a 
              href="https://wa.me/5492911234567" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !flex !flex-row items-center gap-2"
              style={{ borderRadius: '32px' }}
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">+54 291 123-4567</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
