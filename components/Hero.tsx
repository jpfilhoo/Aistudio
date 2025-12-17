
import React from 'react';
import { ArrowRight, MessageSquare, Zap, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full mb-6 border-brand/20">
            <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-300">vbot v2.0 • API Oficial Meta</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
            Escale seu Atendimento com a <span className="text-brand">vbot</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
            Centralize WhatsApp, Instagram e Facebook em uma plataforma futurista. Chatbots e Agentes de IA treinados para vender e dar suporte em escala.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-brand text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform glow-red group">
              Agendar Demonstração <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass text-white rounded-2xl font-bold text-lg hover:bg-white/5 transition-colors">
              Ver Vídeo
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
            <div className="flex flex-col items-center">
                <ShieldCheck className="text-brand mb-1" size={20} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Seguro</span>
            </div>
            <div className="flex flex-col items-center">
                <Zap className="text-brand mb-1" size={20} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Rápido</span>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Main Visual Element - Removed overflow-hidden to allow cards to float outside */}
          <div className="relative z-10 glass rounded-[3rem] p-4 border-brand/10 shadow-2xl group">
            
            {/* Inner container with overflow-hidden for the image only */}
            <div className="relative rounded-[2.5rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand/10 to-transparent pointer-events-none z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop" 
                  alt="Futuristic Dashboard" 
                  className="rounded-[2.5rem] shadow-inner opacity-90 group-hover:scale-[1.02] transition-transform duration-700 aspect-video object-cover"
                />
            </div>
            
            {/* Float Cards - Now placed outside the overflow container but inside the relative parent */}
            <div className="absolute top-1/4 -left-10 z-20 glass p-4 rounded-2xl border-brand/20 shadow-2xl animate-bounce pointer-events-none" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                        <MessageSquare className="text-green-500" size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">WhatsApp</p>
                        <p className="text-sm font-bold text-white">+14 Leads Hoje</p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-1/4 -right-14 z-20 glass p-5 rounded-2xl border-brand/20 shadow-2xl animate-bounce pointer-events-none" style={{ animationDuration: '6s' }}>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand/20 rounded-full flex items-center justify-center">
                        <Zap className="text-brand" size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Agente IA</p>
                        <p className="text-sm font-bold text-white">Venda Finalizada!</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand/10 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full animate-slow-spin"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
