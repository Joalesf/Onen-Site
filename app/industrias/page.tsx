import { buildMetadata } from "@/lib/seo";
import { PageIntro } from "@/components/sections/page-intro";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { ContactCtaPanel } from "@/components/sections/contact-cta-panel";

export const metadata = buildMetadata({
  title: "Industrias y Sectores",
  description:
    "Soluciones de seguridad, IA y automatizacion adaptadas a industria, edificios corporativos, banca, retail e infraestructura critica.",
  path: "/industrias",
  keywords: ["seguridad por industria", "automatizacion por sector panama"],
});

export default function IndustriesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Industrias"
        title="Diseñamos soluciones por sector, riesgo y operacion"
        description="Cada industria tiene retos distintos. Adaptamos arquitectura, automatizacion y visualizacion segun necesidad operativa real."
      />
      <IndustriesGrid />
      <ContactCtaPanel source="industrias_final" />
    </>
  );
}
