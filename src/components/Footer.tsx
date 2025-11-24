import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer: React.FC = () => {
  const [footerRef, isFooterVisible] = useScrollAnimation(0.2);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={footerRef}
      className="bg-gray-900 dark:bg-gray-950 text-white py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col items-center transition-all duration-1000 ${isFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="mb-8 p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200 transform hover:-translate-y-1"
          >
            <ArrowUp className="w-6 h-6" />
          </button>

          {/* Name and Title */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Asjad Yousaf Khan</h3>
            <p className="text-gray-400">Machine Learning & AI Enthusiast</p>
          </div>

          {/* Navigation Links */}
          <nav className="mb-8">
            <div className="flex flex-wrap justify-center gap-6">
              {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gray-800 mb-8"></div>

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p className="flex items-center justify-center">
              © {new Date().getFullYear()} Asjad Yousaf Khan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
