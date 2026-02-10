import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { NAV_ITEMS } from '../../constants';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Desktop Logic: "Inicio" is HIDDEN on home page, visible elsewhere
  const desktopNavItems = useMemo(() => {
    if (location.pathname === '/') {
      return NAV_ITEMS;
    }
    return [{ label: 'Inicio', path: '/' }, ...NAV_ITEMS];
  }, [location.pathname]);

  // Mobile Logic: "Inicio" ALWAYS appears (Untouched for mobile)
  const mobileNavItems = [{ label: 'Inicio', path: '/' }, ...NAV_ITEMS];

  const handleMobileLinkClick = (path: string) => {
    setIsOpen(false);
    if (path === '/' && location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out bg-white/95 backdrop-blur-md shadow-sm py-1 md:pt-1 md:pb-0"
      >
        {/* 
           DESKTOP: Full width with refined horizontal padding
           MOBILE: Standard mobile layout logic preserved
        */}
        <div className="w-full px-6 md:px-6 lg:px-8 flex items-center justify-between">

          {/* 1. LOGO - Left on both mobile and desktop */}
          <Link
            to="/"
            className="relative z-50 flex items-center"
          >
            <img
              src="https://i.ibb.co/C3vNcbys/unnamed-removebg-preview.png"
              alt="Renovamarin - Reformas Integrales Barcelona"
              // Adjusted size: large but more compact for header height
              className="h-10 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Wrapper for right-side items on mobile */}
          <div className="flex items-center gap-4">
            {/* 2. Desktop Nav - Hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
              {desktopNavItems.map((item, index) => {
                const isLast = index === desktopNavItems.length - 1;
                if (isLast) {
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="
                        font-sans text-[11px] font-bold uppercase tracking-[0.15em] 
                        px-5 py-2.5 bg-stone-50 rounded-none
                        hover:bg-slate-900 hover:text-white transition-all duration-300
                      "
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      font-sans text-[11.55px] font-medium uppercase tracking-[0.15em] 
                      transition-all duration-300 hover:text-brand-accent 
                      ${location.pathname === item.path ? 'text-brand-accent' : ''} 
                      text-stone-900
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* 3. Mobile CTA Button - Visible only on mobile, next to burger */}
            <Link
              to="/contacto"
              className="md:hidden font-sans text-[10px] font-bold uppercase tracking-[0.12em] px-3 py-2 bg-slate-900 text-white transition-all duration-300"
            >
              Presupuesto
            </Link>

            {/* 4. Mobile Menu Toggle - Far right */}
            <button
              className="md:hidden z-50 p-2 -mr-2 rounded-full transition-all duration-300 text-stone-900"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
            >
              {isOpen ?
                <X size={24} /> :
                <Menu size={24} />
              }
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay - Rendered via Portal, preserved mobile logic */}
      {createPortal(
        <div
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden flex flex-col items-center justify-center`}
        >
          <nav className="flex flex-col space-y-8 text-center px-6">
            {mobileNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleMobileLinkClick(item.path)}
                className="font-sans font-medium text-3xl text-stone-900 hover:text-brand-accent transition-colors uppercase tracking-[0.15em]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>,
        document.body
      )}
    </>
  );
};