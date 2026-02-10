import React from 'react';
import { Container } from '../components/ui/Container';
import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';
import { Send, Eye, Coins, ArrowRight, ArrowDown } from 'lucide-react';

export const Render3d: React.FC = () => {
    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <Container>

                {/* SECTION A: HERO */}
                <FadeIn className="mb-24 md:mb-32 lg:mb-32 text-center max-w-4xl mx-auto px-2 md:px-0">
                    <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-7xl lg:text-7xl mb-8 text-stone-900 uppercase tracking-tight sm:tracking-[0.15em] leading-none text-balance">
                        Visualiza tu futuro hogar <br />
                        <span className="text-brand-accent">hoy mismo.</span>
                    </h1>
                    <div className="w-16 h-1 bg-brand-accent mx-auto mb-8"></div>
                    <p className="text-stone-600 font-light text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                        ¿Te cuesta imaginar el resultado final? Eliminamos la incertidumbre. Envíanos una foto de tu estado actual y transformaremos tus ideas en un render 3D hiperrealista por una inversión mínima.
                    </p>
                </FadeIn>

                {/* SECTION B: THE TRANSFORMATION */}
                <section className="mb-32 lg:mb-40">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative">

                            {/* BEFORE IMAGE */}
                            <div className="w-full md:w-[45%] group relative">
                                <div className="absolute top-0 left-0 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest py-2 px-4 z-10">
                                    Tu Estado Actual
                                </div>
                                <div className="aspect-[4/3] overflow-hidden bg-stone-100 shadow-lg">
                                    <img
                                        src="/assets/images/sagrada-familia-antes-cocina-1.webp"
                                        alt="Estado actual de la vivienda antes de la reforma"
                                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>

                            {/* TRANSITION SEPARATOR - Minimalist Elegant Arrow */}
                            <div className="flex items-center justify-center z-10 w-full md:w-auto py-8 md:py-0">
                                <ArrowRight className="hidden md:block w-32 h-32 text-brand-accent stroke-[1.5] scale-x-150 opacity-100" />
                                <ArrowDown className="block md:hidden w-24 h-24 text-brand-accent stroke-[1.5] scale-y-150 opacity-100" />
                            </div>

                            {/* AFTER IMAGE */}
                            <div className="w-full md:w-[45%] group relative">
                                <div className="absolute top-0 left-0 bg-brand-accent text-stone-900 text-xs font-bold uppercase tracking-widest py-2 px-4 z-10">
                                    Propuesta Renovamarin
                                </div>
                                <div className="aspect-[4/3] overflow-hidden bg-stone-100 shadow-xl ring-1 ring-stone-900/5">
                                    <img
                                        src="/assets/images/render3d.webp"
                                        alt="Propuesta de diseño 3D realista de Renovamarin"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                        </div>
                    </FadeIn>
                </section>

                {/* SECTION C: THE OFFER */}
                <section className="mb-32 bg-stone-50 py-16 px-6 md:px-12 rounded-2xl border border-stone-100">
                    <FadeIn className="text-center mb-16">
                        <h2 className="font-display font-bold text-2xl md:text-5xl uppercase tracking-[0.15em] leading-tight text-stone-900 mb-6">
                            Una inversión sin riesgo en la casa de tus sueños
                        </h2>
                        <p className="text-stone-500 font-light text-lg md:text-xl max-w-2xl mx-auto">
                            Nuestro servicio de visualización 3D no es un coste, es un anticipo de tu futura reforma.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-stone-200 z-0"></div>

                        {/* Step 1 */}
                        <FadeIn delay={100} className="relative z-10 flex flex-col items-center">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border border-stone-200 shadow-sm mb-8 text-stone-400">
                                <Send className="w-10 h-10 stroke-[1.5]" />
                            </div>
                            <h3 className="font-display font-bold text-xl uppercase tracking-wider text-stone-900 mb-4">
                                1. Cuéntanos tu idea
                            </h3>
                            <p className="text-stone-500 font-light leading-relaxed">
                                Envíanos una foto de la estancia y explícanos qué estilo buscas.
                            </p>
                        </FadeIn>

                        {/* Step 2 */}
                        <FadeIn delay={200} className="relative z-10 flex flex-col items-center">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-brand-accent shadow-md mb-8 text-brand-accent">
                                <Eye className="w-10 h-10 stroke-[1.5]" />
                            </div>
                            <h3 className="font-display font-bold text-xl uppercase tracking-wider text-stone-900 mb-4">
                                2. Visualización Profesional
                            </h3>
                            <p className="text-stone-500 font-light leading-relaxed">
                                Creamos un render 3D de alta calidad de tu nuevo espacio por solo <span className="font-bold text-stone-900">20€</span>.
                            </p>
                        </FadeIn>

                        {/* Step 3 */}
                        <FadeIn delay={300} className="relative z-10 flex flex-col items-center">
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border border-stone-200 shadow-sm mb-8 text-stone-400">
                                <Coins className="w-10 h-10 stroke-[1.5]" />
                            </div>
                            <h3 className="font-display font-bold text-xl uppercase tracking-wider text-stone-900 mb-4">
                                3. Descuento Garantizado
                            </h3>
                            <p className="text-stone-500 font-light leading-relaxed">
                                Si decides hacer la reforma con nosotros, te descontamos el <span className="font-bold text-stone-900">100% del coste</span> del render.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* SECTION D: CTA */}
                <FadeIn className="text-center pb-24">
                    <Button
                        href="https://wa.me/34667804973?text=Hola,%20me%20gustaría%20solicitar%20mi%20render%203D%20por%2020€"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto !text-base md:!text-xl !py-4 md:!py-6 !px-8 md:!px-12 !bg-brand-accent !text-stone-900 hover:!bg-stone-900 hover:!text-white transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                        SOLICITAR MI RENDER 3D AHORA
                    </Button>
                </FadeIn>

            </Container>
        </div>
    );
};
