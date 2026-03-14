import { buildMetadata } from "@/lib/seo";
import { camerasLanding } from "@/data/solutions";
import { cameraFaq } from "@/data/faqs";
import { homeVisuals } from "@/data/media";
import { LandingHero } from "@/components/sections/landing-hero";
import { ValueGrid } from "@/components/sections/value-grid";
import { SectionShell } from "@/components/shared/section-shell";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { ContactCtaPanel } from "@/components/sections/contact-cta-panel";
import { StructuredData } from "@/components/shared/structured-data";

export const metadata = buildMetadata({
  title: "Instalacion de Camaras de Seguridad",
  description:
    "Diseño e instalacion de camaras de seguridad con racks, switches, patch panels, software e integracion.",
  path: "/soluciones/camaras-seguridad",
  keywords: ["instalacion camaras panama", "videovigilancia empresarial", "proyecto cctv llave en mano"],
});

export default function CamerasPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Instalacion de camaras de seguridad",
    provider: {
      "@type": "Organization",
      name: "ONEN / OnenVideo",
    },
    areaServed: "Panama",
    description:
      "Instalacion de videovigilancia con infraestructura de red, software de gestion e integracion con sistemas de seguridad.",
  };

  return (
    <>
      <StructuredData id="camera-service-schema" data={serviceSchema} />
      <LandingHero {...camerasLanding.hero} source="landing_camaras_hero" image={homeVisuals.operationsShowcase} />
      <ValueGrid
        eyebrow="Alcance"
        title="Proyecto llave en mano"
        description="Instalamos y configuramos toda la solucion: infraestructura, dispositivos y software."
        items={camerasLanding.services}
      />
      <SectionShell
        eyebrow="Pilares del proyecto"
        title="Cobertura robusta y lista para crecer"
        description="Estructuramos la base para evolucionar hacia analiticas IA e integracion operativa."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {camerasLanding.projectPillars.map((pillar) => (
            <article key={pillar} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              {pillar}
            </article>
          ))}
        </div>
      </SectionShell>
      <FAQAccordion items={cameraFaq} />
      <ContactCtaPanel source="landing_camaras_final" />
    </>
  );
}
