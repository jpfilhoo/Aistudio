
import React from 'react';
import { Send, Bot, Users, LayoutDashboard, BarChart3, Smartphone, Repeat, Network, MousePointerClick } from 'lucide-react';

const featureList = [
  {
    title: 'Campanhas & Disparos',
    description: 'Envios em massa segmentados e agendamentos estratégicos com alta taxa de entrega via API Oficial.',
    icon: <Send className="text-brand" />,
    color: 'bg-brand/10'
  },
  {
    title: 'Chatbot & Agente IA',
    description: 'Automação inteligente e Agentes de IA com perfil de vendas (SDR) ou suporte treinados na sua base.',
    icon: <Bot className="text-brand" />,
    color: 'bg-brand/10'
  },
  {
    title: 'Transferência Inteligente',
    description: 'Encaminhamento automático de conversas entre diferentes atendentes, departamentos ou equipes.',
    icon: <Users className="text-brand" />,
    color: 'bg-brand/10'
  },
  {
    title: 'Rastreamento de Origem',
    description: 'Saiba exatamente de onde vêm seus leads: anúncios Meta, Instagram Stories ou campanhas diretas.',
    icon: <MousePointerClick className="text-brand" />,
    color: 'bg-brand/10'
  },
  {
    title: 'Painel com Filtros',
    description: 'Gestão visual de atendimentos com filtros avançados por status, tags, equipe e tempo de espera.',
    icon: <LayoutDashboard className="text-brand" />,
    color: 'bg-brand/10'
  },
  {
    title: 'Relatórios & KPIs',
    description: 'Métricas detalhadas de performance, volume de mensagens e indicadores de conversão em tempo real.',
    icon: <BarChart3 className="text-brand" />,
    color: 'bg-brand/10'
  },
  {
    title: 'Atenda de Onde Estiver',
    description: 'Acesse toda a plataforma via Web ou App Mobile com total agilidade, organização e notificações.',
    icon: <Smartphone className="text-brand" />,
    color: 'bg-brand/10'
  },
  {
    title: 'CRM & API Oficial',
    description: 'Gestão do pipeline de vendas integrada e conexão via API oficial para segurança total dos seus canais.',
    icon: <Network className="text-brand" />,
    color: 'bg-brand/10'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-brand font-bold uppercase tracking-[0.3em] text-sm mb-4">Poder do Amanhã</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Funcionalidades de Elite</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A vbot centraliza tudo o que sua equipe precisa para converter conversas em faturamento real e organizado.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {featureList.map((feature, idx) => (
            <div key={idx} className="glass p-8 rounded-[2rem] hover:border-brand/40 transition-all duration-300 group flex flex-col items-start">
              <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {React.cloneElement(feature.icon as React.ReactElement, { size: 24 })}
              </div>
              <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
