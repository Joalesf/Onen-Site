"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Radar, ShieldCheck, Siren } from "lucide-react";
import { homeVisuals } from "@/data/media";

export function HeroVisualPanel() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="space-y-4">
      <motion.div
        className="relative overflow-hidden rounded-[2rem] border border-white/15"
        animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <Image
          src={homeVisuals.heroMain}
          alt="Monitoreo profesional de videovigilancia"
          width={802}
          height={454}
          className="h-[280px] w-full object-cover md:h-[330px]"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,9,17,0.76),rgba(2,9,17,0.08))]" />
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-cyan-200/40 bg-cyan-300/12 px-3 py-1 text-xs font-semibold text-cyan-100">
            Analitica IA activa
          </span>
          <span className="rounded-full border border-white/25 bg-slate-950/55 px-3 py-1 text-xs font-semibold text-slate-100">
            Alertas automatizadas
          </span>
        </div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
        <article className="relative overflow-hidden rounded-2xl border border-white/12 bg-slate-900/65">
          <Image
            src={homeVisuals.heroSecondary}
            alt="Operador controlando sistema de CCTV"
            width={814}
            height={678}
            className="h-40 w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,10,20,0.72),transparent)]" />
          <p className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-cyan-100">
            <ShieldCheck className="size-4" />
            Control centralizado
          </p>
        </article>
        <article className="relative overflow-hidden rounded-2xl border border-white/12 bg-slate-900/65">
          <Image
            src={homeVisuals.heroTertiary}
            alt="Pantallas de eventos en tiempo real"
            width={778}
            height={550}
            className="h-40 w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,10,20,0.72),transparent)]" />
          <p className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-cyan-100">
            <Radar className="size-4" />
            Visibilidad 24/7
          </p>
        </article>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {[
          { label: "Evento critico", value: "04", icon: Siren },
          { label: "Alerta Telegram", value: "Enviada", icon: Radar },
          { label: "Estado sistema", value: "Operativo", icon: ShieldCheck },
        ].map((item, index) => (
          <motion.article
            key={item.label}
            className="rounded-xl border border-white/12 bg-slate-900/68 p-3"
            animate={reducedMotion ? undefined : { opacity: [0.72, 1, 0.72] }}
            transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: index * 0.35 }}
          >
            <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-slate-400">
              <item.icon className="size-4 text-cyan-200" />
              {item.label}
            </p>
            <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
