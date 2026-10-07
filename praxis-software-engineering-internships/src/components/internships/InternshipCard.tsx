import React from 'react';
import { Internship } from '../../types';
import { Link } from '../../context/RouterContext';
import { ArrowUpRight } from 'lucide-react';

interface InternshipCardProps {
  internship: Internship;
}

export const InternshipCard: React.FC<InternshipCardProps> = ({ internship }) => {
  return (
    <div className="flex flex-col bg-[#0F121E] border border-white/[0.08] hover:border-cyan-400/40 rounded-xl p-6 hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.6),0_0_25px_rgba(56,189,248,0.15)] hover:-translate-y-2 transition-all duration-300 group">
      {/* Visual illustration slot with dark backdrop */}
      <div className="w-full h-44 mb-5 rounded-lg overflow-hidden bg-black/40 border border-white/[0.06] flex items-center justify-center p-3 relative group-hover:border-cyan-500/20 transition-colors">
        <img
          src={internship.illustrationPath}
          alt={`${internship.title} technical illustration`}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Quiet Metadata Header without pill badges */}
      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
        <span className="font-medium text-cyan-400">{internship.category}</span>
        <span aria-hidden="true" className="text-white/20">·</span>
        <span>{internship.level}</span>
        <span aria-hidden="true" className="text-white/20">·</span>
        <span>{internship.duration}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 font-heading group-hover:text-cyan-300 transition-colors">
        <Link
          to={`/internships/${internship.slug}`}
          className="transition-colors"
        >
          {internship.title}
        </Link>
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2 flex-grow">
        {internship.shortDescription}
      </p>

      {/* Tech Stack - quiet text list with dividers */}
      <div className="pt-3 border-t border-white/[0.06] mb-5">
        <div className="text-xs text-slate-400 line-clamp-1 font-mono">
          <span className="font-semibold text-slate-300">Stack: </span>
          {internship.technologies.join(' · ')}
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-1">
        <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" aria-hidden="true" />
          <span>{internship.status}</span>
        </div>

        <Link
          to={`/internships/${internship.slug}`}
          className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-md transition-all shadow-sm btn-interactive"
        >
          <span>View Track</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
