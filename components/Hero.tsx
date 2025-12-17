
import React from 'react';
import { ArrowRight, Zap, Sparkles, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-56 md:pb-40 overflow-hidden">
      {/* Grid Pattern de fundo - Sutil e Profissional */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10 text-center lg:text-left">
          {/* Badge Superior */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-8 border-brand/20 mx-auto lg:mx-0 animate-fade-in">
            <Sparkles className="text-brand" size={14} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">API Oficial Meta • Inteligência Ativa</span>
          </div>
          
          {/* Título com Tipografia Ajustada para Desktop */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.85] mb-8 tracking-[-0.04em]">
            Escale suas <br />
            <span className="text-brand">Vendas</span> com IA.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            Transforme conversas em faturamento. Centralize <span className="text-white font-medium">WhatsApp, Instagram e Facebook</span> em uma plataforma robusta e aprovada pela Meta.
          </p>
          
          {/* Container de Botões - Alinhados em linha no Desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5">
            <button className="w-full sm:w-auto group px-10 py-4 bg-brand text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all glow-red hover:opacity-90 hover:scale-[1.02] active:scale-95 shadow-xl shadow-brand/20">
              Agendar Demo <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>
            
            <button className="w-full sm:w-auto px-10 py-4 glass text-white rounded-full font-bold text-lg hover:bg-white/5 transition-all border border-white/10 hover:border-white/20 flex items-center justify-center">
              Fale conosco
            </button>
          </div>
        </div>

        <div className="relative mt-20 lg:mt-0 flex items-center justify-center">
          {/* Dashboard Visual com Animação Float */}
          <div className="relative z-10 w-full glass rounded-[3rem] p-3 border-brand/10 shadow-2xl animate-float">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-black/40">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" 
                  alt="Dashboard vbot" 
                  className="w-full opacity-60 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            {/* Cards Flutuantes de Status */}
            <div className="absolute -top-6 -left-2 md:-left-12 z-20 glass p-3 md:p-5 rounded-2xl md:rounded-3xl border-brand/30 shadow-2xl animate-pulse whitespace-nowrap">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                        <MessageCircle className="text-green-500" size={18} />
                    </div>
                    <div>
                        <p className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest">MULTICANAL</p>
                        <p className="text-xs md:text-lg font-black text-white leading-tight">+14 Leads Hoje</p>
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-6 -right-2 md:-right-12 z-20 glass p-3 md:p-5 rounded-2xl md:rounded-3xl border-brand/30 shadow-2xl whitespace-nowrap">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-brand/20 rounded-xl flex items-center justify-center">
                        <Zap className="text-brand" size={18} fill="currentColor" />
                    </div>
                    <div>
                        <p className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest">IA ATIVA</p>
                        <p className="text-xs md:text-lg font-black text-white leading-tight">Venda Finalizada!</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Círculos de fundo animados */}
          <div className="absolute -z-10 w-[140%] h-[140%] border border-white/5 rounded-full animate-slow-spin"></div>
          <div className="absolute -z-10 w-[110%] h-[110%] border border-brand/10 rounded-full animate-slow-spin" style={{ animationDirection: 'reverse', animationDuration: '30s' }}></div>
          <div className="absolute -z-10 w-[80%] h-[80%] bg-brand opacity-[0.05] blur-[120px] rounded-full"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
