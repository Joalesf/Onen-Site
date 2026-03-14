import Image from "next/image";
import { fireServiceVisuals } from "@/data/media";
import { SectionShell } from "@/components/shared/section-shell";

type FireSafetyGalleryProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function FireSafetyGallery({
  title,
  description,
  eyebrow = "Visuales de incendio",
}: FireSafetyGalleryProps) {
  return (
    <SectionShell eyebrow={eyebrow} title={title} description={description}>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {fireServiceVisuals.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
          >
            <div className="relative h-44">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.42),rgba(15,23,42,0.08))]" />
            </div>
            <p className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-800">
              {item.title}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
