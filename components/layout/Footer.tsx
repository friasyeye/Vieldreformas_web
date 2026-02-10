import React from 'react';
import { Container } from '../ui/Container';
import { NAV_ITEMS } from '../../constants';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-24">
      <Container>
        {/* 
           MODIFIED GRID: 
           Mobile: grid-cols-[1fr_2fr] gives the Contact column 2/3 of the width, moving it to the left 
           and providing ample space for long emails.
           Desktop: md:grid-cols-4 remains standard.
        */}
        <div className="grid grid-cols-[1fr_2fr] md:grid-cols-4 gap-y-12 gap-x-6 md:gap-8">

          {/* Logo Section: Spans 2 cols on mobile (full width) and 2 cols on desktop */}
          <div className="col-span-2 md:col-span-2">
            {/* Logo Image replaced text title */}
            <img
              src="https://i.ibb.co/C3vNcbys/unnamed-removebg-preview.png"
              alt="RENOVAMARIN"
              // TRIPLED SIZE AND WHITE COLOR: Increased to h-36 md:h-48, made white with filters
              className="h-36 md:h-48 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="text-stone-400 font-light max-w-sm">
              Creamos hogares con alma. Reformas exclusivas diseñadas para que cada rincón de tu casa cuente tu historia.
            </p>
          </div>

          {/* Navigation: Narrower column on mobile */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-stone-500">Navegación</h3>
            <ul className="space-y-4">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm font-light hover:text-stone-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact: Wider column on mobile to fit email */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-stone-500">Contacto</h3>
            <ul className="space-y-4 text-sm font-light text-stone-300">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-stone-500 min-w-[16px]" />
                <span className="break-words">renovamarin@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-stone-500 min-w-[16px]" />
                <span className="whitespace-nowrap">+34 667 80 49 73</span>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/renovamarin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-stone-500 group-hover:text-stone-400 transition-colors min-w-[16px]" />
                  <span>@renovamarin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          {/* Legal Links - Repositioned: Just above the horizontal divider line */}
          <div className="flex flex-wrap gap-4 mb-6 text-xs text-stone-500 font-light">
            <Link to="/aviso-legal" className="hover:text-stone-300 transition-colors">Aviso legal</Link>
            <span>-</span>
            {/* Linking Cookies to Privacy Policy as they are often related, or leaving as # if specific page not requested */}
            <Link to="/politica-de-privacidad" className="hover:text-stone-300 transition-colors">Política de cookies</Link>
            <span>-</span>
            <Link to="/politica-de-privacidad" className="hover:text-stone-300 transition-colors">Política de privacidad</Link>
          </div>

          {/* Bottom Bar: Divider line + Copyright & Agency Credit */}
          <div className="pt-8 border-t border-stone-800 text-xs text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            {/* 
                UPDATED LAYOUT: 
                Changed 'flex-wrap' to 'flex-nowrap' and added 'whitespace-nowrap' to FORCE a single line on mobile.
                The separator '|' is now visible on all screen sizes.
            */}
            <div className="flex flex-nowrap justify-center md:justify-start items-center gap-2 md:gap-4 text-center whitespace-nowrap overflow-x-auto scrollbar-hide">
              <p>© {new Date().getFullYear()} Renovamarin.</p>
              <span className="inline">|</span>
              <p className="flex items-center gap-1">
                Diseñado por
                <a
                  href="https://automatizaya-ia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent transition-colors font-medium"
                >
                  Automatiza Ya
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};