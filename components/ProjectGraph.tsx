
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
// Fix: Import OMNI_NODES and OMNI_LINKS instead of PROJECTS and LINKS
import { OMNI_NODES, OMNI_LINKS } from '../constants';
// Fix: Import OmniNode instead of ProjectNode
import { OmniNode } from '../types';

const ProjectGraph: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  // Fix: Use OmniNode type
  const [selectedNode, setSelectedNode] = useState<OmniNode | null>(null);

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    svg.selectAll('*').remove();

    // Forces
    // Fix: Use OmniNode as type and OMNI_NODES as data source
    const simulation = d3.forceSimulation<OmniNode>(OMNI_NODES)
      .force('link', d3.forceLink(OMNI_LINKS).id((d: any) => d.id).distance(150))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(80));

    // Glow filter
    const defs = svg.append('defs');
    const filter = defs.append('filter').attr('id', 'glow');
    filter.append('feGaussianBlur').attr('stdDeviation', '3.5').attr('result', 'coloredBlur');
    const feMerge = filter.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    // Trails / Links
    // Fix: Use OMNI_LINKS as data source
    const link = svg.append('g')
      .selectAll('line')
      .data(OMNI_LINKS)
      .enter()
      .append('line')
      .attr('stroke', '#8B5CF6')
      .attr('stroke-opacity', 0.4)
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '5,5')
      .style('filter', 'url(#glow)');

    // Link animation (pulsating light trails)
    const animateLinks = () => {
      link.transition()
        .duration(2000)
        .ease(d3.easeLinear)
        .attr('stroke-dashoffset', -100)
        .on('end', animateLinks);
    };
    animateLinks();

    // Nodes
    // Fix: Use OMNI_NODES as data source
    const node = svg.append('g')
      .selectAll('g')
      .data(OMNI_NODES)
      .enter()
      .append('g')
      .attr('class', 'cursor-pointer group')
      .on('click', (event, d) => setSelectedNode(d))
      .call(d3.drag<SVGGElement, OmniNode>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended) as any);

    node.append('circle')
      .attr('r', 10)
      .attr('fill', '#00FF9C')
      .attr('stroke', '#050505')
      .attr('stroke-width', 2)
      .style('filter', 'url(#glow)');

    node.append('text')
      // Fix: Use label instead of name as per OmniNode definition
      .text(d => d.label)
      .attr('x', 15)
      .attr('y', 5)
      .attr('fill', '#F5F5F7')
      .attr('class', 'font-mono text-xs font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity');

    // Mouse Repulsion Force
    const mouseForce = d3.forceRadial(0, width / 2, height / 2).strength(0);
    simulation.force('mouse', mouseForce);

    const handleMouseMove = (event: MouseEvent) => {
      const [mx, my] = d3.pointer(event, svgRef.current);
      simulation.force('mouse', d3.forceRadial(150, mx, my).strength(-1));
      simulation.alphaTarget(0.1).restart();
    };

    const handleMouseLeave = () => {
      simulation.force('mouse', null);
      simulation.alphaTarget(0);
    };

    svg.on('mousemove', handleMouseMove);
    svg.on('mouseleave', handleMouseLeave);

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[600px] brutalist-border bg-[#0a0a0a] overflow-hidden group">
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <h3 className="text-2xl font-bold uppercase tracking-tighter text-mint mb-2">Project Lab_</h3>
        <p className="text-xs font-mono text-gray-500 uppercase">Interactive Nexus // Force-Directed Graph</p>
      </div>

      <svg ref={svgRef} className="w-full h-full" />

      {selectedNode && (
        <div className="absolute bottom-4 right-4 z-20 w-64 p-4 bg-obsidian brutalist-border brutalist-shadow-mint animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button 
            onClick={() => setSelectedNode(null)}
            className="absolute top-2 right-2 text-gray-500 hover:text-mint"
          >
            ✕
          </button>
          <div className="text-[10px] font-mono text-mint mb-1">[{selectedNode.type}]</div>
          {/* Fix: Use label instead of name */}
          <h4 className="text-lg font-bold text-white mb-2 leading-tight">{selectedNode.label}</h4>
          <p className="text-sm text-gray-400 mb-4">{selectedNode.description}</p>
          {/* Fix: Use '#' as placeholder link since OmniNode does not have a link property */}
          <a 
            href="#" 
            className="block w-full py-2 text-center text-xs font-bold uppercase bg-mint text-obsidian hover:bg-white transition-colors"
          >
            Deploy Node →
          </a>
        </div>
      )}

      {/* Background Grid Decoration */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none opacity-5">
        {[...Array(144)].map((_, i) => (
          <div key={i} className="border-[0.5px] border-paper"></div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGraph;
