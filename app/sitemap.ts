import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

const routes = [
  "/",
  "/soluciones/ia-automatizacion",
  "/soluciones/sistema-humedo-nfpa-25",
  "/soluciones/alarmas-contra-incendio",
  "/soluciones/camaras-seguridad",
  "/soluciones/redes-cableado",
  "/soluciones/integracion-sistemas",
  "/industrias",
  "/casos-de-uso",
  "/nosotros",
  "/contacto",
  "/politica-de-privacidad",
  "/landings/base",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: new URL(route, env.siteUrl).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
