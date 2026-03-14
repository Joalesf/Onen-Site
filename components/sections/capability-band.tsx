import { homeCapabilities } from "@/data/home";

export function CapabilityBand() {
  return (
    <section className="w-full py-6 md:py-8">
      <div className="container-default">
        <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_10px_32px_rgba(15,23,42,0.06)] md:grid-cols-5 md:p-6">
          {homeCapabilities.map((capability) => (
            <article key={capability.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-700">{capability.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
