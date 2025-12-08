import React, { useState } from 'react';

const WelcomeSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 mt-6 md:mt-0">
      {/* Welcome Text */}
      <div>
        <div className="text-gray-700 leading-relaxed space-y-3 md:space-y-4">
          <p className="text-sm md:text-base">
            Hola, soy Natalia Domecq, psicóloga con orientación psicoanalítica.
          </p>
          <p className="text-sm md:text-base">
            Acompaño a las personas a poner en palabras lo que les sucede, a explorar su
            mundo interno y a acercarse a sentidos que a veces aparecen confusos, difíciles
            o silenciosos.
          </p>
          <p className="text-sm md:text-base">
            Concibo el espacio terapéutico como un encuentro cuidado, donde la palabra, el
            tiempo y la escucha permiten que algo del sufrimiento se despliegue y pueda ser
            trabajado. Me posiciono desde una presencia atenta, respetuosa y cercana,
            favoreciendo un vínculo que habilite la confianza y el movimiento subjetivo.
          </p>
          {isExpanded && (
            <>
              <p className="text-sm md:text-base">
                Mi modo de trabajo invita a detenerse, a escuchar lo que insiste, lo que retorna,
                lo que inquieta y también lo que desea. No se trata de respuestas rápidas, sino de
                un proceso singular, propio de cada paciente, en el que pueda ir encontrando nuevas
                maneras de comprender(se) y de habitar su vida.
              </p>
              <p className="text-sm md:text-base">
                El análisis es, para mí, un camino de elaboración y transformación. Cada sesión se
                abre como un espacio para pensar, revisar, dar lugar a lo que emerge y habilitar
                otras preguntas. Mi intención es acompañar ese recorrido desde una escucha ética,
                humana y comprometida.
              </p>
              <p className="text-sm md:text-base">
                Si estás buscando un espacio para explorar lo que te pasa, abrir preguntas o iniciar
                un trabajo sobre vos mismx, estoy acá para acompañarte.
              </p>
            </>
          )}
          <p>
            <button type="button" className="read-more cursor-pointer" onClick={toggleExpanded}>
              {isExpanded ? 'Leer menos' : 'Leer más'}
            </button>
          </p>
   
        </div>
      </div>

      {/* Services Inline List */}
      <div className="space-y-4">
        {/* Depression Treatment */}
        <div className="page-box page-box--inline flex gap-4 items-start">
          <a href="#depresion" className="page-box__picture flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1764600214/666c21cdb64eb0fa8351db24_656dd2466a81a396ac6b56bf_646352042a42dfa5c9d2992b_como-sali-depresion-portada_1_kww64j.webp" 
              alt="Tratamiento de Depresión" 
              className="w-[100px] h-[70px] object-cover rounded"
            />
          </a>
          <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-1">
              <a href="#depresion" className="hover:text-[#1FA7DA] transition-colors">
                TRATAMIENTO DE DEPRESIÓN
              </a>
            </h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              La depresión es una enfermedad mental, que uno no debe confundir …
            </p>
          </div>
        </div>

        {/* Individual Treatment */}
        <div className="page-box page-box--inline flex gap-4 items-start">
          <a href="#individual" className="page-box__picture flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1764600214/c5775642d024d6b57cef2d07fa40227b_gl20qc.webp" 
              alt="Tratamiento Individual" 
              className="w-[100px] h-[70px] object-cover rounded"
            />
          </a>
          <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-1">
              <a href="#individual" className="hover:text-[#1FA7DA] transition-colors">
                TRATAMIENTO INDIVIDUAL
              </a>
            </h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              El tratamiento individual a menudo se denomina psicoterapia, y es …
            </p>
          </div>
        </div>

        {/* Anxiety Treatment */}
        <div className="page-box page-box--inline flex gap-4 items-start">
          <a href="#ansiedad" className="page-box__picture flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1764600224/Tratamiento-Ansiedad-Valencia_700x387_qv8go4.webp" 
              alt="Tratamiento de Ansiedad" 
              className="w-[100px] h-[70px] object-cover rounded"
            />
          </a>
          <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-1">
              <a href="#ansiedad" className="hover:text-[#1FA7DA] transition-colors">
                TRATAMIENTO DE ANSIEDAD
              </a>
            </h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ya sea fobia social, fobia específica, estrés postraumático …
            </p>
          </div>
        </div>

      </div>

      {/* Modalidades de atención debajo, ocupando ambas columnas */}
      <div className="md:col-span-2">
        <div className="pt-2 border-t border-gray-200 mb-4" />
        <h3 className="widget-title mb-3">Modalidades de atención</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          En mi práctica clínica ofrezco diferentes modalidades de atención, para que cada persona
          pueda acceder a un formato que mejor se adapte a sus necesidades y a su momento vital.
          Todas las modalidades se sostienen desde la misma posición ética: una escucha atenta,
          respetuosa y singular.
        </p>
        <div className="grid md:grid-cols-2 gap-4 md:gap-5 mt-3">
          {/* Atención presencial */}
          <div className="page-box page-box--inline flex gap-4 items-start">
            <a href="#modalidades" className="page-box__picture flex-shrink-0">
              <img 
                src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1765196631/consejos-primeras-sesiones-como-psicoterapeuta-wide_webp_hd1um3.webp" 
                alt="Atención presencial" 
                className="w-[100px] h-[70px] md:w-[120px] md:h-[80px] object-cover rounded"
              />
            </a>
            <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-1">ATENCIÓN PRESENCIAL</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                Trabajo cara a cara en un espacio cuidado que favorece el vínculo y la
                comunicación directa, habilitando la palabra y el detenerse.
              </p>
            </div>
          </div>

          {/* Atención virtual */}
          <div className="page-box page-box--inline flex gap-4 items-start">
            <a href="#modalidades" className="page-box__picture flex-shrink-0">
              <img 
                src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1765196631/terapia-psicologica-online_riwdhd.webp" 
                alt="Atención virtual" 
                className="w-[100px] h-[70px] md:w-[120px] md:h-[80px] object-cover rounded"
              />
            </a>
            <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-1">ATENCIÓN VIRTUAL</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                Modalidad online, cómoda y flexible, que amplía el acceso y sostiene procesos
                valiosos sin límites geográficos, manteniendo la calidad del trabajo analítico.
              </p>
            </div>
          </div>

          {/* Atención individual */}
          <div className="page-box page-box--inline flex gap-4 items-start">
            <a href="#modalidades" className="page-box__picture flex-shrink-0">
              <img 
                src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1765196631/psicoterapia-individual-mujer-en-terapia-individual_qvb7nr.webp" 
                alt="Atención individual" 
                className="w-[100px] h-[70px] md:w-[120px] md:h-[80px] object-cover rounded"
              />
            </a>
            <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-1">ATENCIÓN INDIVIDUAL</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                Espacio singular centrado en la historia, el deseo y el padecimiento de cada
                persona; ritmo e intervenciones ajustadas a cada subjetividad.
              </p>
            </div>
          </div>

          {/* Atención a adolescentes */}
          <div className="page-box page-box--inline flex gap-4 items-start">
            <a href="#modalidades" className="page-box__picture flex-shrink-0">
              <img 
                src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1765196631/Padres-que-buscan-ayuda-con-sus-hijos-adolescentes-Sanza-Psicologia-scaled_we1irj.webp" 
                alt="Atención a adolescentes" 
                className="w-[100px] h-[70px] md:w-[120px] md:h-[80px] object-cover rounded"
              />
            </a>
            <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-1">ATENCIÓN A ADOLESCENTES</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                Acompañamiento que respeta tiempos singulares y modos de decir, sin patologizar
                ni apresurar conclusiones; orientado a conflictos, cambios y dudas.
              </p>
            </div>
          </div>

          {/* Atención a adultos */}
          <div className="page-box page-box--inline flex gap-4 items-start">
            <a href="#modalidades" className="page-box__picture flex-shrink-0">
              <img 
                src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1765196631/francia_consulta_psicologica_cqjqjl.webp" 
                alt="Atención a adultos" 
                className="w-[100px] h-[70px] md:w-[120px] md:h-[80px] object-cover rounded"
              />
            </a>
            <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-1">ATENCIÓN A ADULTOS</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                Exploración de aquello que produce malestar, repeticiones, angustia o conflictos;
                abrir nuevos sentidos y habilitar transformaciones posibles.
              </p>
            </div>
          </div>

          {/* Frecuencia y duración */}
          <div className="page-box page-box--inline flex gap-4 items-start">
            <a href="#modalidades" className="page-box__picture flex-shrink-0">
              <img 
                src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1765196631/sera-que-voce-vive-no-passado-1024x683_ewkbxv.webp" 
                alt="Frecuencia y duración" 
                className="w-[100px] h-[70px] md:w-[120px] md:h-[80px] object-cover rounded"
              />
            </a>
            <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-1">FRECUENCIA Y DURACIÓN</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                Se acuerda según necesidades y momento del proceso. Duración orientativa de las
                sesiones: 45 a 50 minutos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

