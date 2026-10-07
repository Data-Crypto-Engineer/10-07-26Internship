import React from 'react';

export const TechStackMarquee: React.FC = () => {
  const tools = [
    { name: 'TypeScript', tag: 'Core Language' },
    { name: 'React 19 & Next.js', tag: 'UI Architecture' },
    { name: 'Python & FastAPI', tag: 'Services & ML' },
    { name: 'PostgreSQL & DuckDB', tag: 'Persistence' },
    { name: 'Docker & Containers', tag: 'Environment' },
    { name: 'Playwright & Vitest', tag: 'Testing Matrix' },
    { name: 'GitHub Actions', tag: 'CI/CD Pipelines' },
    { name: 'Redis & Caching', tag: 'Performance' },
    { name: 'Git & Trunk Workflow', tag: 'Collaboration' },
  ];

  return (
    <div className="w-full py-6 overflow-hidden border-y border-white/[0.06] bg-[#07080D]/70 backdrop-blur-xs relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#090A10] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#090A10] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-6">
        {[...tools, ...tools].map((tool, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/40 hover:bg-white/[0.06] transition-all shrink-0 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-semibold text-slate-200 tracking-wide">
              {tool.name}
            </span>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
              {tool.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
