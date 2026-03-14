import { processSteps } from "@/data/company";
import { SectionShell } from "@/components/shared/section-shell";

export function ProcessTimeline() {
  return (
    <SectionShell
      id="proceso"
      eyebrow="Proceso de trabajo"
      title="De diagnóstico a soporte continuo"
      description="Un método claro para implementar soluciones de alto impacto con control técnico y comercial."
    >
      <ol className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {processSteps.map((step, index) => (
          <li key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
            <p className="text-xs uppercase tracking-[0.14em] text-cyan-700">Paso {index + 1}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
