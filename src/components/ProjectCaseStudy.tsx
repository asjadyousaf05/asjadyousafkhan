import React from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Layers3,
} from 'lucide-react';
import { getProjectBySlug, projects } from '../data/projects';
import { navigateTo } from '../utils/navigation';
import ProjectCard from './ProjectCard';

interface ProjectCaseStudyProps {
  slug: string;
}

const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({ slug }) => {
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="pt-16 sm:pt-20">
        <section className="py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-display text-3xl font-semibold text-slate-900 dark:text-slate-100">
                Project not found
              </p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                This case study may have moved or the link may be incorrect.
              </p>
              <button type="button" onClick={() => navigateTo('/projects')} className="btn-primary mt-6">
                Back to Projects
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug && item.category === project.category)
    .slice(0, 3);

  return (
    <main className="pt-16 sm:pt-20">
      <section className="py-10 sm:py-14">
        <div className="section-shell">
          <button type="button" onClick={() => navigateTo('/projects')} className="btn-secondary px-4 py-2">
            <ArrowLeft className="mr-2 h-4 w-4" />
            All Projects
          </button>

          <div className="case-study-hero mt-7">
            <img
              src={project.image}
              alt={`${project.title} project visual`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/68 to-slate-950/18" />
            <div className="relative z-10 max-w-4xl p-6 sm:p-10 lg:p-12">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800">
                  {project.category}
                </span>
                {project.status && (
                  <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900">
                    {project.status}
                  </span>
                )}
              </div>

              <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-3xl text-lg font-semibold leading-relaxed text-blue-100 sm:text-xl">
                {project.tagline}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
                {project.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Visit Live Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/12 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/18"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Source
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="case-study-meta">
            <div>
              <p className="case-study-meta-label">Role</p>
              <p className="case-study-meta-value">{project.caseStudy.role}</p>
            </div>
            <div>
              <p className="case-study-meta-label">Category</p>
              <p className="case-study-meta-value">{project.category}</p>
            </div>
            <div>
              <p className="case-study-meta-label">Core Stack</p>
              <p className="case-study-meta-value">{project.techStack.slice(0, 4).join(' / ')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(280px,0.28fr)]">
            <article className="case-study-copy">
              <section className="case-study-section">
                <p className="case-study-kicker">Overview</p>
                <h2>Context and project goal</h2>
                <p>{project.caseStudy.context}</p>
              </section>

              <section className="case-study-section">
                <p className="case-study-kicker">Challenge</p>
                <h2>The problem to solve</h2>
                <p>{project.caseStudy.challenge}</p>
              </section>

              <section className="case-study-section">
                <p className="case-study-kicker">Approach</p>
                <h2>How the solution was built</h2>
                <div className="mt-5 divide-y divide-slate-200/80 dark:divide-slate-700/70">
                  {project.caseStudy.approach.map((item, index) => (
                    <div key={item} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                      <span className="case-study-step">{String(index + 1).padStart(2, '0')}</span>
                      <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            <aside className="case-study-sidebar">
              <section>
                <div className="flex items-center gap-2">
                  <Layers3 className="h-4 w-4 text-amber-600 dark:text-amber-300" />
                  <h3>Key Features</h3>
                </div>
                <div className="mt-4 space-y-3">
                  {project.caseStudy.features.map((feature) => (
                    <div key={feature} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-300" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-300" />
                  <h3>Results</h3>
                </div>
                <div className="mt-4 space-y-3">
                  {project.caseStudy.results.map((result) => (
                    <div key={result} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-300" />
                      <p>{result}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3>Technologies</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200/80 bg-white/75 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </aside>
          </div>

          {relatedProjects.length > 0 && (
            <div className="mt-16 border-t border-slate-200/80 pt-10 dark:border-slate-700/70">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-display text-3xl font-semibold text-slate-900 dark:text-slate-100">
                    Related Projects
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    More work from the same category.
                  </p>
                </div>
                <button type="button" onClick={() => navigateTo('/projects')} className="btn-secondary self-start">
                  Browse All
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {relatedProjects.map((relatedProject, index) => (
                  <ProjectCard
                    key={relatedProject.slug}
                    project={relatedProject}
                    delay={index * 70}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProjectCaseStudy;
