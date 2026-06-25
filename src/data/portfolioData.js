// src/data/portfolioData.js

export const portfolioData = {
  personal: {
    name: "Soham Pandit",
    initial: "S",
    title: "AI Systems Engineer, Data Science & ML Enthusiast, Computer Engineering Student.",
    description: "ENGINEERING AI FOR REAL-WORLD IMPACT.",
    tagline: "ENGINEERING AI FOR REAL-WORLD IMPACT.",
    subDescription: "Computer Engineering student passionate about AI, Data Analytics, Full-Stack Development, and innovative software products.",
    statusText: "Open to Internships & Opportunities",
    aboutShort: "AI enthusiast, developer, and problem solver focused on creating innovative and impactful technology solutions.",
    avatarUrl: "/soham.jpeg", // Will default to a placeholder if not present, handled in code
    location: "Pune, Maharashtra, India",
    email: "sohampandit161@gmail.com",
    github: "https://github.com/Soham117Pandit",
    linkedin: "https://www.linkedin.com/in/soham-pandit-ba4636335?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/soham__p18?igsh=azE2eDF2bzQ5d3Rv",
  },

  stats: [
    { label: "Projects build", value: "3+" },
    { label: "Technologies Used", value: "15+" },
    { label: "Academic Focus", value: "Computer Science Engineering" },
    { label: "Current Year", value: "T.Y. B.Tech" },
    { label: "Hackathon participated", value: "3+" },
    { label: "CGPA", value: "7.65" },
  ],

  projects: [
    // 1 st project
    {
      id: "safera",
      title: "Safera",
      subtitle: "AI-Powered Campus Disaster Management Platform",
      tagline: "Predict, Respond & Coordinate During Emergencies",
      year: "2026",
      category: "Disaster Management & Public Safety",
      tags: [
        "AI",
        "Disaster Management",
        "PWA",
        "Emergency Response",
        "Real-time Alerts"
      ],
      summary:
        "An intelligent disaster management platform designed for educational campuses that provides early risk assessment, emergency alerts, resource coordination, and real-time incident monitoring.",

      description:
        "Safera is a next-generation disaster preparedness and response platform built to enhance campus safety during natural and human-made emergencies. The system combines AI-driven risk assessment, emergency communication, resource management, and real-time situational awareness to help students, faculty, and administrators respond effectively during critical events.",

      metrics: [
        { label: "Emergency Alert Delivery", value: "<3 sec" },
        { label: "Risk Assessment Accuracy", value: "92%" },
        { label: "Incident Response Efficiency", value: "+40%" },
        { label: "Campus Coverage", value: "100%" }
      ],

      techStack: [
        "React",
        "Next.js",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "PWA",
        "Google Gemini AI",
        "Vercel"
      ],

      liveUrl: "https://safera-frontend.vercel.app",

      architecture: {
        data: "Collects campus reports, weather updates, emergency notifications, and user-generated incident information.",
        intelligence: "AI models analyze disaster severity, assess risks, predict potential impact zones, and recommend response actions.",
        decision: "Emergency management engine prioritizes incidents, allocates resources, and generates response recommendations.",
        output: "Provides real-time alerts, evacuation guidance, emergency contacts, live incident tracking, and safety dashboards for students and administrators."
      }
    },

    // 2 nd project
    {
      id: "projecthub",
      title: "ProjectHub",
      subtitle: "Academic Project Management Platform",
      tagline: "Simplifying Project Tracking, Collaboration & Evaluation",
      year: "2026",
      category: "EdTech",
      tags: [
        "EdTech",
        "Project Management",
        "Full Stack",
        "MongoDB",
        "Academic Workflow"
      ],

      summary:
        "A centralized platform for students and faculty to manage academic projects, monitor progress, submit updates, and streamline project evaluation workflows.",

      description:
        "ProjectHub is a full-stack academic project management platform developed for educational institutions. The system enables students to submit and track projects while allowing faculty and administrators to review, monitor, and manage project activities through dedicated dashboards. The platform improves transparency, collaboration, and project organization across departments.",

      metrics: [
        { label: "User Roles", value: "Admin, HOD, Faculty, Student" },
        { label: "Project Management", value: "End-to-End" },
        { label: "Database", value: "MongoDB" },
        { label: "Architecture", value: "Full Stack" }
      ],

      techStack: [
        "React",
        "Next.js",
        "Python",
        "Flask",
        "MongoDB",
        "Tailwind CSS",
        "Vercel"
      ],

      liveUrl: "https://student-project-portal-three.vercel.app/",

      architecture: {
        data:
          "Stores student profiles, project submissions, team information, faculty reviews, and progress reports in MongoDB.",

        intelligence:
          "Organizes project data and provides analytics-driven dashboards for tracking project performance and completion status.",

        decision:
          "Facilitates project submission, review, approval, and progress monitoring workflows between students and faculty.",

        output:
          "Delivers project dashboards, status tracking, faculty feedback, notifications, and performance insights for all stakeholders."
      }
    },


    // 3 rd project
    {
      id: "rogue-ai",
      title: "Rogue AI",
      subtitle: "LLM-Powered Security Assessment Platform",
      tagline: "AI-driven vulnerability analysis and security reporting",
      year: "2025",
      category: "Cyber Security",
      status: "Local Development Project",

      techStack: [
        "Python",
        "Flask",
        "LLM"
      ],

      summary:
        "A locally developed AI-powered security scanner that explored the use of Large Language Models for automated vulnerability assessment and security reporting."
    },

  ],

  skills: {
    categories: [
      { id: "all", name: "All Skills" },
      { id: "programming", name: "Core Programming" },
      { id: "webdev", name: "Software & Web Dev" },
      { id: "data-ai", name: "Data & AI" },
      { id: "domain", name: "Domain-Specific" },
      { id: "cs-core", name: "CS Core" },
      { id: "professional", name: "Professional Skills" }
    ],
    database: [
      // Core Programming
      {
        name: "Python",
        category: "programming",
        level: "Advanced",
        strength: "88%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        description: "Primary language for building AI architectures, scientific computation, backend APIs, and computer vision pipelines.",
        learned: "September 2024",
        used: "Safera, ProjectHub, Rogue AI",
        projects: "Safera, ProjectHub, Rogue AI",
        realWorld: "Developed an AI-powered campus disaster management platform and an LLM-powered security assessment tool."
      },
      {
        name: "C++",
        category: "programming",
        level: "Advanced",
        strength: "85%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        description: "Highly optimized logic solver used for competitive programming, core algorithms, and latency-critical modules.",
        learned: "September 2024",
        used: "DSA Solutions, Competitive Programming",
        projects: "Data Structures Library",
        realWorld: "Solved 200+ core data structure and algorithmic problems."
      },
      {
        name: "JavaScript",
        category: "webdev",
        level: "medium",
        strength: "70%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        description: "Dynamic frontend rendering, interactive page logics, and backend event-driven architectures.",
        learned: "December 2024",
        used: "ProjectHub",
        projects: "projectHub",
        realWorld: "Built fast browser applications with heavy DOM manipulation and state engines."
      },
      {
        name: "React",
        category: "webdev",
        level: "begineer",
        strength: "50%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "Building responsive component architectures, state providers, and modular client-side apps.",
        learned: "January 2025",
        used: "ProjectHub",
        projects: "ProjectHub",
        realWorld: "Developed modern layouts with glassmorphic cards and instant state updates."
      },
      {
        name: "Node.js",
        category: "webdev",
        level: "Advanced",
        strength: "85%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        description: "Backend scripting, server setups, and handling asynchronous REST and WebSocket pipelines.",
        learned: "june 2025",
        used: "ProjectHub Server, API Gateways",
        projects: "ProjectHub Backend",
        realWorld: "Managed file upload handling and server caches."
      },
      {
        name: "Data Analytics",
        category: "data-ai",
        level: "Advanced",
        strength: "88%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        description: "Pandas, NumPy, Matplotlib, Seaborn — cleaning, modeling, and plotting complex datasets.",
        learned: "April 2026",
        used: "Academic EDA Projects, Pravaha Training",
        projects: "Pravaha Simulation Datasets",
        realWorld: "Mapped and preprocessed city grid telemetry logs for RL training cycles."
      },
      {
        name: "Prompt Engineering",
        category: "data-ai",
        level: "Expert",
        strength: "95%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", // Using tensorflow icon as placeholder
        description: "Structuring complex contextual contexts, system role guidelines, and direct output schema generation (JSON).",
        learned: "December 2024",
        used: "ProjectHub content logic",
        projects: "ProjectHub content logic",
        realWorld: "Engineered robust prompting chains that maintain strict compliance with structural PDF layouts."
      },
      {
        name: "Machine Learning",
        category: "data-ai",
        level: "mmedium",
        strength: "75%",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        description: "Building neural classification layers, object detection anchors, and reinforcement signal triggers.",
        learned: "November 2025",
        used: "Rogue AI",
        projects: "Rogue AI",
        realWorld: "Optimized deep learning training models for real-time applications."
      }
    ]
  },

  leadership: [
    {
      id: "sih",
      title: "Smart India Hackathon 2025",
      role: "Team Member - ResQTech",
      duration: "2025",
      certificates: [
        { name: "SIH 2025 Certificate", file: "/certificates/sih.pdf" }
      ],
      bullets: [
        "Participated in the institute-level internal round of Smart India Hackathon 2025 at AISSMS IOIT Pune.",
        "Worked on disaster response and emergency management problem statements.",
        "Collaborated with team members on technology-driven solutions for public safety challenges."
      ]
    },
    {
      id: "techathon",
      title: "Techathon 3.0",
      role: "Hackathon Participant",
      duration: "2025",
      certificates: [
        { name: "Techathon 3.0 Certificate", file: "/certificates/techathon.pdf" }
      ],
      bullets: [
        "Developed a disaster management technology solution under the DM-4 problem statement.",
        "Focused on rapid disaster damage assessment and post-disaster resource planning.",
        "Applied software engineering and problem-solving skills in a competitive environment."
      ]
    },
    {
      id: "internships",
      title: "Industry Training & Internships",
      role: "Machine Learning & Data Science Intern",
      duration: "2025",
      certificates: [
        { name: "Machine Learning Certificate", file: "/certificates/internship.pdf" },
        { name: "Data Science Certificate", file: "/certificates/internship2.pdf" }
      ],
      bullets: [
        "Completed Machine Learning and Data Science industrial training programs.",
        "Built projects involving Human Action Detection, Diabetes Prediction, and Credit EDA.",
        "Worked on real-world datasets and end-to-end machine learning workflows."
      ]
    }
  ],

  journey: [
    {
      date: "2024",
      title: "Started Computer Engineering Journey",
      desc: "Began B.Tech in Computer Engineering while exploring Python, programming fundamentals, and software development."
    },
    {
      date: "Early 2025",
      title: "Hackathon & Problem Solving",
      desc: "Participated in Techathon and Smart India Hackathon activities focused on disaster management and real-world problem statements."
    },
    {
      date: "Jul - Sep 2025",
      title: "Machine Learning Industrial Program",
      desc: "Completed industrial training in Machine Learning and developed projects including Diabetes Prediction, Human Action Detection, and Bike Sharing Demand Prediction."
    },
    {
      date: "Jul - Sep 2025",
      title: "Data Science Industrial Program",
      desc: "Worked on Hate Speech Detection, Heart Failure Mortality Prediction, and Credit Risk Exploratory Data Analysis projects."
    },
    {
      date: "Oct 2025",
      title: "NPTEL Python Certification",
      desc: "Successfully completed The Joy of Computing Using Python and strengthened computational thinking and programming skills."
    },
    {
      date: "2026",
      title: "Java Full Stack Development",
      desc: "Completed Java Full Stack training covering HTML, CSS, JavaScript, Bootstrap, Core Java, Advanced Java, and web development concepts."
    },
    {
      date: "2026",
      title: "AI & Machine Learning Expansion",
      desc: "Completed a 30-Day Artificial Intelligence Masterclass and an End-to-End Machine Learning Bootcamp focused on practical AI applications."
    },
    {
      date: "Now",
      title: "Building AI Products",
      desc: "Developing projects such as Safera, ProjectHub, and Rogue AI while expanding expertise in AI, Full-Stack Development, and Data Analytics."
    }
  ],

  evolution: [
    {
      phase: "Phase 1: Programming Foundation",
      focus: "Python, Java, Problem Solving",
      timeline: "2024",
      outcome: "Built core programming knowledge and software development fundamentals."
    },
    {
      phase: "Phase 2: Data Science Exploration",
      focus: "EDA, Data Analysis, Visualization",
      timeline: "2025",
      outcome: "Applied analytical techniques to real-world datasets and business problems."
    },
    {
      phase: "Phase 3: Machine Learning",
      focus: "Predictive Models, Computer Vision",
      timeline: "2025",
      outcome: "Developed ML projects including prediction systems and action detection models."
    },
    {
      phase: "Phase 4: Full-Stack Development",
      focus: "Web Applications, Databases, APIs",
      timeline: "2025 - 2026",
      outcome: "Built complete web platforms with frontend, backend, and database integration."
    },
    {
      phase: "Phase 5: AI Systems Engineering",
      focus: "LLMs, AI Products, Intelligent Applications",
      timeline: "2026 - Present",
      outcome: "Building AI-powered products such as Safera, ProjectHub, and Rogue AI."
    }
  ],

  certificates: {
    technical: [
      { name: "Machine Learning Industrial Program", file: "/certificates/internship.pdf" },
      { name: "Data Science Industrial Program", file: "/certificates/internship2.pdf" },
      { name: "Smart India Hackathon 2025", file: "/certificates/sih.pdf" },
      { name: "Techathon 3.0", file: "/certificates/techathon.pdf" }
    ],
    other: [
      // Add incoming non-technical or other credentials here
    ]
  }
}