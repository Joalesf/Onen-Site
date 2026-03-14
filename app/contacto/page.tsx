import { buildMetadata } from "@/lib/seo";
import { contactInfo } from "@/data/company";
import { PageIntro } from "@/components/sections/page-intro";
import { LeadForm } from "@/components/sections/lead-form";
import { SectionShell } from "@/components/shared/section-shell";
import { TrackedLink } from "@/components/tracking/tracked-link";
import { Button } from "@/components/ui/button";

export const metadata = buildMetadata({
  title: "Contacto",
  description:
    "Solicita diagnostico, agenda demo o contacta al equipo de ONEN para proyectos de seguridad, IA y automatizacion en Panama.",
  path: "/contacto",
  keywords: ["contacto onen", "diagnostico seguridad panama", "demo ia seguridad"],
});

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "50700000000").replace(/\D/g, "")}`;
  const phoneHref = `tel:${contactInfo.phone.replace(/\s+/g, "")}`;

  return (
    <>
      <PageIntro
        eyebrow="Contacto"
        title="Solicita diagnostico o agenda demostracion"
        description="Cuéntanos tu objetivo y te ayudamos a definir una ruta clara de implementacion."
      />
      <SectionShell
        eyebrow="Alta conversion"
        title="Formulario rapido para equipos comerciales y tecnicos"
        description="Responde en menos de 2 minutos y te contactamos para el siguiente paso."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)] md:p-6">
            <LeadForm source="contacto_page_form" />
          </div>
          <aside className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)] md:p-6">
            <h3 className="text-xl font-semibold text-slate-900">Canales directos</h3>
            <p className="text-sm text-slate-600">
              Puedes escribir por WhatsApp, llamar o solicitar reunion de demo con nuestro equipo.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <TrackedLink href={whatsappHref} target="_blank" rel="noreferrer" eventName="whatsapp_click" eventPayload={{ source: "contacto_page" }}>
                  WhatsApp corporativo
                </TrackedLink>
              </Button>
              <Button asChild variant="secondary" className="w-full">
                <TrackedLink href={phoneHref} eventName="phone_click" eventPayload={{ source: "contacto_page" }}>
                  Llamar ahora
                </TrackedLink>
              </Button>
              <Button asChild variant="secondary" className="w-full">
                <TrackedLink href="/contacto?origen=book_demo" eventName="book_demo_click" eventPayload={{ source: "contacto_page" }}>
                  Agendar demostracion
                </TrackedLink>
              </Button>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p>{contactInfo.phoneLabel}: {contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
              <p>{contactInfo.address}</p>
              <p>{contactInfo.workingHours}</p>
            </div>
          </aside>
        </div>
      </SectionShell>
      <SectionShell
        eyebrow="Mapa / cobertura"
        title="Base operativa en Panama"
        description="Espacio preparado para integrar mapa interactivo cuando se definan coordenadas finales."
      >
        <div className="flex h-[320px] items-center justify-center rounded-3xl border border-dashed border-cyan-300/50 bg-cyan-50 text-center text-sm text-slate-600">
          Zona de mapa interactivo (Google Maps o proveedor preferido)
        </div>
      </SectionShell>
    </>
  );
}
