export type ProjectCategory =
  | 'AI/ML Engineering'
  | 'Computer Vision'
  | 'NLP & Generative AI'
  | 'Web Development';

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  category: ProjectCategory;
  image: string;
  techStack: string[];
  liveUrl?: string;
  codeUrl?: string;
  status?: string;
  featuredHome?: boolean;
  caseStudy: {
    role: string;
    context: string;
    challenge: string;
    approach: string[];
    features: string[];
    results: string[];
  };
}

export const projects: Project[] = [
  {
    slug: 'ai-vision-assistant-app',
    title: 'AI Vision Assistant App',
    tagline: 'Assistive computer vision with voice commands and audio feedback.',
    summary:
      'Final year project with mobile and Raspberry Pi modes for camera-based environment understanding, object detection, face detection, speech input, and spoken output.',
    category: 'Computer Vision',
    image:
      'https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['Computer Vision', 'OpenCV', 'Speech I/O', 'Raspberry Pi', 'Mobile AI'],
    status: 'Final Year Project',
    featuredHome: true,
    caseStudy: {
      role: 'AI/ML Engineer and full workflow developer',
      context:
        'The project focuses on assistive technology for people who need hands-free visual awareness from a mobile device or Raspberry Pi camera setup.',
      challenge:
        'The system needed to combine camera input, visual recognition, voice commands, and clear audio feedback in a practical end-to-end flow.',
      approach: [
        'Designed separate mobile and Raspberry Pi interaction modes for flexible usage.',
        'Implemented camera capture, preprocessing, visual detection, and response generation as one AI workflow.',
        'Connected voice commands with spoken output so the app can be used without constant screen interaction.',
      ],
      features: [
        'Object detection for environment understanding',
        'Face detection for nearby-person awareness',
        'Speech input and audio response workflow',
        'Mobile and Raspberry Pi operating modes',
      ],
      results: [
        'Created a complete assistive vision prototype from input capture to spoken feedback.',
        'Demonstrated practical computer vision integration across hardware and mobile contexts.',
      ],
    },
  },
  {
    slug: 'v-prep-ai-interview-platform',
    title: 'V Prep',
    tagline: 'AI interview preparation platform using LangChain and structured feedback.',
    summary:
      'Generates interview questions, contextual follow-ups, practice sessions, and STAR-method feedback for behavioral interview preparation.',
    category: 'NLP & Generative AI',
    image:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['LangChain', 'NLP', 'Generative AI', 'Prompt Engineering', 'STAR Method'],
    status: 'AI Product',
    featuredHome: true,
    caseStudy: {
      role: 'AI application developer',
      context:
        'V Prep helps candidates practice interviews with dynamic AI questions and structured response coaching.',
      challenge:
        'The main challenge was creating a conversational flow that feels adaptive while still guiding users toward clear, professional answers.',
      approach: [
        'Built LangChain-powered workflows for dynamic question generation and follow-up prompts.',
        'Designed response evaluation patterns around the STAR method for behavioral answers.',
        'Used NLP-oriented prompt design to keep feedback specific, useful, and easy to act on.',
      ],
      features: [
        'Interview question generation',
        'Contextual follow-up questions',
        'Practice sessions by topic or answer type',
        'STAR-method answer structuring',
      ],
      results: [
        'Delivered a focused AI practice flow for interview readiness.',
        'Improved user preparation by turning open-ended answers into structured responses.',
      ],
    },
  },
  {
    slug: 'cs-qau-chatbot',
    title: 'CS QAU Chatbot',
    tagline: 'RAG chatbot for department document question answering.',
    summary:
      'Retrieval-augmented chatbot using embeddings, vector search, semantic retrieval, and conversational response generation for CS department documents.',
    category: 'NLP & Generative AI',
    image:
      'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['RAG', 'Vector Database', 'Embeddings', 'Semantic Search', 'LangChain'],
    status: 'RAG System',
    featuredHome: true,
    caseStudy: {
      role: 'RAG workflow developer',
      context:
        'The chatbot improves access to department information by answering questions from stored documents instead of relying only on general model knowledge.',
      challenge:
        'The system needed to retrieve the right document context and generate answers that stay grounded in the available information.',
      approach: [
        'Prepared department documents for embedding and retrieval.',
        'Implemented semantic search using vector representations of document chunks.',
        'Connected retrieved context with conversational answer generation for user-friendly responses.',
      ],
      features: [
        'Document ingestion and chunking',
        'Embedding-based semantic retrieval',
        'Context-aware answer generation',
        'Department-focused conversational interface',
      ],
      results: [
        'Reduced friction for finding department-related information.',
        'Created a reusable RAG pattern for document question answering.',
      ],
    },
  },
  {
    slug: 'pixify-image-restoration',
    title: 'Pixify',
    tagline: 'Image enhancement and restoration for damaged or low-quality photos.',
    summary:
      'Computer vision project that applies preprocessing, enhancement, noise reduction, and restoration workflows to improve photo clarity.',
    category: 'Computer Vision',
    image:
      'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['Computer Vision', 'Image Processing', 'OpenCV', 'Restoration'],
    status: 'Vision System',
    featuredHome: true,
    caseStudy: {
      role: 'Computer vision developer',
      context:
        'Pixify targets old, torn, damaged, and low-quality photos that need automated enhancement before personal or professional reuse.',
      challenge:
        'Restoration workflows must handle different image conditions without over-processing the image or losing important details.',
      approach: [
        'Created preprocessing stages for image cleanup and quality normalization.',
        'Applied enhancement and noise-reduction techniques to improve visible clarity.',
        'Structured the workflow so restoration steps can be tuned for different photo conditions.',
      ],
      features: [
        'Photo preprocessing',
        'Noise reduction',
        'Detail enhancement',
        'Image clarity improvement workflow',
      ],
      results: [
        'Built a practical restoration workflow for damaged and low-quality images.',
        'Improved readiness of images for display, archiving, and further editing.',
      ],
    },
  },
  {
    slug: 'deepfake-detection-faceforensics',
    title: 'Deepfake Detection using FaceForensics++',
    tagline: 'Deep learning pipeline for manipulated media classification.',
    summary:
      'Deepfake detection project using the FaceForensics++ dataset with preprocessing, feature analysis, model training, and visual authenticity evaluation.',
    category: 'Computer Vision',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['Deep Learning', 'Computer Vision', 'Classification', 'FaceForensics++'],
    status: 'Research Project',
    caseStudy: {
      role: 'Deep learning developer',
      context:
        'The project explores how visual classification can support authenticity checks for manipulated media.',
      challenge:
        'Deepfake detection needs careful preprocessing and evaluation because visual manipulations can be subtle and dataset-sensitive.',
      approach: [
        'Prepared manipulated and authentic media samples from the FaceForensics++ dataset.',
        'Performed preprocessing and feature analysis before model training.',
        'Evaluated classification performance to understand model behavior on authenticity detection.',
      ],
      features: [
        'Dataset preprocessing pipeline',
        'Visual feature analysis',
        'Deep learning classification workflow',
        'Authenticity evaluation process',
      ],
      results: [
        'Created an end-to-end manipulated media detection pipeline.',
        'Strengthened practical understanding of visual classification and evaluation.',
      ],
    },
  },
  {
    slug: 'disease-predictor',
    title: 'Disease Predictor',
    tagline: 'Machine learning prediction from structured health-related features.',
    summary:
      'Cloud-based machine learning system that predicts likely diseases from symptom and health-related inputs using supervised learning models.',
    category: 'AI/ML Engineering',
    codeUrl: 'https://github.com/asjadyousaf05/Disease_Predictor_ML_Project',
    liveUrl: 'https://diseasepredictormlproject-gd2sfquwaeamoxsuc4gpwn.streamlit.app/',
    image:
      'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Classification'],
    status: 'Live Demo',
    featuredHome: true,
    caseStudy: {
      role: 'Machine learning developer',
      context:
        'The system turns structured health-related features into prediction results through a simple deployed interface.',
      challenge:
        'The work required clean feature preparation, model evaluation, and an approachable interface for non-technical users.',
      approach: [
        'Prepared and cleaned structured input features for supervised learning.',
        'Trained and evaluated classification models for disease prediction.',
        'Deployed the model through a Streamlit interface for quick testing and demonstration.',
      ],
      features: [
        'Symptom and feature input flow',
        'Supervised classification model',
        'Prediction result display',
        'Hosted Streamlit demo',
      ],
      results: [
        'Delivered a functional deployed ML project with source code and live demo.',
        'Practiced the complete path from preprocessing to model evaluation and deployment.',
      ],
    },
  },
  {
    slug: 'opinion-miner',
    title: 'Opinion Miner',
    tagline: 'Sentiment analysis system for opinion mining and text classification.',
    summary:
      'NLP project for classifying user opinions with preprocessing, text representation, model training, and sentiment prediction.',
    category: 'NLP & Generative AI',
    image:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['NLP', 'Sentiment Analysis', 'Text Classification', 'Python', 'Scikit-learn'],
    status: 'NLP Project',
    caseStudy: {
      role: 'NLP developer',
      context:
        'Opinion Miner analyzes text data to identify sentiment and support opinion-based classification workflows.',
      challenge:
        'Text classification depends heavily on preprocessing quality, feature representation, and evaluation discipline.',
      approach: [
        'Prepared raw text through cleaning and normalization steps.',
        'Converted text into model-ready features for classification.',
        'Trained and evaluated sentiment models for opinion mining tasks.',
      ],
      features: [
        'Text preprocessing',
        'Sentiment classification',
        'Opinion mining workflow',
        'Model evaluation',
      ],
      results: [
        'Built a practical NLP pipeline for sentiment analysis.',
        'Strengthened text preprocessing and classification skills.',
      ],
    },
  },
  {
    slug: 'ai-recipe-bot',
    title: 'AI Recipe Bot',
    tagline: 'Conversational recipe assistant based on user input.',
    summary:
      'Intent-aware recipe assistant that suggests meals and instructions from user-provided ingredients and preferences.',
    category: 'NLP & Generative AI',
    codeUrl: 'https://github.com/asjadyousaf05/Recipes-ChatBot',
    liveUrl: 'https://intent-recipe-chatbot.streamlit.app/',
    image:
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['Python', 'NLP', 'TF-IDF', 'Streamlit', 'Chatbot'],
    status: 'Live Demo',
    caseStudy: {
      role: 'Conversational AI developer',
      context:
        'The bot helps users turn available ingredients into recipe ideas through a simple conversational experience.',
      challenge:
        'The assistant needed to map flexible natural language input to useful recipe suggestions and clear next steps.',
      approach: [
        'Built intent-aware text handling for recipe-related requests.',
        'Used NLP matching techniques to connect ingredients with meal suggestions.',
        'Created a Streamlit experience for quick conversation and testing.',
      ],
      features: [
        'Ingredient-based recipe suggestions',
        'Conversational input flow',
        'Step-by-step cooking guidance',
        'Hosted demo interface',
      ],
      results: [
        'Delivered an accessible conversational AI project with a working demo.',
        'Practiced NLP matching and response generation in a user-facing app.',
      ],
    },
  },
  {
    slug: 'ai-plagiarism-checker',
    title: 'AI Plagiarism Checker',
    tagline: 'NLP and text similarity system for plagiarism detection.',
    summary:
      'Analyzes submitted text against reference content and returns explainable similarity scoring for plagiarism checking.',
    category: 'NLP & Generative AI',
    codeUrl: 'https://github.com/asjadyousaf05/Plagiarism-Checker',
    image:
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['Python', 'NLP', 'Text Similarity', 'Scikit-learn'],
    status: 'NLP Tool',
    caseStudy: {
      role: 'NLP developer',
      context:
        'The checker supports document originality review by comparing text similarity across sources.',
      challenge:
        'The system needed a clear comparison flow and understandable similarity output rather than a black-box score.',
      approach: [
        'Prepared text cleaning and normalization steps for reliable comparison.',
        'Applied text similarity techniques for matching submitted content against references.',
        'Focused on explainable output that helps users understand the detected similarity.',
      ],
      features: [
        'Text preprocessing',
        'Similarity scoring',
        'Reference comparison',
        'Explainable plagiarism result flow',
      ],
      results: [
        'Built a practical NLP similarity project for plagiarism checking.',
        'Improved hands-on experience with text comparison and evaluation.',
      ],
    },
  },
  {
    slug: 'machine-learning-practice-portfolio',
    title: 'Machine Learning Practice Portfolio',
    tagline: '15 ML projects across classification, regression, preprocessing, and evaluation.',
    summary:
      'A structured collection of machine learning projects covering supervised learning workflows, feature engineering, training, and evaluation.',
    category: 'AI/ML Engineering',
    codeUrl: 'https://github.com/asjadyousaf05/Machine-Learning-Projects',
    image:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Model Evaluation'],
    status: 'Portfolio Collection',
    caseStudy: {
      role: 'Machine learning practitioner',
      context:
        'The portfolio records repeated practice across core ML workflows and problem types.',
      challenge:
        'Building ML fluency requires consistent practice across different datasets, features, models, and evaluation methods.',
      approach: [
        'Completed projects across classification, regression, preprocessing, and model evaluation.',
        'Practiced feature engineering and model selection across varied problem settings.',
        'Organized projects as a learning portfolio with reusable notebooks and examples.',
      ],
      features: [
        'Classification practice',
        'Regression practice',
        'Data preprocessing workflows',
        'Training and evaluation examples',
      ],
      results: [
        'Built a broad ML foundation across common supervised learning tasks.',
        'Created a public GitHub portfolio of applied ML work.',
      ],
    },
  },
  {
    slug: 'movie-recommender-system',
    title: 'Movie Recommender System',
    tagline: 'Recommendation engine for personalized movie discovery.',
    summary:
      'Recommendation system using collaborative and content-based filtering techniques to improve personalization and engagement.',
    category: 'AI/ML Engineering',
    codeUrl:
      'https://github.com/asjadyousaf05/Machine-Learning-Projects/tree/main/Day%2014-%20Movie%20Reccomendation%20System',
    image:
      'https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Recommendation'],
    status: 'ML Project',
    caseStudy: {
      role: 'Machine learning developer',
      context:
        'The recommender suggests relevant movies by analyzing similarity and user/content signals.',
      challenge:
        'The system needed to produce useful recommendations from sparse and varied movie data.',
      approach: [
        'Prepared movie data for similarity and recommendation workflows.',
        'Explored content-based and collaborative filtering strategies.',
        'Evaluated recommendation output for relevance and practical usefulness.',
      ],
      features: [
        'Movie similarity matching',
        'Content-based recommendation',
        'Collaborative filtering practice',
        'Recommendation output ranking',
      ],
      results: [
        'Built a working recommendation engine concept.',
        'Gained practical experience with personalization workflows.',
      ],
    },
  },
  {
    slug: 'disaster-tweets-detector',
    title: 'Disaster Tweets Detector',
    tagline: 'NLP classification for emergency-related social posts.',
    summary:
      'Real-time NLP pipeline that classifies emergency-related tweets for faster public-alert and response workflows.',
    category: 'NLP & Generative AI',
    codeUrl: 'https://github.com/asjadyousaf05/Machine-Learning-Projects',
    image:
      'https://images.pexels.com/photos/73833/hurricane-earth-satellite-tracking-73833.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['Python', 'TensorFlow', 'NLP', 'Text Classification'],
    status: 'NLP Project',
    caseStudy: {
      role: 'NLP model developer',
      context:
        'The project classifies short social posts as disaster-related or not disaster-related.',
      challenge:
        'Social text is noisy, short, and context-dependent, so the pipeline needs careful preprocessing and validation.',
      approach: [
        'Cleaned and prepared tweet text for model training.',
        'Trained classification models to distinguish emergency-related messages.',
        'Evaluated model performance on text classification behavior.',
      ],
      features: [
        'Tweet preprocessing',
        'Emergency text classification',
        'Model training and evaluation',
        'Public-alert workflow concept',
      ],
      results: [
        'Built a useful NLP classification project around real-world emergency text.',
        'Practiced model evaluation on short-form text data.',
      ],
    },
  },
  {
    slug: 'ebn-al-arab',
    title: 'Ebn Al Arab',
    tagline: 'Production-ready business website with professional brand presentation.',
    summary:
      'Responsive business website with clear service content, polished UI, and conversion-focused page structure.',
    category: 'Web Development',
    liveUrl: 'https://ebnalarab.com',
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['React', 'Node.js', 'Responsive UI', 'Business Website'],
    status: 'Live Project',
    featuredHome: true,
    caseStudy: {
      role: 'Full-stack web developer',
      context:
        'A business-facing web presence designed to present services clearly and support customer trust.',
      challenge:
        'The website needed a polished layout, responsive behavior, and content hierarchy that makes the business easy to understand.',
      approach: [
        'Built responsive pages with a professional visual system.',
        'Structured content around service clarity and visitor conversion.',
        'Focused on reliable performance and smooth page behavior across devices.',
      ],
      features: [
        'Responsive business pages',
        'Service presentation structure',
        'Professional brand UI',
        'Lead-friendly content flow',
      ],
      results: [
        'Delivered a live business website with polished customer-facing presentation.',
        'Improved online credibility through clear layout and responsive design.',
      ],
    },
  },
  {
    slug: 'albark-ls',
    title: 'Albark LS',
    tagline: 'Modern web platform built for clarity, trust, and conversion.',
    summary:
      'Responsive website with smooth interactions, mobile-first layouts, and a clear trust-building presentation.',
    category: 'Web Development',
    liveUrl: 'https://albarkls.com',
    image:
      'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['React', 'JavaScript', 'UI/UX', 'Responsive Layout'],
    status: 'Live Project',
    caseStudy: {
      role: 'Frontend web developer',
      context:
        'Albark LS required a modern website experience that communicates trust and keeps information easy to scan.',
      challenge:
        'The experience needed to feel professional on desktop and mobile while keeping the user journey direct.',
      approach: [
        'Created mobile-first responsive sections and polished interactions.',
        'Organized content around clarity, trust, and conversion intent.',
        'Refined spacing, typography, and visual hierarchy for a modern web presence.',
      ],
      features: [
        'Mobile-first layout',
        'Smooth UI interactions',
        'Clear business content structure',
        'Trust-focused visual presentation',
      ],
      results: [
        'Delivered a live, modern business platform.',
        'Created a cleaner path from first impression to contact intent.',
      ],
    },
  },
  {
    slug: 'porta-cabins-online',
    title: 'Porta Cabins Online',
    tagline: 'Catalog and inquiry-ready website for product visibility.',
    summary:
      'Catalog-style website designed for product discovery, clear content hierarchy, and lead capture intent.',
    category: 'Web Development',
    liveUrl: 'https://portacabins.online',
    image:
      'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['MERN', 'REST API', 'SEO-Friendly', 'Catalog UI'],
    status: 'Live Project',
    caseStudy: {
      role: 'Full-stack web developer',
      context:
        'The platform presents portable cabin products and encourages visitors to move from browsing to inquiry.',
      challenge:
        'The website needed product visibility, clear categorization, and an inquiry-oriented structure without becoming cluttered.',
      approach: [
        'Built a catalog-focused information architecture.',
        'Structured product content for quick scanning and search-friendly pages.',
        'Designed page flows around product interest and customer inquiry.',
      ],
      features: [
        'Product catalog presentation',
        'Inquiry-ready content flow',
        'Responsive pages',
        'SEO-friendly structure',
      ],
      results: [
        'Delivered a live catalog website for business lead generation.',
        'Improved product visibility through organized page structure.',
      ],
    },
  },
  {
    slug: 'rapid-kitchen',
    title: 'Rapid Kitchen',
    tagline: 'Premium service website with structured menus and polished animations.',
    summary:
      'Sleek service website with modern visual language, structured content, and polished interactions for a premium customer journey.',
    category: 'Web Development',
    liveUrl: 'https://rapidkitchen.com',
    image:
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['React', 'CSS', 'Performance', 'Service Website'],
    status: 'Live Project',
    caseStudy: {
      role: 'Frontend web developer',
      context:
        'Rapid Kitchen needed a refined website experience for presenting services and guiding customer interest.',
      challenge:
        'The design needed to feel premium while staying fast, clear, and easy to navigate.',
      approach: [
        'Created structured service and menu sections.',
        'Used polished visual details and transitions to support a premium feel.',
        'Kept responsive behavior and performance central to the build.',
      ],
      features: [
        'Structured service pages',
        'Modern visual system',
        'Responsive layout',
        'Performance-conscious UI',
      ],
      results: [
        'Delivered a live service website with stronger customer presentation.',
        'Balanced premium visuals with practical usability.',
      ],
    },
  },
  {
    slug: 'sparekart-live',
    title: 'SpareKart.live',
    tagline: 'E-commerce web project for spare parts discovery and sales.',
    summary:
      'Web development project focused on product browsing, commerce structure, and clear customer-facing inventory presentation.',
    category: 'Web Development',
    liveUrl: 'https://sparekart.live',
    image:
      'https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['E-commerce', 'JavaScript', 'Inventory UI', 'Responsive Design'],
    status: 'Web Project',
    caseStudy: {
      role: 'Web developer',
      context:
        'SpareKart.live is an e-commerce-oriented project built around product discovery and customer browsing.',
      challenge:
        'The project needed product structure, inventory presentation, and a straightforward path for users to evaluate items.',
      approach: [
        'Organized product information around browse and comparison behavior.',
        'Designed responsive pages for product categories and item discovery.',
        'Focused on clear content, commerce readiness, and customer usability.',
      ],
      features: [
        'Product browsing interface',
        'Inventory presentation',
        'Responsive commerce layout',
        'Customer-facing product details',
      ],
      results: [
        'Built a practical e-commerce project for spare parts presentation.',
        'Expanded web development experience across commerce workflows.',
      ],
    },
  },
  {
    slug: 'dine3d',
    title: 'Dine3D',
    tagline: 'Restaurant and dining web experience with modern presentation.',
    summary:
      'Web project for presenting dining content with engaging visual structure, service details, and responsive user experience.',
    category: 'Web Development',
    image:
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['Web Development', 'Responsive UI', 'Restaurant Website', 'JavaScript'],
    status: 'Web Project',
    caseStudy: {
      role: 'Frontend web developer',
      context:
        'Dine3D presents restaurant-oriented content through a modern, visually engaging website experience.',
      challenge:
        'The project needed to make dining information attractive and easy to navigate across screen sizes.',
      approach: [
        'Created structured page sections for restaurant content and visitor discovery.',
        'Used responsive layouts to keep menus and details readable on mobile.',
        'Focused on visual polish suited to food and hospitality presentation.',
      ],
      features: [
        'Restaurant-focused page layout',
        'Responsive content sections',
        'Visual service presentation',
        'Customer-friendly navigation',
      ],
      results: [
        'Delivered a polished web development project for a dining concept.',
        'Practiced hospitality-focused UI and responsive presentation.',
      ],
    },
  },
  {
    slug: 'kitchub-store',
    title: 'Kitchub.store',
    tagline: 'Kitchen product store with e-commerce-style product presentation.',
    summary:
      'Web development project for kitchen products, combining product listing structure, responsive layouts, and customer-ready UI.',
    category: 'Web Development',
    liveUrl: 'https://kitchub.store',
    image:
      'https://images.pexels.com/photos/6958135/pexels-photo-6958135.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['E-commerce', 'Product UI', 'Responsive Design', 'JavaScript'],
    status: 'Web Project',
    caseStudy: {
      role: 'Web developer',
      context:
        'Kitchub.store presents kitchen products through a customer-facing store experience.',
      challenge:
        'The project needed clean product organization and a browsing experience that remains simple on smaller screens.',
      approach: [
        'Structured product areas for clear browsing and discovery.',
        'Built responsive sections that support product visuals and key details.',
        'Kept the interface practical for commerce-oriented user behavior.',
      ],
      features: [
        'Product listing presentation',
        'Store-style responsive UI',
        'Category-focused browsing',
        'Customer-ready product details',
      ],
      results: [
        'Built an e-commerce-style store project for kitchen products.',
        'Strengthened practical UI work around product presentation.',
      ],
    },
  },
  {
    slug: 'tamkeenzone',
    title: 'Tamkeenzone.pk',
    tagline: 'Business website with structured content and professional interface.',
    summary:
      'Professional web project focused on business content organization, responsive page flow, and polished visual presentation.',
    category: 'Web Development',
    liveUrl: 'https://tamkeenzone.pk',
    image:
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    techStack: ['Business Website', 'Responsive UI', 'JavaScript', 'Content Architecture'],
    status: 'Web Project',
    caseStudy: {
      role: 'Web developer',
      context:
        'Tamkeenzone.pk required a professional web presence with organized information and a credible interface.',
      challenge:
        'The site needed to present business information clearly while maintaining a polished user experience.',
      approach: [
        'Organized content into clear, scannable sections.',
        'Created responsive layouts for mobile and desktop visitors.',
        'Focused on a professional tone through spacing, hierarchy, and visual consistency.',
      ],
      features: [
        'Business information layout',
        'Responsive page structure',
        'Professional visual presentation',
        'Clear user navigation',
      ],
      results: [
        'Delivered a professional business website project.',
        'Improved presentation quality through better content hierarchy.',
      ],
    },
  },
];

export const projectCategories: Array<'All' | ProjectCategory> = [
  'All',
  'AI/ML Engineering',
  'Computer Vision',
  'NLP & Generative AI',
  'Web Development',
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getFeaturedProjects = () => projects.filter((project) => project.featuredHome);
