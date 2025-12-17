
import React from 'react';
import { Instagram, Facebook, MessageCircle, Link2, ShieldCheck, Globe } from 'lucide-react';

const Integrations: React.FC = () => {
  return (
    <section id="integrations" className="py-24 bg-gradient-to-b from-transparent to-black/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Multi-Canais Sem Atrito</h2>
            <p className="text-gray-400">Utilizamos apenas APIs Oficiais da Meta para garantir que você nunca sofra banimentos.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-green-600/20 rounded-[2rem] flex items-center justify-center border border-green-600/30">
                    <MessageCircle size={36} className="text-green-500" />
                </div>
                <span className="font-bold text-sm">WhatsApp Cloud</span>
            </div>
            <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-pink-600/20 rounded-[2rem] flex items-center justify-center border border-pink-600/30">
                    <Instagram size={36} className="text-pink-500" />
                </div>
                <span className="font-bold text-sm">Instagram Direct</span>
            </div>
            <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-blue-600/20 rounded-[2rem] flex items-center justify-center border border-blue-600/30">
                    <Facebook size={36} className="text-blue-500" />
                </div>
                <span className="font-bold text-sm">Messenger</span>
            </div>
            <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-orange-600/20 rounded-[2rem] flex items-center justify-center border border-orange-600/30">
                    <Globe size={36} className="text-orange-500" />
                </div>
                <span className="font-bold text-sm">Webchat</span>
            </div>
            <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-gray-600/20 rounded-[2rem] flex items-center justify-center border border-gray-600/30">
                    <Link2 size={36} className="text-gray-400" />
                </div>
                <span className="font-bold text-sm">Any API</span>
            </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-3xl flex gap-6 items-start border-brand/5">
                <div className="mt-1"><ShieldCheck className="text-brand" size={32} /></div>
                <div>
                    <h4 className="text-xl font-bold mb-2">Segurança de Dados</h4>
                    <p className="text-gray-400">Criptografia de ponta a ponta e conformidade total com a LGPD em todas as instâncias.</p>
                </div>
            </div>
            <div className="glass p-8 rounded-3xl flex gap-6 items-start border-brand/5">
                <div className="mt-1"><ShieldCheck className="text-brand" size={32} /></div>
                <div>
                    <h4 className="text-xl font-bold mb-2">Escalabilidade Meta</h4>
                    <p className="text-gray-400">Sua conta suporta milhões de mensagens sem quedas, utilizando a infraestrutura global da Meta.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
