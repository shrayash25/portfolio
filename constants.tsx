import { OmniNode, OmniLink, ExperienceItem } from './types';

export const OMNI_NODES: OmniNode[] = [
  // HUB 1: SKILLS (Left)
  { id: 's1', label: 'Agentic AI', type: 'SKILL', hub: 1, description: 'research in autonomous reasoning and intent extraction.' },
  { id: 's2', label: 'TypeScript', type: 'SKILL', hub: 1 },
  { id: 's3', label: 'n8n', type: 'SKILL', hub: 1 },
  { id: 's4', label: 'PyTorch', type: 'SKILL', hub: 1 },
  { id: 's5', label: 'React/Next', type: 'SKILL', hub: 1 },

  // HUB 2: EXPERIENCE (Center)
  { id: 'e1', label: 'Founder: Vetra', type: 'EXPERIENCE', hub: 2, description: 'shipped full-stack marketplace; handled 15+ VC pitches and creator GTM.' },
  { id: 'e2', label: 'BITS Pilani', type: 'EXPERIENCE', hub: 2, description: 'B.E. in Electrical and Electronics (2023-2027).' },
  { id: 'e3', label: 'Deal Nudge', type: 'EXPERIENCE', hub: 2, description: 'tech Intern; engineered n8n workflows reducing overhead by 35%.' },
  { id: 'e4', label: 'JP Radiology', type: 'EXPERIENCE', hub: 2, description: 'built the website for JP Radiology' },
  { id: 'e5', label: 'Ops Lead', type: 'EXPERIENCE', hub: 2, description: 'coordinated logistics for 1500+ participants at BITS.' },

  // HUB 3: PROJECTS (Right)
  { id: 'p1', label: 'Echo AI', type: 'PROJECT', hub: 3, description: 'intelligence system parsing email intent and urgency.' },
  { id: 'p2', label: 'LinkedIn Engine', type: 'PROJECT', hub: 3, description: 'ai-powered content automation for creator personas.' },
  { id: 'p3', label: 'Face Pipeline', type: 'PROJECT', hub: 3, description: 'occlusion-aware facial recognition using Real-ESRGAN.' }
];

export const OMNI_LINKS: OmniLink[] = [
  { source: 's1', target: 'p1' },
  { source: 's3', target: 'e3' },
  { source: 's3', target: 'p2' },
  { source: 's5', target: 'e1' },
  { source: 'e2', target: 'e5' },
  { source: 's4', target: 'p3' },
  { source: 's2', target: 'e1' },
  { source: 's5', target: 'e4' }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Vetra',
    role: 'Founder',
    period: 'Mar 2025 – Present',
    details: 'Architecting a full-stack marketplace for influencer-brand deals. Pitched to 15+ VC firms to define GTM strategy.', 
    color: '#D4AF37',
    metrics: [{ label: 'Beta Creators', value: '20+' }, { label: 'VC Pitches', value: '15' }] 
  },
  {
    company: 'Deal Nudge',
    role: 'Tech Intern',
    period: 'May 2025 – Jul 2025', 
    details: 'Engineered complex n8n workflows for automated funding research and data cleaning.', 
    color: '#8B5CF6',
    metrics: [{ label: 'Overhead Red.', value: '35%' }, { label: 'Automations', value: '12' }] 
  }
];