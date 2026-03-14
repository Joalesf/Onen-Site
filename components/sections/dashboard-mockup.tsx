"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, BellRing, ChartNoAxesCombined, Siren } from "lucide-react";

const kpis = [
  { label: "Eventos IA", value: "1,248", delta: "+18%" },
  { label: "Alertas utiles", value: "312", delta: "+12%" },
  { label: "Tiempo respuesta", value: "42s", delta: "-27%" },
  { label: "Disponibilidad", value: "99.4%", delta: "+2%" },
];

const bars = [52, 74, 65, 88, 56, 92, 70];

export function DashboardMockup() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-slate-950/80 p-4 md:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(65,180,211,0.2),transparent_36%)]" />
      <div className="relative space-y-4">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-cyan-100">
            <ChartNoAxesCombined className="size-4" />
            Dashboard Operativo KPI
          </h3>
          <div className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
            Actualizacion continua
          </div>
        </header>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi, index) => (
            <motion.article
              key={kpi.label}
              className="rounded-2xl border border-white/12 bg-slate-900/70 p-4"
              animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
              transition={{ duration: 5.2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.45 }}
            >
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400">{kpi.label}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{kpi.value}</p>
              <p className="mt-1 text-sm text-cyan-200">{kpi.delta}</p>
            </motion.article>
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-white/12 bg-slate-900/65 p-4">
            <p className="mb-3 text-sm font-medium text-slate-200">Actividad por franja</p>
            <div className="flex h-40 items-end gap-2">
              {bars.map((height, index) => (
                <motion.div
                  key={`${height}-${index}`}
                  className="w-full rounded-t-lg bg-gradient-to-t from-cyan-500/55 to-cyan-200/65"
                  animate={reducedMotion ? undefined : { height: [`${height * 0.78}px`, `${height}px`, `${height * 0.78}px`] }}
                  style={{ height: `${height}px` }}
                  transition={{
                    duration: 3.6 + index * 0.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
          <div className="space-y-3 rounded-2xl border border-white/12 bg-slate-900/65 p-4">
            <p className="text-sm font-medium text-slate-200">Alertas recientes</p>
            {[
              { icon: Siren, text: "Intrusion detectada en perimetro B" },
              { icon: BellRing, text: "Telegram enviado a supervisor de turno" },
              { icon: Activity, text: "Dato PLC actualizado en flujo n8n" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/4 p-3 text-sm text-slate-200">
                <item.icon className="mt-0.5 size-4 shrink-0 text-cyan-200" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
