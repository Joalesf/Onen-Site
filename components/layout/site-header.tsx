"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { topNavLinks, solutionLinks } from "@/data/company";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "@/components/layout/mega-menu";
import { TrackedLink } from "@/components/tracking/tracked-link";

export function SiteHeader() {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/92 backdrop-blur-xl">
      <div className="container-default flex h-20 items-center justify-between">
        <TrackedLink href="/" className="flex items-center gap-2 text-slate-900" eventName="cta_click" eventPayload={{ cta: "logo_home" }}>
          <div className="relative size-10 overflow-hidden rounded-full border border-cyan-300/40 bg-cyan-50">
            <Image src="/media/brands/onen.png" alt="ONEN" fill className="object-cover p-1" />
          </div>
          <div className="leading-tight">
            <p className="title-display text-lg font-semibold">ONEN</p>
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">OnenVideo</p>
          </div>
        </TrackedLink>

        <nav className="hidden items-center gap-8 lg:flex">
          <MegaMenu />
          {topNavLinks
            .filter((link) => link.label !== "Soluciones")
            .map((link) => (
              <TrackedLink key={link.href} href={link.href} className="text-sm font-semibold text-slate-700 transition-colors hover:text-cyan-700">
                {link.label}
              </TrackedLink>
            ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <TrackedLink href="/contacto?origen=header_cta" eventName="cta_click" eventPayload={{ cta: "header_diagnostico" }}>
              Solicitar diagnostico
            </TrackedLink>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 lg:hidden"
          onClick={() => setOpenMobile((value) => !value)}
          aria-label="Abrir menu"
        >
          {openMobile ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {openMobile ? (
        <div className="border-t border-slate-200 bg-white px-5 pb-6 pt-4 lg:hidden">
          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Soluciones</p>
              {solutionLinks.map((solution) => (
                <TrackedLink
                  key={solution.slug}
                  href={solution.href}
                  className="block rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                  onClick={() => setOpenMobile(false)}
                >
                  {solution.shortTitle}
                </TrackedLink>
              ))}
            </div>
            <div className="space-y-2">
              {topNavLinks
                .filter((link) => link.label !== "Soluciones")
                .map((link) => (
                  <TrackedLink
                    key={link.href}
                    href={link.href}
                    className="block text-sm font-semibold text-slate-700"
                    onClick={() => setOpenMobile(false)}
                  >
                    {link.label}
                  </TrackedLink>
                ))}
            </div>
            <Button asChild className="w-full">
              <TrackedLink href="/contacto?origen=mobile_header_cta" onClick={() => setOpenMobile(false)}>
                Solicitar diagnostico
              </TrackedLink>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
