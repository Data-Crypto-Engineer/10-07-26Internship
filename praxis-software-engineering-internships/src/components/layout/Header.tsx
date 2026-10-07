import React, { useState } from 'react';
import { useRouter, Link } from '../../context/RouterContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const { path } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Internships', href: '/internships' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Projects & Skills', href: '/projects-and-skills' },
    { label: 'About', href: '/about' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return path === '/';
    return path.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#090A10]/85 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark with studio styling */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors shrink-0 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8] group-hover:scale-125 transition-transform" />
            <span className="font-heading">Praxis Engineering</span>
          </Link>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-medium text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-all whitespace-nowrap relative py-1 ${
                  isActive(link.href)
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_8px_#38bdf8]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Zone 3: Primary action button with surrounding hover enlargement */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/apply"
              className="px-5 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-md transition-all whitespace-nowrap shadow-sm btn-interactive inline-flex items-center gap-1.5"
            >
              <span>Apply</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded-md"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0E111C] px-4 pt-3 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                isActive(link.href)
                  ? 'bg-cyan-500/10 text-cyan-400 font-semibold border-l-2 border-cyan-400'
                  : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              to="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-md transition-all btn-interactive"
            >
              Apply for Internship
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
