import type { BrandItem, MetricItem, NavLink, ProcessStep, Solution } from "@/types/content";

export const siteConfig = {
  name: "ONEN / OnenVideo",
  legalName: "ONEN",
  tagline: "Seguridad electrónica, IA y automatización para operaciones en tiempo real",
  locale: "es-PA",
};

export const topNavLinks: NavLink[] = [
  { label: "Soluciones", href: "/soluciones/ia-automatizacion" },
  { label: "Industrias", href: "/industrias" },
  { label: "Casos de uso", href: "/casos-de-uso" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const solutionLinks: Solution[] = [
  {
    slug: "ia-automatizacion",
    title: "IA y Automatización para Seguridad y Operaciones",
    shortTitle: "IA y Automatización",
    description:
      "Convertimos eventos de video, sensores y señales industriales en acciones automáticas y decisiones operativas con trazabilidad.",
    href: "/soluciones/ia-automatizacion",
    highlights: ["Analíticas en tiempo real", "Dashboards KPI", "Alertas por Telegram"],
  },
  {
    slug: "sistema-humedo-nfpa-25",
    title: "Mantenimiento de Sistema Húmedo e Inspecciones NFPA 25",
    shortTitle: "Sistema Húmedo / NFPA 25",
    description:
      "Programa preventivo para rociadores, llaves, alarmas, paneles y pruebas periódicas con enfoque de continuidad operativa.",
    href: "/soluciones/sistema-humedo-nfpa-25",
    highlights: ["Inspecciones periódicas", "Pruebas funcionales", "Documentación técnica"],
  },
  {
    slug: "alarmas-contra-incendio",
    title: "Alarmas Contra Incendio",
    shortTitle: "Alarmas Contra Incendio",
    description:
      "Diseño, instalación, configuración y puesta en marcha de sistemas de detección y alarma para edificios e instalaciones críticas.",
    href: "/soluciones/alarmas-contra-incendio",
    highlights: ["Proyecto llave en mano", "Panel + software", "Mantenimiento posterior"],
  },
  {
    slug: "camaras-seguridad",
    title: "Instalación de Cámaras de Seguridad",
    shortTitle: "Cámaras de Seguridad",
    description:
      "Ingeniería e implementación completa de videovigilancia con racks, switches, patch panel y software de gestión.",
    href: "/soluciones/camaras-seguridad",
    highlights: ["Diseño por cobertura", "Integración de software", "Soporte continuo"],
  },
  {
    slug: "redes-cableado",
    title: "Redes y Cableado Estructurado",
    shortTitle: "Redes y Cableado",
    description:
      "Infraestructura de red robusta para sostener seguridad, automatización, video y operación de misión crítica.",
    href: "/soluciones/redes-cableado",
    highlights: ["Racks y patch panels", "Switching industrial", "Escalabilidad"],
  },
  {
    slug: "integracion-sistemas",
    title: "Integración de Sistemas",
    shortTitle: "Integración de Sistemas",
    description:
      "Conectamos software, hardware y procesos de negocio mediante arquitecturas abiertas y flujos automatizados.",
    href: "/soluciones/integracion-sistemas",
    highlights: ["MQTT, HTTP, FTP", "Modbus a MQTT", "n8n y Node-RED"],
  },
];

export const capabilityMetrics: MetricItem[] = [
  {
    label: "Integracion total",
    value: "360°",
    detail: "Video, sensores, PLC y operacion",
    counterTo: 360,
    suffix: "°",
  },
  {
    label: "Alertas automatizadas",
    value: "<15s",
    detail: "De evento a notificacion util",
    counterTo: 15,
    prefix: "<",
    suffix: "s",
  },
  {
    label: "Visualizacion KPI",
    value: "24/7",
    detail: "Tableros en tiempo real",
    counterTo: 24,
    suffix: "/7",
  },
  { label: "Implementacion local", value: "Panama", detail: "Diseno, despliegue y soporte" },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Diagnóstico",
    description:
      "Levantamiento técnico y operativo para entender riesgos, flujo de trabajo y objetivos de negocio.",
  },
  {
    title: "Diseño de solución",
    description:
      "Arquitectura de seguridad + automatización con criterios de escalabilidad, continuidad y retorno operativo.",
  },
  {
    title: "Instalación e integración",
    description:
      "Implementación coordinada de equipos, redes, software y lógica de eventos entre sistemas.",
  },
  {
    title: "Automatización y ajuste",
    description:
      "Configuración de reglas, analíticas, notificaciones y acciones para reducir tiempos de respuesta.",
  },
  {
    title: "Dashboard y visualización",
    description:
      "Tableros KPI para seguimiento de incidentes, cumplimiento y desempeño operacional.",
  },
  {
    title: "Soporte continuo",
    description:
      "Mantenimiento preventivo y evolutivo para sostener confiabilidad y mejora continua.",
  },
];

export const brands: BrandItem[] = [
  { name: "Hanwha Vision", category: "Videovigilancia" },
  { name: "Bosch", category: "Seguridad" },
  { name: "Dahua", category: "Videovigilancia" },
  { name: "Hikvision", category: "Videovigilancia" },
  { name: "Axis", category: "Videovigilancia" },
  { name: "Lumeo", category: "IA de video" },
  { name: "Genetec", category: "Plataforma" },
  { name: "Ubuntu", category: "Infraestructura" },
  { name: "n8n", category: "Automatización" },
  { name: "Node-RED", category: "Automatización" },
  { name: "MQTT", category: "Integración" },
  { name: "Modbus", category: "Integración" },
  { name: "Telegram", category: "Notificaciones" },
];

export const contactInfo = {
  phoneLabel: "Línea comercial",
  phone: "+507 6000-0000",
  email: "comercial@onenvideo.com",
  whatsappLabel: "WhatsApp corporativo",
  address: "Panamá, República de Panamá",
  workingHours: "Lunes a viernes · 8:00 AM a 6:00 PM",
};
