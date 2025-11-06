import type { Project } from '@/types';

export const projects: Project[] = [
  {
    title: "Advogados Mendes",
    description: "Site institucional para escritório de advocacia com design profissional, apresentação de serviços jurídicos e formulário de contato.",
    image: "/advogados.svg",
    tags: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/oberyn-m/advogados-mendes",
  },
  {
    title: "GoGaragem",
    description: "Sistema web de gerenciamento de estacionamento privado, com acompanhamento de vagas disponíveis, impressão de recibo.",
    image: "/gogaragem.svg",
    tags: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/oberyn-m/GoGaragem",
  },
  {
    title: "Deliverty Amparo",
    description: "Site institucional para delivery com design profissional, apresentação de produtos e whatsapp para contato.",
    image: "/deliverty.svg",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/oberyn-m/Deliverty-Amparo",
  },
];
