import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  href,
  target,
  rel,
  onClick, 
  variant = 'primary', 
  className = '' 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest uppercase transition-all duration-300 ease-out";
  
  const variants = {
    primary: "bg-stone-900 text-white hover:bg-stone-800 border border-stone-900",
    outline: "bg-transparent text-stone-900 border border-stone-900 hover:bg-stone-900 hover:text-white",
    text: "bg-transparent text-stone-900 border-b border-transparent hover:border-stone-900 px-0 py-2"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};