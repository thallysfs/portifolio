import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GithubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons/brand";
import { profile } from "@/data/profile";
import { withBasePath } from "@/lib/site";

const SOCIALS = [
  { name: "GitHub", href: profile.github, icon: GithubIcon },
  { name: "LinkedIn", href: profile.linkedin, icon: LinkedInIcon },
  { name: "WhatsApp", href: `https://wa.me/${profile.phoneRaw}`, icon: WhatsAppIcon },
] as const;

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--accent)_0%,transparent_45%)] opacity-[0.08] dark:opacity-[0.15]"
      />
      <Container className="grid min-h-[calc(100dvh-4rem)] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-0">
        <div className="order-2 lg:order-1">
          {profile.available && (
            <div
              style={{ animationDelay: "0.1s" }}
              className="animate-fade-up mb-8 flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Disponível para novas oportunidades
            </div>
          )}

          <p
            style={{ animationDelay: "0.18s" }}
            className="animate-fade-up mb-3 flex w-fit items-center gap-1.5 font-mono text-sm text-muted"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden />
            Olá, eu sou
          </p>

          <h1
            id="hero-title"
            style={{ animationDelay: "0.26s" }}
            className="animate-fade-up text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {profile.name}
          </h1>

          <p
            style={{ animationDelay: "0.34s" }}
            className="animate-fade-up mt-4 text-lg text-pretty text-muted sm:text-xl"
          >
            <span className="text-foreground">{profile.role}</span>
            <span className="text-foreground"> · </span>
            <span className="text-accent">{profile.focus}</span>
          </p>

          <p
            style={{ animationDelay: "0.42s" }}
            className="animate-fade-up mt-4 flex items-center gap-1.5 text-sm text-muted"
          >
            <MapPin className="h-4 w-4" aria-hidden />
            {profile.location}
          </p>

          <p
            style={{ animationDelay: "0.5s" }}
            className="animate-fade-up mt-6 max-w-xl text-base text-pretty text-muted sm:text-lg"
          >
            {profile.tagline}
          </p>

          <div
            style={{ animationDelay: "0.58s" }}
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="#projects" size="lg">
              Ver projetos
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Falar comigo
            </Button>
            <Button href={withBasePath("/cv.pdf")} variant="ghost" size="lg" external>
              <Download className="h-4 w-4" />
              Currículo
            </Button>
          </div>

          <div
            style={{ animationDelay: "0.66s" }}
            className="animate-fade-up mt-10 flex items-center gap-2"
            aria-label="Redes sociais"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              Conecte-se
            </span>
            <span aria-hidden className="h-px w-8 bg-border" />
            <ul className="flex items-center gap-2">
              {SOCIALS.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={name}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="animate-scale-in order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
            <Image
              src={withBasePath("/images/profile.jpg")}
              alt={`Foto de ${profile.name}`}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
