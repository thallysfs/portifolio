import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  id?: string;
  as?: "section" | "div";
};

export function Section({
  id,
  as: Tag = "section",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn("py-20 sm:py-28 lg:py-32", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
