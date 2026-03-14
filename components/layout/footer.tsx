import { Mail, MapPin, Phone } from "lucide-react";
import { contactInfo, solutionLinks, topNavLinks } from "@/data/company";
import { TrackedLink } from "@/components/tracking/tracked-link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pb-12 pt-14">
      <div className="container-default grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-3">
          <p className="title-display text-2xl text-slate-900">ONEN / OnenVideo</p>
          <p className="text-sm text-slate-600">
            Seguridad electronica, inteligencia artificial, automatizacion e integracion para operaciones de alto rendimiento.
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.16em] text-slate-500">Navegacion</p>
          <ul className="space-y-2">
            {topNavLinks.map((link) => (
              <li key={link.href}>
                <TrackedLink href={link.href} className="text-sm text-slate-700 hover:text-cyan-700">
                  {link.label}
                </TrackedLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.16em] text-slate-500">Soluciones</p>
          <ul className="space-y-2">
            {solutionLinks.slice(0, 6).map((solution) => (
              <li key={solution.slug}>
                <TrackedLink href={solution.href} className="text-sm text-slate-700 hover:text-cyan-700">
                  {solution.shortTitle}
                </TrackedLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Contacto</p>
          <p className="flex items-center gap-2 text-sm text-slate-700">
            <Phone className="size-4 text-cyan-700" />
            {contactInfo.phone}
          </p>
          <p className="flex items-center gap-2 text-sm text-slate-700">
            <Mail className="size-4 text-cyan-700" />
            {contactInfo.email}
          </p>
          <p className="flex items-center gap-2 text-sm text-slate-700">
            <MapPin className="size-4 text-cyan-700" />
            {contactInfo.address}
          </p>
          <TrackedLink href="/politica-de-privacidad" className="inline-block text-sm text-cyan-700 hover:text-cyan-600">
            Politica de privacidad
          </TrackedLink>
        </div>
      </div>
      <div className="container-default mt-8 border-t border-slate-200 pt-4 text-xs text-slate-500">
        © {new Date().getFullYear()} ONEN. Todos los derechos reservados.
      </div>
    </footer>
  );
}
