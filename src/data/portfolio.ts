import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiPython,
  SiFigma,
  SiGraphql,
  SiRedis,
  SiFirebase,
  SiVite,
  SiC,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const logo = "/logo.png";

export const LogoImage = {
  logo,
};

export const personalInfo = {
  name: "Umair Shah",
  tagline: "Full Stack Developer | React & TypeScript Specialist",
  bio: "I'm a passionate full-stack developer with 1+ years of experience building scalable web applications. I specialize in React, TypeScript, and Node.js, crafting pixel-perfect UIs with exceptional user experiences. Currently focused on building performant, accessible applications that make a real impact.",
  email: "umairshah.developer@gmail.com",
  location: "Karachi,Pakitan",
  resumeUrl: "/assets/cv.pdf",
};

export const socialLinks = {
  github: "https://github.com/UmairShah03/",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};

export const techStack = [
  { name: "React", icon: SiReact, color: "61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "06B6D4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "4169E1" },
  { name: "Docker", icon: SiDocker, color: "2496ED" },
  { name: "Git", icon: SiGit, color: "F05032" },
  { name: "Figma", icon: SiFigma, color: "F24E1E" },
  { name: "C#", icon: SiC, color: "F24E1E" },
  { name: "Vite", icon: SiVite, color: "646CFF" },
];

export const projects = [
  {
    title: "Liorae-Ecommerce",
    description:
      "Liorae-Ecommerce is a modern, full-stack eCommerce platform designed to deliver seamless online shopping experiences with secure payments, intuitive UI, and scalable architecture.",
    tech: ["React", "TypeScript", "Node.js"],
    liveUrl: "https://liorae.vercel.app/",
    githubUrl: "https://github.com/UmairShah03/Liorae",
    image: "https://liorae.vercel.app/assets/logo-JnJqt-Cq.png",
  },
  {
    title: "Klimate",
    description:
      "Klimate is a sleek, real-time weather application that delivers accurate forecasts, live updates, and intuitive visual insights for smarter daily planning.",
    tech: ["React.js", "TypeScript", "Tailwind", "Shadcn", "Node.js"],
    liveUrl: "https://klimate-beige.vercel.app/",
    githubUrl: "https://github.com/UmairShah03/Klimate",
    image: "https://klimate-beige.vercel.app/logo.png",
  },
];

export const experiences = [
  {
    role: "Junior Software Developer",
    company: "Computer Research Pvt.Ltd",
    period: "2025 – Present",
    description:
      "Worked as a Junior Developer in a banking solutions company, contributing to secure financial applications, enhancing system performance, and supporting the development of reliable transaction processing systems.",
  },
  {
    role: "WordPress Developer",
    company: "Strive Software And Marketing Solutions",
    period: "2023 – 2024",
    description:
      "Worked as a WordPress Developer, building and customizing responsive websites with optimized performance, clean code, and user-focused design.",
  },
];
