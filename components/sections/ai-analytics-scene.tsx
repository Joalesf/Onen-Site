"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, ShieldAlert } from "lucide-react";

const detections = [
  { label: "Persona", top: "24%", left: "20%", width: "24%", height: "40%" },
  { label: "Vehiculo", top: "52%", left: "48%", width: "30%", height: "32%" },
  { label: "Placa", top: "68%", left: "56%", width: "16%", height: "12%" },
  { label: "Intrusion", top: "32%", left: "70%", width: "18%", height: "30%" },
];

export function AIAnalyticsScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/12 bg-slate-950/80 p-4 md:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(58,164,202,0.24),transparent_45%),radial-gradient(circle_at_90%_80%,rgba(19,97,126,0.26),transparent_40%)]" />
      <div className="relative grid gap-4 md:grid-cols-[1.45fr_0.95fr]">
        <div className="relative h-[290px] overflow-hidden rounded-2xl border border-cyan-300/24 bg-gradient-to-br from-[#102539] via-[#10233a] to-[#081321] md:h-[360px]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:36px_36px]" />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(57,197,255,0.16),transparent_60%)]"
            animate={reducedMotion ? undefined : { opacity: [0.38, 0.72, 0.38] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          {detections.map((detection, index) => (
            <motion.div
              key={detection.label}
              className="absolute rounded-md border border-cyan-200/75"
              style={{
                top: detection.top,
                left: detection.left,
                width: detection.width,
                height: detection.height,
              }}
              animate={reducedMotion ? undefined : { y: [0, -3, 0], opacity: [0.84, 1, 0.84] }}
              transition={{
                duration: 2.8 + index * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.2,
              }}
            >
              <span className="absolute -top-6 left-0 rounded bg-cyan-300/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-950">
                {detection.label}
              </span>
            </motion.div>
          ))}
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-cyan-200/75"
            animate={reducedMotion ? undefined : { top: ["8%", "86%", "8%"] }}
            transition={{ duration: 7.2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <div className="absolute bottom-3 left-3 rounded-full border border-cyan-200/35 bg-slate-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
            Analitica IA en tiempo real
          </div>
        </div>
        <div className="space-y-3 rounded-2xl border border-white/12 bg-slate-900/75 p-4">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">
            <Activity className="size-4" />
            Flujo de eventos
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "LPR detectado en acceso norte",
              "Cruce de linea en zona restringida",
              "Conteo de personas supera umbral",
              "Evento notificado por Telegram",
            ].map((item, index) => (
              <motion.li
                key={item}
                className="rounded-xl border border-white/10 bg-white/4 px-3 py-2 text-slate-200"
                animate={reducedMotion ? undefined : { opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: index * 0.7 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
          <div className="flex items-center gap-2 rounded-xl border border-amber-200/30 bg-amber-300/8 px-3 py-2 text-xs text-amber-100">
            <ShieldAlert className="size-4 shrink-0" />
            Respuesta priorizada para eventos criticos
          </div>
        </div>
      </div>
    </div>
  );
}
