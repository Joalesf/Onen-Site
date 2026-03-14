import { buildMetadata } from "@/lib/seo";
import { homeVisuals } from "@/data/media";
import { LandingHero } from "@/components/sections/landing-hero";
import { ValueGrid } from "@/components/sections/value-grid";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { ContactCtaPanel } from "@/components/sections/contact-cta-panel";
import { SectionShell } from "@/components/shared/section-shell";

export const metadata = buildMetadata({
  title: "Plantilla Base para Landings de Google Ads",
  description:
    "Plantilla reusable con estructura de conversion para campañas de Google Ads en servicios de ONEN.",
  path: "/landings/base",
  keywords: ["plantilla landing ads", "landing conversion seguridad panama"],
});

const baseFaq = [
  {
    question: "¿Como reutilizar esta plantilla para una nueva campaña?",
    answer:
      "Duplica esta ruta, reemplaza contenido desde data y adapta el source del formulario para rastrear origen de conversion.",
  },
  {
    question: "¿Que elementos no deben faltar en una landing de Ads?",
    answer:
      "Hero claro, CTA visible, prueba de capacidad, resolucion de objeciones, FAQ y formulario corto con tracking.",
  },
];

export default function LandingBasePage() {
  return (
    <>
      <LandingHero
        eyebrow="Plantilla Ads"
        title="Landing base reusable con enfoque de conversion"
        description="Estructura diseñada para campañas: propuesta clara, objeciones, prueba visual y CTA repetidos."
        source="landing_base_hero"
        image={homeVisuals.heroMain}
      />
      <ValueGrid
        eyebrow="Bloques recomendados"
        title="Arquitectura de conversion para Google Ads"
        description="Utiliza esta base para crear nuevas landings sin perder consistencia visual ni comercial."
        items={[
          "Hero con promesa y CTA por encima del fold",
          "Problema a resolver y beneficios medibles",
          "Prueba visual de capacidad (mockup o escena)",
          "FAQ para objeciones comerciales",
          "Formulario corto y CTA sticky en mobile",
          "Tracking de eventos y origen de campaña",
        ]}
        columns={3}
      />
      <SectionShell
        eyebrow="Checklist tecnico"
        title="Elementos listos para escalar"
        description="Base preparada para performance, SEO y medicion de conversion."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {[
            "Metadata y Open Graph por pagina",
            "Schema markup por tipo de servicio",
            "Eventos dataLayer para CTA, llamada y WhatsApp",
            "Formulario con validacion react-hook-form + zod",
            "API stub para webhook n8n y futura integracion CRM",
            "Diseño mobile-first con microinteracciones ligeras",
          ].map((item) => (
            <article key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              {item}
            </article>
          ))}
        </div>
      </SectionShell>
      <FAQAccordion title="FAQ de la plantilla" description="Guia rapida para el equipo comercial y de marketing." items={baseFaq} />
      <ContactCtaPanel source="landing_base_final" title="Convierte esta landing en una campaña activa" />
    </>
  );
}
