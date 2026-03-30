import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "2+" },
  { label: "Students Taught", value: "5+" },
];

export const highlights = [
  { icon: MapPin, text: "Based in Johannesburg, GP" },
  { icon: Briefcase, text: "Open for Permanent and freelance work" },
  { icon: GraduationCap, text: "CS Graduate from the University of Johannesburg" },
  { icon: Coffee, text: "Powered by Coffee & Creativity" },
];

export const userReviewData = [
  {
    id: 1,
    name: "John Doe",
    profession: "Real Estate Agent",
    userImage: "/images/u1.jpg",
    review:
      "A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame",
  },
  {
    id: 2,
    name: "Mike Smith",
    profession: "Business Owner",
    userImage: "/images/u2.jpg",
    review:
      "Great selection of properties and seamless process. Highly recommended for anyone looking to invest.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    profession: "Web developer",
    userImage: "/images/u3.jpg",
    review:
      "The website helped me find my dream home quickly and hassle-free. Exceptional service!",
  },
  {
    id: 4,
    name: "Emily Clark",
    profession: "Interior Designer",
    userImage: "/images/u4.jpg",
    review:
      "Fantastic range of properties with clear details. The best platform for home and design inspiration!",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ptrmolope@gmail.com",
    href: "mailto:ptrmolope@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 (073) 318-8475",
    href: "tel:+27733188475",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Johannesburg, GP",
    href: "https://www.google.com/maps/place/Johannesburg/@-26.1715215,28.0400245,12z/data=!3m1!4b1!4m6!3m5!1s0x1e950c68f0406a51:0x238ac9d9b1d34041!8m2!3d-26.205647!4d28.0337185!16zL20vMGcyODQ?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/PeterMolope", label: "GitHub" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/petermolope-mxv/",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "https://twitter.com/PeterMXV", label: "Twitter" },
];

export const experiences = [
  {
    type: "education",
    title: "BSc Computer Science and Informatics",
    company: "University of Johannesburg",
    period: "2018 - 2022",
    description:
      "Mastery of the full Software Development Life Cycle (SDLC). You gained proficiency in high-level languages like C#, Java, and JavaScript, with a strong focus on object-oriented programming (OOP).",
    technologies: ["C#", "Java", "Visual Studio", ".Net", "SQL"],
  },
  {
    type: "work",
    title: "Servide Desk Intern",
    
    company: "Turrito Networks",
    period: "2024 - 2025",
    description:
      "I provided comprehensive 1st Line Support focusing on Microsoft 365 and Azure administration. My expertise includes managing the onboarding lifecycle, providing high-volume remote assistance, and utilizing Auvik for real-time network monitoring. With a strong foundation in hardware diagnostics and AZ-900 certified cloud knowledge, I ensure that user issues are resolved quickly while maintaining the integrity of the broader company infrastructure.",
    technologies: ["Microsoft 365", "Microsoft Azure", "Uptime robot", "Auvik", "ConnectWise"],
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com/PeterMolope", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/petermolope-mxv/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com/PeterMXV", label: "Twitter" },
  { icon: Mail, href: "mailto:ptrmolope@gmail.com", label: "Email" },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "/images/p1.jpg",
    techStack: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
    image: "/images/p2.jpg",
    techStack: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI Content Generator",
    description:
      "GPT-powered content creation platform for marketers with templates and workflow automation.",
    image: "/images/p3.jpg",
    techStack: ["React", "Python", "OpenAI", "FastAPI"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Real Estate Platform",
    description:
      "Property listing platform with virtual tours, mortgage calculator, and agent booking system.",
    image: "/images/p4.jpg",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Maps API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Fitness Tracker",
    description:
      "Cross-platform mobile app for workout tracking, nutrition logging, and progress analytics.",
    image: "/images/p5.jpg",
    techStack: ["React Native", "Firebase", "Node.js", "Charts"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Learning Management System",
    description:
      "Educational platform with video streaming, quizzes, progress tracking, and certificates.",
    image: "/images/p6.jpg",
    techStack: ["Next.js", "Prisma", "AWS S3", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Terminal },
      { name: "Tailwind CSS", icon: Palette },
      { name: "React Native", icon: Smartphone },
      { name: "Vue.js", icon: Layout },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Layers },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "GraphQL", icon: Cpu },
      { name: "REST APIs", icon: Cloud },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Server },
      { name: "Azure", icon: Cloud },
      { name: "Linux", icon: Terminal },
      { name: "Figma", icon: Palette },
      { name: "CI/CD", icon: Cpu },
    ],
  },
];
