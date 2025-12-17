
import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-12 glass border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-1">+500k</h3>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">Mensagens/Dia</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-1 text-brand">99.9%</h3>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">Uptime API Meta</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-1">+2.4k</h3>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">Empresas Ativas</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-1">24/7</h3>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">Atendimento IA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
