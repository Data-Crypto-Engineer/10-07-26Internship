import React from 'react';
import { Link } from '../context/RouterContext';
import { ImageSlot } from '../components/common/ImageSlot';
import { SEO } from '../components/common/SEO';
import { INTERNSHIPS } from '../data/internships';
import { OverlappingCardsDeck } from '../components/common/OverlappingCardsDeck';
import { StackedJourneyCards } from '../components/common/StackedJourneyCards';
import { TechStackMarquee } from '../components/common/TechStackMarquee';
import { ArrowUpRight, ArrowRight, Terminal, GitBranch, ShieldCheck, FileText, Cpu, Code2 } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <SEO
        title="Software Engineering Internships"
        description="Students gain practical software engineering experience by working through structured projects, developing technical skills, and producing tangible work."
      />

      {/* Ambient Radial Spotlight Glows (like grayhat.studio & aratoz.agency) */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-60 right-10 w-[500px] h-[500px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Hero Section */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 relative z-10 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-xs font-mono text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
                <span>Praxis Internship Program</span>
                <span aria-hidden="true" className="text-white/20">/</span>
                <span className="text-slate-400">Applications Open</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.08] font-heading text-balance">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  Build something that wasn&apos;t there before.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl font-normal">
                Students gain practical software engineering experience by working through structured projects, developing technical skills, and producing tangible work they can discuss and demonstrate.
              </p>

              {/* Interactive Buttons (Enlarging on Cursor Hover with Ambient Halo) */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/internships"
                  className="px-7 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 rounded-md shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all inline-flex items-center gap-2 btn-interactive"
                >
                  <span>Explore Internships</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="px-7 py-3.5 text-sm font-semibold text-slate-200 bg-white/[0.04] border border-white/[0.1] rounded-md hover:bg-white/[0.08] hover:text-white transition-all btn-secondary-interactive"
                >
                  How It Works
                </Link>
              </div>

              {/* Studio Metrics / Proof Grid */}
              <div className="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 text-xs text-slate-400 font-mono">
                <div>
                  <div className="font-bold text-white text-base font-heading">6 Tracks</div>
                  <div className="text-slate-400 mt-0.5">Software disciplines</div>
                </div>
                <div>
                  <div className="font-bold text-white text-base font-heading">Real Repos</div>
                  <div className="text-slate-400 mt-0.5">GitHub deliverables</div>
                </div>
                <div>
                  <div className="font-bold text-white text-base font-heading">Peer Review</div>
                  <div className="text-slate-400 mt-0.5">Structured feedback</div>
                </div>
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500" />
                <div className="relative rounded-xl overflow-hidden border border-white/[0.12] shadow-2xl bg-[#0E111C]">
                  <ImageSlot
                    src="/images/hero/hero-team.webp"
                    alt="Software developers collaborating at computers in an office"
                    aspectRatio="16:9"
                    priority
                    className="transition-transform duration-500 group-hover:scale-[1.02]"
                    developerSlotNote="Replace with custom 2400×1350px photo at public/images/hero/hero-team.webp"
                  />
                  {/* Subtle glass footer on image */}
                  <div className="p-3 bg-black/60 backdrop-blur-md border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Engineering Squad Environment
                    </span>
                    <span>100% Async &amp; Remote</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <TechStackMarquee />

      {/* Overlapping Cards Deck Section (Requested: Cards coming over each other) */}
      <section className="py-20 lg:py-24 border-b border-white/[0.06] bg-[#07080D]/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OverlappingCardsDeck internships={INTERNSHIPS} />
        </div>
      </section>

      {/* Learn by Building Section */}
      <section className="py-20 lg:py-28 border-b border-white/[0.06] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="relative rounded-xl overflow-hidden border border-white/[0.12] shadow-2xl bg-[#0E111C]">
                  <ImageSlot
                    src="/images/learn/developer-coding.webp"
                    alt="Software engineer actively coding in an IDE"
                    aspectRatio="4:3"
                    className="transition-transform duration-500 group-hover:scale-[1.02]"
                    developerSlotNote="Replace with custom 2000×1300px photo at public/images/learn/developer-coding.webp"
                  />
                  <div className="p-3 bg-black/60 backdrop-blur-md border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="text-cyan-300">Hands-On Code Delivery</span>
                    <span>No passive video lectures</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
                <Code2 className="w-3.5 h-3.5" />
                <span>Engineering Methodology</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading text-balance">
                Learn by building
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                Rather than passive tutorial consumption or synthetic quizzes, students work through practical software projects and develop durable engineering habits:
              </p>

              {/* Engineering Habits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white font-heading">Problem Solving</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Decomposing ambiguous specs into modular, testable requirements.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <GitBranch className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white font-heading">Git &amp; GitHub</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Branching workflows, conventional commits, and atomic pull requests.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white font-heading">Testing &amp; Debugging</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Unit suites, integration tests, and reproducible stack trace isolation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white font-heading">Architecture &amp; Docs</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Writing clear RFCs, API contracts, and concise technical updates.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/projects-and-skills"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
                >
                  <span>Explore Projects &amp; Skills Curriculum</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stacked Journey Cards Section (Requested: Cards coming over each other) */}
      <section className="py-20 lg:py-28 border-b border-white/[0.06] bg-[#07080D]/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              Structured Milestones
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading mb-3">
              How the internship works
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              From track selection to final code delivery, our milestone progression keeps requirements transparent and feedback actionable.
            </p>
          </div>

          <div className="bg-[#0A0C14] border border-white/[0.08] rounded-2xl p-6 sm:p-10 shadow-2xl">
            <StackedJourneyCards />
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.08] flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-slate-400">
              Clear milestone checkpoints ensure interns never guess what to build next.
            </p>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors btn-secondary-interactive"
            >
              <span>See full process breakdown &amp; FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 lg:py-28 border-b border-white/[0.06] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Our Purpose
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading text-balance">
                Making practical software experience more accessible.
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                The software industry has an experience paradox: entry-level roles require prior project proof, but students rarely get the opportunity to build structured, production-grade systems in traditional coursework.
              </p>

              <p className="text-base text-slate-300 leading-relaxed">
                Praxis provides a disciplined environment where aspiring engineers work through real-world software specifications, learn proper version control, and leave with verifiable code.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
                >
                  <span>Read our foundational principles</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-6">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="relative rounded-xl overflow-hidden border border-white/[0.12] shadow-2xl bg-[#0E111C]">
                  <ImageSlot
                    src="/images/about/team-office.webp"
                    alt="Modern technology workspace and engineering office"
                    aspectRatio="4:3"
                    className="transition-transform duration-500 group-hover:scale-[1.02]"
                    developerSlotNote="Replace with custom 2000×1300px photo at public/images/about/team-office.webp"
                  />
                  <div className="p-3 bg-black/60 backdrop-blur-md border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="text-cyan-300">Engineering Studio Hub</span>
                    <span>Built for modern engineers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact Studio CTA Banner */}
      <section className="py-20 lg:py-24 relative z-10 bg-gradient-to-b from-[#090A10] to-[#0D101C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-xs font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Ready for the next cohort?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Ready to build real software engineering experience?
          </h2>

          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Choose an internship track that matches your technical goals and submit your application today.
          </p>

          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Link
              to="/apply"
              className="px-8 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 rounded-md shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all btn-interactive inline-flex items-center gap-2"
            >
              <span>Apply for an Internship</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/internships"
              className="px-8 py-3.5 text-sm font-semibold text-slate-200 bg-white/[0.04] border border-white/[0.1] rounded-md hover:bg-white/[0.08] hover:text-white transition-all btn-secondary-interactive"
            >
              Browse All Tracks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
