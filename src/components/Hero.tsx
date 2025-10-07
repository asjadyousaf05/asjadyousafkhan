import React from 'react';
import { Github, Linkedin, Download, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import MyCV from './asjad_yousaf_khan.pdf'; // import your PDF

const Hero: React.FC = () => {
  const [heroRef, isHeroVisible] = useScrollAnimation(0.2);
  const [contentRef, isContentVisible] = useScrollAnimation(0.3);
  const [buttonsRef, isButtonsVisible] = useScrollAnimation(0.4);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        {}
        <div className={`mb-8 transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            AYK
          </div>
        </div>

        <div 
          ref={contentRef}
          className={`transition-all duration-1000 delay-300 ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Asjad Yousaf Khan
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
            Machine Learning & AI Enthusiast
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Exploring Machine Learning, Artificial Intelligence, and Data Science to solve real-world problems.
          </p>

          {/* Top buttons: GitHub & LinkedIn */}
          <div 
            ref={buttonsRef}
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 transition-all duration-1000 delay-500 ${isButtonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <a
              href="https://github.com/asjadyousaf05"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white dark:text-gray-900 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </a>
            
            <a
              href="https://www.linkedin.com/in/asjad-yousaf-khan-066680269"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>
          </div>

          {/* Bottom buttons: Email & Download CV */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${isButtonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="mailto:asjadyousafkhan07@gmail.com"
              className="inline-flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Mail className="w-4 h-4 mr-2" />
              asjadyousafkhan07@gmail.com
            </a>
            
            <a
              href={MyCV}
              download
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                         hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
