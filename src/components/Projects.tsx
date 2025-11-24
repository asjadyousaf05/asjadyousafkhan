import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects: React.FC = () => {
  const [filter, setFilter] = React.useState("All");

  const projects = [
   
    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio website showcasing projects and skills, deployed on GitHub Pages with modern design principles.",
      techStack: ["HTML", "CSS", "JavaScript"],
      category: "Web Development",
      githubUrl: "https://github.com/asjadyousaf05/asjadyousafkhan",
      demoUrl: "asjadyousaf.online",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=850&h=400&fit=crop"
    },
    {
      title: "Disease Prediction System",
      description: "Cloud-based machine learning application for predicting diseases based on symptoms using advanced ML algorithms.",
      techStack: ["Python", "Scikit-learn", "Flask", "Streamlit"],
      category: "Machine Learning",
      githubUrl: "https://github.com/asjadyousaf05/Disease_Predictor_ML_Project",
      demoUrl: "https://diseasepredictormlproject-gd2sfquwaeamoxsuc4gpwn.streamlit.app/",
      image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=850&h=400&fit=crop"
    },
    {
      title: "Movie Recommender System",
      description: "Personalized movie recommendation system using collaborative filtering and content-based approaches.",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      category: "Machine Learning",
      githubUrl: "https://github.com/asjadyousaf05/Machine-Learning-Projects/tree/main/Day%2014-%20Movie%20Reccomendation%20System",
      demoUrl: "#",
      image: "https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=850&h=400&fit=crop"
    },
    {
      title: "Spam Detection System",
      description: "Email spam detection using TF-IDF vectorization and classification algorithms.",
      techStack: ["Python", "NLTK", "Scikit-learn"],
      category: "Natural Language Processing",
      githubUrl: "#",
      demoUrl: "#",
      image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=850&h=400&fit=crop"
    },
    {
      title: "Sentiment Analysis Tool",
      description: "NLP-powered sentiment analysis system for brand monitoring and social media insights.",
      techStack: ["Python", "NLTK", "spaCy", "Transformers"],
      category: "Natural Language Processing",
      githubUrl: "#",
      demoUrl: "#",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=850&h=400&fit=crop"
    },
    {
      title: "Disaster Tweets Detector",
      description: "Real-time disaster tweet detection system for emergency response using NLP techniques.",
      techStack: ["Python", "TensorFlow", "Twitter API"],
      category: "Natural Language Processing",
      githubUrl: "https://github.com/asjadyousaf05/Machine-Learning-Projects",
      demoUrl: "#",
      image: "https://images.pexels.com/photos/73833/hurricane-earth-satellite-tracking-73833.jpeg?auto=compress&cs=tinysrgb&w=850&h=400&fit=crop"
    },
    {
      title: "SVM Classifier Suite",
      description: "Optimized SVM classifiers for health, finance, and text classification with high accuracy.",
      techStack: ["Python", "Scikit-learn", "NumPy", "Matplotlib"],
      category: "Machine Learning",
      githubUrl: "https://github.com/asjadyousaf05/Machine-Learning-Projects",
      demoUrl: "#",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=850&h=400&fit=crop"
    },
    {
      title: "AI Math Solver",
      description: "Offline ML app for solving math problems from text/images with explanations.",
      techStack: ["Python", "TensorFlow", "OpenCV"],
      category: "Artificial Intelligence",
      githubUrl: "https://github.com/asjadyousaf05/Machine-Learning-Projects",
      demoUrl: "#",
      image: "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=850&h=400&fit=crop"
    },
    {
  title: "AI Plagiarism Checker",
  description: "An offline/online ML-powered plagiarism detection tool that compares text against multiple sources and generates similarity reports.",
  techStack: ["Python", "NLP", "Transformers", "Scikit-learn"],
  category: "Natural Language Processing",
  githubUrl: "https://github.com/asjadyousaf05/Plagiarism-Checker",
  demoUrl: "#",
  image: "https://images.pexels.com/photos/4195407/pexels-photo-4195407.jpeg?auto=compress&cs=tinysrgb&w=850&h=400&fit=crop"
},
{
  title: "AI Recipe Bot",
  description: "A smart AI chatbot that generates recipes from ingredients, suggests meals, and provides step-by-step cooking instructions.",
  techStack: ["Python", "NLP", "Tf-Idf", "Flask"],
  category: "Natural Language Processing",
  githubUrl: "https://github.com/asjadyousaf05/Recipes-ChatBot",
  demoUrl: "https://intent-recipe-chatbot.streamlit.app/",
  image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=850&h=400&fit=crop"
}


  ];

  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my machine learning, AI, and software development projects
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="flex justify-center mb-10">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            {categories.map((cat, i) => (
              <option key={i}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-7xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md dark:shadow-black/20 hover:shadow-xl dark:hover:shadow-white/20 overflow-hidden h-[400px] flex flex-col transition-all duration-500">
                {/* Project Image */}
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-md shadow-sm dark:shadow-black/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demoUrl}
                      className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide >
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
