import { buildMetadata } from "@/lib/seo";
import { fireAlarmLanding } from "@/data/solutions";
import { fireFaq } from "@/data/faqs";
import { homeVisuals } from "@/data/media";
import { LandingHero } from "@/components/sections/landing-hero";
import { ValueGrid } from "@/components/sections/value-grid";
import { SectionShell } from "@/components/shared/section-shell";
import { FireSafetyGallery } from "@/components/sections/fire-safety-gallery";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { ContactCtaPanel } from "@/components/sections/contact-cta-panel";
import { StructuredData } from "@/components/shared/structured-data";

export const metadata = buildMetadata({
  title: "Instalacion de Alarmas Contra Incendio",
  description:
    "Proyecto completo de alarmas contra incendio: cableado, detectores, paneles, software, puesta en marcha y mantenimiento.",
  path: "/soluciones/alarmas-contra-incendio",
  keywords: ["alarmas contra incendio panama", "instalacion detectores incendio", "panel incendio"],
});

export default function FireAlarmPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Instalacion de alarmas contra incendio",
    provider: {
      "@type": "Organization",
      name: "ONEN / OnenVideo",
    },
    areaServed: "Panama",
    description:
      "Instalacion completa de detectores, paneles, cableado estructurado y software de supervision.",
  };

  return (
    <>
      <StructuredData id="fire-service-schema" data={serviceSchema} />
      <LandingHero {...fireAlarmLanding.hero} source="landing_incendio_hero" image={homeVisuals.fireAlarmPanel} />
      <ValueGrid
        eyebrow="Proyecto completo"
        title="Desde ingenieria hasta puesta en marcha"
        description="Entregamos sistemas robustos y confiables para edificios y operaciones criticas."
        items={fireAlarmLanding.services}
      />
      <SectionShell
        eyebrow="Diferenciales ONEN"
        title="Implementacion confiable con control tecnico"
        description="Nuestro enfoque combina planeacion, ejecucion ordenada y soporte post-instalacion."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {fireAlarmLanding.differentiators.map((point) => (
            <article key={point} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              {point}
            </article>
          ))}
        </div>
      </SectionShell>
      <FireSafetyGallery
        title="Visuales de sistemas de alarma y proteccion"
        description="Comunicamos claramente instalacion de paneles, detectores y componentes de respuesta."
      />
      <FAQAccordion items={fireFaq} />
      <ContactCtaPanel source="landing_incendio_final" />
    </>
  );
}
