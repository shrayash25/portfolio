

export type NodeType = 'SKILL' | 'EXPERIENCE' | 'PROJECT' | 'RESEARCH';

export interface OmniNode {
  id: string;
  label: string;
  type: NodeType;
  description?: string;
  hub?: number; // 1: Skills, 2: Experience, 3: Projects 
  link?: string; // For project/social links 
  
  // D3 added properties (Optional for initialization)
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface OmniLink {
  source: string;
  target: string;
  id?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  details: string;
  color: string;
  metrics?: { label: string; value: string }[];
}
