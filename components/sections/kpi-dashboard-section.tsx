import { DashboardMockup } from "@/components/sections/dashboard-mockup";
import { SectionShell } from "@/components/shared/section-shell";

const points = [
  "Paneles por sede, area o proceso",
  "Eventos por criticidad y tiempo de atencion",
  "Tendencias para decisiones de mejora continua",
  "Trazabilidad desde deteccion hasta cierre",
];

export function KpiDashboardSection() {
  return (
    <SectionShell
      eyebrow="Dashboards y visualizacion"
      title="Datos convertidos en decisiones comerciales y operativas"
      description="No basta con detectar. Diseñamos tableros para actuar, medir y mejorar."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
        <DashboardMockup />
        <div className="space-y-3">
          {points.map((point) => (
            <article key={point} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              {point}
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
