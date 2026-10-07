import React from 'react';
import { Link } from '../context/RouterContext';
import { ImageSlot } from '../components/common/ImageSlot';
import { SEO } from '../components/common/SEO';
import { CORE_PRINCIPLES } from '../data/internships';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-16 lg:py-20 relative">
      <SEO
        title="About Us"
        description="Praxis is dedicated to making practical software engineering experience accessible to aspiring developers through structured project work."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <span>About Praxis</span>
            <span aria-hidden="true">/</span>
            <span className="text-slate-400">Our Organization</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4">
            Making practical software experience more accessible.
          </h1>
          <p className="text-base text-slate-400 leading-relaxed">
            We focus on giving university students and early-career developers an opportunity to develop disciplined engineering skills by working through structured, real-world software projects.
          </p>
        </div>

        {/* Visual Hero Block */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
                Why we started this program
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Most computer science curricula teach core theory, algorithms, and syntax. However, engineering in the modern software industry requires distinct practical skills: managing Git branches, writing modular interfaces, dealing with API edge cases, writing automated test suites, and participating in code reviews.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Without prior industry experience, students often struggle to bridge this gap. Our organization provides the scaffolding and technical structure necessary for students to build real software artifacts that demonstrate competence.
              </p>
              <div className="pt-2">
                <Link
                  to="/internships"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Explore our 6 engineering tracks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="relative rounded-xl overflow-hidden border border-white/[0.1] shadow-2xl bg-[#0E111C]">
                  <ImageSlot
                    src="/images/about/team-office.webp"
                    alt="Modern technology workspace and collaborative office"
                    aspectRatio="4:3"
                    className="shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
                    developerSlotNote="Replace with custom 2000×1300px photo at public/images/about/team-office.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Concise Principles */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              Our Foundations
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
              Four Core Principles
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Every track and milestone in our organization is designed around these four tenets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="bg-[#0E111C] border border-white/[0.08] hover:border-cyan-400/40 rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:bg-[#121626] transition-all duration-300"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-cyan-400 mb-3">
                    Principle {principle.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-heading">
                    {principle.title}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 mb-3">
                    {principle.subtitle}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentorship & Review Format */}
        <div className="bg-[#0E111C] border border-white/[0.08] rounded-2xl p-8 sm:p-10 mb-16 shadow-xl">
          <div className="max-w-3xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading">
              How Mentorship &amp; Feedback Works
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-8">
              Engineering mentorship in our organization mirrors how high-performing distributed teams collaborate. Rather than micro-managing hours, we establish high expectations for code quality, clarity of technical communication, and consistency of iteration:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs text-slate-300">
              <div className="bg-white/[0.03] p-5 rounded-xl border border-white/[0.06]">
                <div className="font-bold text-white text-sm mb-1 font-heading">Weekly Checkpoints</div>
                <p className="text-slate-400 leading-normal">
                  Milestone deadlines keep progress steady and ensure blockers are surfaced early.
                </p>
              </div>

              <div className="bg-white/[0.03] p-5 rounded-xl border border-white/[0.06]">
                <div className="font-bold text-white text-sm mb-1 font-heading">Code Review Feedback</div>
                <p className="text-slate-400 leading-normal">
                  Pull requests receive concrete technical feedback on structure, typing, tests, and readability.
                </p>
              </div>

              <div className="bg-white/[0.03] p-5 rounded-xl border border-white/[0.06]">
                <div className="font-bold text-white text-sm mb-1 font-heading">Verifiable Artifacts</div>
                <p className="text-slate-400 leading-normal">
                  Work is merged into your public GitHub repository so you retain 100% ownership of your code.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-6">
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-md transition-all shadow-md btn-interactive"
          >
            <span>Submit an Application</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
