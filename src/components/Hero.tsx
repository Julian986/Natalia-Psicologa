import React, { useEffect, useRef } from 'react';
import { Calendar, Shield, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(217, 119, 6, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50/20 to-white overflow-hidden">
      {/* Animated particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />
      
      {/* Subtle background accent */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-slate-200/15 rounded-full blur-3xl"></div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col justify-center pt-32 pb-20">
          
          {/* Main content */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Text content */}
              <div className="text-center lg:text-left space-y-6">
                {/* Top badge */}
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-full shadow-sm">
                    <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                    <span className="text-sm font-medium text-slate-700">Psicología Clínica · Bahía Blanca</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    <span className="block text-slate-900">Lic. Natalia</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl lg:text-2xl text-slate-600 font-light leading-relaxed">
                    Compartiendo conocimiento y recursos sobre salud mental desde una perspectiva profesional
                  </p>
                </div>

                {/* Professional info */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Award className="w-5 h-5 text-slate-800" />
                    <span className="text-sm font-medium">Psicóloga Clínica</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-5 h-5 text-slate-800" />
                    <span className="text-sm font-medium">Virtual y Presencial</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Shield className="w-5 h-5 text-slate-800" />
                    <span className="text-sm font-medium">10+ Años Experiencia</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="group px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-slate-950 rounded-xl font-semibold text-white shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30 transition-all duration-300 transform hover:-translate-y-1">
                    <span className="flex items-center gap-2 text-base">
                      <Shield className="w-4 h-4" />
                      Explorar Contenido
                      <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </span>
                  </button>
                  <button className="group px-8 py-4 bg-white hover:bg-slate-50 border-2 border-slate-300 hover:border-slate-400 rounded-xl font-semibold text-slate-700 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <span className="flex items-center gap-2 text-base">
                      <Award className="w-4 h-4" />
                      Ver Experiencia
                      <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </span>
                  </button>
                </div>

                {/* Content stats */}
                <div className="pt-6">
                  <div className="inline-flex divide-x divide-slate-200 px-6 py-5 bg-white/90 backdrop-blur-xl border border-slate-200 rounded-xl shadow-lg">
                    <div className="px-6 text-center">
                      <div className="text-2xl font-bold text-slate-900">10+</div>
                      <div className="text-xs text-slate-500 mt-1">Años Experiencia</div>
                    </div>
                    <div className="px-6 text-center">
                      <div className="text-2xl font-bold text-slate-900">50+</div>
                      <div className="text-xs text-slate-500 mt-1">Artículos</div>
                    </div>
                    <div className="px-6 text-center">
                      <div className="text-2xl font-bold text-slate-900">1000+</div>
                      <div className="text-xs text-slate-500 mt-1">Lectores</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Background decoration */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl rotate-3 opacity-40"></div>
                  
                  {/* Main image container */}
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl border-2 border-dashed border-slate-300 shadow-2xl flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
                    <span className="text-slate-500 font-medium text-lg">Imagen</span>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl px-4 py-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-slate-800 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-700">Contenido Semanal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-300/50 to-transparent"></div>
    </section>
  );
};

export default Hero;