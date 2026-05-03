import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shivam Mishra",
  initials: "SM",
  url: "https://www.shivam-30.vercel.app/",
  location: "Hyderabad, India",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
"Web Developer - building, learning, and sharing on X.",
  summary:
"I’m a Web-focused Full Stack Developer and entrepreneur, currently building scalable SaaS applications. With experience across multiple hackathons , 1 hackathon winnner(DSA based), and grants, I love turning ideas into products that bridges optimized backend and user friendly UI. Beyond coding, I enjoy experimenting, sharing, and contributing to the developer ecosystem."  ,
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
      title: "Web3 Development",
      description: "Smart contracts, DeFi protocols, NFT platforms, and blockchain integrations. Experience with Solidity, Rust, and multiple chains.",
      icon: "🔗",
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern frameworks. React, Next.js, TypeScript, Node.js, and cloud deployment.",
      icon: "⚡",
    },
    {
      title: "Smart Contract Auditing",
      description: "Security-focused smart contract reviews and optimizations. Ensuring your contracts are production-ready and secure.",
      icon: "🔒",
    },
    {
      title: "SaaS Development",
      description: "Scalable SaaS applications with modern architecture. From MVP to production with performance optimization.",
      icon: "🚀",
    },
  ],
  availability: {
    status: "Available",
    message: "Open to new freelance projects and collaborations",
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "theshivammishra10@gmail.com",
    // tel: "+123456789",
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

  work: [
          
  ],
  education: [
    {
      school: "Vellore institue of technology",
      href: "https://vitbhopal.ac.in",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/250px-Vellore_Institute_of_Technology_seal_2017.svg.png",
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
      title: "LogisticsFlow",
      href: "https://snapcart-eight.vercel.app/",
      dates: "Jan 2026",
      active: true,
      description:
        "A high-concurrency grocery ecosystem featuring live GPS tracking and instant order synchronization. Built with a hybrid REST + WebSocket architecture to handle real-time communication and secure OTP-based delivery verification.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Redux",
        "Socket.io",
        "Tailwind CSS",
        "Mongo DB"
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
        "An AI-powered thumbnail generator that helps creators quickly design engaging thumbnails using prompt-based generation and customizable templates. Integrates AI APIs with a responsive React interface to simplify content creation.",
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
      title: "My Portfolio",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Web3 application for creating, remixing, and licensing creative IP with 100+ registered works and $5K+ in licensing revenue. Creators register original works onchain, others fork with attribution, and licenses define usage and monetization.",
      technologies: ["Next.js", "TypeScript", "Solidity", "Web3"],
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
      // image: "/fork.png",
      image: "/myportfolio.png", 
      video: "", // Add screenshot: "/forkyoudaddy.png" (place in /public folder) or use external URL
    }
  ],
} as const;
