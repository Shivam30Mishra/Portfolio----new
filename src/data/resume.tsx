import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shivam Mishra",
  initials: "SM",
  url: "https://www.shivam-30.vercel.app/",
  location: "Hyderabad, India",
  description:
    "AI Full Stack Developer - building intelligent systems and scalable products.",
  summary:
    "I’m an AI-focused Full Stack Developer and entrepreneur, currently building scalable SaaS applications with integrated intelligence. With experience across multiple hackathons, a DSA-based hackathon win, and various grants, I specialize in turning complex data-driven ideas into user-friendly products. I love bridging the gap between optimized ML backends and intuitive UI, while contributing to the evolving AI developer ecosystem.",
  avatarUrl: "/pfp.jpeg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "C++",
    "FastAPI",
    "Scikit-learn",
    "MLflow",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
  ],
  services: [
    {
      title: "AI & ML Integration",
      description: "Developing production-ready machine learning pipelines, custom LLM implementations, and intelligent automation for modern web platforms.",
      icon: "🤖",
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern frameworks. Expertise in React, Next.js, TypeScript, Node.js, and cloud-native deployment.",
      icon: "⚡",
    },
    {
      title: "MLOps & Cloud Arch",
      description: "Building robust ML pipelines with experiment tracking, automated data ingestion, and containerized deployment using Docker and AWS.",
      icon: "⚙️",
    },
    {
      title: "SaaS Development",
      description: "Building scalable SaaS applications from MVP to production, focusing on high performance, security, and AI-driven features.",
      icon: "🚀",
    },
  ],
  availability: {
    status: "Available",
    message: "I’m currently available for freelance projects, consulting, and AI-driven collaborations. Whether you need to integrate LLMs, build an ML pipeline, or develop a scalable full-stack application, let’s bring your vision to life.",
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/", icon: NotebookIcon, label: "Blog" },
  ],
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
        url: "mailto:theshivammishra10@gmail.com",
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
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/250px-Vellore_Institute_of_Technology_seal_2017.svg.png",
      start: "2023",
      end: "2027",
    },
  ],
  pprojects: [
    {
      title: "LogisticsFlow",
      href: "https://snapcart-eight.vercel.app/",
      dates: "Jan 2026",
      active: true,
      description:
        "A high-concurrency grocery ecosystem featuring live GPS tracking and instant order synchronization. Built with a hybrid REST + WebSocket architecture to handle real-time communication and secure delivery verification.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Redux",
        "Socket.io",
        "Tailwind CSS",
        "MongoDB"
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
        "Developed an AI-powered drag-and-drop platform to simplify Rust smart contract creation. Features Scratch-like interface, AI-assisted generation, and pre-made templates. Used by 200+ developers, reducing contract development time by 70%.",
      technologies: ["React", "Tailwind CSS", "MongoDB", "Typescript", "Google Gemini API"],
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
      title: "My Portfolio",
      href: "/",
      dates: "2025",
      active: true,
      description:
        "A modern personal portfolio built with Next.js 14, React, and TailwindCSS. It features a clean, responsive design with a custom blog system and integrated UI components from Shadcn/UI, Magic UI, and Framer Motion.",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Shadcn/UI"],
      links: [
        {
          type: "Website",
          href: "https://www.shivam-30-mishra.vercel.app/",
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
    }
  ],
} as const;