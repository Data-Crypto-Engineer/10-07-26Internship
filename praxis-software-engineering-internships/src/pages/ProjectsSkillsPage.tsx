import React from 'react';
import { Link } from '../context/RouterContext';
import { ImageSlot } from '../components/common/ImageSlot';
import { SEO } from '../components/common/SEO';
import { ENGINEERING_PRACTICES } from '../data/internships';
import { ArrowUpRight, ArrowRight, Code, Cpu, Database, Wrench, Shield, Globe } from 'lucide-react';

export const ProjectsSkillsPage: React.FC = () => {
  const projectCategories = [
    {
      title: 'Web Applications',
      icon: Globe,
      description: 'Single-page applications, responsive interfaces, state architectures, and accessible component design systems.',
      technologies: 'React, TypeScript, Next.js, Tailwind CSS, Playwright',
      example: 'Interactive task orchestrator with responsive data tables and keyboard accessibility.',
    },
    {
      title: 'AI Applications',
      icon: Cpu,
      description: 'Retrieval-augmented generation (RAG) pipelines, schema validation, vector search, and evaluation harnesses.',
      technologies: 'Python, FastAPI, LangChain, ChromaDB, Pydantic',
      example: 'Technical documentation search service with automated hallucination scoring.',
    },
    {
      title: 'Automation & Tooling',
      icon: Wrench,
      description: 'CI/CD workflow matrices, automated release pipelines, containerized build environments, and developer utilities.',
      technologies: 'GitHub Actions, Bash, Python, Docker, YAML',
      example: 'Modular GitHub Actions workflow library for automated testing and semantic versioning.',
    },
    {
      title: 'Data Applications',
      icon: Database,
      description: 'ETL aggregation pipelines, dimensional schema modeling, analytical SQL queries, and telemetry validation.',
      technologies: 'SQL, Python, DuckDB, PostgreSQL, dbt, Pandas',
      example: 'High-throughput event aggregation service with automated data consistency assertions.',
    },
    {
      title: 'Developer Tools',
      icon: Code,
      description: 'Command-line interfaces, repository template generators, code formatters, and local developer environment tooling.',
      technologies: 'TypeScript, Node.js CLI, Python, Docker Compose',
      example: 'Project scaffolding CLI tool with automated environment verification and config linting.',
    },
    {
      title: 'QA & Testing Suites',
      icon: Shield,
      description: 'End-to-end browser automation suites, Page Object Model architectures, and REST contract validation runners.',
      technologies: 'TypeScript, Playwright, Vitest, Postman / Newman',
      example: 'Automated regression test suite with mock network interception and CI artifact capture.',
    },
  ];

  return (
    <div className="py-16 lg:py-20 relative">
      <SEO
        title="Projects & Skills Curriculum"
        description="Explore the software engineering project categories and fundamental technical practices developed in Praxis internships."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <span>Engineering Curriculum</span>
            <span aria-hidden="true">/</span>
            <span className="text-slate-400">Foundational Skills</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4">
            Projects &amp; Engineering Skills
          </h1>
          <p className="text-base text-slate-400 leading-relaxed">
            Our curriculum focuses on transferable engineering foundations. Technologies and frameworks vary by track, but the disciplined software practices remain consistent across every project.
          </p>
        </div>

        {/* Featured Visual Spot with Code Review Photo */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#0E111C] border border-white/[0.08] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] pointer-events-none" />

            <div className="lg:col-span-6 space-y-4 relative z-10">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Peer Review &amp; Code Quality
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
                Engineering happens in code review
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Writing code that works is only the first step. Interns learn how to present pull requests, explain architectural tradeoffs, respond to feedback, and iterate until the solution is clean, documented, and resilient.
              </p>
              <div className="text-xs font-mono text-slate-400 pt-2 border-t border-white/[0.06]">
                <span className="text-cyan-300 font-semibold">Standards enforced: </span>
                Conventional commits · Atomic changesets · High test coverage · Explicit error handling
              </div>
            </div>

            <div className="lg:col-span-6 relative z-10">
              <div className="relative rounded-xl overflow-hidden border border-white/[0.1] shadow-2xl bg-black/40">
                <ImageSlot
                  src="/images/projects/code-review.webp"
                  alt="Software engineers conducting a technical code review together"
                  aspectRatio="16:9"
                  className="shadow-sm"
                  developerSlotNote="Replace with custom 2400×1350px photo at public/images/projects/code-review.webp"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Core Engineering Practices Grid */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading mb-2">
              Core Engineering Practices
            </h2>
            <p className="text-sm text-slate-400">
              Regardless of the track you select, these foundational habits are practiced throughout your project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ENGINEERING_PRACTICES.map((practice, idx) => (
              <div
                key={idx}
                className="bg-[#0E111C] border border-white/[0.08] hover:border-cyan-400/40 rounded-xl p-5 flex flex-col justify-between hover:bg-[#121626] transition-all duration-200"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-cyan-400 mb-2">
                    {practice.highlight}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-heading">
                    {practice.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {practice.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Categories */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading mb-2">
              Project Categories
            </h2>
            <p className="text-sm text-slate-400">
              Real projects built by interns across different engineering disciplines. Specific technologies vary by track.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0E111C] border border-white/[0.08] hover:border-cyan-400/40 rounded-xl p-6 flex flex-col hover:bg-[#121626] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-heading">{cat.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-grow">
                    {cat.description}
                  </p>

                  <div className="pt-3 border-t border-white/[0.06] text-xs font-mono space-y-1.5">
                    <div>
                      <span className="text-slate-300 font-semibold">Deliverable: </span>
                      <span className="text-slate-400">{cat.example}</span>
                    </div>
                    <div>
                      <span className="text-slate-300 font-semibold">Tech: </span>
                      <span className="text-cyan-300">{cat.technologies}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-8 border-t border-white/[0.08]">
          <Link
            to="/internships"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-md transition-all shadow-md btn-interactive"
          >
            <span>Explore Active Internship Openings</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
