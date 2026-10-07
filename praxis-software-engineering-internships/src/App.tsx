import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { InternshipsPage } from './pages/InternshipsPage';
import { InternshipDetailPage } from './pages/InternshipDetailPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ProjectsSkillsPage } from './pages/ProjectsSkillsPage';
import { AboutPage } from './pages/AboutPage';
import { ApplyPage } from './pages/ApplyPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { path } = useRouter();

  const renderCurrentPage = () => {
    // Normal root path
    if (path === '/' || path === '') {
      return <HomePage />;
    }

    // Internships list
    if (path === '/internships' || path === '/internships/') {
      return <InternshipsPage />;
    }

    // Internship detail: /internships/:slug
    if (path.startsWith('/internships/')) {
      const slug = path.replace('/internships/', '').replace(/\/$/, '');
      if (slug) {
        return <InternshipDetailPage slug={slug} />;
      }
      return <InternshipsPage />;
    }

    // How It Works
    if (path === '/how-it-works' || path === '/how-it-works/') {
      return <HowItWorksPage />;
    }

    // Projects & Skills
    if (path === '/projects-and-skills' || path === '/projects-and-skills/') {
      return <ProjectsSkillsPage />;
    }

    // About
    if (path === '/about' || path === '/about/') {
      return <AboutPage />;
    }

    // Apply
    if (path === '/apply' || path === '/apply/') {
      return <ApplyPage />;
    }

    // 404 Fallback
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090A10] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Header />
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
