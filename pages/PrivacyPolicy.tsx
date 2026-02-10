import React from 'react';
import { Container } from '../components/ui/Container';
import { FadeIn } from '../components/ui/FadeIn';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <Container className="max-w-4xl">
        <FadeIn>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-accent mb-12 uppercase tracking-wide leading-none">
            Política de Privacidad
          </h1>
          
          <div className="prose prose-stone max-w-none text-stone-600 font-light leading-relaxed">
            <p className="mb-8">
              De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), se informa al usuario sobre el tratamiento de sus datos personales:
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="font-display font-bold text-xl text-stone-900 uppercase tracking-wide mb-4 border-b border-stone-200 pb-2">
                  Responsable del Tratamiento
                </h2>
                <p>Joel Marin Hidalgo</p>
                <p>NIF: 39436875V</p>
                <p>Domicilio: Ronda guineueta vella 68, 08042, Barcelona</p>
                <p>Email: renovamarin@gmail.com</p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-stone-900 uppercase tracking-wide mb-4 border-b border-stone-200 pb-2">
                  Finalidad
                </h2>
                <p>
                  Gestión de consultas, elaboración de presupuestos y contacto comercial derivado de la actividad de reformas solicitada por el usuario.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-stone-900 uppercase tracking-wide mb-4 border-b border-stone-200 pb-2">
                  Legitimación
                </h2>
                <p>
                  Consentimiento expreso del usuario al contactar voluntariamente a través de los formularios de contacto, WhatsApp o correo electrónico facilitados en este sitio web.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-stone-900 uppercase tracking-wide mb-4 border-b border-stone-200 pb-2">
                  Plazo de conservación
                </h2>
                <p>
                  Los datos se conservarán mientras exista un interés mutuo para mantener el fin del tratamiento o durante los años necesarios para cumplir con las obligaciones legales.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-xl text-stone-900 uppercase tracking-wide mb-4 border-b border-stone-200 pb-2">
                  Derechos
                </h2>
                <p className="mb-4">
                  El usuario tiene derecho a:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Retirar el consentimiento en cualquier momento.</li>
                  <li>Acceder, rectificar y suprimir sus datos.</li>
                  <li>Limitar u oponerse al tratamiento de sus datos.</li>
                  <li>Solicitar la portabilidad de los mismos.</li>
                </ul>
                <p className="mt-6">
                  Para ejercer sus derechos, el usuario puede enviar una solicitud por escrito al correo electrónico: <strong className="text-stone-900">renovamarin@gmail.com</strong>.
                </p>
              </section>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};