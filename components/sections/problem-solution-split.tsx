import { AlertTriangle, CircleCheckBig } from "lucide-react";
import { SectionShell } from "@/components/shared/section-shell";

type ProblemSolutionSplitProps = {
  problems: string[];
  outcomes: string[];
};

export function ProblemSolutionSplit({ problems, outcomes }: ProblemSolutionSplitProps) {
  return (
    <SectionShell
      eyebrow="Problemas que resolvemos"
      title="Menos ruido, mas control y respuesta mas rapida"
      description="Transformamos sistemas aislados en una operacion conectada que genera acciones automaticas."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-3xl border border-red-200 bg-red-50 p-5">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-red-800">
            <AlertTriangle className="size-5" />
            Estado comun antes de integrar
          </h3>
          <ul className="space-y-3 text-sm text-red-700">
            {problems.map((problem) => (
              <li key={problem}>• {problem}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-emerald-800">
            <CircleCheckBig className="size-5" />
            Resultado con ONEN
          </h3>
          <ul className="space-y-3 text-sm text-emerald-700">
            {outcomes.map((outcome) => (
              <li key={outcome}>• {outcome}</li>
            ))}
          </ul>
        </article>
      </div>
    </SectionShell>
  );
}
