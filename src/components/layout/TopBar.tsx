import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#8B949C] text-white py-3">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="text-gray-200 mb-2 md:mb-0 text-center md:text-left text-xs md:text-sm">
            Acompañamiento psicológico para individuos, parejas y familias
          </div>
          <nav>
            <ul className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
              <li>
                <a href="#recursos" className="hover:text-[#1FA7DA] transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-[#1FA7DA] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#1FA7DA] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
