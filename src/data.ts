import { Project, SkillCategory, Experience, Education, Certification } from './types';

export const HERO_DATA = {
  name: "Raunak Raj",
  title: "Computer Science Engineering Undergraduate",
  tagline: "Java Developer | Cloud & Backend Enthusiast",
  bio: "Computer Science Engineering undergraduate with interests in Java development, database systems, web technologies, and cloud fundamentals. Passionate about building practical software projects and continuously improving technical skills through hands-on learning.",
};

export const EDUCATION_DATA: Education[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "AKTU University",
    period: "2024 - Present",
    grade: "Computer Science Engineering",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Interface Design, Java Core, Relational Databases (MySQL), and Web Development.",
      "Dedicated to applying core computer science fundamentals to building practical real-world desktop and console applications."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages & Core",
    skills: [
      {
        name: "Java",
        level: 85,
        iconName: "Code2",
        description: "Excellent command over Java Standard Edition, Object-Oriented programming principles, and Collections Framework."
      },
      {
        name: "JavaScript",
        level: 75,
        iconName: "Cpu",
        description: "Creating interactive frontend behaviors and dynamic web structures."
      }
    ]
  },
  {
    name: "Databases & Web",
    skills: [
      {
        name: "MySQL",
        level: 80,
        iconName: "Database",
        description: "Designing database structures, writing queries, and handling data storage."
      },
      {
        name: "HTML",
        level: 88,
        iconName: "Code2",
        description: "Structuring clean semantic web documents and responsive layouts."
      },
      {
        name: "CSS",
        level: 85,
        iconName: "Code2",
        description: "Styling modern layouts and responsive web interfaces using modern techniques."
      }
    ]
  },
  {
    name: "Tools & Cloud Platform",
    skills: [
      {
        name: "Git & GitHub",
        level: 84,
        iconName: "Github",
        description: "Version control management, remote repository tracking, and collaboration workflows."
      },
      {
        name: "AWS Fundamentals",
        level: 78,
        iconName: "Cloud",
        description: "Understanding of core cloud services including Amazon S3, CloudFront delivery, and media configurations."
      }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "smart-campus-system",
    title: "Smart Campus Management System",
    description: "A desktop admin console system implementing custom menu-driven CRUD behaviors, student records, course enrollments, and academic transcripts saved locally.",
    category: "Backend",
    tags: ["Java", "Collections", "Exception Handling", "File Handling"],
    featured: true,
    githubUrl: "https://github.com/rnkraj05/gnc-java-final-assessment-smartcampusRAUNAK",
    liveUrl: "#",
    highlights: [
      "Leveraged Java Collections Framework to organize and search student profile records dynamically.",
      "Coded robust custom try-catch blocks to prevent unexpected application crashes.",
      "Saved academic records using standard File I/O serializers for local persistence."
    ]
  },
  {
    id: "java-console-apps",
    title: "Java Console Based Applications",
    description: "A repository of menu-driven systems showcasing solid object-oriented modularity and robust database connectivity.",
    category: "Database",
    tags: ["Java Core", "JDBC", "MySQL", "OOP"],
    featured: true,
    githubUrl: "https://github.com/rnkraj05/TRAINING",
    liveUrl: "#",
    highlights: [
      "Employed clear OOP principles including inheritance, encapsulation, and code modularity.",
      "Integrated JDBC database drivers to establish safe connections and fire MySQL search/save queries.",
      "Structured localized menu loops allowing users to interactively query record tables from the terminal."
    ]
  },
  {
    id: "quiz-master-pro",
    title: "Quiz-Master-Pro",
    description: "A responsive web-based quiz platform implementing score tracking, timers, animated results, and custom questions in a dynamic interface.",
    category: "Frontend",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    githubUrl: "https://github.com/rnkraj05/Quiz-Master-Pro",
    liveUrl: "#",
    highlights: [
      "Built a fully responsive layout with interactive user score tracking and instant score feedback.",
      "Organized clean styling structures supporting diverse mobile and desktop screen sizes.",
      "Programmed interactive script state handling for validators, timers, and final summaries."
    ]
  },
  {
    id: "careerconnect-job-board",
    title: "CareerConnect Job Board",
    description: "An interactive job directory featuring job listing boards, search criteria, filter categories, and application submission flows.",
    category: "Frontend",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    githubUrl: "https://github.com/rnkraj05/Job-Board",
    liveUrl: "#",
    highlights: [
      "Designed a student-friendly job search page with dynamic titles, locations, and type filters.",
      "Integrated friendly application forms accepting applicant input and managing submissions.",
      "Implemented smooth hover transitions, flexible search results, and clean navigation menus."
    ]
  },
  {
    id: "calculator",
    title: "Calculator",
    description: "A modern, highly accurate responsive calculator supporting basic arithmetic operations, keyboard entries, and mathematical validation.",
    category: "Frontend",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    githubUrl: "https://github.com/rnkraj05/Calculator",
    liveUrl: "#",
    highlights: [
      "Programmed physical computer keyboard listener support alongside standard on-screen click handlers.",
      "Refined modern visual layout with high-contrast keys and a beautiful glassmorphism theme.",
      "Handled dividing zero edge cases and multi-digit operations elegantly without errors."
    ]
  },
  {
    id: "study-assistant-landing-page",
    title: "Study Assistant Landing Page",
    description: "A clean, modern responsive landing page highlighting features, benefits, and student configurations for a productivity utility application.",
    category: "Frontend",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    githubUrl: "https://github.com/rnkraj05/LandingPage",
    liveUrl: "#",
    highlights: [
      "Constructed responsive marketing sections with custom interactive drop-down FAQ elements.",
      "Applied modern styling guidelines including clean typography hierarchy and space-saving headers.",
      "Optimized mobile viewport scaling to ensure a high-quality experience on all personal devices."
    ]
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: "IBM PBEL (Project Based Experiential Learning) Virtual Internship",
    company: "IBM SkillsBuild",
    period: "2026",
    description: [
      "Participated in project-based learning activities focused on software development fundamentals, collaboration, Git/GitHub workflows and practical problem solving.",
      "Learned core logic paradigms and logical flow design procedures.",
      "Engaged with peer students to solve software challenges and manage version control changes via pull requests."
    ],
    techUsed: ["Core Java", "Git", "GitHub", "Problem Solving"]
  },
  {
    role: "AWS Media & Entertainment Cloud Engineering Virtual Internship",
    company: "AWS Skill Builder | EduSkills",
    period: "2026",
    description: [
      "Completed cloud learning focused on AWS Media Services including Amazon S3, CloudFront, MediaLive, MediaPackage and MediaConvert.",
      "Configured adaptive media files and optimized transmission streams securely.",
      "Analyzed streaming distribution networks, content caching nodes, and bucket access parameters."
    ],
    techUsed: ["AWS S3", "CloudFront", "MediaLive", "MediaPackage", "MediaConvert"]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    name: "IBM PBEL Virtual Internship",
    issuer: "IBM SkillsBuild",
    date: "2026"
  },
  {
    name: "AWS Media & Entertainment Cloud Engineering Virtual Internship",
    issuer: "AWS Skill Builder • EduSkills",
    date: "2026"
  },
  {
    name: "IBM SkillsBuild Learning Certificates",
    issuer: "IBM SkillsBuild",
    date: "2026"
  },
  {
    name: "Microsoft AI Skills Fest 2026",
    issuer: "Microsoft",
    date: "2026"
  },
  {
    name: "5-Day AI Agents: Intensive Vibe Coding Course With Google",
    issuer: "Google Developer Program",
    date: "2026"
  }
];

export const ACHIEVEMENTS_DATA: any[] = [];
