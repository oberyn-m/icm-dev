import type { Project } from '@/types';

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com painel administrativo, pagamentos online e sistema de gerenciamento de estoque.",
    image: "/ecommerce.svg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/isaaccabralmatos/ecommerce-platform",
    demo: "https://ecommerce-demo.isaaccabralmatos.com",
  },
  {
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com recursos de colaboração em tempo real, notificações e relatórios de produtividade.",
    image: "/taskapp.svg",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    github: "https://github.com/isaaccabralmatos/task-management",
    demo: "https://tasks.isaaccabralmatos.com",
  },
  {
    title: "Portfolio Website",
    description: "Site de portfólio moderno e responsivo para desenvolvedores, com animações suaves e design minimalista.",
    image: "/portfolio.svg",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/isaaccabralmatos/portfolio",
    demo: "https://isaaccabralmatos.com",
  },
];
