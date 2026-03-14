import { buildMetadata } from "@/lib/seo";
import { iaLanding, iaFaq } from "@/data/solutions";
import { homeVisuals } from "@/data/media";
import { LandingHero } from "@/components/sections/landing-hero";
import { ProblemSolutionSplit } from "@/components/sections/problem-solution-split";
import { ValueGrid } from "@/components/sections/value-grid";
import { SectionShell } from "@/components/shared/section-shell";
import { AIAnalyticsScene } from "@/components/sections/ai-analytics-scene";
import { SystemArchitectureFlow } from "@/components/sections/system-architecture-flow";
import { KpiDashboardSection } from "@/components/sections/kpi-dashboard-section";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { ContactCtaPanel } from "@/components/sections/contact-cta-panel";
import { StructuredData } from "@/components/shared/structured-data";

export const metadata = buildMetadata({
  title: "IA y Automatizacion para Seguridad y Operaciones",
  description:
    "Integramos camaras, sensores y PLC con automatizacion y dashboards KPI para reducir falsas alarmas y acelerar respuesta.",
  path: "/soluciones/ia-automatizacion",
  keywords: [
    "ia seguridad panama",
    "automatizacion n8n node-red",
    "integracion mqtt modbus",
    "dashboards kpi seguridad",
  ],
});

const outcomes = [
  "Menos falsas alarmas y mejor priorizacion.",
  "Respuesta mas rapida con alertas contextualizadas.",
  "Operacion centralizada y trazable.",
  "Integracion real entre seguridad y procesos operativos.",
];

export default function IaAutomationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IA y automatizacion para seguridad y operaciones",
    provider: {
      "@type": "Organization",
      name: "ONEN / OnenVideo",
    },
    areaServed: "Panama",
    description:
      "Integracion de analiticas de video, PLC y automatizacion con n8n, Node-RED y dashboards KPI.",
  };

  return (
    <>
      <StructuredData id="ia-service-schema" data={serviceSchema} />
      <LandingHero {...iaLanding.hero} source="landing_ia_hero" image={homeVisuals.aiShowcase} />
      <ProblemSolutionSplit problems={iaLanding.problems} outcomes={outcomes} />
      <ValueGrid
        eyebrow="Que automatizamos"
        title="Flujos que conectan seguridad con accion operativa"
        description="No vendemos protocolos. Diseñamos automatizaciones que generan resultados medibles."
        items={iaLanding.automations}
      />
      <SectionShell
        eyebrow="Escena IA"
        title="Analiticas de video en tiempo real"
        description="Visualizacion de detecciones, eventos y contexto para operadores y equipos de campo."
      >
        <AIAnalyticsScene />
      </SectionShell>
      <ValueGrid
        eyebrow="Analiticas disponibles"
        title="Capacidades que se adaptan al proyecto"
        description="Implementamos analiticas avanzadas de video segun requerimientos y cumplimiento aplicable."
        items={iaLanding.analytics}
        columns={3}
      />
      <SystemArchitectureFlow />
      <SectionShell
        eyebrow="Casos de uso"
        title="Ejemplos de aplicacion comercial y operativa"
        description="Escenarios diseñados para mejorar control, trazabilidad y velocidad de respuesta."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {iaLanding.cases.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>
      <KpiDashboardSection />
      <ValueGrid
        eyebrow="Stack tecnologico"
        title="Infraestructura preparada para escalar"
        description="Seleccionamos tecnologias segun performance, interoperabilidad y continuidad."
        items={iaLanding.stack}
      />
      <ValueGrid
        eyebrow="Sectores donde aplica"
        title="Implementacion transversal por industria"
        description="La solucion se adapta a contexto de riesgo, flujo y objetivo de negocio."
        items={iaLanding.sectors}
        columns={3}
      />
      <FAQAccordion items={iaFaq} />
      <ContactCtaPanel source="landing_ia_final" />
    </>
  );
}
