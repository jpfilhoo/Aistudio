
import React from 'react';
import { Cpu, BrainCircuit, Users, CheckCircle2 } from 'lucide-react';

const AISection: React.FC = () => {
  return (
    <section id="ai" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="glass rounded-[3rem] p-8 md:p-16 border-brand/10 relative overflow-hidden">
                {/* Background glow for the section */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand/10 to-transparent"></div>
                
                <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <div className="w-12 h-12 bg-brand rounded-2xl flex items-center justify-center mb-8 glow-red">
                            <Cpu className="text-white" size={24} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                            Seu novo melhor vendedor é uma <span className="text-brand">IA</span>.
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Treine agentes com o perfil da sua empresa. Nossos Agentes de IA atuam como SDRs, vendedores e suporte 24/7, utilizando processamento de linguagem natural avançado.
                        </p>
                        
                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="text-brand" size={20} />
                                <span>Qualificação automática de leads</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="text-brand" size={20} />
                                <span>Treinamento baseado em sua base de conhecimento</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="text-brand" size={20} />
                                <span>Humanização avançada (sem parecer robô)</span>
                            </li>
                        </ul>

                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <img key={i} src={`https://picsum.photos/seed/ai${i}/100`} className="w-10 h-10 rounded-full border-2 border-black" />
                                ))}
                            </div>
                            <span className="text-sm font-semibold text-gray-400 italic">"Economizamos 40h/semana de suporte humano."</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="glass aspect-square rounded-[3rem] flex items-center justify-center border-brand/20 p-8">
                            <div className="w-full h-full relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-48 h-48 bg-brand/20 rounded-full animate-ping opacity-20"></div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <BrainCircuit size={120} className="text-brand animate-pulse" />
                                </div>
                                
                                {/* Dynamic labels */}
                                <div className="absolute top-0 left-0 glass px-4 py-2 rounded-xl text-xs font-bold border-brand/40">Status: Analisando Lead...</div>
                                <div className="absolute bottom-10 right-0 glass px-4 py-2 rounded-xl text-xs font-bold border-green-500/40 text-green-400">Objetivo: Agendar Reunião</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AISection;
