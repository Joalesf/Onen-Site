import Image from "next/image";
import { productVisuals } from "@/data/media";
import { SectionShell } from "@/components/shared/section-shell";

export function CameraProductShowcase() {
  return (
    <SectionShell
      eyebrow="Galeria de equipos"
      title="Visuales de camaras y dispositivos para propuestas comerciales"
      description="Presentacion premium de lineas de camaras para demostrar capacidad y nivel de solucion."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {productVisuals.map((product) => (
          <article
            key={product.title}
            className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50"
          >
            <div className="relative mb-4 overflow-hidden rounded-2xl border border-slate-200 bg-[radial-gradient(circle_at_50%_20%,rgba(58,167,205,0.18),transparent_55%)]">
              <Image
                src={product.image}
                alt={product.title}
                width={356}
                height={356}
                className="mx-auto h-52 w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-800">{product.title}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
