import { SectionShell } from "@/components/shared/section-shell";
import { brands } from "@/data/company";

export function TechnologyStack() {
  return (
    <SectionShell
      id="tecnologia"
      eyebrow="Stack tecnológico"
      title="Tecnología abierta para integración real"
      description="Combinamos marcas líderes y plataformas flexibles para construir soluciones robustas y mantenibles."
    >
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {brands.map((brand) => (
          <article
            key={brand.name}
            className="group rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-50/30"
          >
            <p className="text-base font-semibold text-slate-900">{brand.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">{brand.category}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
