import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: "Vetra",
    category: "Marketplace / Full-Stack",
    description: "Built and shipped a full-stack marketplace enabling smoother influencer-brand collaboration workflows. Ran a 20+ creator beta and refined GTM strategy through 15+ VC pitches.",
    tags: ["React", "Node.js", "GTM Strategy"],
    color: "violet",
    link: "https://vetra.world", 
    metrics: "40+ Creator Beta"
  },
  {
    title: "Echo AI",
    category: "Agentic AI",
    description: "An AI-driven email intelligence system that parses inboxes, extracts intent, summarizes long threads, and ranks messages by urgency to cut daily overhead.",
    tags: ["NLP", "LLMs", "Automation", "AI integration"],
    color: "mint",
    link: "https://echo-ai-v0.vercel.app", // Placeholder
    metrics: "Intent-Aware Prioritising"
  },
  {
    title: "Hybrid News Detection",
    category: "NLP Research",
    description: "Research in Natural Language Processing involving Real vs Fake news detection utilizing a Hybrid Architecture to optimize for accuracy and reasoning.",
    tags: ["PyTorch", "Transformers", "Research"],
    color: "paper",
    link: "/docs/nlp-research.pdf", // Placeholder
    metrics: "Hybrid Architecture"
  },
  {
    title: "Occluded Facial Rec",
    category: "Computer Vision",
    description: "A dual-path pipeline using Real-ESRGAN for super-resolution and FaceNet for facial recognition in obstructed or low-resolution frames.",
    tags: ["GANs", "Computer Vision", "ML", "transormers"],
    color: "gold",
    link: "/docs/facial-rec-report.pdf", // Placeholder
    metrics: "Recognition Robustness"
  },
  {
    title: "JP Radiology Website",
    category: "Performance Engineering",
    description: "Official center website refactor. Improved load times by 45% and search rankings by 30% through targeted SEO and image optimization.",
    tags: ["SEO", "Web Performance", "Refactoring"],
    color: "mint",
    link: "https://jpradiology.com", // Placeholder
    metrics: "+40% Inquiries"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto" id="projects">
      <div className="mb-12 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          // Heading: text-4xl on mobile, text-5xl on desktop
          className="text-4xl md:text-5xl font-black uppercase italic leading-none tracking-tighter"
        >
            <span className="text-violet">Projects_</span>
            <p className="text-gray-400 font-mono text-[10px] md:text-sm uppercase tracking-widest mt-2">Archive Group 03: </p>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, rotate: i % 2 === 0 ? -1 : 1 }}
            // Padding: p-6 on mobile, p-10 on desktop
            className="relative group p-6 md:p-10 bg-obsidian border-4 border-paper overflow-hidden"
            style={{ 
              // Mobile: 6px shadow, Desktop: 12px shadow
              boxShadow: `var(--shadow-size, 6px) var(--shadow-size, 6px) 0px 0px ${
                project.color === 'violet' ? '#8B5CF6' : 
                project.color === 'mint' ? '#00FF9C' : 
                project.color === 'gold' ? '#D4AF37' : '#F5F5F7'
              }`
            }}
          >
            {/* CSS Logic for responsive shadow size without a hook */}
            <style dangerouslySetInnerHTML={{ __html: `
              .group { --shadow-size: 6px; }
              @media (min-width: 768px) { .group { --shadow-size: 12px; } }
            `}} />

            {/* Project Header */}
            <div className="flex justify-between items-start mb-6 md:mb-8">
              <div className="pr-4">
                <span className="font-mono text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] px-2 py-1 bg-paper text-obsidian">
                  {project.category}
                </span>
                {/* Title: text-xl on mobile, text-2xl on desktop */}
                <h3 className="text-xl md:text-2xl font-black uppercase mt-4 text-paper group-hover:text-mint transition-colors">
                  {project.title}
                </h3>
              </div>
              {/* Index number: text-4xl on mobile, text-6xl on desktop */}
              <div className="text-paper/20 font-black text-4xl md:text-6xl italic select-none">
                0{i + 1}
              </div>
            </div>

            <p className="text-xs md:text-sm font-mono leading-relaxed text-paper/70 mb-8 max-w-md">
              {project.description}
            </p>

            {/* Tags & Metrics */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="border border-paper/20 px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-mono uppercase text-paper/50 group-hover:border-paper/50 transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer / CTA */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0">
              <div className="border-l-2 border-mint pl-4">
                <div className="text-[9px] md:text-[10px] font-mono uppercase text-gray-500">Metric_</div>
                <div className="text-base md:text-lg font-black uppercase text-paper">{project.metrics}</div>
              </div>
              
              <a 
                href={project.link}
                target="_blank"
                // Button: Full width on mobile, auto on desktop
                className="w-full sm:w-auto text-center px-6 py-3 bg-paper text-obsidian font-black uppercase text-[10px] md:text-xs hover:bg-mint hover:translate-x-1 hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_#8B5CF6]"
              >
                Open Project →
              </a>
            </div>

            {/* Decorative Background Accent - slightly smaller on mobile */}
            <div className="absolute -right-4 -top-4 w-16 md:w-24 h-16 md:h-24 bg-paper/5 rounded-full blur-2xl md:blur-3xl group-hover:bg-mint/10 transition-colors"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;