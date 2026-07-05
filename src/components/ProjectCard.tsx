import React from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../data/projects';
import { navigateTo } from '../utils/navigation';

interface ProjectCardProps {
  project: Project;
  delay?: number;
  visible?: boolean;
}

const getDomainLabel = (url?: string) => {
  if (!url) return '';
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0, visible = true }) => (
  <article
    className={`group glass-panel soft-ring relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1 ${
      visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <button
      type="button"
      onClick={() => navigateTo(`/projects/${project.slug}`)}
      className="block w-full text-left"
      aria-label={`Open ${project.title} case study`}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent" />
        <div className="absolute left-4 top-4 flex max-w-[calc(100%-2rem)] flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/88 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-900/84 dark:text-slate-100">
            {project.category}
          </span>
          {project.status && (
            <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900">
              {project.status}
            </span>
          )}
        </div>
      </div>
    </button>

    <div className="p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {project.title}
          </h3>
          {project.liveUrl && (
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
              {getDomainLabel(project.liveUrl)}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={() => navigateTo(`/projects/${project.slug}`)}
          aria-label={`Open ${project.title} case study`}
          className="mt-1 rounded-xl border border-slate-300/80 bg-white/85 p-2 text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 dark:border-slate-600/75 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-blue-500 dark:hover:text-blue-300"
        >
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
        {project.tagline}
      </p>
      <p className="mt-2 min-h-[72px] text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {project.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.slice(0, 5).map((tech) => (
          <span
            key={`${project.title}-${tech}`}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => navigateTo(`/projects/${project.slug}`)}
          className="btn-primary px-4 py-2 text-xs"
        >
          Case Study
          <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
        </button>

        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-4 py-2 text-xs"
          >
            <Github className="mr-1.5 h-3.5 w-3.5" />
            Source
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-4 py-2 text-xs"
          >
            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
            Live
          </a>
        )}
      </div>
    </div>
  </article>
);

export default ProjectCard;
