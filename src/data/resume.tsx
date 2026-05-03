import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Shivam Mishra",
  initials: "SM",
  url: "https://www.shivam-30-mishra.vercel.app/",
  location: "Hyderabad, India",

  description:
    "Full-Stack Web Developer focused on building scalable and performant web applications.",

  summary:
    "Computer Science student at VIT with a strong interest in full-stack development and problem solving. I build modern web applications using React, Next.js, Node.js, and databases such as MongoDB and PostgreSQL. My work focuses on creating reliable backend systems and responsive user interfaces. I enjoy transforming ideas into working products and continuously improving my engineering skills through projects and competitive programming.",

  avatarUrl: "/pfp.jpeg",

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "C++",
    "PostgreSQL",
    "MongoDB",
    "Docker",
  ],

  services: [
    {
      title: "Full Stack Development",
      description:
        "Building scalable web applications using React, Next.js, Node.js, and modern backend architectures.",
      icon: "⚡",
    },
    {
      title: "Frontend Development",
      description:
        "Developing responsive and accessible user interfaces using React, TypeScript, and modern UI frameworks.",
      icon: "🎨",
    },
    {
      title: "Backend Development",
      description:
        "Designing REST APIs, database schemas, and backend services using Node.js, MongoDB, and PostgreSQL.",
      icon: "🛠",
    },
    {
      title: "Performance Optimization",
      description:
        "Improving application performance through efficient data handling, optimized queries, and scalable architecture.",
      icon: "🚀",
    },
  ],

  availability: {
    status: "Available",
    message: "Open to internships and software engineering opportunities",
  },

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "theshivammishra10@gmail.com",

    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Shivam30Mishra",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shivam-mishra-777026280/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/shivamM97963756",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [],

  education: [
    {
      school: "Vellore Institute of Technology",
      href: "https://vitbhopal.ac.in",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/250px-Vellore_Institute_of_Technology_seal_2017.svg.png",
      start: "2023",
      end: "2027",
    },
  ],

  pprojects: [
    {
      title: "Network Security System",
      href: "https://github.com/theshivammishra10/Network-Security-System",
      dates: "Feb 2026",
      active: true,
      description:
        "A production-ready ML pipeline for detecting phishing websites. Features automated data ingestion from MongoDB, schema validation, and drift detection. Deployed as a FastAPI service using Docker and MLflow for experiment tracking.",
      technologies: [
        "Python",
        "FastAPI",
        "Scikit-learn",
        "MLflow",
        "MongoDB",
        "Docker",
        "AWS S3",
        "DagsHub"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Shivam30Mishra/Network-Security-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/network-security.png",
      video: "",
    },
    {
      title: "Blogging Platform",
      href: "https://blogging-website-navy.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "A full-stack blogging platform supporting content creation, editing, and publishing. Implemented authentication, rich text handling, and optimized API interactions for smooth user experience and fast content delivery.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://blogging-website-navy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shivam30Mishra/Blogging-Website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/blog.png",
      video: "",
    },

    {
      title: "Nova Workflow Orchestrator",
      href: "https://github.com/Shivam30Mishra/nova-workflow-orchestrator",
      dates: "2026",
      active: true,
      description:
        "A workflow orchestration system inspired by real-world AI agents, designed to extract, validate, and process structured data from documents. Built with modular architecture to support scalable task pipelines and backend integrations.",
      technologies: [
        "Python",
        "FastAPI",
        "LangGraph",
        "Docker",
        "REST APIs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Shivam30Mishra/nova-workflow-orchestrator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/agent.png",
      video: "",
    },
    {
      title: "Heart Disease Prediction System",
      href: "#",
      dates: "Dec 2025",
      active: true,
      description:
        "An intelligent medical diagnostic system using classification algorithms to predict cardiovascular risks. Includes a real-time monitoring dashboard for clinical data analysis and health risk assessment.",
      technologies: ["Python", "Scikit-learn", "FastAPI", "Pandas", "React", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://heartwise-carings.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shivam30Mishra/heartwise-caring",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/heart-disease.png",
      video: "",
    },

    {
      title: "LogisticsFlow",
      href: "https://snapcart-eight.vercel.app/",
      dates: "Jan 2026",
      active: true,
      description:
        "A real-time logistics and grocery delivery platform with live order tracking and delivery verification. Built using a hybrid REST and WebSocket architecture to enable real-time updates between customers, delivery partners, and backend services.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Redux",
        "Socket.io",
        "Tailwind CSS",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://snapcart-eight.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shivam30Mishra/Grocery-Delivery-Website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/snapcart.png",
      video: "",
    },

    {
      title: "Thumbnailify",
      href: "https://thumbnailgo.com/",
      dates: "Jan 2025",
      active: true,
      description:
        "An AI-powered thumbnail generator that helps creators quickly design engaging thumbnails using prompt-based generation and customizable templates.",
      technologies: [
        "React",
        "Tailwind CSS",
        "MongoDB",
        "TypeScript",
        "Google Gemini API",
      ],
      links: [
        {
          type: "Website",
          href: "https://thumbnailgo.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shivam30Mishra/Thumbnail-Generator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/thumbnailgo.png",
      video: "",
    },

    {
      title: "Developer Portfolio",
      href: "https://www.shivam-30-mishra.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Personal developer portfolio built to showcase projects, technical skills, and development experience with a focus on performance and clean architecture.",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://shivam-portfolio-march.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shivam30Mishra/Portfolio----new",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/myportfolio.png",
      video: "",
    },
  ],
} as const;