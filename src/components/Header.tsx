import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-lg' 
        : 'bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-sm'
    }`}>
      {/* Top contact bar - hidden on mobile */}
      <div className="hidden lg:block bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+54 291 123-4567</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-300 transition-colors">
                <Mail className="w-4 h-4" />
                <span>natalia@psicologia.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Lun - Vie: 9:00 - 18:00</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 ml-auto">
                <MapPin className="w-4 h-4" />
                <span>Bahía Blanca, Buenos Aires</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  Lic. <span className="text-slate-800">Natalia</span>
                </h1>
                <p className="text-xs text-slate-500 -mt-1">Psicóloga Clínica</p>
              </div>
            </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#inicio" className="relative text-slate-700 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200 group">
                  Inicio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a href="#servicios" className="relative text-slate-700 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200 group">
                  Servicios
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a href="#sobre-mi" className="relative text-slate-700 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200 group">
                  Sobre Mí
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a href="#contacto" className="relative text-slate-700 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200 group">
                  Contacto
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <div className="flex items-center space-x-3">
                  <button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-slate-950 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer">
                    Explorar Blog
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 bg-white/98 backdrop-blur-xl border-t border-slate-200 shadow-lg">
              <div className="space-y-2">
                <a href="#inicio" className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg text-base font-medium transition-colors duration-200">
                  Inicio
                </a>
                <a href="#servicios" className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg text-base font-medium transition-colors duration-200">
                  Servicios
                </a>
                <a href="#sobre-mi" className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg text-base font-medium transition-colors duration-200">
                  Sobre Mí
                </a>
                <a href="#contacto" className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg text-base font-medium transition-colors duration-200">
                  Contacto
                </a>
              </div>
              
              {/* Mobile contact info */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+54 291 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>natalia@psicologia.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Lun - Vie: 9:00 - 18:00</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
