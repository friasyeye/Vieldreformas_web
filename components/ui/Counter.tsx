import React, { useEffect, useRef } from 'react';

interface CounterProps {
  value: string;
  duration?: number;
  className?: string;
  threshold?: number;
}

export const Counter: React.FC<CounterProps> = ({ value, duration = 3000, className = '', threshold = 0.1 }) => {
  const ref = useRef<HTMLSpanElement>(null);

  // Extraer número base y prefijo (ej: "+35" -> 35 y "+")
  const numericValue = parseInt(value.replace(/\D/g, ''), 10);
  const prefix = value.includes('+') ? '+' : '';

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Estado inicial
    element.textContent = `${prefix}0`;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing: easeOutQuad
            // Fórmula: 1 - (1 - t) * (1 - t)
            const ease = 1 - (1 - progress) * (1 - progress);

            const current = Math.floor(ease * numericValue);

            // Manipulación directa del DOM
            element.textContent = `${prefix}${current}`;

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              // Asegurar valor final exacto
              element.textContent = value;
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect(); // Garantiza que solo ocurra una vez
        }
      },
      { threshold } // Umbral bajo para disparar en cuanto sea visible
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value, duration, numericValue, prefix, threshold]);

  return (
    <span
      ref={ref}
      // 'tabular-nums' es crítico para evitar el "tembleque" del ancho del texto
      className={`tabular-nums inline-block ${className}`}
    >
      {prefix}0
    </span>
  );
};