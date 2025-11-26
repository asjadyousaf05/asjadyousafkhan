import React, { useEffect, useState } from 'react';
import { Code, Brain, Wrench } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

function useCountUp(target: number, isActive: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(target * progress);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, isActive, duration]);

  return value;
}

const Skills: React.FC = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation(0.2);
  const [categoriesRef, visibleCategories] = useStaggeredAnimation(3, 200);
  const [statsRef, isStatsVisible] = useScrollAnimation(0.3);

  const stats = [
    { label: 'Projects Completed', value: 15, color: 'text-blue-600', suffix: '+' },
    { label: 'ML Models Built', value: 8, color: 'text-purple-600', suffix: '+' },
    { label: 'CGPA', value: 3.2, color: 'text-green-600' },
    { label: 'Years Learning', value: 4, color: 'text-orange-600', suffix: '+' },
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["C++", "Java", "Python", "HTML", "CSS", "JavaScript", "SQL"]
    },
    {
      title: "ML/AI Frameworks",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "PyTorch",
        "Matplotlib", "Seaborn", "OpenCV", "XGBoost", "LightGBM",
        "NLTK", "spaCy", "Hugging Face Transformers"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      skills: [
        "Flask", "Streamlit", "Git", "Jupyter Notebook",
        "Google Colab", "VS Code"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div
          ref={categoriesRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`
                bg-white dark:bg-gray-900 rounded-xl p-6
                shadow-md dark:shadow-black/20
                hover:shadow-xl dark:hover:shadow-white/20
                transition-all duration-700 transform hover:-translate-y-1
                ${visibleCategories[index] ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-12 rotate-3'}
              `}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`
                      px-3 py-2 rounded-lg text-center text-sm font-medium
                      bg-gray-100 dark:bg-gray-800
                      text-gray-700 dark:text-gray-300
                      hover:bg-blue-50 dark:hover:bg-blue-900/20
                      hover:text-blue-600 dark:hover:text-blue-400
                      transition-all duration-300 cursor-default transform hover:scale-105
                      ${visibleCategories[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                    `}
                    style={{ transitionDelay: `${(skillIndex * 50) + (index * 200)}ms` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Stats */}
        <div
          ref={statsRef}
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {stats.map((stat, idx) => {
            const count = useCountUp(stat.value, isStatsVisible, 1200 + idx * 150);
            const isDecimal = stat.value % 1 !== 0;
            const display = isDecimal ? count.toFixed(1) : Math.round(count).toString();
            return (
              <div key={stat.label} className="text-center">
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  {display}
                  {stat.suffix || ''}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
