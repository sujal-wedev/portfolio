export interface ProjectData {
  id: string;
  title: string;
  description: string;
  tech: string;
  imageUrl?: string;
  link: string;
  githubUrl?: string;
  category?: string;
  featured?: boolean;
}

export interface ExperienceData {
  _id: string;
  company: string;
  role: string;
  date: string;
  location?: string;
  description: string[];
  link?: string;
}

export interface SkillCategoryData {
  _id: string;
  category: string;
  skills: string[];
}

export interface EducationData {
  _id: string;
  institution: string;
  degree: string;
  date: string;
  cgpa?: string;
  location?: string;
  link?: string;
}

export interface AchievementData {
  title: string;
  subtitle: string;
  date?: string;
  badge?: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Sujal Nag",
    firstName: "Sujal",
    lastName: "Nag",
    headline: "backend @ scale & ai systems",
    jobTitle: "Software Engineer | Backend & Full Stack",
    email: "nagsujal9@gmail.com",
    phone: "7410793311",
    linkedin: "https://linkedin.com/in/sujal-nag",
    github: "https://github.com/sujal-wedev",
    location: "Chandigarh, India",
    command: "npx sujal-nag",
    shortBio:
      "backend & full stack developer passionate about building high-performance systems, distributed pipelines, and AI-driven platforms. experienced in React, Next.js, FastAPI, Go, and cloud architectures.",
    detailedBio: [
      "hey, my name is Sujal Nag and I'm a software engineer focused on building robust backend systems, distributed event-driven pipelines, and AI-powered platforms.",
      "I have hands-on experience designing high-throughput REST APIs, implementing sub-150ms event processing with Kafka and QStash queues, integrating Google Gemini and LangChain multi-agent systems, and structuring dual-database architectures (PostgreSQL & MongoDB).",
      "During my internships as a Backend Intern at Skillfied and Junior Full Stack Developer Intern at Yuva Intern, I engineered production APIs that cut latency by 24%, implemented cryptographic JWT/webhook verification, designed responsive React interfaces, and maintained 90%+ Jest test coverage.",
      "Beyond production code, I was invited for an Oral Presentation at ICMLC 2026 (Goa, India) for my research on Physics-Informed ML energy forecasting, secured a Top 10 finish at the WebRush 6-Hour Frontend Hackathon, and organized 3 major offline tech events as a Core Member of the Future Prep Forum Club.",
    ],
  },

  experiences: [
    {
      _id: "exp-skillfied",
      company: "Skillfied",
      role: "Backend Intern",
      date: "May 2026 – August 2026",
      location: "Remote",
      link: "https://github.com/sujal-wedev",
      description: [
        "Engineered high-performance RESTful APIs using Express.js and MongoDB, accelerating response times by 24% and reducing server error rates by 18% through optimized query design and efficient data routing.",
        "Implemented JWT-based authentication with role-based access control, strengthening API security by 20% and preventing 17% more unauthorized access attempts.",
        "Documented project workflows and endpoints, reducing integration errors by 18% and improving collaboration by 20%.",
      ],
    },
    {
      _id: "exp-yuva",
      company: "Yuva Intern",
      role: "Junior Full Stack Developer Intern",
      date: "March 2026 – April 2026",
      location: "Remote",
      link: "https://github.com/sujal-wedev",
      description: [
        "Planned system architecture, wireframes, and database schema for a full-stack application using Agile methodology within a 6-week SDLC cycle, establishing a clear development roadmap from design to delivery.",
        "Built a responsive React UI with modular components and cross-browser HTML/CSS/JS styling across 3+ pages, delivering a consistent user experience.",
        "Integrated front-end and back-end systems, wrote 15+ Jest tests achieving 90%+ code coverage, improved application performance by 25%, and deployed via CI/CD pipeline to AWS EC2.",
      ],
    },
  ] as ExperienceData[],

  education: [
    {
      _id: "edu-cu",
      institution: "Chandigarh University",
      degree: "Bachelor of Engineering in Computer Science",
      date: "August 2022 – May 2026",
      location: "Chandigarh",
      link: "https://www.cuchd.in/",
    },
  ] as EducationData[],

  skillCategories: [
    {
      _id: "skill-frontend",
      category: "Frontend",
      skills: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux",
        "Responsive & Accessible UI Design",
      ],
    },
    {
      _id: "skill-backend",
      category: "Backend",
      skills: [
        "Python",
        "Node.js",
        "Java",
        "Go",
        "FastAPI",
        "Flask",
        "Django",
        "Express.js",
        "Spring Boot",
        "REST APIs",
        "GraphQL",
        "WebSockets",
        "JWT/OAuth2",
      ],
    },
    {
      _id: "skill-ai-ml",
      category: "AI / ML & GenAI",
      skills: [
        "Google Gemini",
        "OpenAI API",
        "LangChain",
        "LangGraph",
        "LlamaIndex",
        "Hugging Face Transformers",
        "RAG",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
      ],
    },
    {
      _id: "skill-databases",
      category: "Databases",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Pinecone",
        "ChromaDB",
        "FAISS",
      ],
    },
    {
      _id: "skill-devops",
      category: "DevOps & Cloud",
      skills: [
        "AWS (SageMaker, Lambda, EC2, S3)",
        "Google Cloud Platform",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "CI/CD",
        "Terraform",
      ],
    },
  ] as SkillCategoryData[],

  projects: [
    {
      id: "liftmate",
      title: "LiftMate – AI Fitness Coach",
      description:
        "Full-featured AI fitness platform with responsive Vanilla JS dashboard (KPI tracking, PR leaderboards, AI Advisor), Telegram bot, and 1-click Strava OAuth 2.0 onboarding. Features 4-agent Google Gemini coaching system with 30-min Redis session memory, event-driven QStash queues, Fernet encryption, and 20 Matplotlib chart presets.",
      tech: "Python, JavaScript, Google Gemini, PostgreSQL, Redis, Strava API",
      imageUrl: "/projects/liftmate.svg",
      link: "https://strava-trainer-steel.vercel.app",
      githubUrl: "https://github.com/sujal-wedev/strava-trainer",
      featured: true,
    },
    {
      id: "chronicle",
      title: "Chronicle – Blogging Platform",
      description:
        "Monolithic full-stack publishing platform (Go/Fiber, React 19) consolidating 2 microservices into a single binary to eliminate inter-service latency. Features Google OAuth2, JWT sessions, bcrypt hashing, S3 storage proxy layer, and dual-database architecture (PostgreSQL for ACID auth + MongoDB for schema-free content).",
      tech: "Go, Fiber, React 19, PostgreSQL, MongoDB",
      imageUrl: "/projects/chronicle.svg",
      link: "https://github.com/sujal-wedev/Chronicle",
      githubUrl: "https://github.com/sujal-wedev/Chronicle",
      featured: true,
    },
    {
      id: "two-way-integration",
      title: "Two-way-integration Sync Engine",
      description:
        "Bi-directional sync engine using FastAPI and Stripe API achieving 95% data consistency across MySQL-backed services for real-time payment and subscription data synchronization. Includes cryptographic webhook verification and an event-driven Kafka pipeline processing CRUD events at sub-150ms latency.",
      tech: "Python, FastAPI, Apache Kafka, MySQL, Docker",
      imageUrl: "/projects/twoway.svg",
      link: "https://github.com/sujal-wedev/Two-Way-Integration",
      githubUrl: "https://github.com/sujal-wedev/Two-Way-Integration",
      featured: true,
    },
    {
      id: "finsentinel",
      title: "FinSentinel – Stock Market Intelligence",
      description:
        "AI-powered financial market intelligence platform delivering real-time sentiment analysis, predictive trends, and automated technical indicator screening for high-probability market opportunities.",
      tech: "Python, Machine Learning, FastAPI, Financial APIs",
      imageUrl: "/projects/finsentinel.svg",
      link: "https://github.com/sujal-wedev/FinSentinel",
      githubUrl: "https://github.com/sujal-wedev/FinSentinel",
      featured: true,
    },
    {
      id: "hiver",
      title: "Hiver – Web Platform",
      description:
        "Full-stack cloud-deployed application engineered with Python backends and modern responsive client styling, hosted on Render.",
      tech: "Python, Web APIs, Render",
      imageUrl: "/projects/hiver.svg",
      link: "https://hiver-43h0.onrender.com/",
      githubUrl: "https://github.com/sujal-wedev/Hiver",
      featured: false,
    },
    {
      id: "customer-churn",
      title: "Customer Churn Predictive Analysis",
      description:
        "Analyzed behavior of 7,043 telecom customers to identify churn patterns based on tenure, contract type, and monthly charges. Performed customer segmentation and cohort analysis with 11 custom statistical visualizations (histograms, box plots, heatmaps).",
      tech: "Python, Pandas, Scikit-learn, Matplotlib, Seaborn",
      imageUrl: "/projects/churn.svg",
      link: "https://github.com/sujal-wedev/Customer-churn-analysis",
      githubUrl: "https://github.com/sujal-wedev/Customer-churn-analysis",
      featured: false,
    },
    {
      id: "energy-forecasting",
      title: "Physics-Informed ML Energy Forecasting",
      description:
        "Hybrid physics-informed machine learning framework for solar and wind renewable energy generation forecasting. Research accepted for Oral Presentation at ICMLC 2026 (Goa, India).",
      tech: "Python, PyTorch, Physics-Informed Neural Networks, Scientific Computing",
      imageUrl: "/projects/energy.svg",
      link: "https://github.com/sujal-wedev/Hybrid-Physics-Informed-Machine-Learning-Framework-for-Solar-and-Wind-Energy-Forecasting",
      githubUrl: "https://github.com/sujal-wedev/Hybrid-Physics-Informed-Machine-Learning-Framework-for-Solar-and-Wind-Energy-Forecasting",
      featured: false,
    },
  ] as ProjectData[],

  achievements: [
    {
      title: "Top 10, WebRush 6-Hour Frontend Hackathon",
      subtitle: "Built and deployed a complete frontend solution individually within 6 hours.",
      badge: "Hackathon",
    },
    {
      title: "Invited for Oral Presentation at ICMLC 2026",
      subtitle: "ML & Cybernetics Conference, Goa, India (Dec 2026) for research in Physics-Informed ML.",
      badge: "Research",
    },
    {
      title: "Team Core Member, Future Prep Forum Club",
      subtitle: "Organized 3 large-scale offline events, driving Team Collaboration & tech culture.",
      badge: "Leadership",
    },
    {
      title: "Professional Certifications",
      subtitle: "SQL (Intermediate) – HackerRank | Meta React Native – Coursera | Y Combinator (SDE) Simulation",
      badge: "Certified",
    },
  ] as AchievementData[],
};
