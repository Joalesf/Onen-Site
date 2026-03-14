"use client";

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCases } from "@/data/use-cases";
import { homeVisuals } from "@/data/media";
import { SectionShell } from "@/components/shared/section-shell";
import { Button } from "@/components/ui/button";

const caseImages = [
  homeVisuals.heroMain,
  homeVisuals.trafficShowcase,
  homeVisuals.aiShowcase,
  homeVisuals.heroSecondary,
  homeVisuals.operationsShowcase,
  homeVisuals.heroTertiary,
  homeVisuals.trafficShowcase,
  "/media/photos/network-cameras.jpg",
];

export function UseCasesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <SectionShell
      id="casos"
      eyebrow="Casos de uso"
      title="Escenarios reales de aplicación"
      description="Diseñamos casos por resultado operativo: rapidez, control, trazabilidad y menor fricción."
    >
      <div className="mb-5 flex justify-end gap-2">
        <Button variant="secondary" size="icon" onClick={scrollPrev} aria-label="Anterior caso">
          <ChevronLeft className="size-4" />
        </Button>
        <Button variant="secondary" size="icon" onClick={scrollNext} aria-label="Siguiente caso">
          <ChevronRight className="size-4" />
        </Button>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {useCases.map((useCase, index) => (
            <article
              key={useCase.id}
              className="min-w-0 shrink-0 basis-[88%] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] md:basis-[48%] xl:basis-[32%]"
            >
              <div className="relative h-40 border-b border-slate-200">
                <Image
                  src={caseImages[index] ?? homeVisuals.heroTertiary}
                  alt={useCase.title}
                  width={896}
                  height={500}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,8,16,0.72),rgba(2,8,16,0.08))]" />
              </div>
              <div className="p-5">
              <h3 className="text-xl font-semibold text-slate-900">{useCase.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{useCase.summary}</p>
              <p className="mt-4 text-sm text-slate-700">{useCase.challenge}</p>
              <ul className="mt-4 space-y-2 text-sm text-cyan-700">
                {useCase.impact.map((impact) => (
                  <li key={impact}>• {impact}</li>
                ))}
              </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
