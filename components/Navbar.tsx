
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 glass' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-black tracking-tighter text-brand">vbot<span className="text-[10px] align-top relative -top-2">®</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#features" className="hover:text-brand transition-colors">Funcionalidades</a>
          <a href="#ai" className="hover:text-brand transition-colors">Agente IA</a>
          <a href="#integrations" className="hover:text-brand transition-colors">Integrações</a>
          <a href="#pricing" className="hover:text-brand transition-colors">Preços</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 text-sm font-semibold hover:text-brand transition-colors">Login</button>
          <button className="px-6 py-2.5 bg-brand text-white rounded-full text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-all glow-red">
            Agendar Demonstração <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass py-8 px-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <a href="#features" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>Funcionalidades</a>
          <a href="#ai" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>Agente IA</a>
          <a href="#integrations" className="text-xl font-medium" onClick={() => setMobileMenuOpen(false)}>Integrações</a>
          <button className="w-full py-4 bg-brand rounded-xl font-bold text-lg glow-red">Agendar Demonstração</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
