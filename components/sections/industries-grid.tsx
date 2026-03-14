import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/data/industries";
import { industryVisualMap } from "@/data/media";
import { SectionShell } from "@/components/shared/section-shell";
import { Reveal } from "@/components/shared/reveal";

export function IndustriesGrid() {
  return (
    <SectionShell
      id="industrias"
      eyebrow="Industrias objetivo"
      title="Soluciones adaptadas por contexto operativo"
      description="No vendemos una instalación estándar. Diseñamos por nivel de riesgo, complejidad operativa y objetivo de negocio."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((industry, index) => (
          <Reveal key={industry.id} delay={index * 0.05}>
            <article className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50">
              <div className="relative h-44 border-b border-slate-200">
                <Image
                  src={industryVisualMap[industry.id] ?? "/media/photos/control-room.jpg"}
                  alt={industry.title}
                  width={896}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,8,16,0.72),rgba(2,8,16,0.08))]" />
              </div>
              <div className="p-5">
              <h3 className="text-xl font-semibold text-slate-900">{industry.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{industry.description}</p>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-slate-800">Reto comun</p>
                  <p className="text-slate-500">{industry.painPoint}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Enfoque ONEN</p>
                  <p className="text-slate-500">{industry.solution}</p>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700">
                Aplicacion real
                <ArrowUpRight className="size-4" />
              </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
