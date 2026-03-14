import { buildMetadata } from "@/lib/seo";
import { networkLanding } from "@/data/solutions";
import { homeVisuals } from "@/data/media";
import { LandingHero } from "@/components/sections/landing-hero";
import { ValueGrid } from "@/components/sections/value-grid";
import { ContactCtaPanel } from "@/components/sections/contact-cta-panel";

export const metadata = buildMetadata({
  title: "Redes y Cableado Estructurado",
  description:
    "Infraestructura de red, racks, patch panels y switching para seguridad electronica y automatizacion.",
  path: "/soluciones/redes-cableado",
  keywords: ["redes y cableado panama", "infraestructura para videovigilancia"],
});

export default function NetworkPage() {
  return (
    <>
      <LandingHero {...networkLanding.hero} source="landing_redes_hero" image={homeVisuals.heroSecondary} />
      <ValueGrid
        eyebrow="Infraestructura base"
        title="La base tecnica que sostiene toda la operacion"
        description="Diseñamos redes con enfoque en disponibilidad, orden y crecimiento."
        items={networkLanding.bullets}
      />
      <ContactCtaPanel source="landing_redes_final" />
    </>
  );
}
