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
      title: "Developer Portfolio",
      href: "https://www.shivam-30-mishra.vercel.app/",
      dates: "2025",
      active: true,
      description:
        "Personal developer portfolio built to showcase projects, technical skills, and development experience. Developed with Next.js and TypeScript with a focus on performance, responsive design, and clean component architecture.",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
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
    },
  ],
} as const;