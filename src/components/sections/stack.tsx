"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import { stack } from "@/data/stack";

const CATEGORIES = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend & Dados" },
  { key: "quality", label: "Qualidade & Arquitetura" },
  { key: "tools", label: "Ferramentas & DevOps" },
] as const;

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Stack"
            title="Tecnologias e ecossistema"
            description="Stack completa para desenvolvimento de aplicações web modernas — do front ao DevOps, com foco em qualidade, performance e Developer Experience."
          />
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CATEGORIES.map((category, i) => {
            const items = stack[category.key];
            return (
              <FadeIn
                key={category.key}
                delay={i * 0.05}
                className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
              >
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {category.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
