import React from 'react';
import { Link } from '../../context/RouterContext';
import { ArrowUpRight, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#06070B] text-slate-400 border-t border-white/[0.08] mt-24 relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8]" />
              <span className="text-lg font-bold text-white tracking-tight font-heading">
                Praxis Engineering
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Practical software engineering internship organization. Designed for university students and early-career builders who learn through real production systems.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Cohorts actively reviewing applications</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Engineering Tracks
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/internships/software-development" className="hover:text-cyan-400 transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/internships/ai-engineering" className="hover:text-cyan-400 transition-colors">
                  AI Engineering
                </Link>
              </li>
              <li>
                <Link to="/internships/web-development" className="hover:text-cyan-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/internships/automation" className="hover:text-cyan-400 transition-colors">
                  Automation &amp; Tooling
                </Link>
              </li>
              <li>
                <Link to="/internships/data-analytics" className="hover:text-cyan-400 transition-colors">
                  Data &amp; Analytics
                </Link>
              </li>
              <li>
                <Link to="/internships/qa-testing" className="hover:text-cyan-400 transition-colors">
                  QA &amp; Testing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/internships" className="hover:text-cyan-400 transition-colors">
                  All Internships
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-cyan-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/projects-and-skills" className="hover:text-cyan-400 transition-colors">
                  Projects &amp; Skills
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/apply" className="hover:text-cyan-400 transition-colors">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Engineering Standards
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              All projects adhere to standard Git workflows, modular TypeScript/Python architectures, and comprehensive test suites.
            </p>
            <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-400 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Static / Cloudflare Pages Compatible</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.08] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Praxis Software Engineering Organization. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">High-Fidelity Studio Design</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">Pure Static Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
