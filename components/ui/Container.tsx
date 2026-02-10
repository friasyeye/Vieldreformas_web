import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

// "El contenido real debe estar siempre centrado y limitado en ancho para mantener legibilidad."
export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
};