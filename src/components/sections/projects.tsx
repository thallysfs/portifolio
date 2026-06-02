"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/icons/brand";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Projetos"
            title="Em produção"
            description="Soluções reais que desenvolvi do front ao back, com foco em usabilidade, escalabilidade e impacto para o usuário final."
            className="mt-2"
          />
        </FadeIn>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.05}>
              <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 sm:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-100"
                />
                <div className="relative flex flex-col gap-6">
                  <header className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Badge variant="accent">
                          <Sparkles className="mr-1 h-3 w-3" aria-hidden />
                          Destaque
                        </Badge>
                        <Badge variant="outline">{project.status}</Badge>
                      </div>
                      <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {project.role}
                      </p>
                    </div>
                  </header>

                  <p className="text-base text-pretty text-muted sm:text-lg">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <li key={t}>
                        <Badge>{t}</Badge>
                      </li>
                    ))}
                  </ul>

                  <ul className="space-y-1.5 text-sm text-muted">
                    {project.highlights.slice(0, 4).map((h) => (
                      <li key={h} className="flex gap-2">
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent"
                        />
                        <span className="text-pretty">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <footer className="flex flex-wrap gap-3 pt-2">
                    {project.demo && (
                      <Button
                        href={project.demo}
                        external
                        size="md"
                        variant="primary"
                      >
                        Ver projeto
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    )}
                    {project.repo ? (
                      <Button
                        href={project.repo}
                        external
                        size="md"
                        variant="secondary"
                      >
                        <GithubIcon className="h-4 w-4" />
                        Código
                      </Button>
                    ) : (
                      <Button
                        href={profile.github}
                        external
                        size="md"
                        variant="secondary"
                      >
                        <GithubIcon className="h-4 w-4" />
                        Ver no GitHub
                      </Button>
                    )}
                  </footer>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1} className="mt-10 text-center">
          <Button href={profile.github} external variant="ghost">
            Ver mais no GitHub
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
