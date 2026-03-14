import Image from "next/image";
import { homeVisuals } from "@/data/media";
import { SectionShell } from "@/components/shared/section-shell";
import { AIAnalyticsScene } from "@/components/sections/ai-analytics-scene";
import { DashboardMockup } from "@/components/sections/dashboard-mockup";

export function VisualProofSection() {
  return (
    <SectionShell
      eyebrow="Prueba visual de capacidad"
      title="Monitoreo real + IA + dashboards en una experiencia integrada"
      description="Mostramos la capacidad operativa con una combinación de escenas reales y mockups funcionales."
    >
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
          <Image
            src={homeVisuals.aiShowcase}
            alt="Equipo de analitica de video en operacion"
            width={756}
            height={566}
            className="h-full min-h-[280px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.5),rgba(15,23,42,0.1))]" />
          <div className="absolute bottom-4 left-4 right-4 space-y-2">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-200">Centro de control ONEN</p>
            <p className="text-sm text-slate-50">
              Operacion asistida por analiticas de video, flujos de automatizacion y tableros KPI.
            </p>
          </div>
        </article>
        <div className="space-y-4">
          <AIAnalyticsScene />
          <DashboardMockup />
        </div>
      </div>
    </SectionShell>
  );
}
