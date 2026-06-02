export const projects = [
  {
    title: "Lume System",
    description:
      "SaaS para gestão de clínicas de reabilitação: prontuários, múltiplos profissionais e fluxos clínicos automatizados.",
    role: "Fundador e Desenvolvedor Frontend",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "Zustand", "PostgreSQL"],
    demo: "https://www.lumesystem.com.br/landing-page",
    repo: null,
    status: "Em produção",
    highlights: [
      "Arquitetura frontend com Next.js, gerenciamento de estado com Zustand.",
      "Autenticação e controle de acesso com Row Level Security (RLS) no Supabase.",
      "Integração frontend ↔ PostgreSQL via Supabase garantindo segurança e integridade.",
      "Interfaces responsivas, acessíveis e performáticas com foco em UX.",
      "IA aplicada ao desenvolvimento: Antigravity e Codex para prototipação, automação e arquitetura.",
    ],
  },
] as const;
