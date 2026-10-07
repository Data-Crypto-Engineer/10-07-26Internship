import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface JourneyStep {
  step: string;
  title: string;
  timeframe: string;
  description: string;
  checkpoints: string[];
}

export const StackedJourneyCards: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

  const steps: JourneyStep[] = [
    {
      step: '01',
      title: 'Explore & Technical Alignment',
      timeframe: 'Weeks 1–2',
      description: 'Review curriculum requirements, initialize containerized environments, and draft your engineering RFC.',
      checkpoints: ['Architecture RFC merged', 'Local Docker toolchain verified', 'Initial schema migration PR'],
    },
    {
      step: '02',
      title: 'Core Domain Implementation',
      timeframe: 'Weeks 3–6',
      description: 'Develop core business logic, write type-safe service contracts, and implement comprehensive unit tests.',
      checkpoints: ['Service controllers & routes', 'Domain entities & repositories', 'Unit test suite >85% coverage'],
    },
    {
      step: '03',
      title: 'Performance & Edge-Case Testing',
      timeframe: 'Weeks 7–9',
      description: 'Profile database query latency, handle race conditions, and introduce integration test harnesses.',
      checkpoints: ['Latency benchmark reports', 'Automated CI test matrix', 'Caching & failure resilience'],
    },
    {
      step: '04',
      title: 'Code Review, Docs & Delivery',
      timeframe: 'Weeks 10–12',
      description: 'Undergo thorough peer code review, author technical architecture docs, and publish verifiable deliverables.',
      checkpoints: ['OpenAPI documentation', 'Production PR merged', 'Public GitHub portfolio showcase'],
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
            Overlapping Progression
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-heading">
            Stacked Phase Milestones
          </h3>
        </div>
        <div className="text-xs font-mono text-slate-400">
          Click or hover any card to bring it forward
        </div>
      </div>

      {/* Vertical Stacking / Overlapping Cards Deck */}
      <div className="relative space-y-[-24px] sm:space-y-[-32px] pt-4 pb-10">
        {steps.map((step, idx) => {
          const isActive = activeCard === idx;
          const zIndex = isActive ? 40 : idx + 1;

          return (
            <div
              key={step.step}
              onClick={() => setActiveCard(idx)}
              onMouseEnter={() => setActiveCard(idx)}
              style={{ zIndex }}
              className={`relative rounded-xl p-6 sm:p-8 transition-all duration-300 cursor-pointer backdrop-blur-md ${
                isActive
                  ? 'bg-[#151928] border-2 border-cyan-400/80 shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.25)] -translate-y-5 scale-[1.01]'
                  : 'bg-[#0E111B]/95 border border-white/[0.08] shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:bg-[#121624] hover:-translate-y-2'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-xs font-bold px-2.5 py-1 rounded transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 shadow-[0_0_12px_#38bdf8]'
                        : 'bg-white/[0.06] text-slate-300'
                    }`}
                  >
                    Phase {step.step}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
                    {step.title}
                  </h4>
                </div>
                <div className="text-xs font-mono text-cyan-400">
                  {step.timeframe}
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-3xl mb-4">
                {step.description}
              </p>

              {/* Checkpoints */}
              <div className={`transition-all duration-300 ${isActive ? 'opacity-100 max-h-40' : 'opacity-60 max-h-24'}`}>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Checkpoints:
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {step.checkpoints.map((cp, cIdx) => (
                    <span
                      key={cIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border font-mono ${
                        isActive
                          ? 'bg-cyan-500/10 border-cyan-400/30 text-cyan-300 font-medium'
                          : 'bg-white/[0.03] border-white/[0.06] text-slate-400'
                      }`}
                    >
                      <CheckCircle2 className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                      <span>{cp}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
