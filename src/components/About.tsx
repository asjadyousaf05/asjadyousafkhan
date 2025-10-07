import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation(0.2);
  const [contentRef, isContentVisible] = useScrollAnimation(0.3);
  const [bioRef, isBioVisible] = useScrollAnimation(0.2);
  const [educationRef, isEducationVisible] = useScrollAnimation(0.3);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="text-blue-600">Me</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get to know more about my journey and background
            </p>
          </div>

          {/* Content Grid */}
          <div 
            ref={contentRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${isContentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            {/* Bio Section */}
            <div 
              ref={bioRef}
              className={`transition-all duration-1000 delay-500 ${isBioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm an enthusiastic Computer Science student at Quaid-i-Azam University 
                specializing in Machine Learning and AI. Passionate about data-driven solutions, 
                continuous learning, and building AI tools for real-world challenges.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                My fascination with artificial intelligence drives me to explore cutting-edge 
                technologies and develop innovative solutions that can make a meaningful impact 
                on society. I believe in the power of machine learning to solve complex problems 
                and create a better future.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium shadow-sm dark:shadow-black/20">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium shadow-sm dark:shadow-black/20">
                  AI Enthusiast
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium shadow-sm dark:shadow-black/20">
                  Quick Learner
                </span>
              </div>
            </div>

            {/* Education & Info */}
            <div 
              ref={educationRef}
              className={`space-y-6 transition-all duration-1000 delay-700 ${isEducationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {/* Education Card */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md dark:shadow-black/20 hover:shadow-lg dark:hover:shadow-white/20 transition-all duration-500">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4 shadow-sm dark:shadow-black/20">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Education
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      BS Computer Science
                    </p>
                  </div>
                </div>
                <div className="space-y-2 ml-16">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    Quaid-i-Azam University
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    2022 – 2026
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Award className="w-4 h-4 mr-2" />
                    CGPA: 3.2/4.0
                  </div>
                </div>
              </div>

              {/* Areas of Interest Card */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 shadow-md dark:shadow-black/20 hover:shadow-lg dark:hover:shadow-white/20 transition-all duration-500">
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Areas of Interest
                </h4>
                <ul className="space-y-2">
                  {[
                    "Machine Learning & Deep Learning",
                    "Natural Language Processing",
                    "Computer Vision",
                    "Data Science & Analytics",
                    "AI Ethics & Responsible AI",
                    "Software Development"
                  ].map((interest, index) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
