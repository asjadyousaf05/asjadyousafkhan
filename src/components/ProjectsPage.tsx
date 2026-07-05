import React from 'react';
import { ArrowLeft, Briefcase, Search } from 'lucide-react';
import { projectCategories, projects, type ProjectCategory } from '../data/projects';
import { navigateTo } from '../utils/navigation';
import ProjectCard from './ProjectCard';

type ActiveCategory = 'All' | ProjectCategory;

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<ActiveCategory>('All');
  const [query, setQuery] = React.useState('');

  const normalizedQuery = query.trim().toLowerCase();
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const searchable = [
      project.title,
      project.tagline,
      project.summary,
      project.category,
      project.techStack.join(' '),
    ]
      .join(' ')
      .toLowerCase();

    return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
  });

  return (
    <main className="pt-16 sm:pt-20">
      <section className="py-14 sm:py-18">
        <div className="section-shell">
          <button type="button" onClick={() => navigateTo('/')} className="btn-secondary px-4 py-2">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back Home
          </button>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_0.42fr] lg:items-end">
            <div>
              <span className="chip">
                <Briefcase className="mr-2 h-3.5 w-3.5" />
                Complete Project Catalog
              </span>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
                AI, ML, computer vision, NLP, and web development work.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                Browse the full portfolio without making the homepage too long. Each project opens
                into a case study with context, challenge, approach, features, results, and stack
                details.
              </p>
            </div>

            <div className="glass-panel soft-ring rounded-3xl p-5">
              <p className="font-display text-3xl font-semibold text-blue-600 dark:text-blue-300">
                {projects.length}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                Portfolio projects
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Including final year AI work, RAG systems, image restoration, deepfake detection,
                deployed ML demos, and business websites.
              </p>
            </div>
          </div>

          <div className="mt-9 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by project, skill, or category"
                className="w-full rounded-2xl border border-slate-300/80 bg-white/85 py-3 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition duration-300 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-slate-600/75 dark:bg-slate-900/70 dark:text-slate-100 dark:focus:border-blue-500 dark:focus:ring-blue-500/25"
              />
            </label>

            <div className="flex flex-wrap gap-2">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                      : 'bg-white/80 text-slate-700 shadow-sm hover:-translate-y-0.5 hover:text-blue-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:text-blue-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                delay={Math.min(index * 50, 260)}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="glass-panel soft-ring mt-10 rounded-3xl p-8 text-center">
              <p className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-100">
                No matching projects found.
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Try a different search term or category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
