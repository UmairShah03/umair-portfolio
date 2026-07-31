import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiRedux,
  SiExpress,
  SiNestjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiPython,
  SiFigma,
  SiPrisma,
  SiFirebase,
  SiVite,
  SiDotnet,
  SiSupabase,
  SiReactquery,
} from "react-icons/si";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { DiRedis, DiMsqlServer } from "react-icons/di";
import { TypeOrmIcon } from "@/components/icons/TypeOrmIcon";

const logo = "/logo.png";

export const LogoImage = {
  logo,
};

export const personalInfo = {
  name: "Umair Shah",
  tagline: "Full Stack Developer | React, TypeScript & NestJS Specialist",
  bio: "I am a driven Full Stack Developer with 2+ years of professional engineering experience architecting scalable web applications, multi-tenant SaaS platforms, and secure systems. I specialize in Next.js, React, TypeScript, Node.js, Nest.js, and modern database architectures (Supabase, PostgreSQL, MongoDB, SQL Server), crafting pixel-perfect UIs with robust, high-availability backend systems.",
  email: "umairshah.developer@gmail.com",
  location: "Karachi, Pakistan",
  resumeUrl: "/cv.pdf",
};

export const socialLinks = {
  github: "https://github.com/UmairShah03/",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};

export const techStack = [
  { name: "React", icon: SiReact, color: "61DAFB", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "F7DF1E", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "3178C6", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "FFFFFF", category: "Frontend" },
  { name: "TanStack Query", icon: SiReactquery, color: "FF4154", category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "06B6D4", category: "Frontend" },
  { name: "Redux Toolkit", icon: SiRedux, color: "764ABC", category: "Frontend" },
  { name: "Vite", icon: SiVite, color: "646CFF", category: "Frontend" },
  { name: "Figma", icon: SiFigma, color: "F24E1E", category: "Frontend" },

  { name: "Node.js", icon: SiNodedotjs, color: "5FA04E", category: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "E0E0E0", category: "Backend" },
  { name: "Nest.js", icon: SiNestjs, color: "E0234E", category: "Backend" },
  { name: "ASP.NET Core", icon: SiDotnet, color: "512BD4", category: "Backend" },
  { name: "ASP.NET WebForms", icon: SiDotnet, color: "5C2D91", category: "Backend" },
  { name: "C#", icon: TbBrandCSharp, color: "512BD4", category: "Backend" },
  { name: "Python", icon: SiPython, color: "3776AB", category: "Backend" },

  { name: "Supabase", icon: SiSupabase, color: "3FCF8E", category: "Database" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "4169E1", category: "Database" },
  { name: "MongoDB", icon: SiMongodb, color: "47A248", category: "Database" },
  { name: "SQL Server", icon: DiMsqlServer, color: "CC292B", category: "Database" },
  { name: "PL/SQL", icon: TbSql, color: "F80000", category: "Database" },
  { name: "Redis", icon: DiRedis, color: "FF4438", category: "Database" },
  { name: "Prisma", icon: SiPrisma, color: "5A67D8", category: "Database" },
  { name: "TypeORM", icon: TypeOrmIcon, color: "FC2D2D", category: "Database" },
  { name: "Firebase", icon: SiFirebase, color: "FFCA28", category: "Database" },

  { name: "Docker", icon: SiDocker, color: "2496ED", category: "Tools & DevOps" },
  { name: "Git", icon: SiGit, color: "F05032", category: "Tools & DevOps" },
];

export const projects = [
  {
    title: "EduRevolution",
    description:
      "A multi-tenant school management SaaS system enabling multiple educational institutions to securely manage operations, student records, and academics independently on a shared, scalable platform.",
    tech: ["Next.js", "TypeScript", "Nest.js", "Node.js", "Supabase", "TanStack Query", "ZSA", "Redis"],
    liveUrl: "-",
    githubUrl: "-",
    isPrivateSaaS: true,
    image: "https://edurevolution.pk/assets/images/full-logo.png",
  },
  {
    title: "Liorae-Ecommerce",
    description:
      "A modern, full-stack eCommerce platform designed to deliver seamless online shopping experiences with secure payment integration, intuitive navigation, state management with Zustand, and scalable architecture.",
    tech: ["React", "TypeScript", "Zustand", "Node.js", "Express.js", "Tailwind CSS"],
    liveUrl: "https://liorae.vercel.app/",
    githubUrl: "https://github.com/UmairShah03/Liorae",
    image: "https://liorae.vercel.app/assets/logo-JnJqt-Cq.png",
  },
  {
    title: "Klimate",
    description:
      "A sleek, real-time weather dashboard delivering hyper-accurate forecasts, interactive weather maps, and live environmental updates for smarter daily planning.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Node.js"],
    liveUrl: "https://klimate-beige.vercel.app/",
    githubUrl: "https://github.com/UmairShah03/Klimate",
    image: "https://klimate-beige.vercel.app/logo.png",
  },
];

export const experiences = [
  {
    role: "Junior Software Developer",
    company: "Computer Research Pvt. Ltd",
    period: "2025 – Present",
    description:
      "Contributing to secure financial applications and core banking solutions, enhancing system performance, and developing reliable transaction processing architectures.",
  },
  {
    role: "WordPress Developer",
    company: "Strive Software & Marketing Solutions",
    period: "2023 – 2024",
    description:
      "Designed and customized high-performance, responsive websites with optimized loading speed, clean design systems, and seamless user experiences.",
  },
];

export const education = [
  {
    degree: "Diploma in Software Engineering",
    institution: "Aligarh Institute of Technology",
    location: "Karachi, Pakistan",
    period: "2023 – 2026",
    description:
      "Specialized in software engineering principles, full-stack application development, database management systems, and software architecture.",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Aptech Institute of Technology",
    location: "Karachi, Pakistan",
    period: "2022 – 2023",
    description:
      "Professional diploma focused on modern web technologies, software engineering fundamentals, database management, and UI design.",
  },
  {
    degree: "Intermediate",
    institution: "Board of Intermediate",
    location: "Karachi, Pakistan",
    period: "2021",
    description:
      "Higher secondary education with a strong foundation in computer science, mathematics, and analytical problem-solving.",
  },
  {
    degree: "Matriculation",
    institution: "Board Of Secondary Education",
    location: "Karachi, Pakistan",
    period: "2019",
    description:
      "Secondary school certification in Science stream with focus on science, mathematics, and foundational computer studies.",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const siteContent = {
  hero: {
    badge: "Available for new opportunities",
    greeting: "Hello, I am",
    line1: "Innovative Solutions",
    line2: "Develop With Umair",
    viewProjects: "View Projects",
    getInTouch: "Get In Touch",
    hireMe: "Hire Me",
  },
  about: {
    title: "About Me",
    subtitle: "Passionate developer turning complex problems into elegant web software.",
    downloadCv: "Download CV",
    quickStats: "Quick Stats",
    highlights: [
      { text: "Frontend Architecture (React, TypeScript, Redux Toolkit, Zustand, Tailwind)", iconName: "Code" },
      { text: "Backend Systems & APIs (Node.js, Nest.js, Express.js, ASP.NET Core, C#)", iconName: "Server" },
      { text: "Database & Cloud Infrastructure (Supabase, PostgreSQL, SQL Server, Redis, PL/SQL)", iconName: "Database" },
      { text: "Domain Experience (Core Banking Solutions & Multi-Tenant Enterprise SaaS)", iconName: "ShieldCheck" },
    ],
    stats: [
      { label: "Years Experience", value: "2+" },
      { label: "Projects Completed", value: "5+" },
      { label: "Happy Clients", value: "3+" },
      { label: "Open Source Contributions", value: "10+" },
    ],
  },
  skills: {
    title: "Tech Stack & Skills",
    subtitle: "Technologies and tools I work with daily to craft scalable web solutions.",
    categories: ["All", "Frontend", "Backend", "Database", "Tools & DevOps"],
  },
  projects: {
    title: "Featured Projects",
    subtitle: "A selection of full-stack applications and platforms I've architected & built.",
    liveDemo: "Live Demo",
    privateRepo: "Private Repo",
    privateSaaS: "Private SaaS",
    contactDemo: "Contact for Demo Credentials",
    contactDemoToast: "Private Enterprise SaaS: Contact me to receive test demo credentials!",
    code: "Code",
  },
  experience: {
    title: "Experience & Education",
    subtitle: "My professional journey, engineering roles, and academic qualifications.",
    tabs: {
      experience: "Work Experience",
      education: "Education",
    },
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Have a project in mind, a question, or an opportunity? Let's build something great together.",
    form: {
      heading: "Send a Message",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. John Doe",
      emailLabel: "Your Email",
      emailPlaceholder: "john@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "e.g. Project Inquiry",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project or offer...",
      sendBtn: "Send Message",
      sendingBtn: "Sending Message...",
      successToast: "Opening your mail client to send message!",
      errorToast: "Could not open mail client automatically. Please send mail directly to ",
      suggestedSubjectPrefix: "Suggested Subject",
      prefillTemplateLabel: "Prefill professional message draft",
    },
    details: {
      heading: "Contact Details",
      description: "Feel free to reach out directly via email or social platforms. I typically respond within 24 hours.",
      emailLabel: "Email",
      locationLabel: "Location",
      copyBtn: "Copy",
      copiedBtn: "Copied!",
      copyToast: "Email copied to clipboard!",
      socialsLabel: "Social Profiles",
    },
  },
  footer: {
    developerRole: "Full Stack Developer",
    rights: "All rights reserved. Crafted with React & Tailwind.",
  },
};


