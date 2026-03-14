import Image from "next/image";
import { brandVisuals, textOnlyTechBrands } from "@/data/media";

export function BrandStrip() {
  const stripItems = [...brandVisuals, ...brandVisuals];

  return (
    <section className="relative w-full overflow-hidden py-8">
      <div className="container-default">
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)]">
          <p className="mb-4 text-xs uppercase tracking-[0.18em] text-slate-500">Marcas y tecnologias</p>
          <div className="relative overflow-hidden">
            <div className="animate-marquee flex min-w-max items-center gap-3">
              {stripItems.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex h-16 min-w-44 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3"
                >
                  <Image src={brand.image} alt={brand.name} width={160} height={56} className="max-h-11 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {textOnlyTechBrands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
