
import React from 'react';
import { Twitter, Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand and Contacts */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-black tracking-tighter text-brand">vbot<span className="text-[8px] align-top relative -top-1">®</span></span>
            </div>
            <p className="text-gray-500 leading-relaxed mb-8">
              A vbot é a plataforma definitiva para empresas que buscam eficiência, automação e inteligência no atendimento omnichannel.
            </p>
            <div className="space-y-4">
              <a href="tel:92981291602" className="flex items-center gap-3 text-gray-400 hover:text-brand transition-colors text-sm">
                <Phone size={16} className="text-brand" /> (92) 981291602
              </a>
              <a href="mailto:contato@vbot.app.br" className="flex items-center gap-3 text-gray-400 hover:text-brand transition-colors text-sm">
                <Mail size={16} className="text-brand" /> contato@vbot.app.br
              </a>
              <a href="https://instagram.com/vbot.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-brand transition-colors text-sm">
                <Instagram size={16} className="text-brand" /> @vbot.app
              </a>
            </div>
          </div>

          {/* Offices */}
          <div className="col-span-1 md:col-span-1">
            <h5 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Nossos Escritórios</h5>
            <div className="space-y-6">
              <div>
                <p className="text-brand font-bold text-xs mb-2 flex items-center gap-2">
                  <MapPin size={14} /> MANAUS - AM
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  R. Constelação Cruzeiro do Sul, 432<br />
                  Aleixo, Manaus - AM<br />
                  69060-062
                </p>
              </div>
              <div>
                <p className="text-brand font-bold text-xs mb-2 flex items-center gap-2">
                  <MapPin size={14} /> SÃO PAULO - SP
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Av. Brigadeiro Faria Lima, 1811<br />
                  Jardim Paulistano<br />
                  01452-001
                </p>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h5 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Plataforma</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#features" className="hover:text-brand transition-colors">Funcionalidades</a></li>
              <li><a href="#ai" className="hover:text-brand transition-colors">Agentes de IA</a></li>
              <li><a href="#integrations" className="hover:text-brand transition-colors">Integrações</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">API Oficial Meta</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">CRM Integrado</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Newsletter</h5>
            <p className="text-sm text-gray-500 mb-6">Receba insights sobre vendas e IA no WhatsApp diretamente no seu e-mail.</p>
            <div className="flex gap-2">
                <input type="email" placeholder="Seu e-mail" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex-1 focus:outline-none focus:border-brand transition-colors text-sm text-white" />
                <button className="bg-brand px-4 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity glow-red">OK</button>
            </div>
            <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand transition-colors"><Twitter size={18} /></a>
                <a href="https://instagram.com/vbot.app" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand transition-colors"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand transition-colors"><Facebook size={18} /></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-600 text-xs">
            <p>© 2024 vbot Service. Todos os direitos reservados.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
                <a href="#" className="hover:text-brand">Termos de Uso</a>
                <a href="#" className="hover:text-brand">Privacidade</a>
                <a href="#" className="hover:text-brand">Cookies</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
