import React from 'react';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, FolderKanban } from 'lucide-react';
import { getFeaturedProjects, projects } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { navigateTo } from '../utils/navigation';

const Projects: React.FC = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation(0.2);
  const [projectsRef, isProjectsVisible] = useScrollAnimation(0.1);
  const featuredProjects = getFeaturedProjects();
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstSlide = carousel.querySelector<HTMLElement>('[data-featured-slide]');
    const slideWidth = firstSlide ? firstSlide.offsetWidth + 18 : carousel.clientWidth * 0.32;

    carousel.scrollBy({
      left: direction === 'left' ? -slideWidth : slideWidth,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return undefined;

    const interval = window.setInterval(() => {
      const nearEnd = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 24;

      if (nearEnd) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }

      scrollCarousel('right');
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="project-glass-aura project-glass-aura-one" />
        <div className="project-glass-aura project-glass-aura-two" />
      </div>

      <div className="section-shell">
        <div
          ref={titleRef}
          className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${
            isTitleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="chip">
            <FolderKanban className="mr-2 h-3.5 w-3.5" />
            Selected Work
          </span>
          <h2 className="section-title mt-4">
            Featured <span className="text-blue-600 dark:text-blue-300">Projects</span>
          </h2>
          <p className="section-subtitle">
            A focused preview of AI systems, computer vision products, RAG workflows, and live web
            projects. The complete catalog has {projects.length} projects with individual case
            studies.
          </p>
        </div>

        <div
          ref={projectsRef}
          className={`featured-carousel-shell mt-10 transition-all duration-1000 ${
            isProjectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                Featured Case Studies
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Compact highlights from the complete project catalog.
              </p>
            </div>
          </div>

          <div className="featured-carousel-stage">
            <button
              type="button"
              onClick={() => scrollCarousel('left')}
              className="featured-carousel-control featured-carousel-control-left"
              aria-label="Previous featured project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div ref={carouselRef} className="featured-carousel-track">
              {featuredProjects.map((project) => (
                <article key={project.slug} data-featured-slide className="featured-project-slide">
                  <button
                    type="button"
                    onClick={() => navigateTo(`/projects/${project.slug}`)}
                    className="featured-project-card group"
                    aria-label={`Open ${project.title} case study`}
                  >
                    <div className="featured-project-media">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/78 via-slate-950/16 to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full bg-white/88 px-3 py-1 text-[11px] font-semibold text-slate-800 backdrop-blur">
                        {project.category}
                      </span>
                    </div>

                    <div className="featured-project-content">
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                            {project.status || 'Case Study'}
                          </span>
                          <span className="featured-project-arrow">
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                        <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-slate-950 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-200">
                          {project.tagline}
                        </p>
                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                          {project.summary}
                        </p>
                      </div>

                      <div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.techStack.slice(0, 3).map((tech) => (
                            <span key={`${project.slug}-${tech}`} className="featured-project-tech">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 flex items-center justify-between border-t border-slate-200/70 pt-3 dark:border-white/10">
                          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                            Read full case study
                          </span>
                          {project.liveUrl && <ExternalLink className="h-4 w-4 text-blue-600 dark:text-blue-300" />}
                        </div>
                      </div>
                    </div>
                  </button>
                </article>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollCarousel('right')}
              className="featured-carousel-control featured-carousel-control-right"
              aria-label="Next featured project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button type="button" onClick={() => navigateTo('/projects')} className="btn-primary">
            View Full Projects Page
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
