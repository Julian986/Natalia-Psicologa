import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Facebook, Instagram, Linkedin, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 bg-white py-4 md:py-6 border-b border-gray-200 mb-8 z-40 transition-shadow duration-300 ${
      isScrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center justify-between w-full lg:w-auto gap-3">
            <div className="text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-[#2c3e50] leading-tight">
                Lic. Natalia Domecq
              </h1>
              <p className="text-sm text-gray-600">Psicóloga Clínica</p>
            </div>
            
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={onMenuToggle}
              className="lg:hidden w-10 h-10 flex items-center justify-center bg-[#1FA7DA] hover:bg-[#178bb8] text-white rounded transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Header Widgets */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-6 lg:gap-8">
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
