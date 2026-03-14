import { analyticsHighlights } from "@/data/home";
import { SectionShell } from "@/components/shared/section-shell";

export function AnalyticsGrid() {
  return (
    <SectionShell
      id="analiticas"
      eyebrow="Analiticas destacadas"
      title="Capacidades de IA aplicadas a seguridad y operacion"
      description="Implementamos analiticas que priorizan eventos relevantes y entregan evidencia accionable."
    >
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {analyticsHighlights.map((item) => (
          <article key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
            {item}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
