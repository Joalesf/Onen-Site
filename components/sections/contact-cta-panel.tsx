import { CalendarCheck2, MessageCircle, PhoneCall } from "lucide-react";
import { env } from "@/lib/env";
import { contactInfo } from "@/data/company";
import { SectionShell } from "@/components/shared/section-shell";
import { LeadForm } from "@/components/sections/lead-form";
import { TrackedLink } from "@/components/tracking/tracked-link";
import { Button } from "@/components/ui/button";

type ContactCtaPanelProps = {
  source: string;
  title?: string;
  description?: string;
};

export function ContactCtaPanel({
  source,
  title = "Hablemos de tu proyecto",
  description = "Solicita un diagnostico comercial-tecnico y te presentamos una propuesta clara de implementacion.",
}: ContactCtaPanelProps) {
  const whatsappHref = `https://wa.me/${env.whatsappNumber.replace(/\D/g, "")}`;
  const phoneHref = `tel:${contactInfo.phone.replace(/\s+/g, "")}`;

  return (
    <SectionShell eyebrow="CTA final" title={title} description={description}>
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)] md:p-6">
          <LeadForm source={source} />
        </div>
        <aside className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)] md:p-6">
          <h3 className="text-2xl font-semibold text-slate-900">Canales directos</h3>
          <p className="text-sm text-slate-600">
            Tambien puedes solicitar evaluacion inicial por WhatsApp, telefono o reunion de demostracion.
          </p>
          <div className="space-y-3">
            <Button asChild className="w-full justify-between">
              <TrackedLink
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                eventName="whatsapp_click"
                eventPayload={{ source }}
              >
                WhatsApp corporativo
                <MessageCircle className="size-4" />
              </TrackedLink>
            </Button>
            <Button asChild variant="secondary" className="w-full justify-between">
              <TrackedLink href={phoneHref} eventName="phone_click" eventPayload={{ source }}>
                Llamar ahora
                <PhoneCall className="size-4" />
              </TrackedLink>
            </Button>
            <Button asChild variant="secondary" className="w-full justify-between">
              <TrackedLink href="/contacto?origen=agenda_demo" eventName="book_demo_click" eventPayload={{ source }}>
                Agendar demostracion
                <CalendarCheck2 className="size-4" />
              </TrackedLink>
            </Button>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p>{contactInfo.email}</p>
            <p>{contactInfo.phone}</p>
            <p>{contactInfo.workingHours}</p>
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}
