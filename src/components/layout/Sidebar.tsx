import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

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
        <div className="main-navigation__title">
          NAVEGACIÓN
        </div>
        
        <ul className="main-navigation">
          <li className="menu-item current-menu-item">
            <a href="#inicio">Home</a>
          </li>
          
          <li className={`menu-item menu-item-has-children ${openSubmenu === 'servicios' ? 'open' : ''}`}>
            <a 
              href="#servicios"
              onClick={(e) => {
                e.preventDefault();
                toggleSubmenu('servicios');
              }}
            >
              Servicios
            </a>
            {openSubmenu === 'servicios' && (
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="#servicios-lista">Lista de Servicios</a>
                </li>
                <li className="menu-item">
                  <a href="#terapia-pareja">Terapia de Pareja</a>
                </li>
                <li className="menu-item">
                  <a href="#depresion">Tratamiento de Depresión</a>
                </li>
                <li className="menu-item">
                  <a href="#terapia-individual">Tratamiento Individual</a>
                </li>
                <li className="menu-item">
                  <a href="#terapia-ninos">Terapia para Niños</a>
                </li>
                <li className="menu-item">
                  <a href="#ansiedad">Tratamiento de Ansiedad</a>
                </li>
                <li className="menu-item">
                  <a href="#post-divorcio">Recuperación Post-Divorcio</a>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-item">
            <a href="#sobre-mi">Sobre Mí</a>
          </li>

          <li className="menu-item">
            <a href="#blog">Blog</a>
          </li>

          <li className={`menu-item menu-item-has-children ${openSubmenu === 'paginas' ? 'open' : ''}`}>
            <a 
              href="#paginas"
              onClick={(e) => {
                e.preventDefault();
                toggleSubmenu('paginas');
              }}
            >
              Páginas
            </a>
            {openSubmenu === 'paginas' && (
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="#recursos">Recursos</a>
                </li>
                <li className="menu-item">
                  <a href="#faq">Preguntas Frecuentes</a>
                </li>
              </ul>
            )}
          </li>

          <li className="menu-item">
            <a href="#contacto">Contacto</a>
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
