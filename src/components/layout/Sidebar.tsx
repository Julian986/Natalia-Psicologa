import React, { useState } from 'react';
import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri';

const Sidebar: React.FC = () => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');

  const toggleSubmenu = (menu: string) => {
    if (openSubmenu === menu) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(menu);
    }
  };

  return (
    <aside className="sidebar">
      {/* Main Navigation */}
      <nav className="main-navigation__container sticky top-4">
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
            <a href="#inicio">
              <span>Home</span>
              <RiArrowRightSFill className="menu-icon" size={18} />
            </a>
          </li>
          
          <li className={`menu-item menu-item-has-children ${openSubmenu === 'servicios' ? 'open' : ''}`}>
            <a 
              href="#servicios"
              onClick={(e) => {
                e.preventDefault();
                toggleSubmenu('servicios');
              }}
            >
              <span>Servicios</span>
              {openSubmenu === 'servicios' ? (
                <RiArrowDownSFill className="menu-icon" size={18} />
              ) : (
                <RiArrowRightSFill className="menu-icon" size={18} />
              )}
            </a>
            {openSubmenu === 'servicios' && (
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="#servicios-lista">
                    <span>Lista de Servicios</span>
                    <RiArrowRightSFill className="menu-icon" size={16} />
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#terapia-pareja">
                    <span>Terapia de Pareja</span>
                    <RiArrowRightSFill className="menu-icon" size={16} />
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#depresion">
                    <span>Tratamiento de Depresión</span>
                    <RiArrowRightSFill className="menu-icon" size={16} />
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#terapia-individual">
                    <span>Tratamiento Individual</span>
                    <RiArrowRightSFill className="menu-icon" size={16} />
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#terapia-ninos">
                    <span>Terapia para Niños</span>
                    <RiArrowRightSFill className="menu-icon" size={16} />
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#ansiedad">
                    <span>Tratamiento de Ansiedad</span>
                    <RiArrowRightSFill className="menu-icon" size={16} />
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#post-divorcio">
                    <span>Recuperación Post-Divorcio</span>
                    <RiArrowRightSFill className="menu-icon" size={16} />
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-item">
            <a href="#sobre-mi">
              <span>Sobre Mí</span>
              <RiArrowRightSFill className="menu-icon" size={18} />
            </a>
          </li>

          <li className="menu-item">
            <a href="#blog">
              <span>Blog</span>
              <RiArrowRightSFill className="menu-icon" size={18} />
            </a>
          </li>

          <li className={`menu-item menu-item-has-children ${openSubmenu === 'paginas' ? 'open' : ''}`}>
            <a 
              href="#paginas"
              onClick={(e) => {
                e.preventDefault();
                toggleSubmenu('paginas');
              }}
            >
              <span>Páginas</span>
              {openSubmenu === 'paginas' ? (
                <RiArrowDownSFill className="menu-icon" size={18} />
              ) : (
                <RiArrowRightSFill className="menu-icon" size={18} />
              )}
            </a>
            {openSubmenu === 'paginas' && (
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="#recursos">
                    <span>Recursos</span>
                    <RiArrowRightSFill className="menu-icon" size={16} />
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#faq">
                    <span>Preguntas Frecuentes</span>
                    <RiArrowRightSFill className="menu-icon" size={16} />
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-item">
            <a href="#contacto">
              <span>Contacto</span>
              <RiArrowRightSFill className="menu-icon" size={18} />
            </a>
          </li>
        </ul>

        <div className="p-4 border-t border-gray-200">
          <a
            href="https://wa.me/5492911234567"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary block w-full text-center"
          >
            Solicitar Consulta
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
