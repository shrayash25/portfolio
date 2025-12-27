import React, { useState } from 'react';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import InsightLab from './components/InsightLab';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blogs from './components/Blogs';

const App: React.FC = () => {
  const [showBlog, setShowBlog] = useState(false);

  // Helper to switch views and reset scroll
  const navigateTo = (toBlog: boolean) => {
    setShowBlog(toBlog);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="relative min-h-screen bg-obsidian text-paper">
      {/* Persistent Dynamic Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-8 py-8 flex justify-between items-center">
        <div 
          onClick={() => navigateTo(false)}
          className="font-black text-2xl uppercase tracking-tighter hover:text-mint transition-colors cursor-pointer"
        >
          Shrayash
        </div>

        <div className="hidden lg:flex gap-10 font-mono text-[10px] uppercase font-bold tracking-[0.4em]">
          <a href="#experience" onClick={() => navigateTo(false)} className="hover:text-gold transition-colors relative group">
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all"></span>
          </a> 
          <a href="#projects" onClick={() => navigateTo(false)} className="hover:text-violet transition-colors relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-violet group-hover:w-full transition-all"></span>
          </a>
          <button onClick={() => navigateTo(true)} className={`hover:text-mint transition-colors relative group ${showBlog ? 'text-mint' : ''}`}>
            Blog
            <span className={`absolute -bottom-1 left-0 h-[1px] bg-mint transition-all ${showBlog ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </button>
          <a href="#contact" onClick={() => navigateTo(false)} className="brutalist-border px-4 py-1 hover:bg-white hover:text-obsidian transition-all">
            Contact
          </a>
        </div>
      </nav>

      {/* Conditional Content Rendering */}
      <main>
        {showBlog ? (
          <Blogs />
        ) : (
          <>
            <Hero />
            <div id="experience"><BentoGrid /></div>
            <div id="projects"><Projects /></div>
            <section id="blog" className="py-24 px-6 overflow-hidden">
              <InsightLab onViewBlog={() => navigateTo(true)} />
            </section>
            <div id="contact"><Contact /></div>
          </>
        )}

        {/* Persistent Footer */}
        <footer className="pt-32 pb-20 px-6 border-t border-white/5 bg-obsidian relative">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-20 text-center w-full z-10">
              <div>
                <h5 className="font-mono text-[10px] text-gray-500 uppercase mb-4 font-bold">Profiles</h5>
                <a href="https://www.linkedin.com/in/shrayashbarnwal/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase hover:text-mint block">LinkedIn</a>
                <a href="https://github.com/shrayash25" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase hover:text-mint block mt-2">Github</a>
              </div>
              <div>
                <h5 className="font-mono text-[10px] text-gray-500 uppercase mb-4 font-bold">Connect</h5>
                <a href="mailto:shrayash25.works@gmail.com" className="text-sm font-bold uppercase hover:text-gold block">Email</a>
              </div>
              <div>
                <h5 className="font-mono text-[10px] text-gray-500 uppercase mb-4 font-bold">System</h5>
                <p className="text-sm font-bold uppercase opacity-40 italic tracking-tighter">v.2025.12.27 Stable</p>
              </div>
              <div>
                <h5 className="font-mono text-[10px] text-gray-500 uppercase mb-4 font-bold">Uptime</h5>
                <p className="text-sm font-bold uppercase text-mint animate-pulse">Running</p>
              </div>
            </div>
            <p className="font-mono text-[9px] text-gray-600 mt-8 uppercase tracking-[0.5em] text-center">
              Architected by Shrayash Barnwal.
            </p>
          </div>
        </footer>
      </main>

      {/* Persistent Aesthetic Accents */}
      <div className="fixed bottom-12 right-12 flex flex-col gap-2 z-50 pointer-events-none">
        <div className="w-1 h-12 bg-gold/40"></div>
        <div className="w-1 h-8 bg-violet/40"></div>
        <div className="w-1 h-4 bg-mint/40"></div>
      </div>
    </div>
  );
};

export default App;