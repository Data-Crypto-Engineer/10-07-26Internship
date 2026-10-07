import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { INTERNSHIPS } from '../data/internships';
import { SEO } from '../components/common/SEO';
import { ApplicationFormData } from '../types';
import {
  CheckCircle2,
  AlertCircle,
  Copy,
  Download,
  ArrowUpRight,
  Info,
  RotateCcw,
} from 'lucide-react';

export const ApplyPage: React.FC = () => {
  const { searchParams } = useRouter();
  const initialTrack = searchParams.get('track') || '';

  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    university: '',
    degree: '',
    graduationYear: '',
    selectedInternshipSlug: initialTrack || INTERNSHIPS[0].slug,
    skills: '',
    githubUrl: '',
    linkedinUrl: '',
    portfolioUrl: '',
    statement: '',
    availability: '15–20 hours / week',
    resumeFileName: '',
  });

  useEffect(() => {
    const trackParam = searchParams.get('track');
    if (trackParam && INTERNSHIPS.some((i) => i.slug === trackParam)) {
      setFormData((prev) => ({ ...prev, selectedInternshipSlug: trackParam }));
    }
  }, [searchParams]);

  const [errors, setErrors] = useState<Partial<Record<keyof ApplicationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionCompleted, setSubmissionCompleted] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ApplicationFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.university.trim()) {
      newErrors.university = 'University or institution name is required';
    }

    if (!formData.degree.trim()) {
      newErrors.degree = 'Degree or field of study is required';
    }

    if (!formData.graduationYear.trim()) {
      newErrors.graduationYear = 'Graduation year or current year is required';
    }

    if (!formData.skills.trim()) {
      newErrors.skills = 'Please list at least 2–3 relevant technical skills or languages';
    }

    if (!formData.githubUrl.trim()) {
      newErrors.githubUrl = 'GitHub profile URL is required to inspect code';
    } else if (!formData.githubUrl.includes('github.com')) {
      newErrors.githubUrl = 'Please provide a valid GitHub URL (e.g. https://github.com/username)';
    }

    if (!formData.statement.trim() || formData.statement.trim().length < 30) {
      newErrors.statement = 'Please write at least 30 characters explaining your interest and goals';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionCompleted(true);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }, 600);
  };

  const handleCopyPayload = () => {
    const payload = JSON.stringify(formData, null, 2);
    navigator.clipboard.writeText(payload);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2500);
  };

  const handleDownloadPayload = () => {
    const payload = JSON.stringify(formData, null, 2);
    const blob = new Blob([payload], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `application-${formData.selectedInternshipSlug}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleResetForm = () => {
    setSubmissionCompleted(false);
    setFormData({
      fullName: '',
      email: '',
      university: '',
      degree: '',
      graduationYear: '',
      selectedInternshipSlug: INTERNSHIPS[0].slug,
      skills: '',
      githubUrl: '',
      linkedinUrl: '',
      portfolioUrl: '',
      statement: '',
      availability: '15–20 hours / week',
      resumeFileName: '',
    });
    setErrors({});
  };

  const selectedTrackObj = INTERNSHIPS.find((i) => i.slug === formData.selectedInternshipSlug);

  return (
    <div className="py-16 lg:py-20 relative">
      <SEO
        title="Apply for an Internship"
        description="Submit your application for a Praxis software engineering internship track. Clean validation and transparent architecture."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <span>Application Portal</span>
            <span aria-hidden="true">/</span>
            <span className="text-slate-400">Direct Submission</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-3">
            Apply for an internship
          </h1>
          <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
            Please fill out your technical background, code links, and learning goals. We prioritize evidence of code curiosity and clear communication over traditional credentials.
          </p>
        </div>

        {/* Success / Staged State */}
        {submissionCompleted ? (
          <div className="bg-[#0E111C] border border-white/[0.08] rounded-2xl p-8 sm:p-12 shadow-2xl space-y-7 relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white font-heading">
                  Application Validated &amp; Ready
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Your application for{' '}
                  <span className="font-semibold text-cyan-400">
                    {selectedTrackObj?.title || formData.selectedInternshipSlug}
                  </span>{' '}
                  passed all client-side validation checks.
                </p>
              </div>
            </div>

            {/* Critical Architecture Notice */}
            <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-xl p-5 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-cyan-300 font-mono">
                <Info className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Static Deployment Notice (Transparent Architecture)</span>
              </div>
              <p className="leading-relaxed text-slate-400">
                As designed for this static release without a database, no data has been sent to an external server. Your application payload is fully validated and ready for integration. You can export or copy your structured submission payload below.
              </p>
            </div>

            {/* Application Data Preview Summary */}
            <div className="bg-black/40 border border-white/[0.08] rounded-xl p-6 space-y-3 font-mono text-xs">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Application Summary Payload
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-400">
                <div>
                  <span className="text-white font-medium">Applicant: </span>
                  {formData.fullName} ({formData.email})
                </div>
                <div>
                  <span className="text-white font-medium">Institution: </span>
                  {formData.university} · {formData.degree} ({formData.graduationYear})
                </div>
                <div>
                  <span className="text-white font-medium">Track: </span>
                  {selectedTrackObj?.title}
                </div>
                <div>
                  <span className="text-white font-medium">GitHub: </span>
                  <a
                    href={formData.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 underline"
                  >
                    {formData.githubUrl}
                  </a>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-white font-medium">Key Skills: </span>
                  {formData.skills}
                </div>
                <div className="sm:col-span-2">
                  <span className="text-white font-medium">Statement: </span>
                  <p className="text-slate-300 mt-1 italic font-sans">&ldquo;{formData.statement}&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopyPayload}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-white/[0.06] border border-white/[0.1] rounded-md hover:bg-white/[0.1] transition-all inline-flex items-center gap-1.5 cursor-pointer btn-secondary-interactive"
              >
                <Copy className="w-3.5 h-3.5 text-cyan-400" />
                <span>{copiedPayload ? 'Copied to Clipboard!' : 'Copy Application JSON'}</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadPayload}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-white/[0.06] border border-white/[0.1] rounded-md hover:bg-white/[0.1] transition-all inline-flex items-center gap-1.5 cursor-pointer btn-secondary-interactive"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download Payload (.json)</span>
              </button>

              <button
                type="button"
                onClick={handleResetForm}
                className="px-4 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-md transition-all inline-flex items-center gap-1.5 cursor-pointer ml-auto btn-interactive shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Submit Another Application</span>
              </button>
            </div>
          </div>
        ) : (
          /* Active Application Form */
          <form
            onSubmit={handleSubmit}
            className="bg-[#0E111C] border border-white/[0.08] rounded-2xl p-6 sm:p-10 space-y-8 shadow-2xl"
            noValidate
          >
            {/* Section 1: Candidate Identity */}
            <div>
              <h2 className="text-lg font-bold text-white mb-1 font-heading">
                1. Candidate Information
              </h2>
              <p className="text-xs text-slate-400 mb-4 font-mono">
                Personal contact details for communication regarding your application.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                    Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#151928] border rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 ${
                      errors.fullName ? 'border-red-400/80 bg-red-500/10' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#151928] border rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 ${
                      errors.email ? 'border-red-400/80 bg-red-500/10' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Section 2: Academic Background */}
            <div className="pt-6 border-t border-white/[0.06]">
              <h2 className="text-lg font-bold text-white mb-1 font-heading">
                2. Academic Background &amp; Standing
              </h2>
              <p className="text-xs text-slate-400 mb-4 font-mono">
                Students, recent graduates, or self-taught candidates are equally welcome.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="university" className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                    University / Institution <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="university"
                    type="text"
                    required
                    placeholder="e.g. UC Berkeley or Self-Directed"
                    value={formData.university}
                    onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#151928] border rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 ${
                      errors.university ? 'border-red-400/80 bg-red-500/10' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.university && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.university}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="degree" className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                    Degree / Field <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="degree"
                    type="text"
                    required
                    placeholder="e.g. B.S. Computer Science"
                    value={formData.degree}
                    onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#151928] border rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 ${
                      errors.degree ? 'border-red-400/80 bg-red-500/10' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.degree && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.degree}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="graduationYear" className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                    Current / Graduation Year <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="graduationYear"
                    type="text"
                    required
                    placeholder="e.g. 2026 or Recent Graduate"
                    value={formData.graduationYear}
                    onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#151928] border rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 ${
                      errors.graduationYear ? 'border-red-400/80 bg-red-500/10' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.graduationYear && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.graduationYear}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Section 3: Internship Track Selection */}
            <div className="pt-6 border-t border-white/[0.06]">
              <h2 className="text-lg font-bold text-white mb-1 font-heading">
                3. Internship Track Selection
              </h2>
              <p className="text-xs text-slate-400 mb-4 font-mono">
                Select the primary discipline you wish to focus on.
              </p>

              <div>
                <label htmlFor="trackSelect" className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                  Target Internship Track <span className="text-cyan-400">*</span>
                </label>
                <select
                  id="trackSelect"
                  value={formData.selectedInternshipSlug}
                  onChange={(e) => setFormData({ ...formData, selectedInternshipSlug: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#151928] border border-white/[0.08] rounded-md text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                >
                  {INTERNSHIPS.map((track) => (
                    <option key={track.slug} value={track.slug} className="bg-[#151928] text-white">
                      {track.title} ({track.duration} · {track.level})
                    </option>
                  ))}
                </select>

                {selectedTrackObj && (
                  <p className="text-xs text-slate-400 mt-2 bg-white/[0.03] p-3 rounded-lg border border-white/[0.06] font-mono">
                    <span className="text-cyan-300 font-semibold">Track Overview: </span>
                    {selectedTrackObj.shortDescription}
                  </p>
                )}
              </div>
            </div>

            {/* Section 4: Technical Profiles & Skills */}
            <div className="pt-6 border-t border-white/[0.06]">
              <h2 className="text-lg font-bold text-white mb-1 font-heading">
                4. Technical Experience &amp; Code Links
              </h2>
              <p className="text-xs text-slate-400 mb-4 font-mono">
                We review actual repositories and projects to evaluate current programming familiarity.
              </p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="skills" className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                    Relevant Technical Skills <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="skills"
                    type="text"
                    required
                    placeholder="e.g. TypeScript, React, Python, Git, Docker, SQL"
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#151928] border rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 ${
                      errors.skills ? 'border-red-400/80 bg-red-500/10' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.skills && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.skills}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="githubUrl" className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                      GitHub Profile URL <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="githubUrl"
                      type="url"
                      required
                      placeholder="https://github.com/yourusername"
                      value={formData.githubUrl}
                      onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs bg-[#151928] border rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 ${
                        errors.githubUrl ? 'border-red-400/80 bg-red-500/10' : 'border-white/[0.08]'
                      }`}
                    />
                    {errors.githubUrl && (
                      <p className="text-xs text-red-400 mt-1 font-mono">{errors.githubUrl}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="linkedinUrl" className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                      LinkedIn Profile (Optional)
                    </label>
                    <input
                      id="linkedinUrl"
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                      value={formData.linkedinUrl}
                      onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#151928] border border-white/[0.08] rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="portfolioUrl" className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                    Previous Projects / Portfolio Link (Optional)
                  </label>
                  <input
                    id="portfolioUrl"
                    type="url"
                    placeholder="https://yourportfolio.dev or repo link"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#151928] border border-white/[0.08] rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>
            </div>

            {/* Section 5: Intent & Availability */}
            <div className="pt-6 border-t border-white/[0.06]">
              <h2 className="text-lg font-bold text-white mb-1 font-heading">
                5. Motivation &amp; Availability
              </h2>
              <p className="text-xs text-slate-400 mb-4 font-mono">
                Help us understand why you are interested in this track and what time commitment you have.
              </p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="statement" className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                    Why are you interested in this internship? <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="statement"
                    rows={4}
                    required
                    placeholder="Briefly describe what you hope to build, what skills you are eager to develop, and how this fits your engineering journey..."
                    value={formData.statement}
                    onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#151928] border rounded-md text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 leading-relaxed ${
                      errors.statement ? 'border-red-400/80 bg-red-500/10' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.statement && (
                    <p className="text-xs text-red-400 mt-1 font-mono">{errors.statement}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="availability" className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                      Weekly Time Availability
                    </label>
                    <select
                      id="availability"
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#151928] border border-white/[0.08] rounded-md text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    >
                      <option value="12–15 hours / week" className="bg-[#151928] text-white">12–15 hours / week</option>
                      <option value="15–20 hours / week" className="bg-[#151928] text-white">15–20 hours / week (Recommended)</option>
                      <option value="20+ hours / week" className="bg-[#151928] text-white">20+ hours / week</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                      CV / Resume Reference (Optional)
                    </label>
                    <div className="relative">
                      <input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setFormData((prev) => ({ ...prev, resumeFileName: file.name }));
                          }
                        }}
                        className="w-full text-xs text-slate-400 file:mr-3 file:py-2 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-white/[0.06] file:text-slate-300 hover:file:bg-white/[0.1] cursor-pointer"
                      />
                    </div>
                    {formData.resumeFileName && (
                      <p className="text-xs text-emerald-400 mt-1 font-mono font-medium">
                        Selected: {formData.resumeFileName}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Form Action Footer */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 font-mono text-center sm:text-left">
                Fields marked with <span className="text-cyan-400">*</span> are required.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 rounded-md transition-all disabled:opacity-50 inline-flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(56,189,248,0.35)] btn-interactive"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                    <span>Validating Application...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
