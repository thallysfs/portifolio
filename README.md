# Portfólio — Thallys de Freitas Soares

Portfólio pessoal desenvolvido com **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, exportado como site estático e publicado via **GitHub Pages**.

## Stack

- **Next.js 16** (App Router, `output: "export"`)
- **TypeScript**
- **Tailwind CSS v4** (tokens OKLCH, dark/light via `next-themes`)
- **Framer Motion** + animações CSS
- **Lucide React** (ícones genéricos) + SVGs próprios (marcas)
- **clsx** + **tailwind-merge** (utilitário `cn`)
- **next-themes** (toggle dark/light)

## Estrutura

```
src/
├── app/                # rotas (App Router)
│   ├── layout.tsx      # root layout, metadata, ThemeProvider
│   ├── page.tsx        # composição das seções
│   ├── sitemap.ts      # /sitemap.xml
│   ├── robots.ts       # /robots.txt
│   ├── icon.svg        # favicon
│   └── globals.css     # design tokens
├── components/
│   ├── ui/             # primitivos (Button, Badge, FadeIn, ...)
│   ├── sections/       # Hero, Stack, Projects, About, Contact
│   ├── icons/brand.tsx # SVGs de marca
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── data/               # conteúdo estático (profile, stack, experience, ...)
└── lib/utils.ts        # cn() helper
```

## Setup local

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build estático

```bash
npm run build
```

Saída em `out/`. Pronto para hospedar em qualquer servidor estático.

## Deploy no GitHub Pages (User Page)

Este projeto está configurado para `username.github.io` (user page). O workflow `.github/workflows/deploy.yml` faz build + deploy automático a cada push em `main`.

### Configurar pela primeira vez

1. Crie o repositório **`lostboy.github.io`** (público) no GitHub
2. No projeto local, adicione o remote:
   ```bash
   git remote add origin git@github.com:thallysfs/lostboy.github.io.git
   ```
3. Garanta que a branch principal é `main` e faça push:
   ```bash
   git add -A
   git commit -m "feat: portfólio completo"
   git push -u origin main
   ```
4. No GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**
5. O workflow `.github/workflows/deploy.yml` será executado e publicará em `https://thallysfs.github.io/`

> Se for um **project page** (URL `thallysfs.github.io/Portifolio`), adicione `basePath: "/Portifolio"` e `assetPrefix: "/Portifolio/"` em `next.config.ts`.

## Personalização

Todo o conteúdo fica em `src/data/`:

- `profile.ts` — nome, contatos, summary
- `stack.ts` — tecnologias por categoria
- `experience.ts` — histórico profissional
- `projects.ts` — projetos em destaque
- `socials.ts` — links de contato
- `education.ts`, `certifications.ts`, `languages.ts`

## Licença

© Thallys de Freitas Soares.
