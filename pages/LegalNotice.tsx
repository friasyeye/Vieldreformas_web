import React from 'react';
import { Container } from '../components/ui/Container';
import { FadeIn } from '../components/ui/FadeIn';

export const LegalNotice: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <Container className="max-w-4xl">
        <FadeIn>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-accent mb-12 uppercase tracking-wide leading-none">
            Aviso Legal
          </h1>
          
          <div className="prose prose-stone max-w-none text-stone-600 font-light leading-relaxed">
            <p className="mb-8">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se exponen los siguientes datos identificativos del titular del sitio web:
            </p>

            <div className="bg-stone-50 p-8 border border-stone-100 mb-12">
              <ul className="space-y-4 list-none pl-0">
                <li><strong className="font-bold text-stone-900">Titular:</strong> Joel Marin Hidalgo (Renovamarin)</li>
                <li><strong className="font-bold text-stone-900">NIF:</strong> 39436875V</li>
                <li><strong className="font-bold text-stone-900">Domicilio Fiscal:</strong> Ronda guineueta vella 68, 08042, Barcelona</li>
                <li><strong className="font-bold text-stone-900">Correo electrónico:</strong> renovamarin@gmail.com</li>
              </ul>
            </div>

            <h2 className="font-display font-bold text-2xl text-stone-900 uppercase tracking-wide mb-6">
              Objeto
            </h2>
            <p className="mb-6">
              Este sitio web tiene como finalidad informar sobre los servicios de reformas integrales y construcción de Renovamarin.
            </p>
            <p>
              El acceso y uso de la web atribuye la condición de usuario e implica la aceptación plena y sin reservas de las condiciones aquí expuestas. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Renovamarin ofrece a través de su portal y a no emplearlos para incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.
            </p>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};