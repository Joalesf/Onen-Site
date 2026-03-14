import { buildMetadata } from "@/lib/seo";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionShell } from "@/components/shared/section-shell";

export const metadata = buildMetadata({
  title: "Politica de Privacidad",
  description: "Politica de privacidad y tratamiento de datos personales de ONEN / OnenVideo.",
  path: "/politica-de-privacidad",
});

const privacySections = [
  {
    title: "1. Informacion que recopilamos",
    text: "Recopilamos datos de contacto enviados voluntariamente en formularios, incluyendo nombre, empresa, correo, telefono y detalles del proyecto.",
  },
  {
    title: "2. Uso de la informacion",
    text: "Utilizamos los datos para responder solicitudes comerciales y tecnicas, enviar propuestas, coordinar reuniones y mejorar la experiencia del sitio.",
  },
  {
    title: "3. Integraciones y terceros",
    text: "El sitio puede integrar herramientas de analitica, tag management o automatizacion. Se configura mediante variables de entorno segun politicas del cliente.",
  },
  {
    title: "4. Conservacion de datos",
    text: "Conservamos la informacion por el tiempo necesario para atencion comercial, soporte o cumplimiento de obligaciones aplicables.",
  },
  {
    title: "5. Derechos del titular",
    text: "Puedes solicitar actualizacion, rectificacion o eliminacion de tus datos escribiendo a comercial@onenvideo.com.",
  },
  {
    title: "6. Vigencia y cambios",
    text: "Esta politica puede actualizarse para reflejar mejoras operativas, cambios regulatorios o nuevas integraciones tecnologicas.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Politica de privacidad"
        description="Compromiso de ONEN con el uso responsable de informacion comercial y de contacto."
      />
      <SectionShell
        eyebrow="Tratamiento de datos"
        title="Lineamientos generales"
        description="Esta pagina sirve como base inicial y puede ajustarse con asesoria legal segun requerimientos de la organizacion."
      >
        <div className="space-y-4">
          {privacySections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{section.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
