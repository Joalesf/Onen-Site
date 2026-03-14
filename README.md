# ONEN / OnenVideo Website

Web corporativa premium para ONEN construida con enfoque comercial, conversion y crecimiento.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Componentes tipo shadcn/ui (`components/ui`)
- Lucide Icons
- Embla Carousel
- `react-hook-form` + `zod`
- Metadata nativa de Next + JSON-LD schema
- Tracking base para GA4 / GTM / dataLayer

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

## Variables de entorno

Copiar `.env.example` y completar:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_N8N_WEBHOOK_URL`
- `N8N_WEBHOOK_URL` (opcional, server-only)

## Estructura principal

```txt
app/
  page.tsx
  soluciones/*
  industrias/
  casos-de-uso/
  nosotros/
  contacto/
  politica-de-privacidad/
  landings/base/
  api/leads/route.ts
components/
  layout/
  sections/
  shared/
  tracking/
  ui/
data/
lib/
types/
public/media/
  photos/
  products/
  brands/
```

## Paginas incluidas

1. Home
2. Landing IA y automatizacion
3. Landing Sistema humedo / NFPA 25
4. Landing Alarmas contra incendio
5. Landing Instalacion de camaras
6. Industrias
7. Casos de uso
8. Nosotros
9. Contacto
10. Politica de privacidad
11. Landing base reusable para Google Ads

## Componentes clave implementados

- `SiteHeader` + `MegaMenu`
- `HeroShowcase`
- `AnimatedStats`
- `SolutionCards`
- `TechnologyStack`
- `IndustriesGrid`
- `UseCasesCarousel`
- `ProcessTimeline`
- `DashboardMockup`
- `AIAnalyticsScene`
- `SystemArchitectureFlow`
- `SectorShowcase`
- `StickyMobileCTA`
- `LeadForm`
- `FAQAccordion`
- `BrandStrip`
- `Footer`

## Tracking y conversion

Eventos base implementados:

- `form_submit`
- `whatsapp_click`
- `phone_click`
- `cta_click`
- `scroll_depth`
- `book_demo_click`

Se envian a `dataLayer` y, si existe `gtag`, tambien a GA.

## Formularios y leads

- `LeadForm` valida con `zod`.
- API route: `POST /api/leads`.
- Stub preparado para:
  - webhook de n8n
  - integracion futura de correo/CRM

## SEO

- Metadata por pagina (`buildMetadata`)
- Open Graph y Twitter cards
- `sitemap.ts` y `robots.ts`
- JSON-LD (`Organization`, `LocalBusiness`, `Service`)
- URLs limpias y estructura semantica

## Donde editar contenido rapido

- `data/company.ts`
- `data/home.ts`
- `data/solutions.ts`
- `data/industries.ts`
- `data/use-cases.ts`
- `data/faqs.ts`
- `data/about.ts`
- `data/media.ts` (imagenes, logos y visuales)

## Decisiones clave

- Se priorizo una experiencia premium visual sin depender de videos reales.
- Las escenas dinamicas fueron implementadas con Framer Motion + CSS para mantener performance.
- Se dejo arquitectura lista para reemplazar mockups por videos reales cuando esten disponibles.
- Se centralizo contenido en `data/` para facilitar edicion comercial y escalado de landings.
