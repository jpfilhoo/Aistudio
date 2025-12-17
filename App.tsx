
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import AISection from './components/AISection';
import Integrations from './components/Integrations';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const element = document.getElementById(targetId);
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#CF2215] opacity-[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#CF2215] opacity-[0.05] blur-[100px] rounded-full"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <AISection />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
