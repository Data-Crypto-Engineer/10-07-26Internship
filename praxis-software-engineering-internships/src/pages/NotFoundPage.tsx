import React from 'react';
import { Link } from '../context/RouterContext';
import { SEO } from '../components/common/SEO';
import { Home, Compass, Briefcase } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-28 max-w-2xl mx-auto px-4 text-center">
      <SEO title="Page Not Found (404)" description="The requested page could not be found." />
      <div className="bg-[#0E111C] border border-white/[0.08] rounded-2xl p-10 sm:p-14 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-80 h-32 bg-cyan-500/10 blur-[70px] pointer-events-none" />

        <div className="font-mono text-xs font-bold text-cyan-400 mb-2 uppercase tracking-widest">
          404 Error
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 font-heading">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-md mx-auto">
          The URL you navigated to does not exist or has been relocated. You can return to our home page or explore available internship tracks.
        </p>

        <div className="flex flex-wrap justify-center gap-3 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-md transition-all shadow-md btn-interactive"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/internships"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/[0.1] rounded-md hover:bg-white/[0.08] hover:text-white transition-all btn-secondary-interactive"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Browse Tracks</span>
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/[0.1] rounded-md hover:bg-white/[0.08] hover:text-white transition-all btn-secondary-interactive"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
