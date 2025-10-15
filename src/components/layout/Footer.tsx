import React from 'react';
import { CreditCard } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contacto">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h6 className="footer-top__headings">Un poco sobre nosotros</h6>
              <div className="text-sm text-gray-600 leading-relaxed mb-4">
                <p>
                  Es un hecho establecido que un lector se distraerá con el contenido 
                  legible de una página al mirar su diseño. El punto de usar Lorem Ipsum 
                  es que tiene una distribución más o menos normal de letras.
                </p>
                <a href="#sobre-mi" className="read-more">LEER MÁS</a>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:pl-12">
              <h6 className="footer-top__headings">Navegación</h6>
              <ul className="space-y-2">
                <li>
                  <a href="#servicios" className="text-sm text-gray-600 hover:text-[#1FA7DA] transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#sobre-mi" className="text-sm text-gray-600 hover:text-[#1FA7DA] transition-colors">
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-sm text-gray-600 hover:text-[#1FA7DA] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#recursos" className="text-sm text-gray-600 hover:text-[#1FA7DA] transition-colors">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-sm text-gray-600 hover:text-[#1FA7DA] transition-colors">
                    Solicitar Consulta
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-sm text-gray-600 hover:text-[#1FA7DA] transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h6 className="footer-top__headings">Nuestros Servicios</h6>
              <ul className="space-y-2">
                <li>
                  <a href="#depresion" className="text-sm text-gray-600 hover:text-[#1FA7DA] transition-colors">
                    Depresión
                  </a>
                </li>
                <li>
                  <a href="#ansiedad" className="text-sm text-gray-600 hover:text-[#1FA7DA] transition-colors">
                    Ansiedad
                  </a>
                </li>
                <li>
                  <a href="#parejas" className="text-sm text-gray-600 hover:text-[#1FA7DA] transition-colors">
                    Parejas
                  </a>
                </li>
                <li>
                  <a href="#individual" className="text-sm text-gray-600 hover:text-[#1FA7DA] transition-colors">
                    Individual
                  </a>
                </li>
                <li>
                  <a href="#post-divorcio" className="text-sm text-gray-600 hover:text-[#1FA7DA] transition-colors">
                    Post-divorcio
                  </a>
                </li>
                <li>
                  <a href="#ninos" className="text-sm text-gray-600 hover:text-[#1FA7DA] transition-colors">
                    Niños
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact / CTA */}
            <div>
              <h6 className="footer-top__headings">Contacto</h6>
              <div className="text-sm text-gray-600 leading-relaxed mb-4">
                <p>
                  Si llegaste hasta aquí, probablemente te interese trabajar en tu 
                  bienestar emocional. Para ahorrarte problemas, simplemente haz clic 
                  en el botón a continuación.
                </p>
                <a href="#contacto" className="btn-primary inline-block mt-4">
                  SOLICITAR CONSULTA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="footer-bottom__left">
              <div className="text-xl font-bold text-[#2c3e50]">
                Lic. Natalia Domecq
              </div>
            </div>

            {/* Payment Methods */}
            <div className="footer-bottom__right">
              <div className="footer-bottom__payment-methods">
                <span>MÉTODOS DE PAGO:</span>
                <CreditCard className="w-8 h-8 text-gray-400" />
                <CreditCard className="w-8 h-8 text-gray-400" />
                <CreditCard className="w-8 h-8 text-gray-400" />
                <CreditCard className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
