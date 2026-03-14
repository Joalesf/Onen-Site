import { Badge } from "@/components/ui/badge";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="relative isolate overflow-hidden pb-10 pt-24 md:pt-30">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_38%)]" />
      <div className="container-default max-w-5xl space-y-5">
        <Badge>{eyebrow}</Badge>
        <h1 className="title-display text-balance text-4xl text-slate-900 md:text-6xl">{title}</h1>
        <p className="text-pretty text-lg text-slate-600">{description}</p>
      </div>
    </section>
  );
}
