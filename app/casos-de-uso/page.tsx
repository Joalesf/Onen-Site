import { buildMetadata } from "@/lib/seo";
import { useCases } from "@/data/use-cases";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/shared/section-shell";
import { UseCasesCarousel } from "@/components/sections/use-cases-carousel";
import { ContactCtaPanel } from "@/components/sections/contact-cta-panel";

export const metadata = buildMetadata({
  title: "Casos de Uso",
  description:
    "Escenarios reales de aplicacion para control vehicular, monitoreo perimetral, conteo de personas, PLC y dashboards operativos.",
  path: "/casos-de-uso",
  keywords: ["casos de uso seguridad ia", "lpr panama", "dashboards operativos"],
});

export default function UseCasesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Casos de uso"
        title="Aplicaciones reales que convierten eventos en resultados"
        description="Casos diseñados para mejorar control, reducir tiempos de respuesta y conectar seguridad con operacion."
      />
      <UseCasesCarousel />
      <SectionShell
        eyebrow="Biblioteca de casos"
        title="Escenarios para campañas y presentaciones comerciales"
        description="Puedes reutilizar estos bloques en propuestas, landings y demos por sector."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {useCases.map((useCase) => (
            <article key={useCase.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <h3 className="text-xl font-semibold text-slate-900">{useCase.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{useCase.summary}</p>
              <p className="mt-4 text-sm text-slate-700">{useCase.challenge}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {useCase.stack.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-cyan-700"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
      <ContactCtaPanel source="casos_final" />
    </>
  );
}
