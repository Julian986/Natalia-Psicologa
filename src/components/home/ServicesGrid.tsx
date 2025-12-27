import React from 'react';

interface Service {
  title: string;
  description: string;
  link: string;
  image?: string;
}

const ServicesGrid: React.FC = () => {
  // Modos de acompañamiento - COMENTADO: Se movió a la columna derecha (WelcomeSection)
  /*
  const modes = [
    {
      key: 'familiar',
      title: 'Terapia familiar',
      icon: Users,
      description:
        'Espacio orientado a escuchar y trabajar las dinámicas familiares, los modos de vincularse y las dificultades que pueden aparecer en la convivencia, la comunicación o los roles. Se busca generar un espacio donde todos puedan expresarse y encontrar nuevas formas de relacionarse.',
    },
    {
      key: 'pareja',
      title: 'Terapia de pareja',
      icon: HeartHandshake,
      description:
        'Un espacio para pensar los vínculos afectivos, revisar patrones que se repiten, abordar conflictos y recuperar modos de encuentro. Permite que la pareja pueda poner en palabras lo que les pasa y abrir posibilidades de transformación.',
    },
    {
      key: 'grupos',
      title: 'Grupos de trabajo',
      icon: Briefcase,
      description:
        'Acompañamiento a equipos y organizaciones para mejorar la comunicación, el clima laboral, la cooperación y la resolución de conflictos. El espacio permite revisar dinámicas grupales y fortalecer vínculos que favorezcan el trabajo cotidiano.',
    },
    {
      key: 'ninos',
      title: 'Acompañamiento con niños',
      icon: User,
      description:
        'Espacio lúdico y de escucha donde el niño puede expresar a través del juego y la palabra aquello que le sucede. Se trabaja en articulación con la familia, escuela, respetando su ritmo, sus tiempos y su modo singular de construir sentido.',
    },
    {
      key: 'adolescentes',
      title: 'Acompañamiento con adolescentes',
      icon: UserCheck,
      description:
        'Un espacio que acompaña los cambios, inquietudes y preguntas propias de esta etapa. Se propone un lugar donde el adolescente pueda desplegar sus ideas, explorar su modo de ver el mundo y tomar posición, desde una escucha que favorece la reflexión crítica, ética y responsable. El objetivo es que pueda construir su propio criterio y encontrar formas singulares de habitar lo que siente y desea.',
    },
    {
      key: 'discapacidad',
      title: 'Trabajo con niños y adolescentes con discapacidad',
      icon: Accessibility,
      description:
        'Acompañamiento orientado a favorecer el desarrollo emocional, social y vincular del niño y adolescente, atendiendo sus necesidades particulares. Se trabaja en articulación con la familia y otros profesionales, sosteniendo un espacio respetuoso, inclusivo y atento a su singularidad.',
    },
  ] as const;

  const [activeTab, setActiveTab] = useState(0);
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]));

  const toggleAccordion = (idx: number) => {
    setOpenSet(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };
  */

  const services: Service[] = [
    {
      title: 'Terapia para Niños',
      description:
        'Hay muchos problemas emocionales que encuentran un rincón en nuestro corazón y se niegan a desaparecer. Con el tiempo, estos problemas pueden transformarse en una especie de tumor emocional que impacta negativamente en nuestra vida diaria, como la falta de...',
      link: '#terapia-ninos',
      image: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1764600214/Las-claves-de-la-psicoterapia-infantil2_ehfdur.webp',
    },
    {
      title: 'Terapia de Pareja',
      description:
        'Una relación pasa por numerosas fases durante su ciclo de vida, y es obvio que tenga algunos momentos difíciles. Sin embargo, la fortaleza de una relación se refleja en cómo las parejas enfrentan esos ...',
      link: '#terapia-pareja',
      image: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1764600214/foto-principal-1_tlsknm.webp',
    },
    {
      title: 'Recuperación Post-Divorcio',
      description:
        'Nuestro enfoque sistemático hacia la terapia de pareja se define en función de mejorar la comunicación entre los socios y establecer metas a corto y largo plazo, donde ambos socios estarían...',
      link: '#post-divorcio',
      image: 'https://res.cloudinary.com/dzoupwn0e/image/upload/v1764600214/dividir-vivienda.jpg.optimal_rtwxoz.webp',
    },
  ];

  return (
    <div className="mb-10">
      {/* Modos de acompañamiento - COMENTADO: Esta sección se movió a la columna derecha (WelcomeSection) */}
      {/* 
      <div className="mb-6">
        <h3 className="widget-title mb-2">Modos de acompañamiento</h3>
        <p className="text-gray-700 leading-relaxed">
          Realizo acompañamientos en distintos espacios y configuraciones vinculares, según las necesidades de cada persona o grupo. Trabajo con familias, parejas, grupos de trabajo, niños y adolescentes, entre otros modos posibles de intervención. Cada proceso se construye de manera singular, respetando la historia, el ritmo y la particularidad de quienes consultan.
        </p>
      </div>

      <div className="hidden md:block mb-6">
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2">
          {modes.map((m, idx) => {
            const Icon = m.icon;
            const isActive = idx === activeTab;
            return (
              <button
                key={m.key}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${isActive ? 'bg-[#1FA7DA] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                aria-selected={isActive}
                role="tab"
              >
                <Icon className="w-4 h-4" />
                {m.title}
              </button>
            );
          })}
        </div>
        <div className="bg-white border border-gray-200 rounded p-4 mt-4" role="tabpanel">
          <div className="flex items-start gap-3">
            {(() => {
              const Icon = modes[activeTab].icon;
              return <Icon className="w-5 h-5 text-[#1FA7DA] mt-1 flex-shrink-0" />;
            })()}
            <div>
              <h4 className="text-[#2c3e50] font-semibold mb-1">{modes[activeTab].title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{modes[activeTab].description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden mb-6">
        <div className="space-y-2">
          {modes.map((m, idx) => {
            const Icon = m.icon;
            const isOpen = openSet.has(idx);
            return (
              <div key={m.key} className="border border-gray-200 rounded bg-white">
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between gap-3 p-3 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="inline-flex items-center gap-2 text-[#2c3e50] font-semibold text-sm">
                    <Icon className="w-4 h-4 text-[#1FA7DA]" />
                    {m.title}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} px-3 pb-3 text-sm text-gray-600 leading-relaxed`}>
                  {m.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      */}

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="page-box page-box--block bg-white border border-gray-200 rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Image */}
            <a href={service.link} className="page-box__picture block">
              <div className="w-full h-60 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden group">
                {service.image ? (
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-[#1FA7DA]/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-gray-400 font-medium">Imagen</span>
                  </div>
                )}
              </div>
            </a>

            {/* Content */}
            <div className="page-box__content p-6">
              <h5 className="page-box__title text-[#2c3e50] mb-3">
                <a href={service.link} className="hover:text-[#1FA7DA] transition-colors">
                  {service.title.toUpperCase()}
                </a>
              </h5>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <p>
                <a href={service.link} className="read-more">
                  Leer más
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;

