import { profile } from "@/data/profile";

export const socials = [
  {
    name: "E-mail",
    label: profile.email,
    href: `mailto:${profile.email}`,
    primary: true,
  },
  {
    name: "LinkedIn",
    label: "linkedin.com/in/thallysfs",
    href: profile.linkedin,
    primary: true,
  },
  {
    name: "WhatsApp",
    label: profile.phone,
    href: `https://wa.me/${profile.phoneRaw}`,
    primary: true,
  },
  {
    name: "GitHub",
    label: "github.com/thallysfs",
    href: profile.github,
    primary: false,
  },
] as const;
