// Contenido del portafolio. Editá este archivo para actualizar textos,
// proyectos, habilidades, preguntas frecuentes y fotos sin tocar los componentes.

export const profile = {
  name: "Emily Kohler",
  initials: "EK",
  title: "Desarrolladora Full Stack",

  // Hero: frase en script + frase grande en mayúscula (como "Helping You / BUILD, GROW AND THRIVE")
  heroEyebrow: "Ayudo a construir productos que",
  heroHeadline: "FUNCIONAN, ESCALAN Y SE VEN BIEN.",
  heroByline: "POR EMILY KOHLER",
  heroCta: "CONOCÉ MÁS SOBRE MÍ",

  // Sección "A smarter way to..."
  aboutEyebrow: "Una forma más prolija de",
  aboutHeadline: "CONSTRUIR TU PRODUCTO",
  aboutCta: "VER PROYECTOS",

  bio: [
    "Soy desarrolladora full stack. Trabajo tanto en el backend (APIs, bases de datos, integraciones de pago, autenticación) como en el frontend (interfaces claras y responsivas).",
    "Me interesa especialmente resolver problemas reales de negocio: sistemas de turnos, pagos online, paneles de administración con métricas en vivo y automatizaciones que le ahorran trabajo manual a quien los usa.",
  ],

  // Foto del hero y del FAQ. Dejalas vacías ("") hasta que tengas una foto —
  // mientras tanto se muestra un marco decorativo con tus iniciales. Para
  // poner una foto real, guardala en /public (ej. /yo.jpg) y escribí acá
  // "/yo.jpg".
  heroImage: "/emi1.jpg",
  faqImage: "/emi2.jpg",

  email: "emilynoralikohler@gmail.com",
  location: "",
  github: "https://github.com/emilykohler12",
  linkedin: "https://www.linkedin.com/in/emily-noral%C3%AD-kohler-17ba62290/",
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue 3", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Prisma", "Python", "FastAPI", "PHP / Laravel"],
  },
  {
    category: "Bases de datos e integraciones",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Mercado Pago API", "JWT", "Webhooks"],
  },
  {
    category: "Herramientas",
    items: ["Git", "Docker", "Render", "Vercel", "Postman"],
  },
];

export type Project = {
  name: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: string;
  linkLabel?: string;
  repo?: string;
  status?: string;
  // Captura de pantalla del proyecto (o del video, en el caso del
  // videojuego). Guardala en /public/projects/ (ej. /public/projects/nexa.png)
  // y escribí acá la ruta, ej. "/projects/nexa.png". Vacío ("") muestra un
  // marco placeholder con el nombre del proyecto.
  image?: string;
};

export const projectsIntro = {
  eyebrow: "Proyectos",
  headline: "QUE CONSTRUÍ",
};

export const projects: Project[] = [
  {
    name: "Nexa",
    description:
      "Plataforma de gestión de turnos online para peluquerías y salones, con pago de seña integrado.",
    highlights: [
      "Pasarela de pago con Mercado Pago para señar turnos, con cron para liberar turnos impagos",
      "Combos de turnos simultáneos, cancelación parcial y seña real",
      "Campañas automáticas por cumpleaños e hitos de turnos, con mails informativos",
      "Panel de administración con KPIs, gráficos en vivo y aplicación de promociones a turnos",
      "Sistema de reseñas y calificaciones por profesional",
    ],
    stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "React", "Mercado Pago API"],
    status: "Demo en vivo",
    link: "https://nexa-frontend-sandy.vercel.app/",
    repo: "https://github.com/emilykohler12/nexa-frontend",
    image: "",
  },
  {
    name: "Clinix",
    description:
      "Sistema de gestión clínica full-stack: pacientes, profesionales, turnos con calendario y notificaciones por email.",
    highlights: [
      "Autenticación JWT con roles (admin / médico) y recuperación de contraseña por código",
      "Historia clínica completa por paciente: obra social, alergias, adjuntos y notas de consulta",
      "Calendario de turnos con recordatorios y avisos automáticos por email",
      "Búsqueda en tiempo real, filtros combinables e infinite scroll con paginación real",
      "Dark mode, diseño responsive y tests con Vitest + Testing Library",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Node.js", "Express", "MongoDB"],
    status: "Demo en vivo",
    link: "https://sistema-clinix.vercel.app/",
    repo: "https://github.com/emilykohler12/Sistema-clinix",
    image: "",
  },
  {
    name: "Syntri",
    description:
      "API REST para el envío centralizado de notificaciones a múltiples plataformas, con panel de administración y control de acceso por roles.",
    highlights: [
      "Envío de mensajes a Slack, Discord y Telegram desde un mismo endpoint, con reintentos automáticos",
      "Autenticación por email con JWT y recuperación de contraseña por código",
      "Roles con permisos configurables por sección del panel de administración",
      "Límites de envío configurables (global y por usuario) con auditoría de cambios",
      "59 tests automatizados y CI/CD con GitHub Actions",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Vue 3", "TypeScript", "Docker"],
    status: "Demo en vivo",
    link: "https://sistem-syntri.vercel.app/",
    repo: "https://github.com/emilykohler12/sistem_Syntri",
    image: "",
  },
  {
    name: "freddymotos",
    description:
      "Tienda online de repuestos y accesorios para motos, con catálogo público, carrito, checkout con Mercado Pago y un panel de administración completo para gestionar el negocio.",
    highlights: [
      "Catálogo por categoría con búsqueda, filtros y modelos de moto compatibles",
      "Checkout con Mercado Pago o coordinación de pago por WhatsApp, con promociones aplicadas automáticamente en el carrito",
      "Panel admin con dashboard de KPIs, gráficos filtrables y gestión de productos, pedidos, clientes y proveedores",
      "Inventario con altas y bajas de stock por compra o venta, sin editar el stock a mano en cada producto",
      "Gastos e ingresos organizados por categoría, y notificaciones de stock bajo, pagos y reembolsos pendientes",
    ],
    stack: ["Laravel", "PHP", "Blade", "Tailwind CSS", "Vite", "Mercado Pago API", "Mailjet", "MySQL"],
    status: "Proyecto en desarrollo",
    // TODO: agregar el link de demo cuando esté subido.
    repo: "https://github.com/emilykohler12/freddymotos-web",
    image: "",
  },
  {
    name: "Hidden Memories",
    description:
      "Videojuego 2D de aventura hecho en Unity: una chica atraviesa un mundo acuático superando obstáculos para avanzar, recolectando monedas y cofres.",
    highlights: [
      "Pociones, vidas y caídas",
      "Combate y NPCs",
      "2 subniveles jugables",
      "Menú y fondo parallax animado",
    ],
    stack: ["Unity", "C#"],
    status: "Proyecto personal",
    link: "https://drive.google.com/drive/folders/1yMv1JAzHC4pnBCB8QAsD3c_Eb17OO46L",
    linkLabel: "Ver proyecto ↗",
    image: "",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqIntro = {
  eyebrow: "Preguntas",
  headline: "FRECUENTES",
};

export const faq: FaqItem[] = [
  {
    question: "¿Quién soy?",
    answer:
      "Soy Emily, desarrolladora full stack. Diseño y construyo aplicaciones web de punta a punta: backend, base de datos e interfaz.",
  },
  {
    question: "¿Qué tecnologías uso?",
    answer:
      "Principalmente Node.js, Python (FastAPI) y Prisma / SQLAlchemy en el backend, y React, Vue y Next.js con TypeScript y Tailwind CSS en el frontend. También trabajé con PHP / Laravel.",
  },
  {
    question: "¿Estoy disponible para nuevos proyectos?",
    answer: "¡Sí! Estoy disponible para nuevos proyectos — escribime y charlamos.",
  },
  {
    question: "¿Cómo pueden contactarme?",
    answer: `Por mail, a ${profile.email}.`,
  },
];
