import type { FaqItem } from "@/types/content";

export const homeHero = {
  eyebrow: "Integración tecnológica premium en Panamá",
  title: "Convertimos cámaras, sensores y datos en decisiones automáticas en tiempo real.",
  description:
    "ONEN integra videovigilancia, inteligencia artificial, PLC, MQTT, n8n, dashboards KPI y sistemas de seguridad para transformar operación, respuesta y trazabilidad.",
  primaryCta: { label: "Solicitar diagnóstico", href: "/contacto?origen=home_diagnostico" },
  secondaryCta: { label: "Agendar demostración", href: "/contacto?origen=home_demo" },
};

export const homeCapabilities = [
  {
    title: "IA en tiempo real",
    description: "Analíticas que detectan eventos relevantes y reducen ruido operativo.",
  },
  {
    title: "Integración de cámaras y sensores",
    description: "Conectamos video, IoT y señales industriales en una arquitectura unificada.",
  },
  {
    title: "Automatización de alertas",
    description: "Disparamos flujos por Telegram, paneles, alarmas y acciones operativas.",
  },
  {
    title: "Dashboards KPI accionables",
    description: "Visibilidad de incidentes, tendencias y desempeño para decisiones de gestión.",
  },
  {
    title: "Implementación local",
    description: "Ingeniería, instalación, puesta en marcha y soporte en Panamá.",
  },
];

export const analyticsHighlights = [
  "LPR / lectura de placas",
  "Conteo de personas y crowd counting",
  "Line crossing e intrusión",
  "Detección de eventos críticos",
  "AI traffic para movilidad",
  "Mask detection según política operativa",
  "Alertas inteligentes en tiempo real",
  "Dashboards operativos y reportes KPI",
  "Analíticas personalizadas sobre Lumeo",
];

export const architectureFlow = [
  "Cámara / Sensor / PLC",
  "Modbus · MQTT · HTTP · FTP",
  "n8n / Node-RED / Motor IA",
  "Telegram · Alarma · Dashboard",
  "Acción operativa y trazabilidad",
];

export const homeFaq: FaqItem[] = [
  {
    question: "¿ONEN solo instala cámaras?",
    answer:
      "No. Además de instalación, diseñamos integración entre video, sensores, PLC y automatización para que cada evento genere una acción operativa útil.",
  },
  {
    question: "¿Pueden integrar equipos existentes?",
    answer:
      "Sí. Evaluamos la infraestructura actual para reaprovechar hardware y software cuando es viable, reduciendo costos y acelerando despliegue.",
  },
  {
    question: "¿Qué tipo de reportes entregan?",
    answer:
      "Entregamos dashboards KPI y reportes de eventos con trazabilidad, enfocados en seguridad, operación y mejora continua.",
  },
  {
    question: "¿Trabajan con procesos industriales?",
    answer:
      "Sí. Integramos señales de PLC y protocolos de campo para conectar seguridad electrónica con flujos de operación.",
  },
];
