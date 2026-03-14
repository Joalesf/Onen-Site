import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { solutionLinks } from "@/data/company";
import { solutionVisualMap } from "@/data/media";
import { Reveal } from "@/components/shared/reveal";
import { SectionShell } from "@/components/shared/section-shell";
import { TrackedLink } from "@/components/tracking/tracked-link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SolutionCards() {
  return (
    <SectionShell
      id="soluciones"
      eyebrow="Soluciones clave"
      title="Diseñadas para vender mejor seguridad y operación conectada"
      description="Cada solución puede funcionar por separado o como parte de una arquitectura integral."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {solutionLinks.map((solution, index) => (
          <Reveal key={solution.slug} delay={index * 0.06}>
            <Card className="group h-full hover:-translate-y-1 hover:border-cyan-200/35">
              <div className="relative h-44 overflow-hidden rounded-t-3xl border-b border-slate-200">
                <Image
                  src={solutionVisualMap[solution.slug] ?? "/media/photos/control-room.jpg"}
                  alt={solution.shortTitle}
                  width={896}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,9,17,0.7),rgba(2,9,17,0.1))]" />
              </div>
              <CardHeader>
                <CardTitle className="text-balance text-xl">{solution.shortTitle}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex h-full flex-col justify-between gap-5">
                <ul className="space-y-2">
                  {solution.highlights.map((item) => (
                    <li key={item} className="text-sm text-slate-600">
                      • {item}
                    </li>
                  ))}
                </ul>
                <TrackedLink
                  href={solution.href}
                  eventName="cta_click"
                  eventPayload={{ cta: `solucion_${solution.slug}` }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700"
                >
                  Ver solución
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </TrackedLink>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
