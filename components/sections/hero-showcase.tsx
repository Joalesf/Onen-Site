import { ArrowRight, CalendarCheck2 } from "lucide-react";
import { homeHero } from "@/data/home";
import { TrackedLink } from "@/components/tracking/tracked-link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroVisualPanel } from "@/components/sections/hero-visual-panel";

export function HeroShowcase() {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-24 md:pb-20 md:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(115deg,#f8fafc_0%,#f1f5f9_35%,#eff6ff_65%,#eef2ff_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.2),transparent_40%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.16),transparent_42%)]" />
      <div className="container-default grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl space-y-6">
          <Badge>{homeHero.eyebrow}</Badge>
          <h1 className="title-display text-balance text-4xl leading-tight text-slate-900 md:text-6xl">{homeHero.title}</h1>
          <p className="text-pretty text-lg text-slate-600 md:text-xl">{homeHero.description}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <TrackedLink
                href={homeHero.primaryCta.href}
                eventName="cta_click"
                eventPayload={{ cta: "hero_diagnostico" }}
              >
                {homeHero.primaryCta.label}
                <ArrowRight className="size-4" />
              </TrackedLink>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <TrackedLink
                href={homeHero.secondaryCta.href}
                eventName="book_demo_click"
                eventPayload={{ cta: "hero_demo" }}
              >
                {homeHero.secondaryCta.label}
                <CalendarCheck2 className="size-4" />
              </TrackedLink>
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <HeroVisualPanel />
        </div>
      </div>
    </section>
  );
}
