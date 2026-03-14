"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { solutionLinks } from "@/data/company";
import { TrackedLink } from "@/components/tracking/tracked-link";

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocusCapture={() => setIsOpen(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition-colors hover:text-cyan-700"
        aria-expanded={isOpen}
      >
        Soluciones
        <ChevronDown className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 top-full z-50 mt-4 w-[880px] max-w-[88vw] -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur"
          >
            <div className="grid gap-3 md:grid-cols-2">
              {solutionLinks.map((solution) => (
                <TrackedLink
                  key={solution.slug}
                  href={solution.href}
                  eventName="cta_click"
                  eventPayload={{ cta: `mega_${solution.slug}` }}
                  className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:border-cyan-300/50 hover:bg-cyan-50/40"
                >
                  <p className="flex items-center justify-between text-base font-semibold text-slate-900">
                    {solution.shortTitle}
                    <ArrowUpRight className="size-4 text-cyan-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{solution.description}</p>
                </TrackedLink>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
