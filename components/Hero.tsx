import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const skew = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          style={{ y: y1, skewY: skew }}
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[1px] w-24 bg-gold/30"></div>
          </div>

          <h1 className="text-[6vw] font-black uppercase leading-[0.75] tracking-tighter mb-12 selection:bg-mint selection:text-obsidian">
            Engineering <br />
            <span className="text-mint italic">-&-</span> <br />
            <span className="relative">
              building stuff.
              <span className="absolute -right-12 bottom-4 text-xs font-mono text-violet font-normal tracking-normal italic normal-case"></span>
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <p className="text-3xl font-bold uppercase mb-8 leading-tight selection:bg-mint selection:text-obsidian">
                Hi, I’m{" "}
                <span className="text-mint italic underline decoration-mint/30 underline-offset-8">
                  Shrayash
                </span>
                , a <span className="text-violet">BITS Pilani</span> EEE ’27
                student working across
                <span className="text-gold border-b-2 border-gold/40 mx-1">
                  ML
                </span>
                ,<span className="text-gold mx-1">software systems</span>, and
                <span className="text-gold border-b-2 border-gold/40 italic mx-1">
                  product engineering
                </span>
                . I prototype fast, iterate tightly, and ship things that
                actually work.
              </p>

              <div className="flex flex-wrap gap-6">
                 <a href="docs/shrayash_barnwal.pdf" target="_blank">
                <button className="group relative px-10 py-5 bg-paper text-obsidian font-black uppercase text-xl brutalist-shadow-gold overflow-hidden transition-all active:scale-95 active:shadow-none active:translate-x-1 active:translate-y-1">
                  {/* The Animated Scanning Line */}
                  <div className="absolute inset-0 w-full h-1 bg-mint/40 opacity-0 group-hover:opacity-100 group-hover:animate-scan z-0"></div>

                  {/* Hover Background Shift */}

                  {/* Button Text Content */}
                   
                  <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-obsidian transition-colors">
                   
                    <span className="font-mono text-sm opacity-50 group-hover:opacity-100 group-hover:font-bold">
                      {">"}
                    </span>
                   
                      Resume
                 

                    {/* Blinking Command Cursor */}
                    <span className="w-2.5 h-6 bg-obsidian group-hover:bg-obsidian animate-pulse inline-block"></span>
                  </span>
                     
                </button>
                </a>
                <div className="flex items-center gap-4 font-mono text-gray-500 uppercase text-xs">
                  <div className="w-2 h-2 rounded-full bg-mint animate-pulse"></div>
                  System Online
                </div>
              </div>
            </div>

            <div className="md:col-span-5 border-l-2 border-paper/10 pl-8 pb-4">
              <div className="space-y-6 font-mono text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                <div>
                  <div className="text-mint mb-1">BITS Pilani EEE '27</div>
                  <div className="text-paper">
                    Studying Engineering and experimenting around.
                  </div>
                </div>
                <div>
                  <div className="text-violet mb-1">Focus_</div>
                  <div className="text-paper">
                    Machine Learning • Systems Engineering • Product Development
                  </div>
                </div>
                <div>
                  <div className="text-gold mb-1">Approach_</div>
                  <div className="text-paper">
                    Clear thinking, fast iteration, and shipping work that
                    actually runs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute right-[-10%] top-[20%] text-[40vw] font-black opacity-[0.09] select-none pointer-events-none uppercase italic">
        ZZZZZZZZZ
      </div>
    </section>
  );
};

export default Hero;
