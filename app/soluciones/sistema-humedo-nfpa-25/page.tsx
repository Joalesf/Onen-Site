import { buildMetadata } from "@/lib/seo";
import { wetSystemLanding } from "@/data/solutions";
import { wetSystemFaq } from "@/data/faqs";
import { homeVisuals } from "@/data/media";
import { LandingHero } from "@/components/sections/landing-hero";
import { ValueGrid } from "@/components/sections/value-grid";
import { SectionShell } from "@/components/shared/section-shell";
import { FireSafetyGallery } from "@/components/sections/fire-safety-gallery";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { ContactCtaPanel } from "@/components/sections/contact-cta-panel";
import { StructuredData } from "@/components/shared/structured-data";

export const metadata = buildMetadata({
  title: "Mantenimiento de Sistema Humedo e Inspecciones NFPA 25",
  description:
    "Inspeccion y mantenimiento preventivo de sistema humedo, rociadores, llaves, alarmas y paneles para continuidad operativa.",
  path: "/soluciones/sistema-humedo-nfpa-25",
  keywords: ["nfpa 25 panama", "mantenimiento sistema humedo", "inspeccion rociadores"],
});

export default function WetSystemPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Inspeccion y mantenimiento de sistema humedo",
    provider: {
      "@type": "Organization",
      name: "ONEN / OnenVideo",
    },
    areaServed: "Panama",
    description:
      "Inspecciones periodicas, pruebas de alarmas y validacion funcional para sistema humedo bajo marco NFPA 25.",
  };

  return (
    <>
      <StructuredData id="wet-system-schema" data={serviceSchema} />
      <LandingHero {...wetSystemLanding.hero} source="landing_humedo_hero" image={homeVisuals.fireSprinkler} />
      <ValueGrid
        eyebrow="Alcance del servicio"
        title="Mantenimiento e inspeccion con enfoque de cumplimiento"
        description="Ejecutamos revisiones tecnicas orientadas a confiabilidad y prevencion de fallas."
        items={wetSystemLanding.services}
      />
      <ValueGrid
        eyebrow="Valor para tu operacion"
        title="Prevencion, evidencia y continuidad"
        description="Programa tecnico-comercial para edificios, PH e instalaciones industriales."
        items={wetSystemLanding.valuePoints}
      />
      <SectionShell
        eyebrow="Cobertura"
        title="Sectores donde prestamos servicio"
        description="Acompañamos organizaciones que requieren operación segura y mantenimientos periódicos documentados."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {wetSystemLanding.sectors.map((sector) => (
            <article key={sector} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              {sector}
            </article>
          ))}
        </div>
      </SectionShell>
      <FireSafetyGallery
        title="Elementos criticos inspeccionados"
        description="Visuales alineados a sistema humedo y proteccion contra incendio para comunicar mejor el alcance del servicio."
      />
      <FAQAccordion items={wetSystemFaq} />
      <ContactCtaPanel source="landing_humedo_final" />
    </>
  );
}
