import React from 'react';
import { Container } from '../components/ui/Container';
import { FadeIn } from '../components/ui/FadeIn';
import { Calculadora_Vield } from '../components/ui/Calculadora_Vield';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <FadeIn className="text-center mb-32">
          {/* UPDATED H1: Hybrid Style */}
          <h1 className="font-display font-medium text-3xl md:text-5xl lg:text-6xl text-stone-900 mb-6 uppercase tracking-widest leading-tight">
            CALCULADORA
          </h1>
          <p className="text-stone-500 font-normal text-lg md:text-2xl">
            No esperes más y consigue ya un precio estimado para saber el coste de tu reforma ideal
          </p>
        </FadeIn>

        {/* Calculator Section */}
        <div className="mb-24">
          <FadeIn>
            <Calculadora_Vield />
          </FadeIn>
        </div>


      </Container>
    </div>
  );
};