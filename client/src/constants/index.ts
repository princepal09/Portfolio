

export interface ITech {
  name: string;
  logo: string;
}

export interface ITesti {
  name: string;
  role: string;
  image: string;
  content: string;
}

export interface IProject {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  features: string[];
}

export const technologies: ITech[] = [
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Vite",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Redux Toolkit",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
];

export const testimonials : ITesti[] = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    image: "https://avatarapi.runflare.run/public/1",
    content:
      "John's ability to transform our vision into reality was exceptional. His technical expertise and attention to detail made our project a huge success.",
  },
  {
    name: "Michael Chen",
    role: "CTO at InnovateLabs",
    image: "https://avatarapi.runflare.run/public/2",
    content:
      "Working with John was a game-changer for our startup. His full-stack expertise and problem-solving skills are truly remarkable.",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager at DevCorp",
    image: "https://avatarapi.runflare.run/public/3",
    content:
      "John not only delivered outstanding code but also brought innovative solutions to our challenges. His collaborative approach made him a valuable team member.",
  },
];



export const projects:IProject[] = [
  {
    title: "StudyNotion",
    description:
      "A fully functional EdTech platform that enables instructors to create and manage courses while allowing students to browse, purchase, and learn through an interactive learning experience.",
    image:
      "/studynotion.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Cloudinary",
      "Redux"
    ],
    liveUrl: "https://study-notion-ruddy-six.vercel.app/",
    githubUrl: "https://github.com/princepal09/StudyNotion",
    features: [
      "Student and Instructor authentication",
      "Course creation and management",
      "Secure course purchasing with Razorpay",
      "Video-based learning experience"
    ]
  },
  {
    title: "AI-Powered Task Manager",
    description: "Smart task management application that uses AI to prioritize and categorize tasks, with team collaboration features.",
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "OpenAI", "MongoDB", "WebSocket"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/johndoe/taskmanager",
    features: [
      "AI task prioritization",
      "Real-time collaboration",
      "Custom workflows",
      "Analytics dashboard"
    ]
  },
  {
    title: "Social Media Analytics",
    description: "Comprehensive social media analytics platform providing insights and engagement metrics across multiple platforms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Python", "D3.js", "AWS", "Redis"],
    liveUrl: "https://analytics-demo.com",
    githubUrl: "https://github.com/johndoe/analytics",
    features: [
      "Cross-platform analytics",
      "Custom report generation",
      "Engagement tracking",
      "Trend analysis"
    ]
  }
];


export interface IExperience {
  company: string;
  role: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
  certificate?: string;
}

export const experiences: IExperience[] = [
  {
    company: "3Skills",
    role: "Web Developer Intern",
    location: "Remote",
    duration: "Dec 5, 2025 - Feb 5, 2026",
    description:
      "Contributed to MERN stack applications by building responsive React interfaces, developing REST APIs with Node.js and Express.js, integrating MongoDB, and collaborating with the team using Git and GitHub.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Git",
      "GitHub",
    ],
    certificate: "/Certificate_INTERN260102_Prince Pal.pdf", 
  },
];