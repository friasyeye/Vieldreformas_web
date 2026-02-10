import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { FadeIn } from '../components/ui/FadeIn';
import { Counter } from '../components/ui/Counter';
import { METRICS, FAQS } from '../constants';
import { Button } from '../components/ui/Button';
import { Hammer, Bath, Armchair, DoorOpen, Zap, Plus, Minus } from 'lucide-react';

export const Services: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <Container className="mb-24 text-center">
        <FadeIn>
          <h2 className="font-display font-bold text-3xl md:text-7xl lg:text-7xl mb-6 text-stone-900 uppercase tracking-[0.15em] leading-none">
            Nuestros<br />Servicios
          </h2>
          <p className="text-stone-500 font-normal text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Servicios integrales para tu hogar con la garantía de más de 35 años de oficio.
          </p>
        </FadeIn>
      </Container>

      {/* Bento Grid Section */}
      <section className="mb-24 lg:mb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">

            {/* Bloque 1: REFORMAS INTEGRALES (66%) - Updated Design to Light Mode */}
            <FadeIn className="md:col-span-2 bg-stone-50 p-8 md:p-12 flex flex-col justify-between min-h-[300px] md:min-h-[400px] border border-stone-100 group hover:border-brand-accent/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <Hammer className="w-10 h-10 md:w-12 md:h-12 text-stone-300 group-hover:text-brand-accent transition-colors duration-300 stroke-[1]" />
                <span className="text-stone-200 font-display text-6xl md:text-8xl lg:text-7xl font-bold select-none group-hover:text-stone-100 transition-colors">01</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl md:text-4xl uppercase tracking-widest text-brand-accent mb-4">
                  Reformas Integrales
                </h3>
                <p className="text-stone-600 font-light leading-relaxed text-lg md:text-xl max-w-2xl">
                  Coordinamos toda la obra de inicio a fin. Nos encargamos de la gestión completa para que no tengas que preocuparte por nada.
                </p>
              </div>
            </FadeIn>

            {/* Bloque 2: COCINAS Y BAÑOS (33%) */}
            <FadeIn delay={100} className="md:col-span-1 bg-stone-50 p-8 md:p-12 flex flex-col justify-between min-h-[300px] md:min-h-[400px] border border-stone-100 group hover:border-brand-accent/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <Bath className="w-8 h-8 md:w-10 md:h-10 text-stone-300 group-hover:text-brand-accent transition-colors duration-300 stroke-[1]" />
                <span className="text-stone-200 font-display text-5xl md:text-7xl lg:text-6xl font-bold select-none group-hover:text-stone-100 transition-colors">02</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-widest text-brand-accent mb-4">
                  Cocinas y Baños
                </h3>
                <p className="text-stone-600 font-light leading-relaxed text-base md:text-lg">
                  Reformas de las estancias principales de la casa con materiales de calidad y acabados bien hechos.
                </p>
              </div>
            </FadeIn>

            {/* Bloque 3: INTERIORISMO Y DECORACIÓN (33%) */}
            <FadeIn delay={200} className="md:col-span-1 bg-stone-50 p-8 md:p-12 flex flex-col justify-between min-h-[300px] border border-stone-100 group hover:border-brand-accent/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <Armchair className="w-8 h-8 md:w-10 md:h-10 text-stone-300 group-hover:text-brand-accent transition-colors duration-300 stroke-[1]" />
                <span className="text-stone-200 font-display text-5xl md:text-7xl lg:text-6xl font-bold select-none group-hover:text-stone-100 transition-colors">03</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-widest text-brand-accent mb-4">
                  Interiorismo y Decoración
                </h3>
                <p className="text-stone-600 font-light leading-relaxed text-base md:text-lg">
                  Aportamos soluciones de diseño para que cada espacio sea práctico y estéticamente equilibrado.
                </p>
              </div>
            </FadeIn>

            {/* Bloque 4: CARPINTERÍA (33%) */}
            <FadeIn delay={300} className="md:col-span-1 bg-stone-50 p-8 md:p-12 flex flex-col justify-between min-h-[300px] border border-stone-100 group hover:border-brand-accent/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <DoorOpen className="w-8 h-8 md:w-10 md:h-10 text-stone-300 group-hover:text-brand-accent transition-colors duration-300 stroke-[1]" />
                <span className="text-stone-200 font-display text-5xl md:text-7xl lg:text-6xl font-bold select-none group-hover:text-stone-100 transition-colors">04</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-widest text-brand-accent mb-4">
                  Carpintería
                </h3>
                <p className="text-stone-600 font-light leading-relaxed text-base md:text-lg">
                  Instalación de ventanas (aluminio y PVC), puertas interiores, armarios y suelos de madera.
                </p>
              </div>
            </FadeIn>

            {/* Bloque 5: INSTALACIONES (33%) */}
            <FadeIn delay={400} className="md:col-span-1 bg-stone-50 p-8 md:p-12 flex flex-col justify-between min-h-[300px] border border-stone-100 group hover:border-brand-accent/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-8">
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-stone-300 group-hover:text-brand-accent transition-colors duration-300 stroke-[1]" />
                <span className="text-stone-200 font-display text-5xl md:text-7xl lg:text-6xl font-bold select-none group-hover:text-stone-100 transition-colors">05</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-widest text-brand-accent mb-4">
                  Instalaciones
                </h3>
                <p className="text-stone-600 font-light leading-relaxed text-base md:text-lg">
                  Realizamos trabajos de fontanería, electricidad y climatización cumpliendo siempre con las normativas.
                </p>
              </div>
            </FadeIn>

          </div>
        </Container>
      </section>

      {/* Metrics Section - Reused Minimalist Style from About Page with Counter Animation */}
      <section className="py-24 lg:py-24 bg-stone-50 mb-24 lg:mb-24 border-y border-stone-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="group cursor-default">
                <div className="font-display font-black text-7xl md:text-9xl lg:text-8xl mb-4 text-brand-accent leading-none">
                  <Counter value={metric.value} duration={4000} />
                </div>
                <div className="text-xs uppercase tracking-[0.25em] font-bold text-stone-400 group-hover:text-brand-accent transition-colors duration-300">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section - Redesigned with Accordion & Numbering */}
      <section>
        <Container className="max-w-4xl">
          <FadeIn>
            <h2 className="font-display font-bold text-3xl md:text-6xl mb-20 text-center uppercase tracking-[0.15em] leading-none text-stone-900">
              Preguntas<br />Frecuentes
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              const number = (idx + 1).toString().padStart(2, '0');

              return (
                <FadeIn key={idx} delay={idx * 50}>
                  <div
                    className={`
                      bg-white border transition-all duration-300 overflow-hidden
                      ${isOpen ? 'border-brand-accent/30 shadow-md' : 'border-stone-200 shadow-sm hover:border-brand-accent/20 hover:shadow-md'}
                    `}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-center p-6 md:p-8 text-left group focus:outline-none"
                    >
                      <div className="flex items-center flex-grow">
                        <span className="font-display font-bold text-3xl md:text-4xl text-stone-200 mr-6 select-none group-hover:text-stone-300 transition-colors duration-300 w-12 md:w-16">
                          {number}
                        </span>
                        <span className="font-display font-bold text-lg md:text-xl text-stone-900 uppercase tracking-wide pr-8 group-hover:text-brand-accent transition-colors duration-300">
                          {faq.question}
                        </span>
                      </div>

                      <span className="flex-shrink-0 text-brand-accent transition-transform duration-300 transform">
                        {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                      </span>
                    </button>

                    <div
                      className={`
                        transition-all duration-500 ease-in-out px-6 md:px-8
                        ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0 pb-0'}
                      `}
                    >
                      <div className="pl-0 md:pl-[5.5rem]">
                        <p className="text-stone-500 font-light text-lg leading-relaxed pt-2 border-t border-stone-100">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
};