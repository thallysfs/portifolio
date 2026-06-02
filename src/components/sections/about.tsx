"use client";

import { Briefcase, CheckCircle2, GraduationCap, Languages } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { languages } from "@/data/languages";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Sobre"
            title="Quem sou eu"
            description="Engenheiro de Software Fullstack apaixonado por transformar ideias em interfaces funcionais, com foco em experiências modernas, acessíveis e performáticas."
          />
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <FadeIn className="space-y-4 text-base text-pretty text-muted sm:text-lg">
              <p>
                Atuo há mais de 5 anos no desenvolvimento e evolução de aplicações
                web modernas, com forte vivência em React.js, Next.js, Node.js,
                TypeScript e .NET Core. Minha trajetória combina profundidade
                técnica fullstack com visão de produto — desde componentização
                reutilizável e Design Systems até integração com APIs REST,
                arquitetura escalável e observabilidade.
              </p>
              <p>
                Colaborei com times de Produto, Design, Backend e DevOps em
                ambientes ágeis (Scrum e Kanban), contribuindo em code reviews,
                decisões de arquitetura, testes automatizados, CI/CD e rollout
                seguro de funcionalidades com feature flags.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="mt-12">
              <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold tracking-tight">
                <Briefcase className="h-5 w-5 text-accent" aria-hidden />
                Experiência profissional
              </h3>
              <ol className="relative space-y-8 border-l border-border pl-6">
                {experience.map((job) => (
                  <li key={`${job.company}-${job.role}`} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent"
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h4 className="font-semibold text-foreground">
                        {job.role}
                        {job.unit && (
                          <span className="text-muted"> · {job.unit}</span>
                        )}
                      </h4>
                      <span className="font-mono text-xs text-muted">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-muted">{job.company}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted">
                      {job.highlights.slice(0, 4).map((h) => (
                        <li key={h} className="flex gap-2 text-pretty">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                            aria-hidden
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </FadeIn>
          </div>

          <aside className="space-y-8">
            <FadeIn>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="mb-4 flex items-center gap-2 text-base font-semibold">
                  <GraduationCap className="h-5 w-5 text-accent" aria-hidden />
                  Formação
                </h3>
                <ul className="space-y-3">
                  {education.map((ed) => (
                    <li key={ed.course} className="text-sm">
                      <p className="font-medium text-foreground">{ed.course}</p>
                      <p className="text-muted">
                        {ed.level} · {ed.institution}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="mb-4 text-base font-semibold">Certificações</h3>
                <ul className="space-y-2">
                  {certifications.map((c) => (
                    <li
                      key={c.name}
                      className="flex items-baseline justify-between gap-2 text-sm"
                    >
                      <span className="text-pretty text-foreground">
                        {c.name}
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {c.issuer} · {c.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="mb-4 flex items-center gap-2 text-base font-semibold">
                  <Languages className="h-5 w-5 text-accent" aria-hidden />
                  Idiomas
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {languages.map((l) => (
                    <li key={l.name}>
                      <Badge variant="outline">
                        {l.name} · {l.level}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </aside>
        </div>
      </Container>
    </section>
  );
}
