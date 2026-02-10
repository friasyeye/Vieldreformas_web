import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { FadeIn } from '../components/ui/FadeIn';
import { Counter } from '../components/ui/Counter';
import { METRICS, FAQS } from '../constants';
import { Ruler, ClipboardCheck, Clock, Plus, Minus } from 'lucide-react';

export const About: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <Container className="mb-24">
        <FadeIn>
          <h2 className="font-display font-bold text-2xl md:text-7xl lg:text-7xl mb-12 text-stone-900 leading-none uppercase tracking-[0.15em]">
            Diseñamos espacios <br />
            <span className="text-brand-accent">para ser vividos.</span>
          </h2>
        </FadeIn>
      </Container>

      {/* Essence Block - Video Replacement */}
      <div className="w-full h-[60vh] lg:h-[70vh] bg-stone-200 overflow-hidden mb-24 lg:mb-24 relative group">
        <div className="absolute inset-0 bg-transparent z-10 pointer-events-none"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-105"
        >
          {/* 
            VÍDEO: Cocina blanca con taburetes de cuero del material de Renovamarin.
            Optimizado para carga instantánea en móvil y desktop
          */}
          <source src="/assets/videos/video_nosotros.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>

      {/* Our Essence Text */}
      <section className="mb-24 lg:mb-24">
        <Container>
          <div className="mb-12">
            <FadeIn className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="font-display font-bold text-2xl md:text-5xl mb-8 uppercase tracking-[0.15em] text-stone-900 leading-none">
                Nuestra<br />Esencia
              </h2>
              <div className="w-24 h-1 bg-brand-accent mx-auto md:mx-0"></div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

            <div className="md:col-span-5 order-2 md:order-1">
              <FadeIn delay={200}>
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 shadow-md">
                  <img
                    src="/assets/images/nosotros1.webp"
                    alt="Equipo Renovamarin trabajando en reforma integral con rigor técnico Barcelona"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </FadeIn>
            </div>

            <div className="md:col-span-7 order-1 md:order-2">
              <FadeIn delay={0}>
                <p className="space-y-8 text-lg md:text-2xl font-light text-stone-600 leading-relaxed md:leading-loose mb-12 text-center md:text-left">
                  Más de tres décadas a pie de obra nos han enseñado que la calidad real está en lo que no se ve: la precisión técnica y la integridad estructural. En Renovamarin, eliminamos la incertidumbre con presupuestos honestos, plazos rigurosos y un control total de la construcción. Tu hogar es tu mayor inversión; nosotros aportamos el oficio necesario para garantizar un resultado tan sólido como estético.
                </p>

                <div className="hidden md:grid grid-cols-3 gap-8 pt-8 border-t border-stone-200">
                  <div className="flex flex-col gap-4">
                    <Ruler className="w-8 h-8 text-brand-accent stroke-[1.5]" />
                    <span className="font-display font-bold uppercase tracking-widest text-xs text-stone-900 leading-relaxed">
                      Rigor<br />Técnico
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <ClipboardCheck className="w-8 h-8 text-brand-accent stroke-[1.5]" />
                    <span className="font-display font-bold uppercase tracking-widest text-xs text-stone-900 leading-relaxed">
                      Presupuestos<br />Honestos
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Clock className="w-8 h-8 text-brand-accent stroke-[1.5]" />
                    <span className="font-display font-bold uppercase tracking-widest text-xs text-stone-900 leading-relaxed">
                      Plazos<br />Garantizados
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </Container>
      </section >

      {/* Metrics Section */}
      < section className="py-24 lg:py-24 bg-stone-50 mb-24 lg:mb-24 border-y border-stone-100" >
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
      </section >

      {/* FAQ Section */}
      < section >
        <Container className="max-w-4xl">
          <FadeIn>
            <h2 className="font-display font-bold text-2xl md:text-6xl mb-20 text-center uppercase tracking-[0.15em] leading-none text-stone-900">
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
      </section >
    </div >
  );
};