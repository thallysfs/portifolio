import { Mail } from "lucide-react";
import { GithubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons/brand";

const SOCIALS = [
  { name: "GitHub", href: "https://github.com/thallysfs/", icon: GithubIcon },
  { name: "LinkedIn", href: "https://linkedin.com/in/thallysfs", icon: LinkedInIcon },
  { name: "E-mail", href: "mailto:thallys@hotmail.com", icon: Mail },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          © {year} Thallys de Freitas Soares. Todos os direitos reservados.
        </p>
        <ul className="flex items-center gap-2">
          {SOCIALS.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                aria-label={name}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 border-t border-border px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="https://wa.me/5585997488396"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="WhatsApp"
          className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-accent"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" aria-hidden />
          (85) 99748-8396
        </a>
      </div>
    </footer>
  );
}
