import { cn } from "@/lib/utils";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:opacity-90 active:opacity-80",
  secondary:
    "border border-border bg-surface text-foreground hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-foreground",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AsAnchor = CommonProps & {
  href: string;
  external?: boolean;
};

type AsLink = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children"> & {
    href: string;
  };

type AsButton = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

function buildClassName(
  variant: Variant,
  size: Size,
  className?: string,
) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button(props: AsAnchor | AsLink | AsButton) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const className = buildClassName(variant, size, props.className);

  if ("external" in props) {
    const { children, href, external } = props;
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        className={className}
      >
        {children}
      </a>
    );
  }

  if ("href" in props) {
    const { children, href } = props as AsLink;
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  const { children, type = "button", ...rest } = props as AsButton;
  return (
    <button type={type} className={className} {...rest}>
      {children}
    </button>
  );
}
