import React from 'react';
import { BadgeCheck, CalendarDays, GraduationCap, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const focusAreas = [
  'Machine learning model training, evaluation, and feature engineering',
  'Computer vision systems for object detection, face detection, and image restoration',
  'NLP, RAG, LangChain, embeddings, vector databases, and semantic search',
  'Full-stack AI applications with REST APIs, SQL databases, and practical UI flows',
];

const coursework = [
  'Machine Learning',
  'Artificial Intelligence',
  'Deep Learning',
  'Computer Vision',
  'Natural Language Processing',
  'Data Structures and Algorithms',
  'Database Systems',
  'Software Engineering',
];

const About: React.FC = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation(0.2);
  const [contentRef, isContentVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <div
          ref={titleRef}
          className={`text-center transition-all duration-1000 ${
            isTitleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="section-title">
            About <span className="text-blue-600 dark:text-blue-300">Me</span>
          </h2>
          <p className="section-subtitle">
            Computer Science graduate focused on practical AI/ML systems, computer vision, NLP, and
            full-stack AI applications.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`mt-10 grid gap-10 border-y border-slate-200/80 py-10 dark:border-slate-700/70 lg:grid-cols-[1.15fr_0.85fr] transition-all duration-1000 ${
            isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <article>
            <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Professional Summary
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              I am a Junior AI/ML Engineer and Computer Science graduate with hands-on experience
              in machine learning, deep learning, computer vision, natural language processing,
              retrieval-augmented generation, LangChain, vector databases, and full-stack AI
              applications.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              My project work includes object detection, face detection, speech-based interaction,
              document question answering, image restoration, sentiment analysis, disease
              prediction, plagiarism detection, deepfake detection, and business web systems.
            </p>

            <div className="mt-7 divide-y divide-slate-200/80 dark:divide-slate-700/70">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-start gap-3 py-3"
                >
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-300" />
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{area}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="divide-y divide-slate-200/80 dark:divide-slate-700/70">
            <section className="pb-6">
              <h4 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
                Education
              </h4>
              <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                  BS Computer Science
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                  Quaid-i-Azam University
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                  Islamabad, Pakistan
                </div>
              </div>
            </section>

            <section className="py-6">
              <h4 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
                Certifications
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>Google Certified Professional Machine Learning Engineer</li>
                <li>Udemy Certificate</li>
              </ul>
            </section>

            <section className="py-6">
              <h4 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
                Coursework
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {coursework.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="pt-6">
              <h4 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
                Current Focus
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>Building RAG chatbots and document Q&A systems</li>
                <li>Improving computer vision and deep learning workflows</li>
                <li>Shipping full-stack AI applications with clean user experiences</li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
