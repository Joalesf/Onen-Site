import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className,
  contentClassName,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("relative w-full py-18 md:py-24", className)}>
      <div className="container-default">
        {(eyebrow || title || description) && (
          <header className="mb-10 max-w-3xl space-y-4 md:mb-14">
            {eyebrow ? <Badge>{eyebrow}</Badge> : null}
            {title ? <h2 className="title-display text-balance text-3xl text-slate-900 md:text-5xl">{title}</h2> : null}
            {description ? <p className="text-pretty text-base text-slate-600 md:text-lg">{description}</p> : null}
          </header>
        )}
        <div className={cn(contentClassName)}>{children}</div>
      </div>
    </section>
  );
}
