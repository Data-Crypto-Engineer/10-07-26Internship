import React, { useState } from 'react';
import { Internship } from '../../types';
import { Link } from '../../context/RouterContext';
import { ArrowUpRight, Layers, Sparkles } from 'lucide-react';

interface OverlappingCardsDeckProps {
  internships: Internship[];
}

export const OverlappingCardsDeck: React.FC<OverlappingCardsDeckProps> = ({ internships }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="w-full py-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Cascade Deck</span>
          </div>
          <h3 className="text-3xl font-bold text-white tracking-tight font-heading">
            Cascading Engineering Tracks
          </h3>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Hover over any card in the deck to bring it forward, inspect deliverables, and view tech requirements.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-slate-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
          <span>Interactive Stacking Layers</span>
        </div>
      </div>

      {/* Overlapping Stacking Cards Deck */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-0 pt-6 pb-12">
        {internships.map((internship, idx) => {
          const isHovered = hoveredIdx === idx;
          const zIndex = isHovered ? 50 : idx + 1;
          const desktopMarginLeft = idx === 0 ? '0px' : '-28px';

          return (
            <div
              key={internship.id}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                zIndex,
                marginLeft: typeof window !== 'undefined' && window.innerWidth >= 768 ? desktopMarginLeft : '0px',
              }}
              className={`relative transition-all duration-300 transform rounded-xl p-5 flex flex-col justify-between cursor-pointer select-none backdrop-blur-md ${
                isHovered
                  ? 'bg-[#151A2C] border-2 border-cyan-400/80 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),0_0_35px_rgba(56,189,248,0.35)] -translate-y-8 scale-[1.04]'
                  : 'bg-[#0E111C]/95 border border-white/[0.08] shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:border-white/[0.2] hover:-translate-y-3'
              }`}
            >
              {/* Top Accent Indicator */}
              <div
                className={`h-1 w-full rounded-full mb-4 transition-all duration-300 ${
                  isHovered
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_#38bdf8]'
                    : 'bg-white/[0.1]'
                }`}
              />

              {/* Illustration Slot */}
              <div className="w-full h-32 mb-4 rounded-lg bg-black/40 border border-white/[0.06] p-2 flex items-center justify-center overflow-hidden">
                <img
                  src={internship.illustrationPath}
                  alt={internship.title}
                  className="w-full h-full object-contain transition-transform duration-300"
                  style={{
                    transform: isHovered ? 'scale(1.12)' : 'scale(1)',
                  }}
                  loading="lazy"
                />
              </div>

              {/* Title & Metadata */}
              <div className="flex-1 mb-4">
                <div className="text-[11px] font-mono text-cyan-400 mb-1">
                  {internship.category}
                </div>
                <h4 className="text-sm font-bold text-white leading-snug mb-2 line-clamp-2 font-heading">
                  {internship.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-3">
                  {internship.shortDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="pt-3 border-t border-white/[0.06] text-[11px] text-slate-400 mb-4 font-mono">
                <span className="text-slate-300 font-semibold">Tech: </span>
                {internship.technologies.slice(0, 3).join(' · ')}
              </div>

              {/* CTA Link with hover glow */}
              <Link
                to={`/internships/${internship.slug}`}
                className={`w-full text-center py-2.5 px-3 text-xs font-semibold rounded-md transition-all inline-flex items-center justify-center gap-1.5 ${
                  isHovered
                    ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.5)] scale-105'
                    : 'bg-white/[0.06] text-white hover:bg-white/[0.1]'
                }`}
              >
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
