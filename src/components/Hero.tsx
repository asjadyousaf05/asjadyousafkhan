import React, { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import MyCV from './asjad_yousaf_khan.pdf';
import profileImage from '../profile.jpg';
import { navigateTo } from '../utils/navigation';

const rotatingHighlights = [
  'Computer Vision Apps',
  'RAG Chatbots',
  'ML Prediction Systems',
  'Full-Stack AI Products',
];

const Hero: React.FC = () => {
  const [heroRef, isHeroVisible] = useScrollAnimation(0.2);
  const [copyRef, isCopyVisible] = useScrollAnimation(0.25);
  const [mediaRef, isMediaVisible] = useScrollAnimation(0.2);
  const [activeHighlight, setActiveHighlight] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 28 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % rotatingHighlights.length);
    }, 2300);

    return () => window.clearInterval(interval);
  }, []);

  const handleHeroMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y });
  };

  const handleCardMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    setTilt({
      x: (0.5 - py) * 10,
      y: (px - 0.5) * 12,
    });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleHeroMove}
      onMouseLeave={() => setSpotlight({ x: 50, y: 28 })}
      style={{
        '--spot-x': `${spotlight.x}%`,
        '--spot-y': `${spotlight.y}%`,
      } as React.CSSProperties}
      className="hero-funky relative pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28"
    >
      <div aria-hidden className="hero-grid" />
      <div aria-hidden className="hero-blob hero-blob-one" />
      <div aria-hidden className="hero-blob hero-blob-two" />
      <div aria-hidden className="hero-blob hero-blob-three" />

      <div className="section-shell relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <div
            ref={copyRef}
            className={`transition-all duration-1000 ${
              isCopyVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="chip hero-tagline-glow animate-pulse-glow">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Junior AI/ML Engineer
            </span>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-slate-900 dark:text-slate-100 sm:text-5xl lg:text-6xl">
              Building practical AI systems as a
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-amber-500 bg-clip-text text-transparent">
                Junior AI/ML Engineer
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              Computer Science graduate from Quaid-i-Azam University with hands-on work in machine
              learning, deep learning, computer vision, NLP, RAG, LangChain, vector databases, and
              full-stack AI applications.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <span className="text-slate-500 dark:text-slate-400">Currently shipping:</span>
              <span key={activeHighlight} className="hero-rotating-word animate-fade-up">
                {rotatingHighlights[activeHighlight]}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => navigateTo('/projects')} className="btn-primary hero-cta-pulse">
                View Projects
                <ArrowDownRight className="ml-2 h-4 w-4" />
              </button>
              <a href={MyCV} download className="btn-secondary">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
              <a href="mailto:asjadyousafkhan07@gmail.com" className="btn-ghost">
                <Mail className="mr-2 h-4 w-4" />
                asjadyousafkhan07@gmail.com
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://github.com/asjadyousaf05"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-4"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/asjad-yousaf-khan-066680269"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-4"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
              {[
                'Machine Learning',
                'Computer Vision',
                'RAG + LangChain',
                'Full-Stack AI Apps',
              ].map((item) => (
                <span key={item} className="chip normal-case tracking-normal">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 border-y border-slate-200/80 py-4 dark:border-slate-700/70">
              <div className="grid gap-4 text-sm sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                    AI/ML Engineering
                  </p>
                  <p className="mt-1 leading-relaxed text-slate-600 dark:text-slate-300">
                    Model training, evaluation, prediction workflows, embeddings, and semantic search.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                    Vision + NLP Products
                  </p>
                  <p className="mt-1 leading-relaxed text-slate-600 dark:text-slate-300">
                    Object detection, face detection, image restoration, chatbots, and document Q&A.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={mediaRef}
            className={`relative transition-all duration-1000 ${
              isMediaVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div
              className="hero-tilt-shell"
              onMouseMove={handleCardMove}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              style={{
                transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              <div className="glass-panel soft-ring relative overflow-hidden p-5 sm:p-6">
                <div aria-hidden className="hero-card-glow" />
                <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-blue-500/25 blur-3xl" />
                <div className="absolute -left-14 bottom-0 h-36 w-36 rounded-full bg-amber-400/25 blur-3xl" />

                <div className="relative">
                  <img
                    src={profileImage}
                    alt="Asjad Yousaf Khan"
                    className="h-[360px] w-full rounded-2xl object-cover sm:h-[440px]"
                    loading="eager"
                  />

                  <div className="animate-float absolute -left-3 top-6 rounded-xl border border-white/60 bg-white/85 px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg shadow-slate-900/10 dark:border-slate-600/70 dark:bg-slate-900/85 dark:text-slate-200">
                    ML + Deep Learning
                  </div>

                  <div className="animate-float absolute -right-3 bottom-16 rounded-xl border border-white/60 bg-white/85 px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg shadow-slate-900/10 dark:border-slate-600/70 dark:bg-slate-900/85 dark:text-slate-200">
                    RAG + Computer Vision
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 divide-x divide-slate-200/80 border-y border-slate-200/80 py-4 text-center dark:divide-slate-700/70 dark:border-slate-700/70">
              <div className="px-3">
                <p className="font-display text-2xl font-semibold text-blue-600 dark:text-blue-300">20</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">Projects</p>
              </div>
              <div className="px-3">
                <p className="font-display text-2xl font-semibold text-amber-600 dark:text-amber-300">QAU</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">CS Graduate</p>
              </div>
              <div className="px-3">
                <p className="font-display text-2xl font-semibold text-cyan-600 dark:text-cyan-300">RAG</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">AI Apps</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`section-shell relative z-10 mt-14 transition-all duration-1000 ${
          isHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-4xl border-t border-slate-200/80 pt-6 text-center dark:border-slate-700/70">
          <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            I combine enterprise-grade web engineering with AI software development so businesses
            and users can get practical tools for prediction, search, vision, and automation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
