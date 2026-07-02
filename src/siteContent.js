import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  FileText,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  MousePointerClick,
  QrCode,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Store,
  Wrench
} from "lucide-react";

export const CONTACT = {
  whatsappHref: "#contacto",
  emailHref: "mailto:hola@elevalo.digital?subject=Vista%20Elevalo",
  emailLabel: "hola@elevalo.digital"
};

export const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Ejemplos", href: "#ejemplos" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" }
];

export const credibility = [
  "Mockup primero",
  "Enfoque PR",
  "WhatsApp + QR",
  "Setup documentado"
];

export const services = [
  {
    title: "Website sencillo",
    text: "Una página clara con servicios, ubicación, horarios y llamadas a la acción.",
    icon: Globe2
  },
  {
    title: "Menú o QR digital",
    text: "QR codes para menús, formularios, WhatsApp, reviews o páginas de negocio.",
    icon: QrCode
  },
  {
    title: "Google Business",
    text: "Cleanup básico para que el perfil tenga mejores fotos, servicios, links y horarios.",
    icon: SearchCheck
  },
  {
    title: "WhatsApp directo",
    text: "Botones y rutas de contacto para que el cliente escriba o llame sin perderse.",
    icon: MessageCircle
  },
  {
    title: "Dominio y correo",
    text: "Orientación y configuración básica para que el negocio se vea más profesional.",
    icon: Mail
  },
  {
    title: "Mantenimiento",
    text: "Cambios pequeños, revisión de links, QR checks y actualizaciones mensuales.",
    icon: Wrench
  }
];

export const demos = [
  {
    id: "barberia",
    label: "Barbería / salón",
    icon: Store,
    title: "Página de citas y servicios",
    subtitle: "Para negocios que viven de fotos, reputación y contacto rápido.",
    bullets: ["Servicios y precios", "Galería de trabajos", "Botón de cita por WhatsApp"],
    accent: "coral"
  },
  {
    id: "restaurante",
    label: "Restaurante / café",
    icon: QrCode,
    title: "Menú digital con QR",
    subtitle: "Ideal para barras, cafeterías, food trucks y restaurantes pequeños.",
    bullets: ["Menú desde el celular", "Horario y ubicación", "Link para reviews"],
    accent: "gold"
  },
  {
    id: "servicios",
    label: "Contratista / servicios",
    icon: BriefcaseBusiness,
    title: "Estimados y áreas de servicio",
    subtitle: "Para técnicos, handymen, detailers y proveedores locales.",
    bullets: ["Fotos de trabajos", "Formulario de estimado", "Área de servicio clara"],
    accent: "green"
  }
];

export const packages = [
  {
    name: "Vista Elevalo",
    price: "$100",
    note: "Se acredita al setup completo",
    icon: Sparkles,
    features: ["Preview de homepage", "Vista móvil básica", "1 ajuste pequeño"]
  },
  {
    name: "Página Básica",
    price: "$250-$400",
    note: "Primeros clientes",
    icon: FileText,
    features: ["Website de una página", "WhatsApp + formulario", "QR hacia la página"]
  },
  {
    name: "Elevalo Digital",
    price: "$500-$900",
    note: "Presencia completa",
    icon: BadgeCheck,
    features: ["Dominio/correo orientado", "Google Business cleanup", "SEO local básico"]
  },
  {
    name: "Menú QR",
    price: "$100-$300",
    note: "Restaurantes y cafés",
    icon: QrCode,
    features: ["Menú digital", "QR listo para imprimir", "Reviews y contacto"]
  }
];

export const processSteps = [
  {
    title: "Envías la info",
    text: "Nombre del negocio, servicios, pueblo, redes, fotos y estilo deseado.",
    icon: ClipboardList
  },
  {
    title: "Creamos el mockup",
    text: "Se prepara una vista previa visual basada en tu negocio y tus objetivos.",
    icon: MousePointerClick
  },
  {
    title: "Revisas el estilo",
    text: "Incluye una ronda pequeña de ajustes para afinar la dirección.",
    icon: CalendarCheck
  },
  {
    title: "Publicamos si te gusta",
    text: "El pago del mockup se acredita al setup completo.",
    icon: CheckCircle2
  }
];

export const faqs = [
  {
    question: "El mockup es el website completo?",
    answer:
      "No. El mockup es una vista previa visual. Si te gusta, podemos continuar con el setup completo y aplicar los $100 al costo final."
  },
  {
    question: "Qué necesito enviar?",
    answer:
      "Nombre del negocio, servicios, teléfono o WhatsApp, pueblo, redes sociales, fotos o logo si tienes, colores y estilo deseado."
  },
  {
    question: "Incluye Google Business?",
    answer:
      "Puede incluir setup o cleanup básico según el paquete. La meta es que la información importante esté clara y conectada al website."
  },
  {
    question: "Incluye mantenimiento?",
    answer:
      "El mantenimiento mensual es opcional. Puede cubrir cambios pequeños, QR checks, actualizaciones de menú, fotos, texto y pruebas de formulario."
  }
];

export const promises = [
  {
    title: "Contacto más fácil",
    icon: Smartphone
  },
  {
    title: "Perfil local más claro",
    icon: MapPin
  },
  {
    title: "Presentación profesional",
    icon: Star
  },
  {
    title: "Setup protegido",
    icon: ShieldCheck
  }
];

export { ExternalLink };
