import type { Metadata } from "next";
import { env } from "@/lib/env";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

const defaultImage = "/og/onen-og.svg";

export const siteMetadata = {
  name: "ONEN / OnenVideo",
  title: "ONEN | Seguridad electrónica, IA y automatización en Panamá",
  description:
    "Integramos videovigilancia, inteligencia artificial, automatización y protección contra incendio para industrias, edificios y operaciones críticas en Panamá.",
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: BuildMetadataInput): Metadata {
  const canonicalUrl = new URL(path, env.siteUrl).toString();
  const imageUrl = new URL(defaultImage, env.siteUrl).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "es_PA",
      siteName: siteMetadata.name,
      url: canonicalUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "ONEN - Seguridad, IA y automatización",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
