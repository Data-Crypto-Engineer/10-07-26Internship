import React from 'react';
import { Link } from '../context/RouterContext';
import { INTERNSHIPS } from '../data/internships';
import { SEO } from '../components/common/SEO';
import { ArrowLeft, ArrowUpRight, Clock, MapPin, Award, Check } from 'lucide-react';

interface InternshipDetailPageProps {
  slug: string;
}

export const InternshipDetailPage: React.FC<InternshipDetailPageProps> = ({ slug }) => {
  const internship = INTERNSHIPS.find((item) => item.slug === slug);

  if (!internship) {
    return (
      <div className="py-24 text-center max-w-lg mx-auto px-4">
        <SEO title="Internship Not Found" description="The requested internship track could not be found." />
        <div className="bg-[#0E111C] border border-white/[0.08] rounded-xl p-10 shadow-2xl">
          <h1 className="text-xl font-bold text-white mb-2 font-heading">Internship Not Found</h1>
          <p className="text-sm text-slate-400 mb-6 font-mono">
            The path &ldquo;{slug}&rdquo; does not correspond to an active track.
          </p>
          <Link
            to="/internships"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-md transition-all btn-interactive"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Internships</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-14 lg:py-20 relative">
      <SEO
        title={internship.title}
        description={internship.shortDescription}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link
            to="/internships"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Tracks</span>
          </Link>
        </div>

        {/* Hero Header Block */}
        <div className="bg-[#0E111C] border border-white/[0.08] rounded-2xl p-6 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                <span className="font-semibold text-cyan-400">{internship.category}</span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  {internship.duration}
                </span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  {internship.workMode}
                </span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  {internship.level}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
                {internship.title}
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                {internship.shortDescription}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to={`/apply?track=${internship.slug}`}
                  className="px-6 py-3 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-md transition-all shadow-md inline-flex items-center gap-2 btn-interactive"
                >
                  <span>Apply for this Track</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  <span>{internship.status}</span>
                  {internship.weeklyHours && (
                    <>
                      <span aria-hidden="true" className="text-white/20">·</span>
                      <span>{internship.weeklyHours}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="w-full h-48 sm:h-56 rounded-xl bg-black/40 border border-white/[0.08] p-4 flex items-center justify-center">
                <img
                  src={internship.illustrationPath}
                  alt={`${internship.title} system illustration`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Tech Stack Bar */}
          <div className="mt-8 pt-6 border-t border-white/[0.06]">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Technologies &amp; Toolchains
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {internship.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-white/[0.04] text-cyan-300 px-3 py-1.5 rounded-md border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Two-Column Structured Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* About the Project */}
            <section className="bg-[#0E111C] border border-white/[0.08] rounded-xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-xl font-bold text-white tracking-tight mb-4 font-heading">
                About the Project
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {internship.overview}
              </p>
            </section>

            {/* What You'll Work On */}
            <section className="bg-[#0E111C] border border-white/[0.08] rounded-xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-xl font-bold text-white tracking-tight mb-4 font-heading">
                What You&apos;ll Work On
              </h2>
              <ul className="space-y-3">
                {internship.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Skills You'll Practice */}
            <section className="bg-[#0E111C] border border-white/[0.08] rounded-xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-xl font-bold text-white tracking-tight mb-4 font-heading">
                Skills You&apos;ll Practice
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {internship.skillsGained.map((skill, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 bg-white/[0.03] border border-white/[0.06] rounded-lg text-xs font-medium text-slate-300 leading-relaxed"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            {/* Expected Deliverables */}
            <section className="bg-[#0E111C] border border-white/[0.08] rounded-xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-xl font-bold text-white tracking-tight mb-4 font-heading">
                Expected Deliverables
              </h2>
              <div className="space-y-3">
                {internship.expectedDeliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-cyan-500/[0.04] border border-cyan-400/20 rounded-lg text-sm text-slate-300 leading-relaxed"
                  >
                    <span className="font-mono text-xs text-cyan-400 font-bold shrink-0 mt-0.5">
                      [{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Internship Journey Timeline */}
            <section className="bg-[#0E111C] border border-white/[0.08] rounded-xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-xl font-bold text-white tracking-tight mb-6 font-heading">
                Internship Journey &amp; Milestones
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-white/[0.08]">
                {internship.timeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-5 pl-1">
                    <div className="w-6 h-6 rounded-full bg-[#0E111C] border-2 border-cyan-400 flex items-center justify-center shrink-0 z-10 shadow-[0_0_8px_#38bdf8]">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    </div>
                    <div className="flex-1 bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                          {item.phase} · {item.duration}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white mb-1 font-heading">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <div className="text-xs text-slate-400 font-mono">
                        <span className="text-slate-300 font-semibold">Checkpoints: </span>
                        {item.deliverables.join(' · ')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Info Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Apply Sticky Card */}
            <div className="bg-[#0E111C] border border-white/[0.08] rounded-xl p-6 shadow-2xl sticky top-24 backdrop-blur-md">
              <h3 className="text-base font-bold text-white mb-2 font-heading">
                Apply for this Position
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Applications are reviewed on a rolling basis. Ensure you have your GitHub profile and project links ready.
              </p>

              <div className="space-y-3 border-t border-b border-white/[0.06] py-4 mb-6 text-xs font-mono text-slate-400">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium text-white">{internship.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Work Mode:</span>
                  <span className="font-medium text-white">{internship.workMode}</span>
                </div>
                <div className="flex justify-between">
                  <span>Commitment:</span>
                  <span className="font-medium text-white">{internship.weeklyHours || '15–20 hrs/wk'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Prerequisites:</span>
                  <span className="font-medium text-white">{internship.level}</span>
                </div>
              </div>

              <Link
                to={`/apply?track=${internship.slug}`}
                className="w-full text-center block px-4 py-3 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-md transition-all shadow-md btn-interactive"
              >
                Start Application
              </Link>
            </div>

            {/* Prerequisites / Requirements */}
            <div className="bg-[#0E111C] border border-white/[0.08] rounded-xl p-6 shadow-xl">
              <h3 className="text-sm font-bold text-white mb-3 font-heading">
                Requirements &amp; Prerequisites
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                {internship.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5 shadow-[0_0_4px_#38bdf8]" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
