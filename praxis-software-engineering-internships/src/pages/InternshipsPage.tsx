import React, { useState, useMemo } from 'react';
import { INTERNSHIPS } from '../data/internships';
import { InternshipCard } from '../components/internships/InternshipCard';
import { SEO } from '../components/common/SEO';
import { Search, RotateCcw } from 'lucide-react';
import { InternshipCategory, ExperienceLevel } from '../types';

export const InternshipsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedDuration, setSelectedDuration] = useState<string>('All');
  const [selectedWorkMode, setSelectedWorkMode] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: Array<'All' | InternshipCategory> = [
    'All',
    'Software Development',
    'AI Engineering',
    'Web Development',
    'Automation',
    'Data & Analytics',
    'QA & Testing',
  ];

  const levels: Array<'All' | ExperienceLevel> = ['All', 'Foundational', 'Intermediate', 'Advanced'];
  const durations = ['All', '8 Weeks', '10 Weeks', '12 Weeks'];
  const workModes = ['All', 'Remote', 'Hybrid'];

  const filteredInternships = useMemo(() => {
    return INTERNSHIPS.filter((item) => {
      if (selectedCategory !== 'All' && item.category !== selectedCategory) return false;
      if (selectedLevel !== 'All' && item.level !== selectedLevel) return false;
      if (selectedDuration !== 'All' && item.duration !== selectedDuration) return false;
      if (selectedWorkMode !== 'All' && item.workMode !== selectedWorkMode) return false;
      
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.shortDescription.toLowerCase().includes(query);
        const matchesTech = item.technologies.some((t) => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDesc && !matchesTech) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedLevel, selectedDuration, selectedWorkMode, searchQuery]);

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedLevel !== 'All' ||
    selectedDuration !== 'All' ||
    selectedWorkMode !== 'All' ||
    searchQuery.trim() !== '';

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedLevel('All');
    setSelectedDuration('All');
    setSelectedWorkMode('All');
    setSearchQuery('');
  };

  return (
    <div className="py-16 lg:py-20 relative">
      <SEO
        title="Software Engineering Internships"
        description="Explore structured software engineering internship tracks across web development, AI engineering, automation, data, and QA."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <span>Available Openings</span>
            <span aria-hidden="true">/</span>
            <span className="text-slate-400">Quarterly Cohorts</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4">
            Software Engineering Internships
          </h1>
          <p className="text-base text-slate-400 leading-relaxed">
            All internships are project-centered, remote-friendly, and supervised through structured asynchronous milestones. Choose an area that aligns with your technical development goals.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#0E111C] border border-white/[0.08] rounded-xl p-5 mb-10 shadow-xl backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search Input */}
            <div className="relative lg:col-span-1">
              <label htmlFor="search-input" className="block text-xs font-mono text-slate-300 mb-1">
                Search
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="search-input"
                  type="text"
                  placeholder="Keywords or tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-[#151928] border border-white/[0.08] rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />
              </div>
            </div>

            {/* Area Filter */}
            <div>
              <label htmlFor="area-filter" className="block text-xs font-mono text-slate-300 mb-1">
                Discipline
              </label>
              <select
                id="area-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#151928] border border-white/[0.08] rounded-md text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <label htmlFor="level-filter" className="block text-xs font-mono text-slate-300 mb-1">
                Experience Level
              </label>
              <select
                id="level-filter"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#151928] border border-white/[0.08] rounded-md text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              >
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration Filter */}
            <div>
              <label htmlFor="duration-filter" className="block text-xs font-mono text-slate-300 mb-1">
                Duration
              </label>
              <select
                id="duration-filter"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#151928] border border-white/[0.08] rounded-md text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              >
                {durations.map((dur) => (
                  <option key={dur} value={dur}>
                    {dur}
                  </option>
                ))}
              </select>
            </div>

            {/* Work Mode Filter */}
            <div>
              <label htmlFor="mode-filter" className="block text-xs font-mono text-slate-300 mb-1">
                Work Mode
              </label>
              <select
                id="mode-filter"
                value={selectedWorkMode}
                onChange={(e) => setSelectedWorkMode(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#151928] border border-white/[0.08] rounded-md text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              >
                {workModes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filter Indicators & Reset */}
          {hasActiveFilters && (
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
              <div>
                Showing <span className="font-semibold text-white">{filteredInternships.length}</span> of{' '}
                <span className="font-semibold text-white">{INTERNSHIPS.length}</span> tracks
              </div>
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset filters</span>
              </button>
            </div>
          )}
        </div>

        {/* Results Grid */}
        {filteredInternships.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInternships.map((internship) => (
              <InternshipCard key={internship.id} internship={internship} />
            ))}
          </div>
        ) : (
          /* Studio Empty State */
          <div className="bg-[#0E111C] border border-white/[0.08] rounded-xl p-12 text-center max-w-lg mx-auto shadow-xl">
            <h3 className="text-base font-bold text-white mb-2 font-heading">No matching tracks found</h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              No internships match your current combination of filters. Try broadening your criteria or reset the search filters.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-md transition-all btn-interactive"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
