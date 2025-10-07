import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

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

  // Cerrar menú móvil al hacer clic fuera y controlar scroll
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
        setIsMenuOpen(false);
      }
    };

    // Controlar scroll del body
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Función para scroll suave a secciones
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    // Cerrar menú móvil
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${
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
                <a href="#sobre-mi" className="relative text-slate-700 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200 group">
                  Sobre Mí
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a href="#blog" className="relative text-slate-700 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200 group">
                  Blog
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-200 group-hover:w-full"></span>
                </a>
                <a href="#recursos" className="relative text-slate-700 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200 group">
                  Recursos
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
                className="hamburger-button flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
              >
                <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>

    {/* Mobile Navigation - Full Screen */}
    <div className={`mobile-menu fixed top-0 left-0 w-full h-full z-[60] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden bg-white`}>
      <div className="flex flex-col h-full pt-24 px-8">
        {/* Menú móvil */}
        <ul className="space-y-6 text-slate-700 font-semibold text-xl">
          <li 
            onClick={() => scrollToSection('inicio')} 
            className="hover:text-slate-900 cursor-pointer transition-colors duration-200 py-3 border-b border-slate-200"
          >
            Inicio
          </li>
          <li 
            onClick={() => scrollToSection('sobre-mi')} 
            className="hover:text-slate-900 cursor-pointer transition-colors duration-200 py-3 border-b border-slate-200"
          >
            Sobre Mí
          </li>
          <li 
            onClick={() => scrollToSection('blog')} 
            className="hover:text-slate-900 cursor-pointer transition-colors duration-200 py-3 border-b border-slate-200"
          >
            Blog
          </li>
          <li 
            onClick={() => scrollToSection('recursos')} 
            className="hover:text-slate-900 cursor-pointer transition-colors duration-200 py-3 border-b border-slate-200"
          >
            Recursos
          </li>
          <li 
            onClick={() => scrollToSection('contacto')} 
            className="hover:text-slate-900 cursor-pointer transition-colors duration-200 py-3 border-b border-slate-200"
          >
            Contacto
          </li>
        </ul>
        
        {/* Mobile contact info */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="space-y-4 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-slate-800" />
              <span>+54 291 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-slate-800" />
              <span>natalia@psicologia.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-slate-800" />
              <span>Lun - Vie: 9:00 - 18:00</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-slate-800" />
              <span>Bahía Blanca, Buenos Aires</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Header;
