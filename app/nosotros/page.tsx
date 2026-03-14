import { buildMetadata } from "@/lib/seo";
import { aboutNarrative, aboutPillars, commitments } from "@/data/about";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/shared/section-shell";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { BrandStrip } from "@/components/sections/brand-strip";
import { ContactCtaPanel } from "@/components/sections/contact-cta-panel";

export const metadata = buildMetadata({
  title: "Nosotros",
  description:
    "ONEN / OnenVideo: integrador tecnologico en Panama para seguridad electronica, IA, automatizacion e integracion de sistemas.",
  path: "/nosotros",
  keywords: ["onen panama", "integrador tecnologico seguridad"],
});

export default function AboutPage() {
  return (
    <>
      <PageIntro {...aboutNarrative} />
      <SectionShell
        eyebrow="Propuesta de valor"
        title="Un integrador que conecta tecnologia con resultado operativo"
        description="Nos enfocamos en implementaciones reales, no en promesas teoricas."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {aboutPillars.map((pillar) => (
            <article key={pillar.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <h3 className="text-xl font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{pillar.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>
      <SectionShell
        eyebrow="Compromisos ONEN"
        title="Como trabajamos cada proyecto"
        description="Metodologia orientada a calidad tecnica, claridad comercial y continuidad."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {commitments.map((item) => (
            <article key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              • {item}
            </article>
          ))}
        </div>
      </SectionShell>
      <BrandStrip />
      <ProcessTimeline />
      <ContactCtaPanel source="nosotros_final" />
    </>
  );
}
