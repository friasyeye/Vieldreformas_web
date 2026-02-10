import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';
import { Lightbox } from '../components/ui/Lightbox';
import { PROJECTS } from '../constants';
import { MapPin, Ruler, Clock, Plus, Instagram, Coins } from 'lucide-react';

export const Projects: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (projectIndex: number, imageIndex: number) => {
    setCurrentProjectIndex(projectIndex);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    const project = PROJECTS[currentProjectIndex];
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    const project = PROJECTS[currentProjectIndex];
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      {/* Estilos locales para ocultar scrollbar de forma limpia */}
      <style>{`
        .scrollbar-hidden::-webkit-scrollbar { display: none; }
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <Container>

        {/* HEADER SECTION */}
        <FadeIn className="mb-24 md:mb-32 lg:mb-24 text-center max-w-4xl mx-auto px-2 md:px-0">
          <h2 className="font-display font-bold text-2xl sm:text-5xl md:text-7xl lg:text-7xl mb-8 text-stone-900 uppercase tracking-tight sm:tracking-[0.15em] leading-none text-balance">
            PROYECTOS<br />DESTACADOS
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mb-8"></div>
          <p className="text-stone-600 font-light text-xl md:text-2xl leading-relaxed">
            35 años de rigor técnico aplicados a la transformación de espacios. <br className="hidden md:block" />
            Precisión y durabilidad en cada reforma.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-32 md:gap-40 lg:gap-32 mb-40 lg:mb-32">
          {PROJECTS.map((project, idx) => (
            <FadeIn key={project.id} className="group">
              <div
                id={project.id === 4 ? 'bano-contemporaneo' : project.id === 1 ? 'sagrada-familia' : undefined}
                className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-16 items-start scroll-mt-32"
              >

                {/* 
                  =============================================
                  LEFT COLUMN (Desktop) / TOP BLOCK (Mobile)
                  =============================================
                */}
                <div className="lg:col-span-8 flex flex-col gap-8">

                  {/* 1. Main Image */}
                  <div
                    className="overflow-hidden bg-stone-100 cursor-zoom-in relative aspect-[16/10] shadow-sm group-hover:shadow-md transition-shadow duration-300"
                    onClick={() => openLightbox(idx, 0)}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-4 rounded-full text-stone-900">
                        <Plus size={24} />
                      </span>
                    </div>
                    <img
                      src={project.mainImage}
                      alt={project.mainImageAlt}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* DESKTOP ONLY: Thumbnails Row (Clean Indicator Overlay) */}
                  <div className="hidden lg:block">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Fotos del proyecto</h3>
                    <div className="grid grid-cols-3 gap-4 max-w-[60%]">
                      {project.gallery.slice(1, 4).map((img, thumbIdx) => {
                        const isLastThumb = thumbIdx === 2;
                        const hasMore = project.gallery.length > 4;
                        const remainingCount = project.gallery.length - 3;

                        return (
                          <div
                            key={thumbIdx}
                            className="aspect-square relative cursor-zoom-in overflow-hidden bg-stone-100 group/thumb"
                            onClick={() => openLightbox(idx, thumbIdx + 1)}
                          >
                            {/* Base Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/10 transition-colors duration-300 z-10"></div>

                            {/* Conditional Overlay for Hidden Photos (+X) */}
                            {isLastThumb && hasMore && (
                              <div className="absolute inset-0 bg-black/60 group-hover/thumb:bg-black/40 transition-colors duration-500 z-20 flex items-center justify-center">
                                <span className="text-white font-display font-bold text-2xl tracking-widest">
                                  +{remainingCount}
                                </span>
                              </div>
                            )}

                            <img
                              src={img}
                              alt={project.galleryAlts[thumbIdx + 1] || `Detalle ${thumbIdx + 1} reforma ${project.location}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 
                  =============================================
                  RIGHT COLUMN (Desktop) / BOTTOM BLOCK (Mobile)
                  =============================================
                */}
                <div className="lg:col-span-4 flex flex-col h-full lg:sticky lg:top-32">

                  <div className="mb-0 lg:mb-8">
                    <h3 className="font-display font-bold text-xl md:text-4xl text-stone-900 mb-6 uppercase leading-tight whitespace-pre-line">
                      {project.title}
                    </h3>

                    <p className="text-stone-500 font-light leading-relaxed mb-8 text-base md:text-lg border-l-2 border-brand-accent pl-4">
                      {project.description}
                    </p>

                    <ul className="space-y-4 text-sm font-medium text-stone-600 bg-stone-50 p-6 border border-stone-100">
                      <li className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0" />
                        <span><span className="text-stone-400 uppercase tracking-wider text-xs mr-2">Ubicación:</span> {project.location}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Ruler className="w-4 h-4 text-brand-accent flex-shrink-0" />
                        <span><span className="text-stone-400 uppercase tracking-wider text-xs mr-2">Superficie:</span> {project.area}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-brand-accent flex-shrink-0" />
                        <span><span className="text-stone-400 uppercase tracking-wider text-xs mr-2">Duración:</span> {project.duration}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Coins className="w-4 h-4 text-brand-accent flex-shrink-0" />
                        <span><span className="text-stone-400 uppercase tracking-wider text-xs mr-2">Inversión:</span> {project.investment}</span>
                      </li>
                    </ul>
                  </div>

                  {/* MOBILE ONLY: Thumbnails Swiper (No visible scrollbar) */}
                  <div className="block lg:hidden mt-12 pt-8 border-t border-stone-100">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">Fotos del proyecto</h3>
                    <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hidden">
                      {project.gallery.slice(1, 4).map((img, thumbIdx) => {
                        const isLastThumb = thumbIdx === 2;
                        const hasMore = project.gallery.length > 4;
                        const remainingCount = project.gallery.length - 3;

                        return (
                          <div
                            key={thumbIdx}
                            className="
                              flex-shrink-0 w-[40%] aspect-square
                              relative snap-center cursor-zoom-in overflow-hidden bg-stone-100
                            "
                            onClick={() => openLightbox(idx, thumbIdx + 1)}
                          >
                            {/* Overlay for hidden photos also on mobile for consistency */}
                            {isLastThumb && hasMore && (
                              <div className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center pointer-events-none">
                                <span className="text-white font-display font-bold text-xl tracking-widest">
                                  +{remainingCount}
                                </span>
                              </div>
                            )}
                            <img
                              src={img}
                              alt={project.galleryAlts[thumbIdx + 1] || `Detalle ${thumbIdx + 1} reforma ${project.location}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* DOUBLE ACTION SECTION */}
        <div className="mt-24 md:mt-32 lg:mt-24 pt-24 border-t border-stone-100">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display font-bold text-2xl md:text-5xl uppercase tracking-[0.15em] leading-tight text-stone-900">
              ¿Quieres ver más?
            </h2>
          </FadeIn>

          <div className="flex justify-center">
            <FadeIn delay={100} className="w-full max-w-2xl bg-white p-10 md:p-14 border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
              <Instagram className="w-12 h-12 text-stone-300 mb-6 stroke-[1]" />
              <h3 className="font-display font-bold text-2xl uppercase tracking-widest text-stone-900 mb-6">
                Más Inspiración
              </h3>
              <p className="text-stone-500 font-light text-lg leading-relaxed mb-10 max-w-md">
                Síguenos en Instagram para descubrir el día a día de nuestras obras y proyectos recién terminados.
              </p>
              <Button
                href="https://www.instagram.com/renovamarin/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="w-full md:w-auto !border-stone-900"
              >
                Ver nuestro Instagram
              </Button>
            </FadeIn>
          </div>
        </div>

      </Container>

      {/* LIGHTBOX COMPONENT */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={PROJECTS[currentProjectIndex]?.gallery || []}
        imageAlts={PROJECTS[currentProjectIndex]?.galleryAlts || []}
        currentIndex={currentImageIndex}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </div>
  );
};