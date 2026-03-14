"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Camera, Cpu, DatabaseZap, MessageSquareWarning, Workflow } from "lucide-react";
import { SectionShell } from "@/components/shared/section-shell";

const nodes = [
  {
    title: "Camaras, sensores y PLC",
    detail: "Captura de eventos fisicos y datos operativos",
    icon: Camera,
  },
  {
    title: "Protocolos y conversion",
    detail: "Modbus, MQTT, HTTP y FTP",
    icon: Cpu,
  },
  {
    title: "Motor de automatizacion",
    detail: "n8n, Node-RED y reglas IA",
    icon: Workflow,
  },
  {
    title: "Alertas y acciones",
    detail: "Telegram, alarmas y flujo operativo",
    icon: MessageSquareWarning,
  },
  {
    title: "Dashboard KPI",
    detail: "Trazabilidad y decision en tiempo real",
    icon: DatabaseZap,
  },
];

export function SystemArchitectureFlow() {
  const reducedMotion = useReducedMotion();

  return (
    <SectionShell
      id="arquitectura"
      eyebrow="Showcase de automatizacion"
      title="Arquitectura conectada de extremo a extremo"
      description="Desde la deteccion en campo hasta la accion operativa, ONEN conecta cada capa para una operacion unificada."
    >
      <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.06)] md:p-8">
        <div className="absolute left-8 right-8 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-cyan-400/0 via-cyan-300/45 to-cyan-400/0 lg:block" />
        <div className="grid gap-4 lg:grid-cols-5">
          {nodes.map((node, index) => (
            <motion.article
              key={node.title}
              className="relative rounded-2xl border border-slate-200 bg-slate-50 p-4"
              animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
              transition={{ duration: 5 + index * 0.2, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="mb-3 flex size-11 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-50">
                <node.icon className="size-5 text-cyan-700" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{node.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{node.detail}</p>
              {index < nodes.length - 1 ? (
                <motion.span
                  className="absolute -right-2 top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-200 lg:block"
                  animate={reducedMotion ? undefined : { opacity: [0.25, 1, 0.25], scale: [0.9, 1.25, 0.9] }}
                  transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, delay: index * 0.25 }}
                />
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
