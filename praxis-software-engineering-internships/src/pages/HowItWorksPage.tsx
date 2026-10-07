import React from 'react';
import { Link } from '../context/RouterContext';
import { SEO } from '../components/common/SEO';
import { ArrowUpRight, ArrowRight, Compass, Send, CheckSquare, Code2, Award, HelpCircle } from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Explore & Align',
      icon: Compass,
      headline: 'Find an engineering area matching your goals',
      description:
        'Browse our six internship tracks. Each track defines exact prerequisites, toolchains, and expected deliverable artifacts. Select the track that challenges you while aligning with your foundational skills.',
      details: [
        'Review the technology stack and syllabus',
        'Confirm minimum weekly commitment (12–20 hrs/week)',
        'Check prerequisites and sample deliverables',
      ],
    },
    {
      step: '02',
      title: 'Submit Application',
      icon: Send,
      headline: 'Share your background and code links',
      description:
        'Fill out the structured application form. We prioritize demonstrated curiosity, GitHub repositories, and clear personal motivation over resume prestige.',
      details: [
        'Provide your university/academic background or self-taught path',
        'Link relevant GitHub repositories or code samples',
        'State which track you are most interested in pursuing',
      ],
    },
    {
      step: '03',
      title: 'Review & Onboarding',
      icon: CheckSquare,
      headline: 'Track confirmation and environment setup',
      description:
        'Applications are reviewed for alignment with track difficulty. Accepted interns receive repository invitations, access to documentation, and an onboarding setup guide.',
      details: [
        'Review of applicant code samples and commitment',
        'Receipt of repository templates and issue tracker access',
        'Verification of local developer tooling and Docker environment',
      ],
    },
    {
      step: '04',
      title: 'Build & Iterate',
      icon: Code2,
      headline: 'Structured milestones, PRs, and code review',
      description:
        'Work through scheduled phase deliverables. Interns write modular code, implement test suites, create pull requests, and receive actionable code review feedback.',
      details: [
        'Weekly phase milestones with clear acceptance criteria',
        'Asynchronous GitHub pull request reviews',
        'Continuous integration testing and lint enforcement',
      ],
    },
    {
      step: '05',
      title: 'Complete & Showcase',
      icon: Award,
      headline: 'Finalize deliverable artifacts and documentation',
      description:
        'Wrap up your implementation, complete technical architecture write-ups, and produce a polished GitHub repository that you can demonstrate in future engineering interviews.',
      details: [
        'Final code review pass and production branch merge',
        'Technical write-up detailing architecture and tradeoffs',
        'Verifiable GitHub portfolio deliverable',
      ],
    },
  ];

  const faqs = [
    {
      question: 'Who is eligible to participate?',
      answer:
        'University students (undergraduate and graduate in CS, Software Engineering, IT, or related fields), bootcamp graduates, and self-directed early-career engineers looking for practical software experience.',
    },
    {
      question: 'Is this internship remote?',
      answer:
        'Yes. All internship tracks are designed for remote, asynchronous collaboration using standard engineering tools like GitHub, Git, and issue tracking.',
    },
    {
      question: 'What time commitment is expected?',
      answer:
        'Depending on the track, the commitment is typically 15–20 hours per week over 8 to 12 weeks. Milestones are structured so students can balance academic schedules.',
    },
    {
      question: 'Do I need prior industry experience?',
      answer:
        'No prior commercial experience is required. However, foundational tracks require basic programming and Git comfort, while intermediate tracks require knowledge of data structures, databases, or API protocols.',
    },
    {
      question: 'What will I have to show at the end of the internship?',
      answer:
        'A complete, documented, tested software project hosted in a public GitHub repository under your account, complete with architecture documentation, commit history, and automated test suites.',
    },
  ];

  return (
    <div className="py-16 lg:py-20 relative">
      <SEO
        title="How It Works"
        description="Learn about the Praxis software engineering internship process: from track selection and application to structured project execution and final deliverables."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <span>The Process</span>
            <span aria-hidden="true">/</span>
            <span className="text-slate-400">Step-by-step Framework</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4">
            How the internship works
          </h1>
          <p className="text-base text-slate-400 leading-relaxed">
            Our structured framework models how real engineering teams work: clearly scoped requirements, version control, peer review, and demonstrable deliverables.
          </p>
        </div>

        {/* Sequential Process Steps */}
        <div className="space-y-8 mb-20">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#0E111C] border border-white/[0.08] rounded-xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xl hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-400/20 px-2.5 py-1 rounded">
                      Step {item.step}
                    </span>
                    <h2 className="text-lg font-bold text-white font-heading">{item.title}</h2>
                  </div>
                  <h3 className="text-base font-semibold text-slate-200 leading-snug">
                    {item.headline}
                  </h3>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Key Highlights:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-white/[0.03] p-3 rounded-lg border border-white/[0.06]">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5 shadow-[0_0_4px_#38bdf8]" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-400">
              Direct answers to common questions about our internship structure and expectations.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#0E111C] border border-white/[0.08] rounded-xl p-6 shadow-lg">
                <h3 className="text-sm font-bold text-white mb-2 flex items-start gap-2.5 font-heading">
                  <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="bg-[#0E111C] border border-white/[0.08] rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-80 h-40 bg-cyan-500/10 blur-[80px] pointer-events-none" />

          <h2 className="text-2xl font-bold text-white mb-2 font-heading relative z-10">
            Ready to find your track?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-6 relative z-10">
            Review our available tracks to see detailed curriculum schedules, prerequisites, and milestone deliverables.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link
              to="/internships"
              className="px-6 py-3 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-md transition-all inline-flex items-center gap-2 btn-interactive shadow-md"
            >
              <span>Explore Internships</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/apply"
              className="px-6 py-3 text-xs font-semibold text-slate-200 bg-white/[0.04] border border-white/[0.1] rounded-md hover:bg-white/[0.08] transition-all btn-secondary-interactive"
            >
              Apply Directly
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
