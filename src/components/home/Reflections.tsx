import React from 'react';

const Reflections: React.FC = () => {
  return (
    <section id="reflexiones" className="mb-10">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Frases para pensar... */}
        <div className="page-box page-box--block bg-white border border-gray-200 rounded overflow-hidden shadow-sm">
          <div className="page-box__content p-6">
            <h5 className="page-box__title text-[#2c3e50] mb-1">FRASES PARA PENSAR...</h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              Próximamente.
            </p>
          </div>
        </div>

        {/* Palabras que orientan la clínica */}
        <div className="page-box page-box--block bg-white border border-gray-200 rounded overflow-hidden shadow-sm">
          <div className="page-box__content p-6">
            <h5 className="page-box__title text-[#2c3e50] mb-1">PALABRAS QUE ORIENTAN LA CLÍNICA</h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              Próximamente.
            </p>
          </div>
        </div>

        {/* Ecos del consultorio */}
        <div className="page-box page-box--block bg-white border border-gray-200 rounded overflow-hidden shadow-sm">
          <div className="page-box__content p-6">
            <h5 className="page-box__title text-[#2c3e50] mb-1">ECOS DEL CONSULTORIO</h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              “Pequeños fragmentos que han surgido en sesión y que, por su potencia o su verdad,
              permanecen resonando.
              <br />
              Compartidos siempre de manera anónima y con profundo respeto.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reflections;


