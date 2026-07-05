import React from 'react';
import { BrainCircuit, Database, MonitorSmartphone, Sparkles, Wrench } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const skillGroups = [
  {
    title: 'Machine Learning',
    icon: <Database className="h-5 w-5" />,
    color: 'from-blue-600 to-cyan-500',
    skills: [
      'Supervised Learning',
      'Classification',
      'Regression',
      'Data Preprocessing',
      'Feature Engineering',
      'Model Training',
      'Model Evaluation',
      'Scikit-learn',
    ],
  },
  {
    title: 'Deep Learning & Vision',
    icon: <MonitorSmartphone className="h-5 w-5" />,
    color: 'from-amber-500 to-orange-500',
    skills: [
      'TensorFlow',
      'PyTorch',
      'OpenCV',
      'Object Detection',
      'Face Detection',
      'Image Processing',
      'Image Restoration',
      'Deepfake Detection',
    ],
  },
  {
    title: 'NLP & Generative AI',
    icon: <BrainCircuit className="h-5 w-5" />,
    color: 'from-violet-500 to-fuchsia-500',
    skills: [
      'NLP',
      'Sentiment Analysis',
      'RAG',
      'LangChain',
      'Vector Databases',
      'Embeddings',
      'Semantic Search',
      'Prompt Engineering',
    ],
  },
  {
    title: 'Development Toolkit',
    icon: <Wrench className="h-5 w-5" />,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      'Python',
      'SQL',
      'JavaScript',
      'C++',
      'REST APIs',
      'Full-Stack Apps',
      'Git & GitHub',
      'Jupyter/Colab',
    ],
  },
];

const logoSkills = [
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'TensorFlow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  },
  {
    name: 'PyTorch',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  },
  {
    name: 'OpenCV',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
  },
  {
    name: 'Scikit-learn',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
  },
  {
    name: 'NumPy',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  },
  {
    name: 'Pandas',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  },
  {
    name: 'Jupyter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'C++',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
];

const topSkills = [
  { name: 'Machine Learning Workflows', color: 'from-blue-600 to-cyan-500' },
  { name: 'Computer Vision Systems', color: 'from-amber-500 to-orange-500' },
  { name: 'RAG + LangChain Apps', color: 'from-violet-600 to-fuchsia-500' },
  { name: 'NLP Text Classification', color: 'from-indigo-500 to-violet-600' },
  { name: 'Model Training & Evaluation', color: 'from-sky-500 to-blue-600' },
  { name: 'Image Processing Pipelines', color: 'from-orange-500 to-rose-500' },
  { name: 'Full-Stack AI Applications', color: 'from-emerald-500 to-teal-500' },
  { name: 'REST API Development', color: 'from-cyan-500 to-blue-500' },
];

const deliveryStrengths = [
  { label: 'Machine Learning Projects', value: 92, color: 'from-blue-600 to-cyan-500' },
  { label: 'Computer Vision Workflows', value: 90, color: 'from-amber-500 to-orange-500' },
  { label: 'NLP and RAG Applications', value: 91, color: 'from-violet-600 to-fuchsia-500' },
  { label: 'Full-Stack AI Delivery', value: 88, color: 'from-emerald-500 to-teal-500' },
];

const Skills: React.FC = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation(0.2);
  const [topSkillsRef, isTopSkillsVisible] = useScrollAnimation(0.2);
  const [groupsRef, visibleGroups] = useStaggeredAnimation(skillGroups.length, 130);
  const [metricsRef, isMetricsVisible] = useScrollAnimation(0.2);

  return (
    <section id="skills" className="relative py-20 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="skills-ambient skills-ambient-one" />
        <div className="skills-ambient skills-ambient-two" />
        <div className="skills-ambient skills-ambient-three" />
      </div>

      <div className="section-shell">
        <div
          ref={titleRef}
          className={`text-center transition-all duration-1000 ${
            isTitleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="section-title">
            Technical <span className="text-blue-600 dark:text-blue-300">Capabilities</span>
          </h2>
          <p className="section-subtitle">
            Practical AI/ML engineering across model development, computer vision, NLP, RAG, and
            full-stack application delivery.
          </p>
        </div>

        <div
          className={`mt-8 transition-all duration-1000 ${
            isTitleVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="skill-marquee glass-panel soft-ring rounded-2xl px-2 sm:px-3">
            <div className="skill-marquee-track">
              {[...logoSkills, ...logoSkills].map((skill, index) => (
                <span key={`${skill.name}-${index}`} className="skill-logo-tile">
                  <img src={skill.icon} alt="" className="h-8 w-8 object-contain" loading="lazy" />
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={topSkillsRef}
          className={`mt-7 transition-all duration-1000 ${
            isTopSkillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="border-y border-slate-200/80 py-6 dark:border-slate-700/70">
            <div className="mb-4 flex items-center gap-2 text-slate-700 dark:text-slate-200">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-300" />
              <h3 className="font-display text-xl font-semibold">Top Skills</h3>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 xl:grid-cols-4">
              {topSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`transition-all duration-500 ${
                    isTopSkillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${index * 85}ms` }}
                >
                  <span
                    className={`mb-2 inline-block h-1.5 w-12 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={groupsRef} className="mt-10 divide-y divide-slate-200/80 dark:divide-slate-700/70">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className={`grid gap-5 py-7 transition-all duration-700 md:grid-cols-[0.35fr_0.65fr] md:items-start ${
                visibleGroups[index] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`rounded-xl bg-gradient-to-r ${group.color} p-2.5 text-white shadow-lg`}
                >
                  {group.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={`${group.title}-${skill}`}
                    className="rounded-full border border-slate-200/80 bg-white/50 px-3 py-1.5 text-sm font-semibold text-slate-700 transition duration-300 hover:border-blue-300 hover:text-blue-700 dark:border-slate-700/70 dark:bg-slate-900/30 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div
          className={`mt-10 border-y border-slate-200/80 py-8 transition-all duration-1000 dark:border-slate-700/70 ${
            isTopSkillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
            <div>
            <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Execution Strength
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Capability areas I prioritize when building model-powered and user-facing systems.
            </p>
            </div>

            <div className="space-y-4">
              {deliveryStrengths.map((strength, index) => (
                <div key={strength.label}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {strength.label}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {strength.value}%
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800/80">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${strength.color} transition-all duration-1000 ease-out`}
                      style={{
                        width: isTopSkillsVisible ? `${strength.value}%` : '0%',
                        transitionDelay: `${index * 130}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={metricsRef}
          className={`mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 transition-all duration-1000 ${
            isMetricsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
            {[
            { value: '20', label: 'Projects Documented' },
            { value: 'QAU', label: 'Computer Science Graduate' },
            { value: 'RAG', label: 'Document Q&A Systems' },
            { value: 'CV', label: 'Vision Workflows' },
          ].map((metric, index) => (
            <div
              key={metric.label}
              className={`border-l border-slate-200/80 px-4 py-2 text-center transition-all duration-500 first:border-l-0 dark:border-slate-700/70 ${
                isMetricsVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <p className="font-display text-3xl font-semibold text-blue-600 dark:text-blue-300">
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
