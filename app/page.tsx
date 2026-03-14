import { buildMetadata } from "@/lib/seo";
import { HeroShowcase } from "@/components/sections/hero-showcase";
import { CapabilityBand } from "@/components/sections/capability-band";
import { AnimatedStats } from "@/components/sections/animated-stats";
import { VisualProofSection } from "@/components/sections/visual-proof-section";
import { SolutionCards } from "@/components/sections/solution-cards";
import { CameraProductShowcase } from "@/components/sections/camera-product-showcase";
import { SystemArchitectureFlow } from "@/components/sections/system-architecture-flow";
import { AnalyticsGrid } from "@/components/sections/analytics-grid";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { UseCasesCarousel } from "@/components/sections/use-cases-carousel";
import { TechnologyStack } from "@/components/sections/technology-stack";
import { BrandStrip } from "@/components/sections/brand-strip";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { homeFaq } from "@/data/home";
import { ContactCtaPanel } from "@/components/sections/contact-cta-panel";
import { StructuredData } from "@/components/shared/structured-data";

export const metadata = buildMetadata({
  title: "ONEN | Seguridad electronica, IA y automatizacion en Panama",
  description:
    "Integramos videovigilancia, automatizacion y sistemas de seguridad para empresas e industrias en Panama.",
  path: "/",
  keywords: [
    "seguridad electronica panama",
    "automatizacion seguridad",
    "analiticas de video ia",
    "integracion mqtt n8n",
  ],
});

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ONEN / OnenVideo",
    image: "/og/onen-og.jpg",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PA",
      addressLocality: "Panama",
    },
    telephone: "+50760000000",
    email: "comercial@onenvideo.com",
    areaServed: "Panama",
    description:
      "Integracion de videovigilancia, IA, automatizacion, alarmas contra incendio y sistemas de seguridad.",
  };

  return (
    <>
      <StructuredData id="home-local-business" data={localBusinessSchema} />
      <HeroShowcase />
      <CapabilityBand />
      <AnimatedStats />
      <VisualProofSection />
      <SolutionCards />
      <CameraProductShowcase />
      <SystemArchitectureFlow />
      <AnalyticsGrid />
      <IndustriesGrid />
      <UseCasesCarousel />
      <BrandStrip />
      <TechnologyStack />
      <ProcessTimeline />
      <FAQAccordion items={homeFaq} />
      <ContactCtaPanel source="home_final_cta" />
    </>
  );
}
