"use client";

import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkedInIcon, WhatsAppIcon } from "@/components/icons/brand";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

const ICON_MAP = {
  "E-mail": Mail,
  LinkedIn: LinkedInIcon,
  WhatsApp: WhatsAppIcon,
  GitHub: MessageCircle,
} as const;

export function Contact() {
  const primary = socials.filter((s) => s.primary);

  return (
    <section id="contact" aria-labelledby="contact-title">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Contato"
            title="Vamos conversar"
            description="Estou disponível para oportunidades, freelas e conexões. Escolha o canal que preferir."
            className="mt-2"
          />
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {primary.map((s, i) => {
            const Icon = ICON_MAP[s.name as keyof typeof ICON_MAP] ?? Mail;
            const isExternal = s.href.startsWith("http");
            return (
              <FadeIn key={s.name} delay={i * 0.05}>
                <a
                  href={s.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer noopener" : undefined}
                  className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-accent/5"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                  />
                  <div className="relative flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      aria-hidden
                    />
                  </div>
                  <div className="relative">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted">
                      {s.name}
                    </p>
                    <p className="mt-1 break-all text-base font-medium text-foreground">
                      {s.label}
                    </p>
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.15} className="mt-12 text-center text-sm text-muted">
          {profile.location} · Resposta geralmente em até 24h
        </FadeIn>
      </Container>
    </section>
  );
}
