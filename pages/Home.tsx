import React, { useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { FadeIn } from '../components/ui/FadeIn';
import { Counter } from '../components/ui/Counter';
import { TESTIMONIALS } from '../constants';

export const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="w-full overflow-hidden">

      {/* HERO SECTION - REFINED LAYOUT */}
      <section className="relative w-full flex flex-col bg-white pt-20 md:pt-28 pb-0">

        {/* Content Container - Centered */}
        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 mb-0 z-20">
          {/* Spacing container if needed */}
        </div>

        {/* 
           Image Container 
           - Starts closer to header (pt-20/28)
           - Tighter margins (px-2 md:px-3) = Larger Image
        */}
        <div className="relative w-full px-2 md:px-3 lg:px-4 -mt-20 md:-mt-28 h-[75vh] min-h-[600px]">
          <div className="relative w-full h-full overflow-hidden shadow-sm">
            <img
              src="https://i.ibb.co/k2r6FNt4/Tendencias-en-decoracion-reformas-y-muebles-en-2025-y-2026-decoracion-reformas-integrales-interioris.jpg"
              alt="Reformas y Rehabilitaciones en Barcelona"
              className="w-full h-full object-cover object-center"
            />
            {/* Dark Overlay for Text Contrast */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content Overlay - Centered Block with internal Left Alignment */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-6 md:p-12">
              <FadeIn className="flex flex-col w-fit mx-auto">

                {/* Text Group: Left Aligned relative to each other */}
                <div className="flex flex-col items-start text-left">
                  {/* Top Label */}
                  <span className="block text-white/90 text-[9px] md:text-[10px] font-sans tracking-[0.2em] mb-6 pl-1">
                    Reformas y rehabilitaciones en Barcelona
                  </span>

                  {/* Main Title - Left Aligned, Two Lines */}
                  <h1 className="
                      font-display 
                      font-medium 
                      text-white 
                      leading-tight
                      mb-10
                      text-3xl md:text-5xl lg:text-6xl
                      text-left
                  ">
                    Construimos tu proyecto soñado,<br />
                    sin complicación
                  </h1>
                </div>
              </FadeIn>
            </div>

            {/* TRUST SIGNALS - Repositioned to Bottom Right */}
            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-30">
              <div className="flex items-center gap-6 md:gap-10 text-white/90">
                <div className="flex flex-col items-end">
                  <div className="text-2xl md:text-4xl font-display font-bold leading-none mb-1">
                    <Counter value="+25" duration={3000} />
                  </div>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-80">Años</span>
                </div>

                {/* Divider */}
                <div className="w-px h-10 bg-white/30"></div>

                <div className="flex flex-col items-end">
                  <div className="text-2xl md:text-4xl font-display font-bold leading-none mb-1">
                    <Counter value="+204" duration={4500} />
                  </div>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-80">Hogares</span>
                </div>

                {/* Divider */}
                <div className="w-px h-10 bg-white/30"></div>

                <div className="flex flex-col items-end">
                  <div className="text-2xl md:text-4xl font-display font-bold leading-none mb-1">
                    5/5
                  </div>
                  <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-80">Valoración</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <FadeIn className="flex flex-col items-center max-w-5xl mx-auto text-center">
            {/* Overline */}
            <span className="font-sans font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs text-stone-400 mb-6 md:mb-8">
              EXCELENCIA
            </span>

            {/* Main Text */}
            <h2 className="font-display font-normal text-xl md:text-3xl lg:text-4xl leading-relaxed text-stone-900 mb-12">
              Expertos en la gestión completa de reformas y rehabilitación de viviendas. Optimizamos cada fase de la obra mediante rigor profesional y cumplimiento de plazos, garantizando resultados de alto valor estético y estructural para clientes que buscan solvencia y tranquilidad.
            </h2>

            {/* Button */}
            <Button
              href="https://wa.me/34667804973?text=Hola,%20quisiera%20solicitar%20una%20consulta%20privada."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-xs md:text-sm tracking-[0.2em] !bg-slate-900 !text-white hover:!bg-slate-800 transition-colors"
            >
              SOLICITAR CONSULTA PRIVADA
            </Button>
          </FadeIn>
        </Container>
      </section>

      {/* PHILOSOPHY SECTION (Two Column) */}
      <section className="py-24 md:py-32 bg-stone-50">
        <Container>
          <FadeIn className="flex flex-col md:flex-row items-center gap-12 md:gap-20 lg:gap-24">

            {/* Image Column (First on Mobile, First on Desktop) */}
            <div className="w-full md:w-1/2 order-1 md:order-1">
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-stone-200">
                <img
                  src="/assets/images/baño_moderno.webp"
                  alt="Cocina de diseño moderna y elegante en Barcelona"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Column (Second on Mobile, Second on Desktop) */}
            <div className="w-full md:w-1/2 order-2 md:order-2 flex flex-col justify-center">
              <div className="font-sans font-light text-stone-600 text-base md:text-lg lg:text-xl leading-loose space-y-8 md:space-y-10">
                <p>
                  Tu hogar es mucho más que una obra; es el reflejo de tu historia y el lugar donde sucede lo que de verdad importa. El escenario de tus desayunos con calma, cenas con amigos y momentos de desconexión.
                </p>
                <p>
                  Entendemos la responsabilidad de entrar en tu casa para transformarla. Nuestra meta es que ese escenario sea tan sólido y acogedor como siempre imaginaste para tus próximos recuerdos.
                </p>
                <p>
                  Nos centramos en lo esencial: crear un espacio donde la armonía te reciba al llegar y sientas, al cerrar la puerta, que estás por fin en tu propio refugio.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* GARANTÍA Y EJECUCIÓN SECTION (Mirror Layout) */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <FadeIn className="flex flex-col md:flex-row items-center gap-12 md:gap-20 lg:gap-24">

            {/* Text Column (Second on Mobile, First on Desktop - MIRROR LAYOUT) */}
            <div className="w-full md:w-1/2 order-2 md:order-1 flex flex-col justify-center">
              <div className="font-sans font-light text-stone-600 text-base md:text-lg lg:text-xl leading-loose space-y-8 md:space-y-10">
                <p>
                  Contamos con nuestro propio equipo de ejecución, lo que nos permite garantizar que lo que diseñamos sobre el papel se traslada con precisión milimétrica a la realidad de tu casa. Al gestionar nosotros mismos cada fase de la obra, eliminamos los conflictos habituales entre diseñador y constructor, asegurando que el rigor técnico que nos define desde hace 35 años esté presente en cada detalle del proyecto.
                </p>

                <div className="space-y-6">
                  <h3 className="font-display font-bold uppercase tracking-widest text-stone-900 text-lg md:text-xl">
                    GARANTÍA DE CONFIANZA RENOVAMARIN
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></span>
                      <span>Presupuesto cerrado sin sorpresas de última hora.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></span>
                      <span>Materiales premium certificados para durar.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></span>
                      <span>Cumplimiento riguroso de los plazos acordados.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></span>
                      <span>Equipo propio dedicado al 100% a tu proyecto.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 flex-shrink-0"></span>
                      <span>Seguimiento directo y transparente de la obra.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Image Column (First on Mobile, Second on Desktop) */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-stone-200">
                <img
                  src="/assets/images/ejecucion_tecnica.webp"
                  alt="reforma baño con garantía de calidad en Barcelona"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </FadeIn>
        </Container>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 md:py-28 lg:py-32 bg-stone-50 overflow-hidden">
        <Container>
          <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
            <FadeIn>
              <h2 className="font-display font-medium uppercase text-3xl md:text-5xl lg:text-6xl text-stone-900 mb-16 md:mb-24 text-center leading-tight">
                Nuestra mejor referencia
              </h2>
            </FadeIn>
            <div className="relative w-full grid grid-cols-1">
              {TESTIMONIALS.map((t, idx) => (
                <div
                  key={t.id}
                  className={`
                    col-start-1 row-start-1 w-full flex flex-col items-center justify-center text-center px-4 md:px-12
                    transition-opacity duration-1000 ease-in-out
                    ${activeTestimonial === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                  `}
                >
                  <blockquote className="font-sans md:font-display font-normal md:font-medium text-lg md:text-3xl lg:text-4xl leading-relaxed md:leading-tight text-stone-500 md:text-stone-900 max-w-2xl md:max-w-5xl mx-auto mb-10 md:mb-14">
                    "{t.text}"
                  </blockquote>
                  <cite className="not-italic flex flex-col items-center gap-2">
                    <span className="font-display font-bold uppercase tracking-widest text-stone-900 text-sm md:text-2xl">
                      {t.author}
                    </span>
                    <span className="font-sans font-light text-stone-500 text-xs md:text-lg tracking-wide">
                      {t.role}
                    </span>
                  </cite>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 lg:py-28 bg-white text-center">
        <Container>
          <FadeIn>
            <h2 className="font-display font-medium uppercase text-3xl md:text-5xl lg:text-6xl mb-8 text-stone-900 leading-tight">
              Cuéntanos tu idea
            </h2>
            <p className="text-stone-500 font-light text-lg md:text-2xl mb-12 max-w-xl mx-auto">
              Todo gran proyecto nace de una conversación. Comparte con nosotros lo que imaginas y te ayudaremos a trazar el camino más seguro para hacerlo realidad. Estamos aquí para asesorarte desde la primera idea hasta el último detalle de la obra.
            </p>
            <Button
              href="https://wa.me/34667804973?text=Hola,%20vengo%20de%20la%20web.%20Quiero%20un%20presupuesto%20personalizado!"
              target="_blank"
              rel="noopener noreferrer"
              className="md:px-10 md:py-5 md:text-base w-full md:w-auto py-4"
            >
              Pedir asesoría gratuita
            </Button>
          </FadeIn>
        </Container>
      </section>

    </main>
  );
};