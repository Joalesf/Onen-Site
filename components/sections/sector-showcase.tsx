import { industries } from "@/data/industries";
import { SectionShell } from "@/components/shared/section-shell";

export function SectorShowcase() {
  return (
    <SectionShell
      eyebrow="Sector showcase"
      title="Dónde generamos mayor impacto"
      description="Seleccionamos tecnología y automatizaciones según la realidad de cada sector."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {industries.slice(0, 4).map((industry) => (
          <article
            key={industry.id}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(74,180,215,0.2),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="relative text-lg font-semibold text-slate-900">{industry.title}</h3>
            <p className="relative mt-2 text-sm text-slate-600">{industry.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
