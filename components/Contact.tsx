import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      label: 'GitHub',
      handle: '@shrayash25', 
      link: 'https://github.com/shrayash25', 
      color: '#00FF9C', 
      shadow: 'brutalist-shadow-mint'
    },
    {
      label: 'LinkedIn',
      handle: 'Shrayash Barnwal',
      link: 'https://www.linkedin.com/in/shrayashbarnwal/', 
      color: '#8B5CF6', 
      shadow: 'brutalist-shadow-violet'
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto" id="contact">
      <div className="mb-12 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // Heading: text-4xl on mobile, text-5xl on desktop
          className="text-4xl md:text-5xl font-black uppercase italic leading-none tracking-tighter"
        >
          Contact <br /> <span className="text-gold">Me_</span>
        </motion.h2>
        <p className="font-mono text-[10px] md:text-xs text-gray-500 uppercase mt-4 md:mt-6 tracking-[0.3em] md:tracking-[0.4em]">
          Let's Connect
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
        {/* Main Email Card */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          // Padding: p-6 on mobile, p-12 on desktop
          className="lg:col-span-7 bg-obsidian border-4 border-paper p-6 md:p-12 brutalist-shadow-gold relative overflow-hidden"
        >
          <div className="relative z-10">
            <span className="font-mono text-[9px] md:text-[10px] text-gold font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 block">
              // Primary Channel
            </span>
            {/* Header: text-2xl on mobile, text-3xl on desktop */}
            <h3 className="text-2xl md:text-3xl font-black uppercase mb-6 md:mb-8 leading-none text-paper">
              Establish <br /> Connection.
            </h3>
            <p className="text-gray-400 font-mono text-xs md:text-sm mb-8 md:mb-12 max-w-sm">
              Open to thoughtful conversations on tech, business, or anything that makes life interesting. Feel free to drop a line!
            </p>
            
            {/* Email Link: Handles long strings on mobile */}
            <a 
              href="mailto:shrayash25.works@gmail.com" 
              className="flex md:inline-flex items-center justify-between md:justify-start gap-4 px-5 md:px-8 py-4 bg-gold text-obsidian font-black uppercase text-[13px] sm:text-base md:text-lg hover:bg-white transition-all group overflow-hidden"
            >
              <span className="truncate">shrayash25.works@gmail.com</span>
              <span className="group-hover:translate-x-2 transition-transform flex-shrink-0">→</span>
            </a>
          </div>
          
          {/* Decorative Grid Background: Scaled for mobile */}
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gold/5 grid grid-cols-4 grid-rows-4">
             {[...Array(16)].map((_, i) => <div key={i} className="border-[0.5px] border-gold/10"></div>)}
          </div>
        </motion.div>

        {/* Social Nexus */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8">
          {contactLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              // Padding: p-6 on mobile, p-8 on desktop
              className={`block p-6 md:p-8 bg-obsidian border-2 border-paper/20 group hover:border-paper transition-all ${social.shadow}`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase text-gray-500 mb-1 block">
                    {social.label} 
                  </span>
                  {/* Handle: text-xl on mobile, text-2xl on desktop */}
                  <div className="text-xl md:text-2xl font-black uppercase text-paper group-hover:text-mint transition-colors">
                    {social.handle}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: social.color }}>
                  ↗
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;