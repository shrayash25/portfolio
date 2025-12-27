import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useScroll(); // Fallback if transform gets too aggressive on mobile
  const yTransform = useTransform(scrollY, [0, 500], [0, 200]);
  const skew = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto w-full z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Reduced x-offset for smoother mobile entry
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          style={{ y: yTransform, skewY: skew }}
        >
          {/* Mobile: Hidden bar, Desktop: Visible bar */}
          <div className="mb-4 md:mb-6 flex items-center gap-4">
            <div className="h-[1px] w-12 md:w-24 bg-gold/30"></div>
          </div>

          {/* Heading: text-5xl on mobile, 6vw on desktop */}
          <h1 className="text-5xl md:text-[6vw] font-black uppercase leading-[0.9] md:leading-[0.75] tracking-tighter mb-8 md:mb-12 selection:bg-mint selection:text-obsidian">
            Engineering <br />
            <span className="text-mint italic">-&-</span> <br />
            <span className="relative">
              building stuff.
              <span className="absolute -right-12 bottom-4 text-xs font-mono text-violet font-normal tracking-normal italic normal-case"></span>
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-7">
              {/* Paragraph: text-lg on mobile, text-3xl on desktop */}
              <p className="text-xl md:text-3xl font-bold uppercase mb-8 md:mb-12 leading-tight selection:bg-mint selection:text-obsidian">
                Hi, I’m{" "}
                <span className="text-mint italic underline decoration-mint/30 underline-offset-4 md:underline-offset-8">
                  Shrayash
                </span>
                , a <span className="text-violet">BITS Pilani</span> EEE ’27
                student working across{" "}
                <span className="text-gold border-b-2 border-gold/40 mx-1">
                  ML
                </span>
                , <span className="text-gold mx-1">software systems</span>, and
                <span className="text-gold border-b-2 border-gold/40 italic mx-1">
                  product engineering
                </span>
                . I prototype fast, iterate tightly, and ship things that
                actually work.
              </p>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <a href="docs/shrayash_barnwal.pdf" target="_blank" className="w-full md:w-auto">
                  <button className="w-full md:w-auto group relative px-8 md:px-10 py-4 md:py-5 bg-paper text-obsidian font-black uppercase text-lg md:text-xl brutalist-shadow-gold overflow-hidden transition-all active:scale-95 active:shadow-none active:translate-x-1 active:translate-y-1">
                    <div className="absolute inset-0 w-full h-1 bg-mint/40 opacity-0 group-hover:opacity-100 group-hover:animate-scan z-0"></div>
                    <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-obsidian transition-colors">
                      <span className="font-mono text-sm opacity-50 group-hover:opacity-100 group-hover:font-bold">
                        {">"}
                      </span>
                      Resume
                      <span className="w-2.5 h-6 bg-obsidian group-hover:bg-obsidian animate-pulse inline-block"></span>
                    </span>
                  </button>
                </a>
                
                <div className="flex items-center gap-4 font-mono text-gray-500 uppercase text-[10px] md:text-xs">
                  <div className="w-2 h-2 rounded-full bg-mint animate-pulse"></div>
                  System Online
                </div>
              </div>
            </div>

            {/* Sidebar info: stacks on mobile, vertical border removed on mobile */}
            <div className="md:col-span-5 border-l-0 md:border-l-2 border-paper/10 pl-0 md:pl-8 pb-4 mt-8 md:mt-0">
              <div className="space-y-6 font-mono text-[9px] md:text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                <div className="border-l-2 border-mint md:border-l-0 pl-4 md:pl-0">
                  <div className="text-mint mb-1">BITS Pilani EEE '27</div>
                  <div className="text-paper">
                    Studying Engineering and experimenting around.
                  </div>
                </div>
                <div className="border-l-2 border-violet md:border-l-0 pl-4 md:pl-0">
                  <div className="text-violet mb-1">Focus_</div>
                  <div className="text-paper">
                    Machine Learning • Systems Engineering • Product Development
                  </div>
                </div>
                <div className="border-l-2 border-gold md:border-l-0 pl-4 md:pl-0">
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

      {/* Responsive Background Decor: Hidden or scaled on mobile */}
      <div className="absolute right-[-20%] md:right-[-10%] top-[40%] md:top-[20%] text-[60vw] md:text-[40vw] font-black opacity-[0.05] md:opacity-[0.09] select-none pointer-events-none uppercase italic overflow-hidden">
        ZZZZZZZZZ
      </div>
    </section>
  );
};

export default Hero;