import type { FaqItem } from "@/types/content";

export const iaLanding = {
  hero: {
    eyebrow: "IA y Automatización para Seguridad y Operaciones",
    title: "Integra eventos de video y datos operativos para reaccionar en segundos, no en horas.",
    description:
      "Conectamos cámaras inteligentes, sensores y señales de PLC con flujos de automatización para reducir falsas alarmas, acelerar respuesta y centralizar la operación.",
  },
  problems: [
    "Demasiadas alertas sin contexto operativo.",
    "Eventos críticos detectados tarde o sin trazabilidad.",
    "Sistemas de seguridad y operación trabajando aislados.",
    "Datos dispersos que no se convierten en decisiones.",
  ],
  automations: [
    "Envío de alertas con evidencia por Telegram y canales internos.",
    "Conversión de señales Modbus a MQTT para integración transversal.",
    "Activación de acciones ON/OFF vía PLC según eventos de IA.",
    "Orquestación de flujos en n8n y Node-RED con reglas de negocio.",
    "Integración HTTP/FTP para intercambio de datos entre plataformas.",
  ],
  analytics: [
    "Lectura de placas para accesos y trazabilidad vehicular.",
    "Line crossing para zonas críticas y perímetros.",
    "Conteo de personas y crowd counting por área y horario.",
    "Analíticas de comportamiento y eventos de seguridad.",
    "AI traffic para acceso, circulación y logística.",
    "Analíticas avanzadas de video según requerimientos del proyecto y cumplimiento aplicable.",
  ],
  cases: [
    {
      title: "Control vehicular con placas",
      description: "Valida accesos, detecta excepciones y registra evidencia en dashboard.",
    },
    {
      title: "Perímetro con reacción automática",
      description:
        "Cruce de línea activa notificación inmediata y dispara acciones coordinadas.",
    },
    {
      title: "Integración video + planta",
      description:
        "Eventos de cámaras y sensores generan señales a PLC para apoyo operativo.",
    },
    {
      title: "Centro de control unificado",
      description: "Consolida eventos, alertas y KPI en tableros para toma de decisiones.",
    },
  ],
  stack: [
    "Hanwha Vision, Bosch, Dahua, Hikvision, Axis",
    "Lumeo para desarrollo de analíticas adicionales",
    "MQTT, HTTP, FTP y transformación Modbus",
    "n8n y Node-RED para automatización de flujos",
    "Servidores Ubuntu para operación estable",
    "Dashboards KPI y visualización operativa",
  ],
  sectors: [
    "Industria y logística",
    "Edificios corporativos",
    "Banca y servicios financieros",
    "Gobierno",
    "Retail y centros comerciales",
    "Estacionamientos e infraestructura crítica",
  ],
};

export const iaFaq: FaqItem[] = [
  {
    question: "¿Cuánto tarda una implementación de IA y automatización?",
    answer:
      "Depende del alcance y de la infraestructura existente. Comenzamos con un diagnóstico para definir una hoja de ruta por fases y acelerar resultados tempranos.",
  },
  {
    question: "¿Se puede integrar con equipos y software ya instalados?",
    answer:
      "Sí. Diseñamos arquitectura de integración para reaprovechar inversión previa cuando es viable técnica y operativamente.",
  },
  {
    question: "¿Qué resultados de negocio se pueden esperar?",
    answer:
      "Menos falsas alarmas, tiempos de respuesta más bajos, mejor visibilidad de eventos y trazabilidad para auditoría y mejora continua.",
  },
  {
    question: "¿Ofrecen desarrollo de analíticas personalizadas?",
    answer:
      "Sí, evaluamos escenarios específicos y diseñamos analíticas avanzadas de video de acuerdo con los requerimientos del proyecto.",
  },
];

export const wetSystemLanding = {
  hero: {
    eyebrow: "Mantenimiento de Sistema Húmedo",
    title: "Inspecciones NFPA 25 con enfoque preventivo y continuidad operativa.",
    description:
      "Ejecutamos rutinas de mantenimiento e inspección para rociadores, llaves, alarmas y paneles, con documentación técnica y seguimiento periódico.",
  },
  services: [
    "Inspección integral de sistema húmedo.",
    "Revisión de rociadores, válvulas y llaves de control.",
    "Pruebas de alarmas y validación funcional del sistema.",
    "Verificación de panel y componentes asociados.",
    "Programas periódicos de mantenimiento preventivo.",
  ],
  valuePoints: [
    "Mayor confiabilidad frente a eventos críticos.",
    "Reducción de riesgo por fallas no detectadas.",
    "Cumplimiento técnico con evidencia documentada.",
    "Plan de acción correctiva y seguimiento continuo.",
  ],
  sectors: ["PH y edificios corporativos", "Instalaciones industriales", "Centros logísticos", "Infraestructura institucional"],
};

export const fireAlarmLanding = {
  hero: {
    eyebrow: "Alarmas Contra Incendio",
    title: "Diseñamos, instalamos y ponemos en marcha sistemas de alarma robustos y confiables.",
    description:
      "Desarrollamos proyectos llave en mano con cableado estructurado, detectores, paneles, software y mantenimiento para operación sostenida.",
  },
  services: [
    "Ingeniería e instalación completa del sistema.",
    "Cableado estructurado y montaje de dispositivos.",
    "Configuración de paneles y software de supervisión.",
    "Pruebas integrales y puesta en marcha formal.",
    "Mantenimiento correctivo y preventivo posterior.",
  ],
  differentiators: [
    "Implementación ordenada por etapas para minimizar interrupciones.",
    "Coordinación técnica con otras disciplinas del proyecto.",
    "Entrega documentada con pruebas funcionales.",
    "Soporte local para continuidad operativa.",
  ],
};

export const camerasLanding = {
  hero: {
    eyebrow: "Instalación de Cámaras de Seguridad",
    title: "Videovigilancia profesional con infraestructura sólida y visión de crecimiento.",
    description:
      "Diseñamos cobertura, instalamos equipos y dejamos plataforma lista para escalar hacia analíticas de IA, integración y automatización.",
  },
  services: [
    "Diseño de arquitectura de cámaras por objetivo operativo.",
    "Instalación de racks, switches, patch panels y cableado.",
    "Configuración de cámaras, grabación y software VMS.",
    "Integración con alarmas, control de acceso y dashboards.",
    "Mantenimiento y optimización continua.",
  ],
  projectPillars: [
    "Cobertura inteligente y calidad de evidencia.",
    "Infraestructura de red preparada para crecimiento.",
    "Integración con marcas líderes del mercado.",
    "Entrega llave en mano con soporte local.",
  ],
};

export const networkLanding = {
  hero: {
    eyebrow: "Redes y Cableado Estructurado",
    title: "Infraestructura confiable para seguridad, automatización y datos críticos.",
    description:
      "Diseñamos e implementamos la base física y lógica que sostiene plataformas de videovigilancia, alarmas y operación conectada.",
  },
  bullets: [
    "Diseño de red por capacidad y criticidad.",
    "Racks, patch panels y ordenamiento técnico.",
    "Switches para entornos corporativos e industriales.",
    "Cableado estructurado para crecimiento modular.",
  ],
};

export const integrationLanding = {
  hero: {
    eyebrow: "Integración de Sistemas",
    title: "Unificamos sistemas aislados para operar con visibilidad y control real.",
    description:
      "Conectamos seguridad electrónica, automatización y software de negocio mediante flujos robustos que convierten datos en acciones.",
  },
  bullets: [
    "Conectores MQTT, HTTP y FTP para interoperabilidad.",
    "Transformación de señales Modbus hacia arquitectura moderna.",
    "Automatizaciones en n8n y Node-RED con lógica operativa.",
    "Dashboards centralizados y trazabilidad de eventos.",
  ],
};
