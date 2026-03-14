import { buildMetadata } from "@/lib/seo";
import { integrationLanding } from "@/data/solutions";
import { homeVisuals } from "@/data/media";
import { LandingHero } from "@/components/sections/landing-hero";
import { ValueGrid } from "@/components/sections/value-grid";
import { SystemArchitectureFlow } from "@/components/sections/system-architecture-flow";
import { ContactCtaPanel } from "@/components/sections/contact-cta-panel";

export const metadata = buildMetadata({
  title: "Integracion de Sistemas",
  description:
    "Integracion de seguridad electronica, PLC, automatizacion y dashboards mediante MQTT, HTTP, FTP y flujos n8n/Node-RED.",
  path: "/soluciones/integracion-sistemas",
  keywords: ["integracion de sistemas panama", "mqtt n8n node-red", "modbus mqtt"],
});

export default function IntegrationPage() {
  return (
    <>
      <LandingHero {...integrationLanding.hero} source="landing_integracion_hero" image={homeVisuals.trafficShowcase} />
      <ValueGrid
        eyebrow="Interoperabilidad"
        title="Conecta sistemas aislados en una sola operacion"
        description="Arquitecturas abiertas para reducir friccion tecnica y acelerar decisiones."
        items={integrationLanding.bullets}
      />
      <SystemArchitectureFlow />
      <ContactCtaPanel source="landing_integracion_final" />
    </>
  );
}
