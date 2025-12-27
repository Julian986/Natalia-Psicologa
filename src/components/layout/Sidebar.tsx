import React, { useState, useEffect } from 'react';
import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');

  const toggleSubmenu = (menu: string) => {
    if (openSubmenu === menu) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(menu);
    }
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Special case for Contacto - scroll to bottom
    if (targetId === 'contacto') {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
      onClose();
      return;
    }
    
    // Special case for Inicio - scroll to top
    if (targetId === 'inicio') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      onClose();
      return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      // Get element position and add offset based on section
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      let offset = 100; // Default offset
      
      // Customize offset per section (increased to account for fixed header)
      switch (targetId) {
        case 'sobre-mi':
          offset = 210; // Un poco más arriba
          break;
        case 'servicios':
          offset = 120; // Un poco más arriba
          break;
        case 'blog':
          offset = 80; // Un poco más abajo
          break;
        case 'faq':
          offset = 130; // Perfecto como está
          break;
        default:
          offset = 130;
      }
      
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu after navigation
      onClose();
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`sidebar fixed lg:static top-0 left-0 h-full lg:h-auto w-[280px] lg:w-auto bg-[#F2F4F7] lg:bg-transparent overflow-y-auto lg:overflow-visible z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
      {/* Main Navigation */}
      <nav className="main-navigation__container sticky top-4">
        {/* Mobile Close Button */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200">
          <span className="font-bold text-[#2c3e50]">Menú</span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        <div className="main-navigation__title-wrapper">
          <input 
            type="text"
            className="main-navigation__title"
            placeholder="Navegacion"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        
        <ul className="main-navigation">
          <li className="menu-item current-menu-item">
            <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'inicio')}>
              <span>Inicio</span>
              <RiArrowRightSFill className="menu-icon" size={18} />
            </a>
          </li>

          <li className="menu-item">
            <a href="#sobre-mi" onClick={(e) => handleSmoothScroll(e, 'sobre-mi')}>
              <span>Sobre Mí</span>
              <RiArrowRightSFill className="menu-icon" size={18} />
            </a>
          </li>
          
          <li className={`menu-item menu-item-has-children ${openSubmenu === 'acompanamiento' ? 'open' : ''}`}>
            <a 
              href="#sobre-mi"
              onClick={(e) => {
                e.preventDefault();
                toggleSubmenu('acompanamiento');
              }}
            >
              <span>Acompañamiento</span>
              {openSubmenu === 'acompanamiento' ? (
                <RiArrowDownSFill className="menu-icon" size={18} />
              ) : (
                <RiArrowRightSFill className="menu-icon" size={18} />
              )}
            </a>
            {openSubmenu === 'acompanamiento' && (
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="#sobre-mi" onClick={(e) => handleSmoothScroll(e, 'sobre-mi')}>
                    <span>Terapia familiar</span>
                    <RiArrowRightSFill className="menu-icon" size={16} />
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#sobre-mi" onClick={(e) => handleSmoothScroll(e, 'sobre-mi')}>
                    <span>Terapia de pareja</span>
                    <RiArrowRightSFill className="menu-icon" size={16} />
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#sobre-mi" onClick={(e) => handleSmoothScroll(e, 'sobre-mi')}>
                    <span>Grupos de trabajo</span>
                    <RiArrowRightSFill className="menu-icon" size={16} />
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#sobre-mi" onClick={(e) => handleSmoothScroll(e, 'sobre-mi')}>
                    <span>Acompañamiento con niños</span>
                    <RiArrowRightSFill className="menu-icon" size={16} />
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#sobre-mi" onClick={(e) => handleSmoothScroll(e, 'sobre-mi')}>
                    <span>Acompañamiento con adolescentes</span>
                    <RiArrowRightSFill className="menu-icon" size={16} />
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#sobre-mi" onClick={(e) => handleSmoothScroll(e, 'sobre-mi')}>
                    <span>Trabajo con niños y adolescentes con discapacidad</span>
                    <RiArrowRightSFill className="menu-icon" size={16} />
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-item">
            <a href="#blog" onClick={(e) => handleSmoothScroll(e, 'blog')}>
              <span>Blog</span>
              <RiArrowRightSFill className="menu-icon" size={18} />
            </a>
          </li>

          

          <li className="menu-item">
            <a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')}>
              <span>Preguntas Frecuentes</span>
              <RiArrowRightSFill className="menu-icon" size={18} />
            </a>
          </li>

          <li className="menu-item">
            <a href="#contacto" onClick={(e) => handleSmoothScroll(e, 'contacto')}>
              <span>Contacto</span>
              <RiArrowRightSFill className="menu-icon" size={18} />
            </a>
          </li>
        </ul>

        <div className="p-4 border-t border-gray-200">
          <a
            href="https://wa.me/5492916433000?text=Hola%20Natalia%2C%20tengo%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary block w-full text-center"
          >
            Solicitar Consulta
          </a>
        </div>
      </nav>
      </aside>
    </>
  );
};

export default Sidebar;

