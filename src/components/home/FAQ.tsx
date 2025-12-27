import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: '1 ¿Qué puedo esperar en la primera entrevista?',
      answer:
        'La primera entrevista es un tiempo-espacio para que puedas contar qué te trae a consulta, qué te preocupa o qué te gustaría trabajar. No es necesario tener todo claro: podemos empezar con lo que aparezca. Ese encuentro permite que conozcas mi modo de trabajo, aclares dudas y veamos si este es un espacio donde te sentís cómodx para iniciar un proceso terapéutico conmigo.',
    },
    {
      question: '2. ¿Cómo saber si necesito comenzar una terapia?',
      answer:
        'Podés considerar consultar si estás atravesando situaciones que te generan malestar, angustia, confusión, dificultades en tus vínculos, emociones que desbordan, o si simplemente sentís que querés entenderte mejor.',
    },
    {
      question: '3. ¿Cómo es el encuadre: frecuencia, duración, honorarios y forma de trabajo?',
      answer:
        'La frecuencia suele acordarse entre paciente y terapeuta, según el momento y la necesidad de cada proceso. Las sesiones duran aproximadamente 45–50 minutos. Los honorarios se hablan y aclaran en ese momento, como así también la modalidad de pago y facturación. El trabajo se orienta a explorar lo que te sucede, a partir de lo que traés en cada encuentro.',
    },
    {
      question: '4. ¿Cuánto tiempo dura un proceso terapéutico?',
      answer:
        'No hay una duración establecida. Cada proceso es singular y se desarrolla a su propio ritmo. Lo importante es que puedas ir encontrando algo valioso en el trabajo que hacemos.',
    },
    {
      question: '5. ¿La terapia psicoanalítica implica hablar del pasado?',
      answer:
        'El pasado suele aparecer porque forma parte de lo que nos constituye, pero no es un requisito. Lo que guía el proceso es lo que vos traés en cada sesión: pensamientos, emociones, sueños, conflictos, preguntas.',
    },
    {
      question: '6. ¿Qué pasa si no sé qué decir en una sesión?',
      answer:
        'Es totalmente válido. A veces el silencio también dice. Podemos trabajar desde ese lugar: a veces lo que cuesta decir es tan importante como lo que sí aparece en palabras.',
    },
    {
      question: '7. ¿La atención puede ser virtual o es sólo presencial?',
      answer:
        'Ofrezco atención presencial y virtual. Ambas modalidades permiten un trabajo serio, comprometido y respetuoso.',
    },
    {
      question: '8. ¿Cómo se manejan la confidencialidad y el secreto profesional?',
      answer:
        'Todo lo que se habla en el espacio terapéutico es confidencial. El secreto profesional es una parte fundamental del trabajo y está garantizado por la ética de la profesión.',
    },
    {
      question: '9. ¿Qué pasa si siento que no estoy conectando con la terapia o con el/la terapeuta?',
      answer:
        'Es algo que podés traer a sesión. Hablar de lo que sucede en el vínculo también forma parte del proceso y puede abrir preguntas valiosas.',
    },
    {
      question: '10. ¿Puedo hacer preguntas sobre el encuadre, honorarios o modalidad de trabajo?',
      answer:
        'Sí, por supuesto. Toda duda relacionada con el encuadre puede conversarse y forma parte del comienzo del proceso.',
    },
  ];

  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="mb-10" id="faq">
      {/* Title */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-[#2c3e50]">Preguntas Frecuentes</h3>
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openItems.has(index);
          return (
            <div
              key={index}
              className={`bg-white border rounded transition-colors ${
                isOpen ? 'border-[#1FA7DA]' : 'border-gray-200'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className={`group w-full flex items-start justify-between gap-4 p-4 text-left transition-colors cursor-pointer ${
                  isOpen ? 'bg-gray-50' : 'hover:bg-gray-50'
                }`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
              >
                <span
                  className={`text-lg md:text-[18px] font-bold leading-snug tracking-tight transition-colors ${
                    isOpen
                      ? 'text-[#1FA7DA]'
                      : 'text-[#2c3e50] group-hover:text-[#1FA7DA]'
                  }`}
                >
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform transition-colors ${
                    isOpen ? 'rotate-180 text-[#1FA7DA]' : 'rotate-0 text-gray-400'
                  }`}
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
              <div
                id={`faq-panel-${index}`}
                className={`${isOpen ? 'block' : 'hidden'} px-4 pb-4 text-sm md:text-sm text-gray-600 leading-relaxed`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;

