import React, { useState } from 'react';

const WelcomeSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);
  
  // Estado para controlar qué modos de acompañamiento están expandidos
  const [expandedModes, setExpandedModes] = useState<Set<string>>(new Set());
  
  const toggleMode = (modeKey: string) => {
    setExpandedModes(prev => {
      const next = new Set(prev);
      if (next.has(modeKey)) {
        next.delete(modeKey);
      } else {
        next.add(modeKey);
      }
      return next;
    });
  };
  
  // Descripciones completas de los modos de acompañamiento
  const modeDescriptions = {
    familiar: {
      short: 'Espacio orientado a escuchar y trabajar las dinámicas familiares, los modos de vincularse y las dificultades que pueden aparecer en la convivencia, la comunicación o los roles …',
      full: 'Espacio orientado a escuchar y trabajar las dinámicas familiares, los modos de vincularse y las dificultades que pueden aparecer en la convivencia, la comunicación o los roles. Se busca generar un espacio donde todos puedan expresarse y encontrar nuevas formas de relacionarse.'
    },
    pareja: {
      short: 'Un espacio para pensar los vínculos afectivos, revisar patrones que se repiten, abordar conflictos y recuperar modos de encuentro …',
      full: 'Un espacio para pensar los vínculos afectivos, revisar patrones que se repiten, abordar conflictos y recuperar modos de encuentro. Permite que la pareja pueda poner en palabras lo que les pasa y abrir posibilidades de transformación.'
    },
    grupos: {
      short: 'Acompañamiento a equipos y organizaciones para mejorar la comunicación, el clima laboral, la cooperación y la resolución de conflictos …',
      full: 'Acompañamiento a equipos y organizaciones para mejorar la comunicación, el clima laboral, la cooperación y la resolución de conflictos. El espacio permite revisar dinámicas grupales y fortalecer vínculos que favorezcan el trabajo cotidiano.'
    },
    ninos: {
      short: 'Espacio lúdico y de escucha donde el niño puede expresar a través del juego y la palabra aquello que le sucede. Se trabaja en articulación con la familia, escuela …',
      full: 'Espacio lúdico y de escucha donde el niño puede expresar a través del juego y la palabra aquello que le sucede. Se trabaja en articulación con la familia, escuela, respetando su ritmo, sus tiempos y su modo singular de construir sentido.'
    },
    adolescentes: {
      short: 'Un espacio que acompaña los cambios, inquietudes y preguntas propias de esta etapa. Se propone un lugar donde el adolescente pueda desplegar sus ideas, explorar su modo de ver el mundo …',
      full: 'Un espacio que acompaña los cambios, inquietudes y preguntas propias de esta etapa. Se propone un lugar donde el adolescente pueda desplegar sus ideas, explorar su modo de ver el mundo y tomar posición, desde una escucha que favorece la reflexión crítica, ética y responsable. El objetivo es que pueda construir su propio criterio y encontrar formas singulares de habitar lo que siente y desea.'
    },
    discapacidad: {
      short: 'Acompañamiento orientado a favorecer el desarrollo emocional, social y vincular del niño y adolescente, atendiendo sus necesidades particulares …',
      full: 'Acompañamiento orientado a favorecer el desarrollo emocional, social y vincular del niño y adolescente, atendiendo sus necesidades particulares. Se trabaja en articulación con la familia y otros profesionales, sosteniendo un espacio respetuoso, inclusivo y atento a su singularidad.'
    }
  };
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
            mundo interno y acercarse a sentidos que a veces aparecen confusos, difíciles
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

      {/* Modos de Acompañamiento */}
      <div className="space-y-4">
        {/* Terapia familiar */}
        <div className="page-box page-box--inline flex gap-4 items-start">
          <a href="#servicios" className="page-box__picture flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1766792706/t%C3%A9cnicas-de-terapia-familiar-1-1_ssvdug.webp" 
              alt="Terapia familiar" 
              className="w-[100px] h-[70px] object-cover rounded"
            />
          </a>
          <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-1">
              <a href="#servicios" className="hover:text-[#1FA7DA] transition-colors">
                TERAPIA FAMILIAR
              </a>
            </h5>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              {expandedModes.has('familiar') ? modeDescriptions.familiar.full : modeDescriptions.familiar.short}
            </p>
            <p>
              <button 
                type="button" 
                className="read-more cursor-pointer" 
                onClick={() => toggleMode('familiar')}
              >
                {expandedModes.has('familiar') ? 'Leer menos' : 'Leer más'}
              </button>
            </p>
          </div>
        </div>

        {/* Terapia de pareja */}
        <div className="page-box page-box--inline flex gap-4 items-start">
          <a href="#servicios" className="page-box__picture flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1764600214/foto-principal-1_tlsknm.webp" 
              alt="Terapia de pareja" 
              className="w-[100px] h-[70px] object-cover rounded"
            />
          </a>
          <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-1">
              <a href="#servicios" className="hover:text-[#1FA7DA] transition-colors">
                TERAPIA DE PAREJA
              </a>
            </h5>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              {expandedModes.has('pareja') ? modeDescriptions.pareja.full : modeDescriptions.pareja.short}
            </p>
            <p>
              <button 
                type="button" 
                className="read-more cursor-pointer" 
                onClick={() => toggleMode('pareja')}
              >
                {expandedModes.has('pareja') ? 'Leer menos' : 'Leer más'}
              </button>
            </p>
          </div>
        </div>

        {/* Grupos de trabajo */}
        <div className="page-box page-box--inline flex gap-4 items-start">
          <a href="#servicios" className="page-box__picture flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1766792261/estudiar-psicologia-que-es-la-psicologia-de-los-grupos-y-que-funciones-tiene_poytua.webp" 
              alt="Grupos de trabajo" 
              className="w-[100px] h-[70px] object-cover rounded"
            />
          </a>
          <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-1">
              <a href="#servicios" className="hover:text-[#1FA7DA] transition-colors">
                GRUPOS DE TRABAJO
              </a>
            </h5>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              {expandedModes.has('grupos') ? modeDescriptions.grupos.full : modeDescriptions.grupos.short}
            </p>
            <p>
              <button 
                type="button" 
                className="read-more cursor-pointer" 
                onClick={() => toggleMode('grupos')}
              >
                {expandedModes.has('grupos') ? 'Leer menos' : 'Leer más'}
              </button>
            </p>
          </div>
        </div>

        {/* Acompañamiento con niños */}
        <div className="page-box page-box--inline flex gap-4 items-start">
          <a href="#servicios" className="page-box__picture flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1764600214/Las-claves-de-la-psicoterapia-infantil2_ehfdur.webp" 
              alt="Acompañamiento con niños" 
              className="w-[100px] h-[70px] object-cover rounded"
            />
          </a>
          <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-1">
              <a href="#servicios" className="hover:text-[#1FA7DA] transition-colors">
                ACOMPAÑAMIENTO CON NIÑOS
              </a>
            </h5>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              {expandedModes.has('ninos') ? modeDescriptions.ninos.full : modeDescriptions.ninos.short}
            </p>
            <p>
              <button 
                type="button" 
                className="read-more cursor-pointer" 
                onClick={() => toggleMode('ninos')}
              >
                {expandedModes.has('ninos') ? 'Leer menos' : 'Leer más'}
              </button>
            </p>
          </div>
        </div>

        {/* Acompañamiento con adolescentes */}
        <div className="page-box page-box--inline flex gap-4 items-start">
          <a href="#servicios" className="page-box__picture flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1761258760/photo-1529156069898-49953e39b3ac_nnhb0g.webp" 
              alt="Acompañamiento con adolescentes" 
              className="w-[100px] h-[70px] object-cover rounded"
            />
          </a>
          <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-1">
              <a href="#servicios" className="hover:text-[#1FA7DA] transition-colors">
                ACOMPAÑAMIENTO CON ADOLESCENTES
              </a>
            </h5>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              {expandedModes.has('adolescentes') ? modeDescriptions.adolescentes.full : modeDescriptions.adolescentes.short}
            </p>
            <p>
              <button 
                type="button" 
                className="read-more cursor-pointer" 
                onClick={() => toggleMode('adolescentes')}
              >
                {expandedModes.has('adolescentes') ? 'Leer menos' : 'Leer más'}
              </button>
            </p>
          </div>
        </div>

        {/* Trabajo con niños y adolescentes con discapacidad */}
        <div className="page-box page-box--inline flex gap-4 items-start">
          <a href="#servicios" className="page-box__picture flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dzoupwn0e/image/upload/v1766793096/mujer-en-proceso-de-aborto-scaled-500x383_1_qemth5.webp" 
              alt="Trabajo con niños y adolescentes con discapacidad" 
              className="w-[100px] h-[70px] object-cover rounded"
            />
          </a>
          <div className="page-box__content flex-1">
              <h5 className="page-box__title text-[#2c3e50] mb-1">
              <a href="#servicios" className="hover:text-[#1FA7DA] transition-colors">
                TRABAJO CON NIÑOS Y ADOLESCENTES CON DISCAPACIDAD
              </a>
            </h5>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              {expandedModes.has('discapacidad') ? modeDescriptions.discapacidad.full : modeDescriptions.discapacidad.short}
            </p>
            <p>
              <button 
                type="button" 
                className="read-more cursor-pointer" 
                onClick={() => toggleMode('discapacidad')}
              >
                {expandedModes.has('discapacidad') ? 'Leer menos' : 'Leer más'}
              </button>
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

