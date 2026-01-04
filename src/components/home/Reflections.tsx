import React from 'react';

const Reflections: React.FC = () => {
  return (
    <section id="reflexiones" className="mb-10">
      {/* Palabras que orientan la clínica (full width) */}
      <div className="mb-8">
        <h3 className="widget-title mb-3">Palabras que orientan la clínica</h3>

        {/* Modo 1 (elegido por la clienta) */}
        <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-white via-white to-slate-50 shadow-sm">
          {/* Accent */}
          <div className="absolute inset-y-0 left-0 w-1 bg-[#1FA7DA]/70" aria-hidden="true" />

          <div className="p-6 md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <blockquote className="relative pl-5">
                <div className="absolute left-0 top-1 h-8 w-8 text-[#1FA7DA]/15 select-none" aria-hidden="true">
                  “
                </div>
                <p className="text-[15px] md:text-base text-slate-700 leading-relaxed">
                  Siguiendo a Francoise Dolto <span className="text-slate-500">(La causa de los niños)</span>, la posición
                  del analista en la clínica con niños no consiste en adaptar al niño a la norma, sino en sostener un
                  espacio donde pueda advenir como sujeto.
                </p>
                <footer className="mt-3 text-sm font-semibold text-[#2c3e50]">— Françoise Dolto</footer>
              </blockquote>

              <blockquote className="relative pl-5 md:border-l md:border-slate-200 md:pl-7">
                <div className="absolute left-0 top-1 h-8 w-8 text-[#1FA7DA]/15 select-none" aria-hidden="true">
                  “
                </div>
                <p className="text-[15px] md:text-base text-slate-700 leading-relaxed">
                  Cómo señala Winnicott en <span className="italic">Realidad y juego</span>, especialmente en los capítulos
                  dedicados al jugar y a la experiencia cultural, la posición del terapeuta implica saber estudiar, sin
                  forzar interpretaciones ni intrusiones, respetando los tiempos del paciente.
                </p>
                <footer className="mt-3 text-sm font-semibold text-[#2c3e50]">— D. W. Winnicott</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Otros espacios (cards) */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Frases para pensar... */}
        <div className="page-box page-box--block bg-white border border-gray-200 rounded overflow-hidden shadow-sm">
          <div className="page-box__content p-6">
            <h5 className="page-box__title text-[#2c3e50] mb-1">FRASES PARA PENSAR...</h5>
            <p className="text-sm text-gray-600 leading-relaxed">Próximamente.</p>
          </div>
        </div>

        {/* Ecos del consultorio */}
        <div className="page-box page-box--block bg-white border border-gray-200 rounded overflow-hidden shadow-sm">
          <div className="page-box__content p-6">
            <h5 className="page-box__title text-[#2c3e50] mb-1">ECOS DEL CONSULTORIO</h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              “Pequeños fragmentos que han surgido en sesión y que, por su potencia o su verdad, permanecen resonando.
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


