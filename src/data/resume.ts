import { Github, Linkedin, Mail, Code2, Terminal, Shield, Cpu } from 'lucide-react';

export const siteConfig = {
  name: "Claudio Palmar",
  title: "Security Researcher & Software Engineer",
  tagline: "Construyendo puentes entre la seguridad ofensiva y el desarrollo de software robusto.",
  description: "Estudiante de último año de Licenciatura en Computación, enfocado en ciberseguridad y arquitectura de software. Creador de herramientas de seguridad open source y desarrollador full-stack.",
  email: "contacto@claudiopalmar.me", // Ajusta esto si tienes un email real
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/tu-usuario", 
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tu-usuario", 
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:contacto@claudiopalmar.me", 
      icon: Mail,
    },
  ],
};

export const aboutStats = [
  { value: 'Finalista', label: 'Computación' },
  { value: '3+', label: 'Proyectos Core' },
  { value: 'Top', label: 'Rendimiento Académico' },
  { value: '∞', label: 'Curiosidad' },
];

export const philosophy = [
  {
    title: "Seguridad desde el Diseño",
    description: "La seguridad no es un parche al final del desarrollo. Es un requisito funcional que debe integrarse desde la arquitectura hasta el despliegue.",
    icon: Shield
  },
  {
    title: "Código como Artesanía",
    description: "Creo en el código limpio, tipado estricto y mantenible. Escribo software para humanos, que incidentalmente entienden las máquinas.",
    icon: Code2
  },
  {
    title: "Profundidad Técnica",
    description: "No me conformo con que funcione. Necesito entender el 'por qué'. Desde los ciclos de CPU hasta el renderizado del DOM.",
    icon: Cpu
  }
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  featured: boolean;
  status: 'Development' | 'Production' | 'Research';
}

export const projects: Project[] = [
  {
    title: "VulnSeeker",
    description: "Escáner modular de vulnerabilidades web diseñado para democratizar la ciberseguridad en PYMEs. Mapea superficies de ataque y detecta fallos críticos como SQLi y XSS mediante análisis automatizado.",
    tech: ["Python", "Security Automation", "Modular Architecture", "OWASP"],
    featured: true,
    status: 'Research',
    link: "#",
  },
  {
    title: "Barbershop Management System",
    description: "Solución de escritorio integral construida en Python con SQL para lógica de negocio compleja y gestión de concurrencia entre múltiples barberos. Maneja agendamiento, historial de clientes y control financiero con una interfaz intuitiva.",
    tech: ["Python", "Desktop App", "SQL", "Business Logic"],
    featured: true,
    status: 'Production',
    link: "#",
  },
  {
    title: "Un Dulcito & Servicios Web",
    description: "Desarrollo Full-Stack desplegado para gestión de negocio real, optimizando SEO local y conversión de usuarios. Producto en producción con usuarios activos.",
    tech: ["React", "Vite", "Tailwind CSS", "UX/UI"],
    featured: false,
    status: 'Production',
    link: "#",
  },
];

export const skillCategories = [
  {
    title: 'Core & Seguridad',
    description: 'Fundamentos de computación y seguridad ofensiva/defensiva.',
    skills: ['Python', 'OWASP Top 10', 'Linux Hardening', 'Vulnerability Assessment', 'Bash Scripting', 'Git'],
    icon: Shield
  },
  {
    title: 'Frontend Moderno',
    description: 'Creación de interfaces reactivas y tipadas.',
    skills: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Zod', 'TanStack Query'],
    icon: Code2
  },
  {
    title: 'Backend & Sistemas',
    description: 'Lógica de negocio y persistencia de datos.',
    skills: ['SQL', 'Node.js', 'API REST', 'Docker', 'Architecture Patterns', 'Desktop Apps'],
    icon: Terminal
  },
];

export const researchArticles = [
  {
    title: 'Desarrollo de Escáner Modular de Vulnerabilidades',
    excerpt: 'Tesis de grado: Arquitectura y diseño de VulnSeeker, herramienta para democratizar la ciberseguridad en PYMEs mediante detección automatizada de riesgos web.',
    date: 'En progreso',
    category: 'Tesis',
    readTime: 'Research',
    link: '#',
  },
  {
    title: 'Renderizado Gráfico de Alto Rendimiento con Sokol & GLSL',
    excerpt: 'Implementación de pipelines gráficos y shaders personalizados para visualización en tiempo real. Exploración matemática de modelos de iluminación y geometría computacional.',
    date: '2026',
    category: 'Computer Graphics',
    readTime: 'C/C++, GLSL, Computer Graphics, Sokol',
    link: '#',
  },
];