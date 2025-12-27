import React from "react";
import { motion } from "framer-motion";

const InsightLab: React.FC<{ onViewBlog: () => void }> = ({ onViewBlog }) => {
  const lineVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.8, duration: 0.5 },
    }),
  };

  return (
    <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto bg-[#949494] text-[#050505] border-4 border-[#050505] shadow-[6px_6px_0px_0px_#8B5CF6] md:shadow-[12px_12px_0px_0px_#8B5CF6]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          {/* Header: text-4xl on mobile, text-5xl on desktop */}
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.8] mb-6 md:mb-8 italic tracking-tighter">
            Blog_
          </h2>
          <div className="h-1.5 md:h-2 w-24 md:w-32 bg-[#050505] mb-8 md:mb-12"></div>

          <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
            {/* Text: text-lg on mobile, text-xl on desktop */}
            <p className="text-lg md:text-xl font-bold uppercase leading-tight max-w-md">
              Writing about the mix of<span className="text-violet"> AI</span>,{" "}
              <span className="text-mint">engineering</span>, and the messy,
              interesting process of{" "}
              <span className="text-gold">making things</span>.
            </p>
            
            {/* Button: w-full on mobile, auto on desktop */}
            <button
              onClick={onViewBlog}
              className="w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-[#050505] text-white font-black uppercase text-lg md:text-xl brutalist-shadow-mint hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-95"
            >
              Open Blogs_
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            // Terminal: Padding reduced for mobile, min-height adjusted
            className="bg-[#050505] p-6 md:p-8 border-2 border-[#00FF9C] shadow-[6px_6px_0px_0px_#00FF9C] md:shadow-[8px_8px_0px_0px_#00FF9C] text-[#F5F5F7] font-mono text-[10px] md:text-xs leading-relaxed overflow-hidden relative min-h-[300px] md:min-h-[350px]"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-4 md:mb-6 border-b border-white/10 pb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27C93F]"></div>
              </div>
            </div>

            {/* Typewriter Text */}
            <div className="space-y-2 md:space-y-3">
              {[
                "Projects, experiments, and technical notes.",
                "Thoughts from building and shipping software.",
                "Research, startups, and systems design.",
                "Engineering work in progress.",
                "Status: Writing as I build.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={lineVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="flex gap-2 md:gap-3"
                >
                  <span className="text-[#00FF9C] opacity-50 font-bold">
                    {">"}
                  </span>
                  <span>{text}</span>
                </motion.p>
              ))}
            </div>

            {/* Background Decorative Text: Scaled down for mobile */}
            <div className="absolute bottom-4 right-4 text-5xl md:text-[80px] font-black opacity-[0.03] italic uppercase pointer-events-none">
              BLOG
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsightLab;