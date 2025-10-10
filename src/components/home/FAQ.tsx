import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: '¿Qué puedo esperar en la primera sesión con un terapeuta?',
      answer:
        'En la primera sesión nos enfocaremos en conocerte, entender tus preocupaciones y establecer objetivos terapéuticos. Es un espacio confidencial donde podrás expresarte libremente.',
    },
    {
      question: '¿Cuáles son los signos de abuso en una pareja?',
      answer:
        'Los signos incluyen control excesivo, aislamiento de amigos y familia, intimidación, desvalorización constante y cualquier forma de violencia física, emocional o psicológica.',
    },
    {
      question: '¿Cuánto dura normalmente un tratamiento psicológico?',
      answer:
        'La duración varía según cada persona y sus objetivos. Algunos encuentran mejoras en pocas sesiones, mientras que otros procesos requieren más tiempo. Lo trabajamos juntos.',
    },
  ];

  return (
    <div className="mb-10">
      {/* Title */}
      <div className="text-center mb-8">
        <h3 className="widget-title">Preguntas Frecuentes</h3>
      </div>

      {/* FAQ Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white">
            <p className="font-bold text-[#2c3e50] mb-3 text-base">
              {faq.question}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {faq.answer}
            </p>
            <p>
              <a href="#faq" className="read-more">
                Leer más
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

