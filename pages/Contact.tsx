import React from 'react';
import { Container } from '../components/ui/Container';
import { FadeIn } from '../components/ui/FadeIn';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <FadeIn className="text-center mb-32">
          {/* UPDATED H1: Hybrid Style */}
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 uppercase tracking-[0.15em] leading-none text-stone-900">
            Contacto
          </h1>
          <p className="text-stone-500 font-normal text-lg md:text-2xl">
            Estamos listos para escuchar su visión.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          
          {/* Form */}
          <FadeIn delay={100} className="bg-white">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-bold group-hover:text-stone-900 transition-colors">Nombre</label>
                  <input type="text" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-all duration-300 font-light text-xl" />
                </div>
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-bold group-hover:text-stone-900 transition-colors">Apellido</label>
                  <input type="text" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-all duration-300 font-light text-xl" />
                </div>
              </div>
              
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-bold group-hover:text-stone-900 transition-colors">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-all duration-300 font-light text-xl" />
              </div>

              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-bold group-hover:text-stone-900 transition-colors">Tipo de Proyecto</label>
                <select className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-all duration-300 font-light text-xl text-stone-900 rounded-none">
                  <option>Reforma Integral</option>
                  <option>Interiorismo</option>
                  <option>Obra Nueva</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-bold group-hover:text-stone-900 transition-colors">Mensaje</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-900 transition-all duration-300 font-light text-xl resize-none"></textarea>
              </div>

              <div className="pt-8">
                <Button variant="primary" className="w-full md:w-auto !px-12 !py-5">Enviar Mensaje</Button>
              </div>
            </form>
          </FadeIn>

          {/* Info */}
          <FadeIn delay={200} className="flex flex-col justify-center space-y-16 lg:pl-12 border-l-0 lg:border-l border-stone-100">
            <div>
              <h3 className="font-display font-black text-2xl mb-6 uppercase tracking-wide text-stone-900">Showroom Madrid</h3>
              <p className="text-stone-500 font-light leading-relaxed text-lg">
                Calle de la Innovación 42, Planta 1<br/>
                28001 Madrid, España
              </p>
            </div>

            <div>
              <h3 className="font-display font-black text-2xl mb-6 uppercase tracking-wide text-stone-900">Contacto Directo</h3>
              <p className="text-stone-500 font-light leading-relaxed text-lg">
                <a href="mailto:info@renovamarin.com" className="hover:text-brand-accent transition-colors">info@renovamarin.com</a><br/>
                +34 912 345 678
              </p>
            </div>

            <div>
              <h3 className="font-display font-black text-2xl mb-6 uppercase tracking-wide text-stone-900">Horario</h3>
              <p className="text-stone-500 font-light leading-relaxed text-lg">
                Lunes - Viernes: 09:00 - 19:00<br/>
                Sábados: Cita previa
              </p>
            </div>
          </FadeIn>

        </div>
      </Container>
    </div>
  );
};