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
  { label: "Years Experience", value: "9+" },
  { label: "Projects Completed", value: "1+" },
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
    userImage: "/portfolio/images/u1.jpg",
    review:
      "A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame",
  },
  {
    id: 2,
    name: "Mike Smith",
    profession: "Business Owner",
    userImage: "/portfolio/images/u2.jpg",
    review:
      "Great selection of properties and seamless process. Highly recommended for anyone looking to invest.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    profession: "Web developer",
    userImage: "/portfolio/images/u3.jpg",
    review:
      "The website helped me find my dream home quickly and hassle-free. Exceptional service!",
  },
  {
    id: 4,
    name: "Emily Clark",
    profession: "Interior Designer",
    userImage: "/portfolio/images/u4.jpg",
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
    title: "InMyFridge | React Native Mobile Application",
    description:
      "Developed a mobile-only application using React Native to help users track home ingredients and reduce food waste. Built a specialized mobile UI for virtual inventory management, including expiration tracking and ingredient-based search. Integrated a Recipe API to provide meal suggestions based on current fridge contents. Focused on creating a lightweight, mobile-first experience for quick meal planning on the go.",
    image: "/Portfolio/images/p1.jpg",
    techStack: ["React Native", "Recipe API", "Mobile UI", "Inventory Management"],
    demoUrl: "https://github.com/PeterMolope/InMyFridge",
    githubUrl: "https://github.com/PeterMolope/InMyFridge",
  },
  {
    title: "Reverb Tech E-commerce Application (Full-Stack)",
    description:
      "Developed the entire Frontend UI using React.js and Vite, emphasizing component-based architecture and modularity. Implemented responsive design across all pages using Tailwind CSS, ensuring optimal viewing on mobile, tablet, and desktop devices. Managed application-wide state (shopping cart, user session) efficiently using the Zustand library. Utilized React Router DOM for client-side routing, delivering a fast and seamless navigation experience. Designed and built simulated Admin Panel.",
    image: "/Portfolio/images/p2.jpg",
    techStack: ["React.js", "Vite", "Tailwind CSS", "Zustand", "React Router DOM"],
    demoUrl: "https://github.com/PeterMolope/Reverb-Tech/",
    githubUrl: "https://github.com/PeterMolope/Reverb-Tech/",
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