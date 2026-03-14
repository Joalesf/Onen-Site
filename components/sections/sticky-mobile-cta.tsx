"use client";

import { MessageCircle, Phone } from "lucide-react";
import { env } from "@/lib/env";
import { trackEvent } from "@/lib/analytics";
import { contactInfo } from "@/data/company";

const whatsappHref = `https://wa.me/${env.whatsappNumber.replace(/\D/g, "")}`;
const phoneHref = `tel:${contactInfo.phone.replace(/\s+/g, "")}`;

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-4 left-3 right-3 z-40 flex gap-2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-[0_20px_40px_rgba(15,23,42,0.22)] backdrop-blur md:hidden">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-3 py-2 text-sm font-semibold text-white"
        onClick={() => trackEvent("whatsapp_click", { placement: "sticky_mobile" })}
      >
        <MessageCircle className="size-4" />
        WhatsApp
      </a>
      <a
        href={phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800"
        onClick={() => trackEvent("phone_click", { placement: "sticky_mobile" })}
      >
        <Phone className="size-4" />
        Llamar
      </a>
    </div>
  );
}
