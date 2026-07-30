import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiRedux,
  SiExpress,
  SiNestjs,
  SiRedis,
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
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const logo = "/logo.png";

export const LogoImage = {
  logo,
};

export const personalInfo = {
  name: "Umair Shah",
  tagline: "Full Stack Developer | React & TypeScript Specialist",
  bio: "I'm a passionate full-stack developer with 1+ years of experience building scalable web applications. I specialize in React, TypeScript, and Node.js, crafting pixel-perfect UIs with exceptional user experiences. Currently focused on building performant, accessible applications that make a real impact.",
  email: "umairshah.developer@gmail.com",
  location: "Karachi, Pakistan",
  resumeUrl: "/assets/cv.pdf",
};

export const socialLinks = {
  github: "https://github.com/UmairShah03/",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};

export const techStack = [
  { name: "React", icon: SiReact, color: "61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "5FA04E" },
  { name: "Express.js", icon: SiExpress, color: "E0E0E0" },
  { name: "Nest.js", icon: SiNestjs, color: "E0234E" },
  { name: "Redux", icon: SiRedux, color: "764ABC" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "06B6D4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "47A248" },
  { name: "Redis", icon: SiRedis, color: "DC382D" },
  { name: "Prisma", icon: SiPrisma, color: "5A67D8" },
  { name: "Docker", icon: SiDocker, color: "2496ED" },
  { name: "Git", icon: SiGit, color: "F05032" },
  { name: "Figma", icon: SiFigma, color: "F24E1E" },
  { name: "C#", icon: TbBrandCSharp, color: "512BD4" },
  { name: "Python", icon: SiPython, color: "3776AB" },
  { name: "Firebase", icon: SiFirebase, color: "FFCA28" },
  { name: "Vite", icon: SiVite, color: "646CFF" },
];

export const projects = [
  {
    title: "EduRevolution",
    description:
      "A multi-tenant school management system enabling multiple educational institutions to securely manage operations, student records, and academics independently on a shared, scalable platform.",
    tech: ["React", "TypeScript", "Node.js", "Nest.js", "Supabase", "Redis"],
    liveUrl: "https://edurevolution.pk/",
    githubUrl: "-",
    image: "https://edurevolution.pk/assets/images/full-logo.png",
  },
  {
    title: "Liorae-Ecommerce",
    description:
      "A modern, full-stack eCommerce platform designed to deliver seamless online shopping experiences with secure payment integration, intuitive navigation, and scalable architecture.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind"],
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
