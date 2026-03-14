import type { UseCase } from "@/types/content";

export const useCases: UseCase[] = [
  {
    id: "control-vehicular-placas",
    title: "Control vehicular con lectura de placas",
    summary:
      "Automatiza validación de entradas y salidas para mejorar seguridad y velocidad de acceso.",
    challenge: "Accesos lentos, validación manual y poca trazabilidad vehicular.",
    impact: [
      "Registro automático de placas y horarios",
      "Alertas de excepciones en tiempo real",
      "Consulta de evidencia y reportes operativos",
    ],
    stack: ["Cámaras LPR", "Motor IA", "Dashboard KPI", "Telegram"],
  },
  {
    id: "monitoreo-perimetral",
    title: "Monitoreo perimetral inteligente",
    summary:
      "Detecta intrusión y cruce de línea para activar protocolos de respuesta sin demoras.",
    challenge: "Dependencia de monitoreo manual y alta tasa de falsas alarmas.",
    impact: [
      "Priorización de eventos críticos",
      "Notificaciones con evidencia contextual",
      "Mejor uso del equipo de seguridad",
    ],
    stack: ["Line crossing", "Intrusión", "n8n", "Telegram"],
  },
  {
    id: "conteo-afluencia",
    title: "Conteo de personas y crowd counting",
    summary:
      "Mide afluencia para seguridad, capacidad operativa y decisiones comerciales en tiempo real.",
    challenge: "Sin datos confiables sobre flujo de personas por zona y horario.",
    impact: [
      "Métricas por punto de control",
      "Detección de saturación en áreas clave",
      "Visualización ejecutiva en dashboards",
    ],
    stack: ["People counting", "Crowd counting", "Dashboard KPI"],
  },
  {
    id: "seguridad-edificios",
    title: "Seguridad integral en edificios",
    summary:
      "Integra video, alarmas y protocolos de notificación para operación centralizada en inmuebles.",
    challenge: "Sistemas aislados y coordinación tardía ante incidentes.",
    impact: [
      "Visibilidad unificada de eventos",
      "Escalamiento automático de alertas",
      "Seguimiento por incidencia y tiempos de atención",
    ],
    stack: ["VMS", "Alarmas", "MQTT", "Dashboard"],
  },
  {
    id: "automatizacion-plc",
    title: "Automatización industrial con PLC",
    summary:
      "Conecta señales de proceso con reglas de seguridad y reacción operativa en la misma arquitectura.",
    challenge: "Operación y seguridad sin intercambio de datos en tiempo real.",
    impact: [
      "Conversión Modbus a MQTT",
      "Acciones ON/OFF automatizadas",
      "Trazabilidad operativa completa",
    ],
    stack: ["PLC", "Modbus", "MQTT", "Node-RED"],
  },
  {
    id: "alertas-tiempo-real",
    title: "Alertas en tiempo real para equipos de campo",
    summary:
      "Envío inmediato de eventos relevantes a responsables de seguridad y operación.",
    challenge: "Tiempo de respuesta alto por canales fragmentados.",
    impact: [
      "Notificaciones por Telegram con evidencia",
      "Menos ruido y más eventos accionables",
      "Mayor velocidad de reacción",
    ],
    stack: ["n8n", "Telegram", "Reglas IA"],
  },
  {
    id: "dashboards-operativos",
    title: "Dashboards operativos para decisión diaria",
    summary:
      "Consolida múltiples sistemas en una vista ejecutiva de KPIs, incidentes y tendencias.",
    challenge: "Datos dispersos sin lectura ejecutiva clara.",
    impact: [
      "Seguimiento de desempeño por sede",
      "Trazabilidad por tipo de evento",
      "Mejora continua basada en datos",
    ],
    stack: ["BI dashboard", "Eventos IA", "Integraciones API"],
  },
  {
    id: "integracion-multiples-sistemas",
    title: "Integración de múltiples sistemas",
    summary:
      "Unifica software, hardware y protocolos para una operación conectada de extremo a extremo.",
    challenge: "Plataformas sin interoperabilidad y procesos manuales.",
    impact: [
      "Flujos automáticos entre sistemas",
      "Menor dependencia de operación manual",
      "Escalabilidad técnica de largo plazo",
    ],
    stack: ["HTTP", "FTP", "MQTT", "Ubuntu"],
  },
];
