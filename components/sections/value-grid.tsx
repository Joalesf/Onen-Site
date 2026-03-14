import { CheckCircle2 } from "lucide-react";
import { SectionShell } from "@/components/shared/section-shell";

type ValueGridProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  columns?: 2 | 3;
};

export function ValueGrid({ eyebrow, title, description, items, columns = 2 }: ValueGridProps) {
  return (
    <SectionShell eyebrow={eyebrow} title={title} description={description}>
      <div className={`grid gap-3 ${columns === 3 ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2"}`}>
        {items.map((item) => (
          <article key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-700" />
              {item}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
