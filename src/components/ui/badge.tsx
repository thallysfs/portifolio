import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "accent" | "outline";
};

export function Badge({
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
        variant === "default" &&
          "border-border bg-surface text-muted hover:text-foreground",
        variant === "accent" &&
          "border-accent/30 bg-accent/10 text-accent",
        variant === "outline" && "border-border bg-transparent text-foreground",
        className,
      )}
      {...props}
    />
  );
}
