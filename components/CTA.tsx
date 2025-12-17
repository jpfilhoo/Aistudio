
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="relative z-10 glass p-12 md:p-20 rounded-[4rem] border-brand/20 bg-gradient-to-b from-brand/20 to-transparent">
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Pronto para o Próximo Nível de Atendimento?</h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    Junte-se a centenas de empresas que escalaram sua operação com a inteligência e organização da vbot.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="px-10 py-5 bg-white text-black rounded-2xl font-black text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3">
                        Agendar Demonstração <ArrowRight />
                    </button>
                    <button className="px-10 py-5 glass text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition-colors">
                        Falar com Consultor
                    </button>
                </div>

                <p className="mt-8 text-sm text-gray-500 font-medium italic">Veja na prática como nossa tecnologia se adapta ao seu modelo de negócio.</p>
            </div>
            
            {/* Ambient light for CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand opacity-10 blur-[150px] -z-10"></div>
        </div>
    </section>
  );
};

export default CTA;
