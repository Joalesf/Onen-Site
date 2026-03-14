"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { capabilityMetrics } from "@/data/company";
import { Reveal } from "@/components/shared/reveal";

type CounterProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  fallback: string;
  active: boolean;
};

function Counter({ to, prefix, suffix, fallback, active }: CounterProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      return;
    }

    let frameId = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.round(progress * to));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [to, active]);

  if (!active) {
    return <>{fallback}</>;
  }

  return (
    <>
      {prefix}
      {value}
      {suffix}
    </>
  );
}

export function AnimatedStats() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const metricValues = useMemo(() => capabilityMetrics, []);

  return (
    <section ref={ref} className="relative w-full py-8 md:py-12">
      <div className="container-default">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {metricValues.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.05}>
              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.15em] text-cyan-700">{metric.label}</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">
                  {metric.counterTo ? (
                    <Counter
                      to={metric.counterTo}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      fallback={metric.value}
                      active={isInView}
                    />
                  ) : (
                    metric.value
                  )}
                </p>
                <p className="mt-2 text-sm text-slate-600">{metric.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
