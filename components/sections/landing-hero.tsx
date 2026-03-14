import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TrackedLink } from "@/components/tracking/tracked-link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type LandingHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  source: string;
  image?: string;
};

export function LandingHero({ eyebrow, title, description, source, image }: LandingHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pb-12 pt-24 md:pb-16 md:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(130deg,#f8fafc_0%,#f1f5f9_40%,#eff6ff_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_15%,rgba(56,189,248,0.2),transparent_38%),radial-gradient(circle_at_85%_30%,rgba(59,130,246,0.16),transparent_40%)]" />
      <div className="container-default grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <Badge>{eyebrow}</Badge>
          <h1 className="title-display text-balance text-4xl text-slate-900 md:text-6xl">{title}</h1>
          <p className="max-w-4xl text-pretty text-lg text-slate-600 md:text-xl">{description}</p>
          <Button asChild size="lg">
            <TrackedLink href={`/contacto?origen=${source}`} eventName="cta_click" eventPayload={{ cta: source }}>
              Solicitar diagnostico
              <ArrowRight className="size-4" />
            </TrackedLink>
          </Button>
        </div>
        {image ? (
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
            <Image
              src={image}
              alt={title}
              width={896}
              height={500}
              className="h-[280px] w-full object-cover md:h-[360px]"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.45),rgba(15,23,42,0.08))]" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
