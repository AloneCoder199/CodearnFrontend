// src/Data/coursesData.js
import reactImg from "../assets/projects/project-1.png";
import nodeImg from "../assets/Blogs/blog (1).png";
import aiImg from "../assets/Blogs/blog (2).webp";
import pythonImg from "../assets/Blogs/blog (3).webp";
import uiuxImg from "../assets/Blogs/blog (4).webp";
import devopsImg from "../assets/Blogs/blog (5).webp";

export const courses = [
  {
    id: "mern-stack",
    title: "Full Stack Web Development (MERN)",
    duration: "6 Months",
    projects: 6,
    certificate: true,
    jobSupport: true,
    image: reactImg,
    overview:
      "Complete journey from frontend to backend with modern tools. Covers responsive UIs, scalable servers, databases, APIs, authentication, and cloud deployment.",
    targetAudience: [
      "Beginners who want to start a career in development",
      "Freelancers looking for high-demand skills",
      "Job seekers targeting full-stack roles",
    ],
    learningOutcomes: [
      "Build responsive websites & dynamic apps",
      "Develop REST & GraphQL APIs",
      "Authentication, security & real-time apps",
      "Deploy apps on Vercel, Netlify, AWS",
    ],
    careerPath: [
      "Full Stack Engineer",
      "MERN Developer",
      "Freelance Web Developer",
    ],
    projectsList: [
      "E-commerce Store",
      "Real-time Chat App",
      "Blogging Platform",
      "Portfolio Website",
      "Task Management Tool",
      "Job Board System",
    ],
    outline: [
      "HTML, CSS, JavaScript Deep Dive – ...",
      "Modern ES6+ Features & Best Practices – ...",
      "Responsive UI with TailwindCSS & Bootstrap – ...",
      "React.js (Hooks, Context API, Redux Toolkit) – ...",
      "Next.js for Server-Side Rendering – ...",
      "Node.js + Express.js Advanced Backend – ...",
      "MongoDB Atlas, Mongoose & Aggregations – ...",
      "Authentication (JWT, OAuth, Social Logins) – ...",
      "REST APIs & GraphQL APIs – ...",
      "Real-Time Applications with WebSockets & Socket.io – ...",
      "Version Control with Git & GitHub – ...",
      "Testing & Debugging – ...",
      "Deployment: Vercel, Netlify, AWS, DigitalOcean – ...",
      "Soft Skills & Career Support – ...",
    ],
    description:
      "Build modern full-stack apps from scratch with MERN. Learn client + server + DB, real-time apps, and cloud deployment. Includes 6 real projects and job interview prep.",
  },

  {
    id: "ai-fundamentals",
    title: "AI & Machine Learning Fundamentals",
    duration: "4 Months",
    projects: 4,
    certificate: true,
    jobSupport: false,
    image: aiImg,
    overview:
      "Learn the foundations of AI, ML, and data science with real-world examples. Covers Python, ML algorithms, and neural networks.",
    targetAudience: [
      "Python learners exploring AI",
      "Freelancers aiming for ML projects",
      "Students preparing for research/MS in AI",
    ],
    learningOutcomes: [
      "Data preprocessing & visualization",
      "Regression, classification & clustering",
      "Neural network basics",
      "Hands-on projects with TensorFlow/Keras",
    ],
    careerPath: ["Data Analyst", "Junior ML Engineer", "Freelance AI Developer"],
    projectsList: [
      "Spam Email Detector",
      "Stock Price Predictor",
      "Movie Recommendation System",
      "Weather Prediction App",
    ],
    outline: [
      "Python Programming for AI",
      "Numpy, Pandas, Matplotlib, Seaborn",
      "Data Preprocessing & Feature Engineering",
      "Supervised & Unsupervised ML Algorithms",
      "Regression, Classification, Clustering",
      "Introduction to Neural Networks",
      "Deep Learning with TensorFlow & Keras",
      "Mini Projects: Spam Detector, Stock Predictor",
    ],
    description:
      "Step into AI with real-world projects. Covers data science tools, ML algorithms, neural networks, and TensorFlow basics.",
  },

  {
    id: "node-advanced",
    title: "Advanced Node.js & APIs",
    duration: "2 Months",
    projects: 3,
    certificate: true,
    jobSupport: true,
    image: nodeImg,
    overview:
      "Go beyond basics of Node.js to build high-performance APIs, microservices, and secure backend systems.",
    targetAudience: [
      "Developers wanting to master backend",
      "Freelancers for API-based projects",
      "Job aspirants for backend roles",
    ],
    learningOutcomes: [
      "Build REST & GraphQL APIs",
      "Implement microservices architecture",
      "Integrate Stripe/PayPal",
      "Secure APIs with best practices",
    ],
    careerPath: ["Backend Developer", "API Engineer", "Freelance Node Dev"],
    projectsList: [
      "Payment Gateway System",
      "Blog REST + GraphQL API",
      "Microservices Chat API",
    ],
    outline: [
      "Node.js Event Loop & Streams",
      "Building REST APIs from Scratch",
      "GraphQL Basics & Apollo Server",
      "Microservices with Node.js",
      "Security Best Practices (Helmet, Rate Limit, CORS)",
      "Payment Gateway Integration (Stripe, PayPal)",
      "Testing APIs (Jest, Supertest, Postman)",
      "Cloud Deployment on AWS/DigitalOcean",
    ],
    description:
      "Master backend systems with Node.js. Learn REST, GraphQL, microservices, security, and deployment.",
  },

  {
    id: "python-data",
    title: "Python for Data Science",
    duration: "3 Months",
    projects: 3,
    certificate: true,
    jobSupport: false,
    image: pythonImg,
    overview:
      "Learn Python with a focus on data handling, visualization, and machine learning basics.",
    targetAudience: [
      "Students entering analytics",
      "Freelancers for data cleaning & viz gigs",
      "Python learners leveling up",
    ],
    learningOutcomes: [
      "Handle & visualize data",
      "Work with APIs & JSON",
      "Apply ML basics with Scikit-Learn",
      "Do web scraping for datasets",
    ],
    careerPath: ["Data Analyst", "Research Assistant", "Freelance Data Expert"],
    projectsList: ["Weather Forecast App", "Movie Data Analysis", "Sales Dashboard"],
    outline: [
      "Python Basics & Advanced Concepts",
      "Data Handling with Numpy & Pandas",
      "Data Visualization (Matplotlib, Seaborn, Plotly)",
      "Web Scraping with BeautifulSoup & Selenium",
      "APIs & JSON Data Handling",
      "Machine Learning Basics with Scikit-Learn",
      "Mini Projects: Weather App, Movie Data Analysis",
    ],
    description:
      "Learn Python with a focus on data science. Cover everything from basic syntax to ML with Pandas & Scikit-Learn.",
  },

  {
    id: "ui-ux-design",
    title: "UI/UX Design & Figma Mastery",
    duration: "2 Months",
    projects: 2,
    certificate: true,
    jobSupport: false,
    image: uiuxImg,
    overview:
      "Design stunning, user-friendly interfaces with modern tools. Learn the full design lifecycle from wireframes to prototypes.",
    targetAudience: [
      "Developers improving design skills",
      "Freelancers delivering Figma projects",
      "Entrepreneurs designing their own apps",
    ],
    learningOutcomes: [
      "Master Figma & prototyping",
      "Understand design principles & color theory",
      "Do wireframing & user testing",
      "Deliver developer-ready designs",
    ],
    careerPath: ["UI Designer", "UX Researcher", "Product Designer"],
    projectsList: ["Landing Page Design", "Mobile App Prototype"],
    outline: [
      "Principles of Design & Typography",
      "Color Theory & Branding Basics",
      "Wireframing & Low-Fidelity Mockups",
      "Figma Mastery (Auto Layout, Components, Variants)",
      "High-Fidelity Prototyping",
      "User Testing & Feedback Iteration",
      "Design Handoff for Developers",
      "Mini Projects: Landing Page, Mobile App UI",
    ],
    description:
      "Learn UI/UX design fundamentals with Figma. From wireframing to prototyping and design handoff, build strong design skills.",
  },

  {
    id: "devops-cloud",
    title: "DevOps & Cloud Fundamentals",
    duration: "4 Months",
    projects: 4,
    certificate: true,
    jobSupport: true,
    image: devopsImg,
    overview:
      "Learn automation, cloud deployment, and DevOps workflows to become job-ready for modern infrastructure roles.",
    targetAudience: [
      "Developers expanding into DevOps",
      "Freelancers for AWS/Docker/Kubernetes gigs",
      "Job aspirants in high-demand cloud roles",
    ],
    learningOutcomes: [
      "Set up CI/CD pipelines",
      "Work with Docker & Kubernetes",
      "Manage AWS services & Terraform",
      "Monitor apps with Prometheus + Grafana",
    ],
    careerPath: ["DevOps Engineer", "Cloud Engineer", "Site Reliability Engineer"],
    projectsList: [
      "Deploy MERN App on AWS",
      "CI/CD Pipeline Automation",
      "Kubernetes Cluster Setup",
      "Server Monitoring Dashboard",
    ],
    outline: [
      "Linux & Shell Scripting Basics",
      "Git & GitHub for Version Control",
      "CI/CD Pipelines with Jenkins/GitHub Actions",
      "Docker & Kubernetes Fundamentals",
      "AWS Basics (EC2, S3, RDS, Lambda)",
      "Terraform for Infrastructure as Code",
      "Monitoring & Logging with Prometheus + Grafana",
      "Mini Projects: Deploy MERN App on AWS",
    ],
    description:
      "Become job-ready in DevOps & Cloud. Learn automation, CI/CD, containers, Kubernetes, AWS, and infrastructure as code.",
  },
];
