import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORK_EXPERIENCE = [
  {
    id: 'vetra',
    company: 'Vetra',
    role: 'Founder',
    period: 'Mar 2025 – Present',
    color: '#D4AF37', // Gold
    summary: 'Architecting a full-stack marketplace for influencer-brand workflows.',
    details: [
      'Built and shipped a full-stack marketplace (React, Node) enabling smoother collaboration workflows. ',
      'Ran a 40+ creator beta, translated usage patterns into refined onboarding and UI. ',
      'Spoke with 15+ VC firms to refine GTM and feature priorities based on market feedback. '
    ],
    metrics: [{ label: 'Beta Creators', value: '40+' }, { label: 'Brands', value: '5+' }],
    gridClass: 'md:col-span-8'
  },
  {
    id: 'dealnudge',
    company: 'Deal Nudge',
    role: 'Tech Intern',
    period: 'May 2025 – Jul 2025',
    color: '#8B5CF6', // Violet
    summary: 'Engineered n8n automations to sync sector signals into structured datasets.',
    details: [
      'Engineered n8n automations to scrape funding data and track startup activity. ',
      'Built a data-cleaning layer to standardize info from APIs and PDFs into query-ready formats. ',
      'Designed internal tools that reduced manual tracking overhead by 35%. '
    ],
    metrics: [{ label: 'Manual Tracking', value: '-35%' }],
    gridClass: 'md:col-span-4'
  },
  {
    id: 'jprad',
    company: 'JP Radiology',
    role: 'Software Dev Intern',
    period: 'Mar 2025 – Apr 2025',
    color: '#00FF9C', // Mint
    summary: 'Increased inquiries by 40% through performance and SEO refactoring.',
    details: [
      'Deployed official website, increasing patient inquiries by nearly 40%. ',
      'Improved search ranking by 30% through Search Console and targeted SEO. ',
      'Reduced load time by 45% through optimized images and layout refactoring. '
    ],
    metrics: [{ label: 'Load Time', value: '-45%' }, { label: 'Inquiries', value: '+40%' }],
    gridClass: 'md:col-span-4'
  },
  {
    id: 'college_pors',
    company: 'College Activities',
    role: 'Positions of Responsibility',
    period: '2023 – 2027',
    color: '#8B5CF6', // Violet
    summary: 'Blockchain Club, Department of Reception and Accommodation and Creative Activities Club at BITS Pilani. ',
    isPOR: true,
    details: [
      { 
        title: 'Blockchain Developer | BITS Blockchain Club', 
        log: 'Developed Solidity smart contracts on Ethereum testnets; explored tokenomics. ' 
      },
      { 
        title: 'Operations Coordinator | DORA, BITS Pilani', 
        log: 'Handled logistics for 1500+ fest participants through team supervision. ' 
      },
      { 
        title: 'Design & Events Associate | Creative Activities Club', 
        log: 'Designed large-scale artworks for campus fests with thematic alignment. ' 
      },
      { 
        title: 'Other Clubs- EEE Association, Radio Control Club', 
        log: 'Designed event posters and coordinated technical workshops and built Websites. ' 
      }
    ],
    metrics: [{ label: 'Clubs & Departments', value: '5' }],
    gridClass: 'md:col-span-8'
  }
];

const ExperienceCard = ({ exp }: { exp: typeof WORK_EXPERIENCE[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className={`brutalist-border p-8 bg-obsidian cursor-pointer relative overflow-hidden ${exp.gridClass}`}
      style={{ boxShadow: isExpanded ? `0px 0px 0px 0px transparent` : `6px 6px 0px 0px ${exp.color}` }}
      whileHover={{ y: isExpanded ? 0 : -5 }}
    >
      <motion.div layout className="flex justify-between mb-4">
        <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">{exp.period}</span>
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: exp.color }}></div>
      </motion.div>

      <motion.h4 layout className="text-2xl font-black uppercase leading-none mb-2">{exp.company}</motion.h4>
      <motion.p layout className="text-xs font-bold uppercase mb-4 opacity-70" style={{ color: exp.color }}>
        {exp.role}
      </motion.p>

      {!isExpanded ? (
        <motion.p layout className="text-sm text-gray-400 mb-6 leading-relaxed max-w-md">
          {exp.summary}
        </motion.p>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 mb-8">
          {exp.details.map((item, idx) => (
            <div key={idx} className="border-l border-white/10 pl-4">
              {typeof item === 'string' ? (
                <p className="text-[11px] font-mono leading-relaxed text-paper/80">{item}</p>
              ) : (
                <>
                  <p className="text-[12px] font-bold text-violet uppercase mb-1 tracking-tighter">{item.title}</p>
                  <p className="text-[12px] font-mono leading-relaxed text-paper/70">{item.log}</p>
                </>
              )}
            </div>
          ))}
        </motion.div>
      )}

      <motion.div layout className="flex flex-wrap gap-6 mt-auto">
        {exp.metrics.map((m, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-[12px] font-mono uppercase text-gray-500">{m.label}</span>
            <span className="text-xl font-black" style={{ color: exp.color }}>{m.value}</span>
          </div>
        ))}
        <div className="ml-auto self-end">
           <span className="text-[12px] font-mono opacity-30 uppercase tracking-tighter">
             {isExpanded ? '[ Close Archive ]' : '[ Open Full Archive ]'}
           </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const BentoGrid: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto" id="experience">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div>
       <motion.h2 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="text-4xl font-black uppercase italic leading-none tracking-tighter"
               >
          <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-4 italic">
            Work <br />
            <span className="text-violet">Experience_</span>
          </h2>
          </motion.h2>

          <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">Archive Group 02: </p>
        </div>
        <div className="hidden md:block h-[2px] w-1/3 bg-paper/10 mb-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {WORK_EXPERIENCE.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;