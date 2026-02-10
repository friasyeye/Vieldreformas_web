import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { createPortal } from 'react-dom';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  imageAlts?: string[]; // Alt texts para cada imagen
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  images,
  imageAlts,
  currentIndex,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300">

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[70] p-2"
        aria-label="Cerrar galería"
      >
        <X size={32} />
      </button>

      {/* Navigation Left */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-[70] p-4 bg-black/20 hover:bg-black/40 rounded-full"
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Image Container */}
      <div
        className="relative max-w-7xl w-full h-full flex items-center justify-center p-4 md:p-12"
        onClick={onClose} // Clicking outside image closes
      >
        <img
          src={images[currentIndex]}
          alt={imageAlts?.[currentIndex] || `Imagen ${currentIndex + 1} de la galería`}
          className="max-h-full max-w-full object-contain shadow-2xl animate-fadeIn"
          onClick={(e) => e.stopPropagation()} // Clicking image does NOT close
        />

        {/* Counter */}
        <div className="absolute bottom-6 left-0 right-0 text-center text-white/60 font-sans tracking-widest text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Navigation Right */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-[70] p-4 bg-black/20 hover:bg-black/40 rounded-full"
        aria-label="Siguiente imagen"
      >
        <ChevronRight size={32} />
      </button>

    </div>,
    document.body
  );
};