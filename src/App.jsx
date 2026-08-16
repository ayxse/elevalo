import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Facebook,
  Globe2,
  Instagram,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  Palette,
  Rocket,
  Send,
  UploadCloud,
  X
} from "lucide-react";
import elevaloLogo from "./assets/elevalo-logo.png";
import martinsCalidad from "./assets/previews/calidad-scroll.jpg";
import martinsInicio from "./assets/previews/inicio-scroll.jpg";
import martinsReceta from "./assets/previews/receta-scroll.jpg";
import martinsUbicaciones from "./assets/previews/ubicaciones-scroll.jpg";

const martinsPreviewUrl = "https://ayxse.github.io/MartinsPizza/#";

const martinsSections = [
  { label: "Inicio", image: martinsInicio },
  { label: "Calidad", image: martinsCalidad },
  { label: "Receta", image: martinsReceta },
  { label: "Ubicación", image: martinsUbicaciones }
];

const finalProducts = [
  {
    name: "Martin's Pizza Palace",
    url: martinsPreviewUrl,
    screenshots: martinsSections
  }
];

const requestEndpoint = import.meta.env.VITE_REQUEST_ENDPOINT;

const copy = {
  es: {
    nav: {
      services: "Servicios",
      projects: "Proyectos",
      prices: "Precios",
      process: "Cómo funciona",
      cta: "Pedir mi página",
      allServices: "Ver todos los servicios",
      serviceMenuTitle: "Tu presencia visual empieza en la web",
      serviceMenuText: "Página web, identidad y piezas promocionales con una misma dirección.",
      language: "Español",
      spanish: "Español",
      english: "English",
      languageLabel: "Seleccionar idioma",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      label: "Principal",
      toggle: "Cambiar a inglés"
    },
    hero: {
      titleStart: "Ve tu página web ",
      titleEmphasis: "gratis antes de pagar.",
      subtitle:
        "Cuéntanos qué hace tu negocio y preparamos una primera muestra visual sin costo. Si te gusta la dirección, eliges el paquete y continuamos con la página final.",
      primary: "Pedir vista gratis",
      secondary: "Cómo funciona"
    },
    logoContext: "Tu página, conectada con lo que ya usas.",
    proofLabel: "Conexiones disponibles para tu página",
    connections: [
      { name: "WhatsApp", text: "Mensajes directos" },
      { name: "Google Maps", text: "Cómo llegar" },
      { name: "Instagram", text: "Tu perfil social" },
      { name: "Facebook", text: "Presencia local" },
      { name: "Correo", text: "Contacto profesional" },
      { name: "Reservas", text: "Citas y solicitudes" }
    ],
    process: {
      label: "Cómo funciona.",
      title: "Tu página empieza con una muestra real.",
      text:
        "Nos cuentas qué hace tu negocio y preparamos una primera dirección visual para que puedas evaluar el estilo y la estructura antes de contratar el proyecto completo.",
      steps: [
        {
          title: "Completas el formulario",
          text:
            "Envías el nombre del negocio, servicios, estilo, pueblo y el objetivo principal de la página."
        },
        {
          title: "Recibes una dirección visual",
          text:
            "Preparamos una muestra con tus detalles para que puedas revisar el estilo, la estructura y el mensaje."
        },
        {
          title: "Eliges cómo quieres continuar",
          text:
            "Si te gusta la dirección, eliges la página web o un paquete con identidad visual y comenzamos la entrega final."
        }
      ]
    },
    tools: {
      title: "Todo empieza con una buena página web.",
      text:
        "Elevalo diseña la página como el centro de tu presencia digital. Cuando haga falta, añadimos el logo y las piezas visuales para presentar el negocio con consistencia.",
      cards: [
        {
          title: "Página web",
          text: "Una experiencia clara para explicar tus servicios y convertir visitas en llamadas o mensajes."
        },
        {
          title: "Logo e identidad",
          text: "Logo nuevo o renovado, colores y tipografía para que todo el negocio se vea conectado."
        },
        {
          title: "Diseños promocionales",
          text: "Gráficas para anuncios, ofertas, redes y lanzamientos que siguen el estilo de tu página."
        },
        {
          title: "Listo para lanzar",
          text: "Dominio, formularios y puntos de contacto revisados para publicar con confianza."
        }
      ]
    },
    showcase: {
      aria: "Producto final de muestra",
      label: "Resultado listo para revisar",
      title: "Una página real, no una maqueta genérica.",
      textBefore: "Así presentamos el sabor, la historia y las ubicaciones de",
      textAfter: "en una experiencia lista para compartir antes de aprobar.",
      pill: "Proyecto de muestra",
      cta: "Ver página web",
      marqueeLabel: "Capturas de",
      openLabel: "Abrir página web de",
      imageAlt: "sección"
    },
    pricing: {
      title: "Un punto de partida que respeta tu negocio.",
      text: "Los proyectos web comienzan en $350. Algunas plazas de portafolio pueden recibir una tarifa especial según el alcance.",
      packages: [
        {
          name: "Vista inicial",
          price: "$0",
          text: "Preparamos una primera dirección visual con la información de tu negocio.",
          bullets: ["Formulario del proyecto", "Dirección de estilo", "Muestra para evaluar"]
        },
        {
          name: "Página web",
          price: "Desde $350",
          text: "Una página profesional diseñada alrededor de la información y los objetivos de tu negocio.",
          bullets: ["Diseño para celular y computadora", "Contenido principal organizado", "Contacto y publicación"]
        },
        {
          name: "Página + identidad",
          price: "Desde $650",
          text: "La página web junto a una identidad visual sencilla para presentar el negocio con consistencia.",
          bullets: ["Todo lo incluido en la página", "Logo nuevo o renovado", "Colores, tipografía y perfil social"]
        }
      ],
      addOnTitle: "Para lanzar con una imagen completa",
      addOnQuote: "La página puede ser el centro de una identidad que también funcione en redes, promociones y anuncios.",
      addOnText:
        "Estos servicios se cotizan según la cantidad de piezas, las revisiones y el alcance del proyecto.",
      addOns: [
        {
          title: "Logo e identidad visual",
          text: "Logo principal, versiones útiles, paleta de colores, tipografía y guía visual breve."
        },
        {
          title: "Gráficas promocionales",
          text: "Piezas para ofertas, anuncios digitales, eventos, lanzamientos o contenido de redes."
        },
        {
          title: "Apoyo después del lanzamiento",
          text: "Actualizaciones de la página, nuevas secciones y piezas visuales cuando el negocio cambie."
        }
      ]
    },
    contact: {
      label: "Solicitud de proyecto",
      title: "Cuéntanos qué necesita tu negocio.",
      text:
        "Comparte el contexto de tu página, logo o piezas promocionales. Usaremos esa información para recomendarte un alcance claro y preparar la primera dirección visual.",
      cta: "Contar mi proyecto",
      cardLabel: "Qué vas a compartir",
      cardTitle: "Página, identidad y materiales en un solo lugar.",
      cardText:
        "La solicitud organiza lo que ya tienes y lo que todavía necesitas para definir el proyecto correcto.",
      bullets: [
        "Email, teléfono y WhatsApp opcional",
        "Tipo de proyecto, objetivo y área que atiende",
        "Logo, imágenes, referencias y estilo visual"
      ],
      fields: {
        contactSection: "Contacto",
        businessName: "Nombre del negocio",
        businessPlaceholder: "Ej. Café Local",
        clientEmail: "Email del cliente",
        clientEmailPlaceholder: "tu@email.com",
        phone: "Teléfono",
        phonePlaceholder: "(787) 000-0000",
        useWhatsapp: "Quiero que me contacten por WhatsApp",
        businessSection: "Negocio",
        businessType: "Tipo de negocio",
        businessTypePlaceholder: "Ej. Pizzería, salón de uñas, contratista...",
        businessTypeHint: "Puedes escribir el tipo exacto aunque no salga en la lista.",
        select: "Selecciona una opción",
        projectType: "¿Qué necesitas?",
        projectTypeOptions: [
          "Página web",
          "Página web + logo e identidad",
          "Página web + diseños promocionales",
          "Paquete visual completo",
          "Solo logo o diseño gráfico"
        ],
        businessOptions: [
          "Restaurante / café",
          "Barbería / salón",
          "Contratista / servicio",
          "Tienda / retail",
          "Salud / bienestar",
          "Otro"
        ],
        location: "Pueblo o área que atiende",
        locationPlaceholder: "Ej. Vega Alta, Puerto Rico",
        goal: "Objetivo principal",
        goalOptions: [
          "Presentar el negocio profesionalmente",
          "Recibir llamadas",
          "Recibir reservas o citas",
          "Recibir solicitudes por formulario",
          "Mostrar servicios y precios",
          "Crear o renovar la identidad visual",
          "Promocionar una oferta, evento o lanzamiento"
        ],
        vision: "Visión del negocio",
        visionPlaceholder: "Qué quieres que el negocio represente o hacia dónde quieres llevarlo...",
        mission: "Misión o historia",
        missionPlaceholder: "Qué hacen, a quién ayudan y qué los hace diferentes...",
        contentSection: "Proyecto y dirección",
        services: "Servicios, productos o mensaje principal",
        servicesPlaceholder: "Cuéntanos qué ofrece el negocio. Si necesitas un logo o una promoción, explica qué debe comunicar la pieza...",
        referenceSite: "Página o marca que te guste como referencia",
        referenceSitePlaceholder: "Pega un enlace de una página, marca o estilo visual que te guste...",
        styleNotes: "Estilo que quieres",
        styleNotesPlaceholder: "Moderno, elegante, familiar, minimal, colores favoritos, tono de voz...",
        uploadSection: "Logo, fotos y materiales",
        logo: "Logo actual del negocio",
        images: "Fotos o materiales para el proyecto",
        uploadHint: "Puedes subir el logo actual, fotos del local, productos, equipo, trabajos anteriores, promociones existentes o cualquier imagen que ayude a definir la dirección.",
        details: "Notas adicionales",
        detailsPlaceholder: "Cualquier detalle importante: redes sociales, horarios, links, instrucciones o cosas que quieres evitar..."
      },
      steps: ["Tu negocio", "Tu proyecto", "Materiales"],
      stepLabel: "Paso",
      stepOf: "de",
      next: "Continuar",
      back: "Atrás",
      optional: "Opcional",
      uploadAction: "Selecciona archivos",
      uploadLogoHelp: "PNG, JPG, SVG o PDF",
      uploadImagesHelp: "PNG o JPG · puedes elegir varias",
      selectedFile: "Seleccionado",
      selectedFiles: "archivos seleccionados",
      submit: "Enviar mi proyecto",
      status:
        "Solicitud enviada. Te contactaremos cuando revisemos los detalles.",
      statusSending: "Enviando solicitud y archivos...",
      statusError:
        "No se pudo enviar la solicitud. Inténtalo de nuevo o escríbenos directamente.",
      statusConfig:
        "El formulario está listo, pero falta configurar el endpoint de Firebase."
    },  
    requestPage: {
      back: "Volver a la página principal",
      label: "Detalles del proyecto",
      title: "Todo lo que necesitamos para entender tu proyecto.",
      text:
        "Cuéntanos qué necesita el negocio y comparte el material disponible. Con ese contexto podemos recomendar el alcance y preparar una dirección visual más cercana a lo que tienes en mente.",
      overview: [
        {
          title: "Contacto",
          text: "Email, teléfono y preferencia de WhatsApp para poder dar seguimiento."
        },
        {
          title: "Proyecto",
          text: "Página, identidad, promoción y el objetivo principal que quieres resolver."
        },
        {
          title: "Materiales",
          text: "Logo, fotos, servicios, referencias y notas para construir la dirección visual."
        }
      ]
    },
    pages: {
      services: {
        label: "Servicios",
        title: "Diseñamos la página. Construimos la imagen alrededor de ella.",
        text: "Elevalo es un estudio web para pequeños negocios. La página es el servicio principal; la identidad y las piezas promocionales están disponibles para lanzar todo con una dirección consistente.",
        cards: [
          {
            title: "Página web",
            text: "Una página profesional diseñada para explicar lo que haces y facilitar el próximo paso del cliente.",
            bullets: ["Contenido y servicios organizados", "Experiencia adaptada a celular", "Contacto, ubicación y enlaces"]
          },
          {
            title: "Logo e identidad",
            text: "Una base visual sencilla para que tu página, perfiles y materiales se sientan parte del mismo negocio.",
            bullets: ["Logo nuevo o renovación", "Colores y tipografía", "Versiones para web y perfiles"]
          },
          {
            title: "Diseños promocionales",
            text: "Piezas visuales que llevan la identidad del negocio a promociones, anuncios y redes.",
            bullets: ["Gráficas para ofertas", "Anuncios y contenido social", "Flyers digitales y lanzamientos"]
          },
          {
            title: "Lanzamiento digital",
            text: "Los detalles finales para que la página se publique bien y el negocio pueda compartirla con confianza.",
            bullets: ["Dominio y formulario", "Descripción preparada para Google", "Revisión de enlaces y contacto"]
          }
        ],
        closingTitle: "No necesitas convertirte en una marca enorme para verte profesional.",
        closingText: "Comenzamos con una página clara. Luego añadimos identidad o promoción solamente cuando ayuden a presentar mejor el negocio."
      },
      projects: {
        label: "Proyectos",
        title: "Trabajo que puedes abrir, recorrer y evaluar.",
        text: "Cada muestra usa contenido y objetivos reales para que la decisión no dependa de imaginar el resultado.",
        details: [
          { title: "El reto", text: "Presentar calidad, tradición y ubicaciones sin perder la personalidad del negocio." },
          { title: "La dirección", text: "Una experiencia visual cálida, fácil de recorrer y enfocada en lo que el cliente busca." },
          { title: "El resultado", text: "Una página preparada para celular, lista para compartir, revisar y publicar después de aprobar." }
        ]
      },
      pricing: {
        label: "Precios",
        title: "Una página profesional debe ser una inversión, no una apuesta.",
        text: "Revisas primero una dirección visual y luego eliges el alcance que tenga sentido para tu negocio.",
        faqTitle: "Preguntas antes de empezar"
      },
      process: {
        label: "Cómo funciona",
        title: "De tus detalles a una página que puedes ver antes de pagar.",
        text: "El proceso está diseñado para tomar una decisión con algo real frente a ti, no con promesas abstractas.",
        principles: [
          { title: "Sin pago por adivinar", text: "La primera vista te deja evaluar dirección, contenido y estructura." },
          { title: "Alcance claro", text: "Sabes qué incluye cada etapa y qué extras se cotizan aparte." },
          { title: "Una imagen consistente", text: "La página puede crecer con logo, identidad y piezas promocionales cuando las necesites." }
        ]
      },
      faqs: [
        { question: "¿La muestra es gratis?", answer: "Sí. Preparamos una primera dirección visual con la información que compartas para que puedas evaluar el estilo antes de contratar el proyecto completo." },
        { question: "¿Tienen tarifa de portafolio?", answer: "Durante el lanzamiento aceptaremos hasta tres proyectos seleccionados desde $250. La tarifa depende de que el alcance sea sencillo y de que podamos mostrar el resultado en nuestro portafolio." },
        { question: "¿Cuánto material necesito tener?", answer: "Puedes empezar aunque todavía no tengas logo o fotos profesionales. Usaremos lo disponible y te indicaremos qué ayudaría a mejorar el resultado." },
        { question: "¿La página se verá bien en celular?", answer: "Sí. El diseño se prepara para funcionar correctamente en celular, tableta y computadora." },
        { question: "¿También pueden crear mi logo o anuncios?", answer: "Sí. Podemos crear o renovar el logo y diseñar piezas promocionales. Diseñamos las gráficas, pero no administramos campañas publicitarias ni redes sociales." }
      ],
      footer: {
        text: "Páginas claras para negocios listos para verse mejor en línea.",
        explore: "Explora",
        services: "Servicios",
        contact: "Contacto",
        rights: "Todos los derechos reservados."
      }
    },
    preview: {
      aria: "Vista previa del servicio",
      path: "elevalo.digital/proceso",
      status: "Muestra en revisión",
      floaters: ["Servicios", "Estilo", "Contacto", "Logo", "Promoción", "Fotos"],
      requestLabel: "1. Solicitud",
      requestTitle: "Detalles del negocio",
      requestText: "Nombre, servicios, estilo, pueblo, fotos y objetivo principal.",
      previewLabel: "2. Muestra web",
      previewTitle: "Una página web lista para revisar",
      approvalLabel: "3. Aprobación",
      approvalTitle: "Eliges cómo continuar",
      approvalPrice: "Desde $350",
      approvalText: "Página web, identidad o un lanzamiento visual más completo."
    }
  },
  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      prices: "Pricing",
      process: "How it works",
      cta: "Request my website",
      allServices: "View all services",
      serviceMenuTitle: "Your visual presence starts on the web",
      serviceMenuText: "Website, identity, and promotional pieces with one direction.",
      language: "English",
      spanish: "Español",
      english: "English",
      languageLabel: "Select language",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      label: "Main",
      toggle: "Switch to Spanish"
    },
    hero: {
      titleStart: "See your website ",
      titleEmphasis: "for free before you pay.",
      subtitle:
        "Tell us what your business does and we will prepare an initial visual preview at no cost. If you like the direction, choose a package and we will build the final website.",
      primary: "Request free preview",
      secondary: "How it works"
    },
    logoContext: "Your website, connected to the tools you already use.",
    proofLabel: "Connections available for your website",
    connections: [
      { name: "WhatsApp", text: "Direct messages" },
      { name: "Google Maps", text: "Directions" },
      { name: "Instagram", text: "Your social profile" },
      { name: "Facebook", text: "Local presence" },
      { name: "Email", text: "Professional contact" },
      { name: "Bookings", text: "Appointments and requests" }
    ],
    process: {
      label: "How it works.",
      title: "Your website starts with a real preview.",
      text:
        "Tell us what your business does and we will prepare an initial visual direction so you can evaluate the style and structure before hiring the complete project.",
      steps: [
        {
          title: "You complete the form",
          text: "Send the business name, services, style, town, and the main goal for the page."
        },
        {
          title: "You receive a visual direction",
          text:
            "We prepare a preview with your details so you can review the style, structure, and message."
        },
        {
          title: "You choose how to continue",
          text:
            "If you like the direction, choose the website or a package with visual identity and we begin the final delivery."
        }
      ]
    },
    tools: {
      title: "Everything starts with a strong website.",
      text:
        "Elevalo designs the website as the center of your digital presence. When needed, we add the logo and visual pieces that help the business present itself consistently.",
      cards: [
        {
          title: "Website",
          text: "A clear experience that explains your services and turns visits into calls or messages."
        },
        {
          title: "Logo and identity",
          text: "A new or refreshed logo, colors, and typography that connect every part of the business."
        },
        {
          title: "Promotional design",
          text: "Graphics for ads, offers, social media, and launches that match the website."
        },
        {
          title: "Ready to launch",
          text: "Domain, forms, and contact paths checked so you can publish with confidence."
        }
      ]
    },
    showcase: {
      aria: "Sample final product",
      label: "Ready to review",
      title: "A real page, not a generic mockup.",
      textBefore: "This is how we present the flavor, story, and locations of",
      textAfter: "in an experience ready to share before approval.",
      pill: "Sample project",
      cta: "View website",
      marqueeLabel: "Screenshots of",
      openLabel: "Open website for",
      imageAlt: "section"
    },
    pricing: {
      title: "A starting point that respects your business.",
      text: "Website projects start at $350. A limited number of portfolio projects may receive a special rate depending on scope.",
      packages: [
        {
          name: "Initial preview",
          price: "$0",
          text: "We prepare an initial visual direction using your business information.",
          bullets: ["Project brief", "Style direction", "Preview to evaluate"]
        },
        {
          name: "Website",
          price: "From $350",
          text: "A professional website designed around your business information and goals.",
          bullets: ["Phone and desktop design", "Organized core content", "Contact and publishing"]
        },
        {
          name: "Website + identity",
          price: "From $650",
          text: "The website plus a simple visual identity so the business presents itself consistently.",
          bullets: ["Everything in the website", "New or refreshed logo", "Colors, type, and social profile"]
        }
      ],
      addOnTitle: "Launch with a complete visual presence",
      addOnQuote: "The website can become the center of an identity that also works across social media, promotions, and ads.",
      addOnText:
        "These services are quoted according to the number of pieces, revision rounds, and project scope.",
      addOns: [
        {
          title: "Logo and visual identity",
          text: "Primary logo, useful variations, color palette, typography, and a short visual guide."
        },
        {
          title: "Promotional graphics",
          text: "Designs for offers, digital ads, events, launches, or social content."
        },
        {
          title: "Post-launch support",
          text: "Website updates, new sections, and visual pieces as the business changes."
        }
      ]
    },
    contact: {
      label: "Project request",
      title: "Tell us what your business needs.",
      text:
        "Share the context for your website, logo, or promotional pieces. We will use it to recommend a clear scope and prepare the initial visual direction.",
      cta: "Tell us about my project",
      cardLabel: "What you will share",
      cardTitle: "Website, identity, and materials in one place.",
      cardText:
        "The request organizes what you already have and what you still need so we can define the right project.",
      bullets: [
        "Email, phone, and optional WhatsApp",
        "Project type, main goal, and service area",
        "Logo, images, references, and visual style"
      ],
      fields: {
        contactSection: "Contact",
        businessName: "Business name",
        businessPlaceholder: "Ex. Local Cafe",
        clientEmail: "Client email",
        clientEmailPlaceholder: "you@email.com",
        phone: "Phone",
        phonePlaceholder: "(787) 000-0000",
        useWhatsapp: "I want to be contacted by WhatsApp",
        businessSection: "Business",
        businessType: "Business type",
        businessTypePlaceholder: "Ex. Pizza shop, nail salon, contractor...",
        businessTypeHint: "You can type the exact business type even if it is not listed.",
        select: "Select an option",
        projectType: "What do you need?",
        projectTypeOptions: [
          "Website",
          "Website + logo and identity",
          "Website + promotional design",
          "Complete visual package",
          "Logo or graphic design only"
        ],
        businessOptions: [
          "Restaurant / cafe",
          "Barbershop / salon",
          "Contractor / service",
          "Retail shop",
          "Health / wellness",
          "Other"
        ],
        location: "Town or service area",
        locationPlaceholder: "Ex. Vega Alta, Puerto Rico",
        goal: "Main goal",
        goalOptions: [
          "Present the business professionally",
          "Receive calls",
          "Receive bookings or appointments",
          "Receive form requests",
          "Show services and prices",
          "Create or refresh the visual identity",
          "Promote an offer, event, or launch"
        ],
        vision: "Business vision",
        visionPlaceholder: "What you want the business to represent or where you want to take it...",
        mission: "Mission or story",
        missionPlaceholder: "What you do, who you help, and what makes you different...",
        contentSection: "Project and direction",
        services: "Services, products, or main message",
        servicesPlaceholder: "Tell us what the business offers. If you need a logo or promotion, explain what the piece should communicate...",
        referenceSite: "Website or brand you like as a reference",
        referenceSitePlaceholder: "Paste a link to a website, brand, or visual style you like...",
        styleNotes: "Style you want",
        styleNotesPlaceholder: "Modern, elegant, familiar, minimal, favorite colors, tone of voice...",
        uploadSection: "Logo, photos, and materials",
        logo: "Current business logo",
        images: "Photos or materials for the project",
        uploadHint: "Upload the current logo, storefront photos, products, team photos, previous work, existing promotions, or any image that helps define the direction.",
        details: "Additional notes",
        detailsPlaceholder: "Anything important: social media, hours, links, instructions, or things you want to avoid..."
      },
      steps: ["Your business", "Your project", "Assets"],
      stepLabel: "Step",
      stepOf: "of",
      next: "Continue",
      back: "Back",
      optional: "Optional",
      uploadAction: "Choose files",
      uploadLogoHelp: "PNG, JPG, SVG, or PDF",
      uploadImagesHelp: "PNG or JPG · select more than one",
      selectedFile: "Selected",
      selectedFiles: "files selected",
      submit: "Send my project",
      status:
        "Request sent. We will contact you after reviewing the details.",
      statusSending: "Sending request and files...",
      statusError:
        "The request could not be sent. Please try again or contact us directly.",
      statusConfig:
        "The form is ready, but the Firebase endpoint still needs to be configured."
    },
    requestPage: {
      back: "Back to main page",
      label: "Project brief",
      title: "Everything we need to understand your project.",
      text:
        "Tell us what the business needs and share any available materials. That context helps us recommend the right scope and prepare a visual direction closer to what you have in mind.",
      overview: [
        {
          title: "Contact",
          text: "Email, phone, and WhatsApp preference so we can follow up."
        },
        {
          title: "Project",
          text: "Website, identity, promotion, and the main goal you want to solve."
        },
        {
          title: "Materials",
          text: "Logo, photos, services, references, and notes to build the visual direction."
        }
      ]
    },
    pages: {
      services: {
        label: "Services",
        title: "We design the website. We build the visual presence around it.",
        text: "Elevalo is a web studio for small businesses. The website is the primary service; identity and promotional pieces are available to launch everything with one consistent direction.",
        cards: [
          {
            title: "Website",
            text: "A professional website designed to explain what you do and make the customer's next step easy.",
            bullets: ["Organized content and services", "Designed for phones", "Contact, location, and links"]
          },
          {
            title: "Logo and identity",
            text: "A simple visual foundation that makes your website, profiles, and materials feel like one business.",
            bullets: ["New or refreshed logo", "Colors and typography", "Versions for web and profiles"]
          },
          {
            title: "Promotional design",
            text: "Visual pieces that carry the business identity into promotions, ads, and social media.",
            bullets: ["Offer graphics", "Ads and social content", "Digital flyers and launches"]
          },
          {
            title: "Digital launch",
            text: "The final details needed to publish the website correctly and share it with confidence.",
            bullets: ["Domain and form", "Google-ready description", "Contact and link review"]
          }
        ],
        closingTitle: "You do not need to become a huge brand to look professional.",
        closingText: "We start with a clear website. Then we add identity or promotion only when it helps present the business better."
      },
      projects: {
        label: "Projects",
        title: "Work you can open, explore, and evaluate.",
        text: "Every sample uses real content and goals so the decision does not depend on imagining the result.",
        details: [
          { title: "The challenge", text: "Present quality, tradition, and locations without losing the personality of the business." },
          { title: "The direction", text: "A warm visual experience that is easy to explore and focused on what customers need." },
          { title: "The result", text: "A phone-ready website prepared to share, review, and publish after approval." }
        ]
      },
      pricing: {
        label: "Pricing",
        title: "A professional website should be an investment, not a gamble.",
        text: "Review a visual direction first, then choose the scope that makes sense for your business.",
        faqTitle: "Questions before you start"
      },
      process: {
        label: "How it works",
        title: "From your details to a page you can see before you pay.",
        text: "The process helps you make a decision with something real in front of you, not abstract promises.",
        principles: [
          { title: "No paying for a guess", text: "The first view lets you evaluate direction, content, and structure." },
          { title: "Clear scope", text: "You know what each stage includes and which extras are quoted separately." },
          { title: "A consistent identity", text: "The website can grow with a logo, visual identity, and promotional pieces when you need them." }
        ]
      },
      faqs: [
        { question: "Is the preview free?", answer: "Yes. We prepare an initial visual direction using the information you share so you can evaluate the style before hiring the complete project." },
        { question: "Do you offer a portfolio rate?", answer: "During launch, we will accept up to three selected projects starting at $250. The scope must be simple and we must be able to feature the finished work in our portfolio." },
        { question: "How much material do I need?", answer: "You can begin even if you do not have a logo or professional photos yet. We will use what is available and explain what would improve the result." },
        { question: "Will the page work on mobile?", answer: "Yes. The design is prepared to work properly on phones, tablets, and computers." },
        { question: "Can you also create my logo or ads?", answer: "Yes. We can create or refresh the logo and design promotional graphics. We design the creative pieces, but we do not manage advertising campaigns or social media accounts." }
      ],
      footer: {
        text: "Clear websites for businesses ready to look better online.",
        explore: "Explore",
        services: "Services",
        contact: "Contact",
        rights: "All rights reserved."
      }
    },
    preview: {
      aria: "Service preview",
      path: "elevalo.digital/process",
      status: "Sample in review",
      floaters: ["Services", "Style", "Contact", "Logo", "Promotions", "Photos"],
      requestLabel: "1. Request",
      requestTitle: "Business details",
      requestText: "Name, services, style, town, photos, and main goal.",
      previewLabel: "2. Web sample",
      previewTitle: "A landing page ready to review",
      approvalLabel: "3. Approval",
      approvalTitle: "Choose how to continue",
      approvalPrice: "From $350",
      approvalText: "Website, identity, or a more complete visual launch."
    }
  }
};

const toolIcons = [Globe2, Palette, Megaphone, Rocket];

const connectionIcons = [MessageCircle, MapPin, Instagram, Facebook, Mail, CalendarDays];
const connectionIds = ["whatsapp", "maps", "instagram", "facebook", "email", "bookings"];

const serviceRouteIds = ["servicios-web", "servicios-identidad", "servicios-promocionales", "servicios-lanzamiento"];

function getInitialLanguage() {
  if (typeof window === "undefined") return "es";
  const savedLanguage = window.localStorage.getItem("elevalo-language");
  if (savedLanguage === "es" || savedLanguage === "en") return savedLanguage;
  return window.navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
}

function getPageFromRoute(route) {
  if (route === "#solicitud") return "request";
  if (route.startsWith("#servicios")) return "services";
  if (route === "#proyectos") return "projects";
  if (route === "#precios") return "pricing";
  if (route === "#proceso") return "process";
  return "home";
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [activeStep, setActiveStep] = useState(null);
  const [route, setRoute] = useState(() => (typeof window === "undefined" ? "" : window.location.hash));
  const t = copy[language];
  const page = getPageFromRoute(route);

  useEffect(() => {
    function handleHashChange() {
      setRoute(window.location.hash);
      setMenuOpen(false);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("elevalo-language", language);
  }, [language]);

  useEffect(() => {
    const serviceTarget = serviceRouteIds.includes(route.slice(1)) ? route.slice(1) : null;
    window.requestAnimationFrame(() => {
      if (serviceTarget) {
        document.getElementById(serviceTarget)?.scrollIntoView({ block: "start" });
        return;
      }
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  }, [route]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!requestEndpoint) {
      setSubmitStatus("config");
      return;
    }

    setSubmitStatus("submitting");

    try {
      const response = await fetch(requestEndpoint, {
        method: "POST",
        body: new FormData(event.currentTarget)
      });

      if (!response.ok) throw new Error(`Request failed with ${response.status}`);

      event.currentTarget.reset();
      setSubmitStatus("success");
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    }
  }

  const frameProps = {
    language,
    menuOpen,
    onLanguageSelect: setLanguage,
    page,
    setMenuOpen,
    t
  };

  let content;
  if (page === "request") {
    content = <RequestPage onSubmit={handleSubmit} submitStatus={submitStatus} t={t} />;
  } else if (page === "services") {
    content = <ServicesPage t={t} />;
  } else if (page === "projects") {
    content = <ProjectsPage t={t} />;
  } else if (page === "pricing") {
    content = <PricingPage t={t} />;
  } else if (page === "process") {
    content = <ProcessPage activeStep={activeStep} setActiveStep={setActiveStep} t={t} />;
  } else {
    content = <HomePage activeStep={activeStep} setActiveStep={setActiveStep} t={t} />;
  }

  return (
    <SiteFrame {...frameProps}>
      {content}
    </SiteFrame>
  );
}

function SiteFrame({ children, language, menuOpen, onLanguageSelect, page, setMenuOpen, t }) {
  return (
    <div className={`site-shell page-${page}`} lang={language}>
      <SiteHeader
        language={language}
        menuOpen={menuOpen}
        onLanguageSelect={onLanguageSelect}
        page={page}
        setMenuOpen={setMenuOpen}
        t={t}
      />
      {children}
      <SiteFooter t={t} />
    </div>
  );
}

function HomePage({ activeStep, setActiveStep, t }) {
  return (
    <main>
      <section className="hero-section" id="inicio">
        <span
          className="hero-brand-symbol"
          style={{ "--symbol-url": `url(${elevaloLogo})` }}
          aria-hidden="true"
        />
        <h1>
          {t.hero.titleStart}
          <em>{t.hero.titleEmphasis}</em>
        </h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <div className="hero-actions">
          <a href="#solicitud" className="primary-button">{t.hero.primary}</a>
          <a href="#proceso" className="secondary-button">{t.hero.secondary}</a>
        </div>
      </section>

      <HeroProductPreview copy={t.preview} />

      <section className="logo-context" aria-label={t.logoContext}>
        <p>{t.logoContext}</p>
      </section>
      <section className="connection-strip" aria-label={t.proofLabel}>
        <div className="connection-grid">
          {t.connections.map((item, index) => {
            const Icon = connectionIcons[index];
            return (
              <article className={`connection-item ${connectionIds[index]}`} key={item.name}>
                <span className="connection-icon" aria-hidden="true"><Icon /></span>
                <span className="connection-copy">
                  <strong>{item.name}</strong>
                  <small>{item.text}</small>
                </span>
              </article>
            );
          })}
        </div>
      </section>

      <ProcessSection activeStep={activeStep} setActiveStep={setActiveStep} t={t} />

      <section className="tools-section" id="producto">
        <div className="section-heading">
          <h2>{t.tools.title}</h2>
          <p>{t.tools.text}</p>
        </div>
        <div className="tool-grid">
          {t.tools.cards.map((tool, index) => {
            const Icon = toolIcons[index];
            return (
              <article className="tool-card" key={tool.title}>
                <Icon />
                <h3>{tool.title}</h3>
                <p>{tool.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <FinalProductShowcase product={finalProducts[0]} copy={t.showcase} />
      <PricingSection t={t} />

      <section className="contact-section" id="contacto">
        <div className="contact-copy">
          <span className="section-label">{t.contact.label}</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
        </div>
        <div className="contact-brief-card">
          <span>{t.contact.cardLabel}</span>
          <h3>{t.contact.cardTitle}</h3>
          <p>{t.contact.cardText}</p>
          <ul>
            {t.contact.bullets.map((bullet) => (
              <li key={bullet}><CheckCircle2 />{bullet}</li>
            ))}
          </ul>
          <a className="contact-request-link" href="#solicitud">{t.contact.cta}<Send /></a>
        </div>
      </section>
    </main>
  );
}

function ProcessSection({ activeStep, setActiveStep, t }) {
  return (
    <section className="how-section" id="proceso-resumen">
      <div className="how-copy">
        <span className="section-label">{t.process.label}</span>
        <h2>{t.process.title}</h2>
        <p>{t.process.text}</p>
      </div>
      <div className="step-list">
        {t.process.steps.map((step, index) => (
          <article
            className={index === activeStep ? "step-row active" : "step-row"}
            key={step.title}
            onFocus={() => setActiveStep(index)}
            onBlur={() => setActiveStep(null)}
            onMouseEnter={() => setActiveStep(index)}
            onMouseLeave={() => setActiveStep(null)}
            tabIndex="0"
          >
            <span>{index + 1}</span>
            <div><h3>{step.title}</h3><p>{step.text}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PricingSection({ t }) {
  return (
    <section className="pricing-section" id="paquetes">
      <div className="section-heading"><h2>{t.pricing.title}</h2><p>{t.pricing.text}</p></div>
      <div className="pricing-grid">
        {t.pricing.packages.map((item) => (
          <article className="pricing-card" key={item.name}>
            <h3>{item.name}</h3><strong>{item.price}</strong><p>{item.text}</p>
            <ul>{item.bullets.map((bullet) => <li key={bullet}><CheckCircle2 />{bullet}</li>)}</ul>
          </article>
        ))}
      </div>
      <div className="addon-panel">
        <div><span>{t.pricing.addOnTitle}</span><strong>{t.pricing.addOnQuote}</strong><p>{t.pricing.addOnText}</p></div>
        <div className="addon-list">
          {t.pricing.addOns.map((item) => <article className="addon-item" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </div>
    </section>
  );
}

function ServicesPage({ t }) {
  return (
    <main className="interior-page">
      <section className="interior-hero">
        <span className="section-label">{t.pages.services.label}</span>
        <h1>{t.pages.services.title}</h1>
        <p>{t.pages.services.text}</p>
        <div className="hero-actions">
          <a href="#solicitud" className="primary-button">{t.nav.cta}</a>
          <a href="#proyectos" className="secondary-button">{t.nav.projects}</a>
        </div>
      </section>
      <section className="service-detail-grid" aria-label={t.pages.services.label}>
        {t.pages.services.cards.map((card, index) => {
          const Icon = toolIcons[index];
          return (
            <article className="service-detail-card" id={serviceRouteIds[index]} key={card.title}>
              <span className="service-card-icon"><Icon /></span>
              <div><span className="card-number">0{index + 1}</span><h2>{card.title}</h2><p>{card.text}</p></div>
              <ul>{card.bullets.map((bullet) => <li key={bullet}><CheckCircle2 />{bullet}</li>)}</ul>
            </article>
          );
        })}
      </section>
      <section className="closing-cta">
        <div><span className="section-label">Elevalo</span><h2>{t.pages.services.closingTitle}</h2><p>{t.pages.services.closingText}</p></div>
        <a className="primary-button" href="#solicitud">{t.nav.cta}<ArrowRight /></a>
      </section>
    </main>
  );
}

function ProjectsPage({ t }) {
  return (
    <main className="interior-page projects-page">
      <section className="interior-hero">
        <span className="section-label">{t.pages.projects.label}</span>
        <h1>{t.pages.projects.title}</h1>
        <p>{t.pages.projects.text}</p>
      </section>
      <section className="project-detail-strip">
        {t.pages.projects.details.map((detail, index) => (
          <article key={detail.title}><span>0{index + 1}</span><h2>{detail.title}</h2><p>{detail.text}</p></article>
        ))}
      </section>
      <FinalProductShowcase product={finalProducts[0]} copy={t.showcase} />
      <section className="closing-cta compact-cta">
        <div><span className="section-label">{t.contact.label}</span><h2>{t.process.title}</h2></div>
        <a className="primary-button" href="#solicitud">{t.nav.cta}<ArrowRight /></a>
      </section>
    </main>
  );
}

function PricingPage({ t }) {
  return (
    <main className="interior-page pricing-page">
      <section className="interior-hero">
        <span className="section-label">{t.pages.pricing.label}</span>
        <h1>{t.pages.pricing.title}</h1>
        <p>{t.pages.pricing.text}</p>
      </section>
      <PricingSection t={t} />
      <FaqSection t={t} title={t.pages.pricing.faqTitle} />
    </main>
  );
}

function ProcessPage({ activeStep, setActiveStep, t }) {
  return (
    <main className="interior-page process-page">
      <section className="interior-hero">
        <span className="section-label">{t.pages.process.label}</span>
        <h1>{t.pages.process.title}</h1>
        <p>{t.pages.process.text}</p>
        <div className="hero-actions"><a href="#solicitud" className="primary-button">{t.nav.cta}</a></div>
      </section>
      <ProcessSection activeStep={activeStep} setActiveStep={setActiveStep} t={t} />
      <section className="principle-grid">
        {t.pages.process.principles.map((principle, index) => (
          <article key={principle.title}><span>0{index + 1}</span><h2>{principle.title}</h2><p>{principle.text}</p></article>
        ))}
      </section>
      <FaqSection t={t} title={t.pages.pricing.faqTitle} />
    </main>
  );
}

function FaqSection({ t, title }) {
  return (
    <section className="faq-section">
      <div><span className="section-label">FAQ</span><h2>{title}</h2></div>
      <div className="faq-list">
        {t.pages.faqs.map((item) => (
          <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>
        ))}
      </div>
    </section>
  );
}

function SiteHeader({ language, menuOpen, onLanguageSelect, page, setMenuOpen, t }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function closeOnOutsideClick(event) {
      if (!headerRef.current?.contains(event.target)) {
        setServicesOpen(false);
        setLanguageOpen(false);
      }
    }
    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setLanguageOpen(false);
        setMenuOpen(false);
      }
    }
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [setMenuOpen]);

  function closeNavigation() {
    setMenuOpen(false);
    setServicesOpen(false);
    setLanguageOpen(false);
  }

  return (
    <header className={scrolled ? "site-header scrolled" : "site-header"} ref={headerRef}>
      <div className="nav-wrap">
        <a className="brand" href="#inicio" aria-label="Elevalo" onClick={closeNavigation}>
          <img className="brand-logo" src={elevaloLogo} alt="" aria-hidden="true" />
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label={t.nav.label}>
          <div className={servicesOpen ? "nav-dropdown open" : "nav-dropdown"}>
            <button
              className={page === "services" ? "nav-dropdown-trigger active" : "nav-dropdown-trigger"}
              type="button"
              aria-expanded={servicesOpen}
              onClick={() => {
                setServicesOpen((value) => !value);
                setLanguageOpen(false);
              }}
            >
              {t.nav.services}<ChevronDown />
            </button>
            <div className="dropdown-panel services-panel">
              <div className="dropdown-intro"><span>{t.nav.serviceMenuTitle}</span><p>{t.nav.serviceMenuText}</p></div>
              <a className="dropdown-all" href="#servicios" onClick={closeNavigation}>{t.nav.allServices}<ArrowRight /></a>
              <div className="dropdown-service-grid">
                {t.pages.services.cards.map((service, index) => {
                  const Icon = toolIcons[index];
                  return (
                    <a href={`#${serviceRouteIds[index]}`} key={service.title} onClick={closeNavigation}>
                      <Icon /><span><strong>{service.title}</strong><small>{service.text}</small></span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <a className={page === "projects" ? "active" : ""} href="#proyectos" onClick={closeNavigation}>{t.nav.projects}</a>
          <a className={page === "pricing" ? "active" : ""} href="#precios" onClick={closeNavigation}>{t.nav.prices}</a>
          <a className={page === "process" ? "active" : ""} href="#proceso" onClick={closeNavigation}>{t.nav.process}</a>
          <a className="mobile-nav-cta" href="#solicitud" onClick={closeNavigation}>{t.nav.cta}<ArrowRight /></a>
        </nav>

        <div className="nav-actions">
          <div className={languageOpen ? "language-menu open" : "language-menu"}>
            <button
              className="language-toggle"
              type="button"
              aria-label={t.nav.languageLabel}
              aria-expanded={languageOpen}
              onClick={() => {
                setLanguageOpen((value) => !value);
                setServicesOpen(false);
              }}
            >
              <Globe2 /><span>{t.nav.language}</span><ChevronDown />
            </button>
            <div className="language-panel" role="menu">
              <button className={language === "es" ? "selected" : ""} type="button" onClick={() => { onLanguageSelect("es"); closeNavigation(); }}>
                <span>ES</span>{t.nav.spanish}{language === "es" && <CheckCircle2 />}
              </button>
              <button className={language === "en" ? "selected" : ""} type="button" onClick={() => { onLanguageSelect("en"); closeNavigation(); }}>
                <span>EN</span>{t.nav.english}{language === "en" && <CheckCircle2 />}
              </button>
            </div>
          </div>
          <a href="#solicitud" className="nav-cta" onClick={closeNavigation}>{t.nav.cta}</a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

function SiteFooter({ t }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><img src={elevaloLogo} alt="Elevalo" /><p>{t.pages.footer.text}</p></div>
        <div><span>{t.pages.footer.explore}</span><a href="#proyectos">{t.nav.projects}</a><a href="#precios">{t.nav.prices}</a><a href="#proceso">{t.nav.process}</a></div>
        <div><span>{t.pages.footer.services}</span>{t.pages.services.cards.map((service, index) => <a href={`#${serviceRouteIds[index]}`} key={service.title}>{service.title}</a>)}</div>
        <div><span>{t.pages.footer.contact}</span><a href="mailto:hola@elevalo.digital">hola@elevalo.digital</a><a href="#solicitud">{t.nav.cta}</a></div>
      </div>
      <div className="footer-bottom"><span>© {year} Elevalo. {t.pages.footer.rights}</span><span>Puerto Rico</span></div>
    </footer>
  );
}

function RequestPage({ onSubmit, submitStatus, t }) {
  return (
    <main className="request-page">
      <section className="request-layout">
        <div className="request-intro">
          <a className="back-link" href="#inicio"><ArrowLeft />{t.requestPage.back}</a>
          <div className="request-kicker">
            <span className="request-brand-symbol" style={{ "--symbol-url": `url(${elevaloLogo})` }} aria-hidden="true" />
            <span className="section-label">{t.requestPage.label}</span>
          </div>
          <h1>{t.requestPage.title}</h1>
          <p>{t.requestPage.text}</p>
          <div className="request-overview">
            {t.requestPage.overview.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}
          </div>
        </div>
        <LeadForm onSubmit={onSubmit} submitStatus={submitStatus} t={t} />
      </section>
    </main>
  );
}

function LeadForm({ onSubmit, submitStatus, t }) {
  const [step, setStep] = useState(0);
  const [logoName, setLogoName] = useState("");
  const [imageCount, setImageCount] = useState(0);
  const formRef = useRef(null);
  const isSubmitting = submitStatus === "submitting";
  const statusMessage = {
    config: t.contact.statusConfig,
    error: t.contact.statusError,
    success: t.contact.status,
    submitting: t.contact.statusSending
  }[submitStatus];

  function advanceStep() {
    const currentPanel = formRef.current?.querySelector(`[data-form-step="${step}"]`);
    const invalidField = [...(currentPanel?.querySelectorAll("input, select, textarea") || [])].find(
      (field) => !field.checkValidity()
    );
    if (invalidField) {
      invalidField.reportValidity();
      return;
    }
    setStep((value) => Math.min(value + 1, 2));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleFormSubmit(event) {
    if (step < 2) {
      event.preventDefault();
      advanceStep();
      return;
    }
    onSubmit(event);
  }

  return (
    <form ref={formRef} className="lead-form" encType="multipart/form-data" onSubmit={handleFormSubmit}>
      <div className="form-progress" aria-label={`${t.contact.stepLabel} ${step + 1} ${t.contact.stepOf} 3`}>
        <div className="progress-copy"><span>{t.contact.stepLabel} {step + 1} {t.contact.stepOf} 3</span><strong>{t.contact.steps[step]}</strong></div>
        <div className="progress-track" aria-hidden="true"><span style={{ width: `${((step + 1) / 3) * 100}%` }} /></div>
        <div className="progress-steps" aria-hidden="true">
          {t.contact.steps.map((item, index) => <span className={index <= step ? "active" : ""} key={item}>{index + 1}<small>{item}</small></span>)}
        </div>
      </div>

      <fieldset className="form-step-panel" data-form-step="0" hidden={step !== 0}>
        <legend>{t.contact.fields.contactSection}</legend>
        <label>{t.contact.fields.businessName}<input type="text" name="businessName" autoComplete="organization" placeholder={t.contact.fields.businessPlaceholder} required /></label>
        <label>{t.contact.fields.clientEmail}<input type="email" name="clientEmail" autoComplete="email" placeholder={t.contact.fields.clientEmailPlaceholder} required /></label>
        <label>{t.contact.fields.phone} <small>{t.contact.optional}</small><input type="tel" name="phone" autoComplete="tel" placeholder={t.contact.fields.phonePlaceholder} /></label>
        <label className="checkbox-field"><input type="checkbox" name="useWhatsapp" /><span>{t.contact.fields.useWhatsapp}</span></label>
        <label>{t.contact.fields.businessType}<input type="text" name="businessType" list="business-type-options" autoComplete="organization-title" placeholder={t.contact.fields.businessTypePlaceholder} required /><small className="field-hint">{t.contact.fields.businessTypeHint}</small></label>
        <datalist id="business-type-options">{t.contact.fields.businessOptions.map((option) => <option key={option} value={option} />)}</datalist>
        <label>{t.contact.fields.location} <small>{t.contact.optional}</small><input type="text" name="location" autoComplete="address-level2" placeholder={t.contact.fields.locationPlaceholder} /></label>
      </fieldset>

      <fieldset className="form-step-panel" data-form-step="1" hidden={step !== 1}>
        <legend>{t.contact.fields.contentSection}</legend>
        <label>{t.contact.fields.projectType}<select name="projectType" defaultValue="" required><option value="" disabled>{t.contact.fields.select}</option>{t.contact.fields.projectTypeOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label>{t.contact.fields.goal}<select name="goal" defaultValue="" required><option value="" disabled>{t.contact.fields.select}</option>{t.contact.fields.goalOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label className="full-field">{t.contact.fields.services}<textarea name="services" rows="5" placeholder={t.contact.fields.servicesPlaceholder} required /></label>
        <label>{t.contact.fields.referenceSite} <small>{t.contact.optional}</small><input type="url" name="referenceSite" placeholder={t.contact.fields.referenceSitePlaceholder} /></label>
        <label>{t.contact.fields.styleNotes} <small>{t.contact.optional}</small><textarea name="styleNotes" rows="4" placeholder={t.contact.fields.styleNotesPlaceholder} /></label>
      </fieldset>

      <fieldset className="form-step-panel" data-form-step="2" hidden={step !== 2}>
        <legend>{t.contact.fields.uploadSection}</legend>
        <p className="upload-note">{t.contact.fields.uploadHint}</p>
        <label className="upload-field">
          <span>{t.contact.fields.logo} <small>{t.contact.optional}</small></span>
          <span className="upload-dropzone"><UploadCloud /><strong>{t.contact.uploadAction}</strong><small>{logoName ? `${t.contact.selectedFile}: ${logoName}` : t.contact.uploadLogoHelp}</small></span>
          <input type="file" name="logo" accept="image/*,.pdf,.svg" onChange={(event) => setLogoName(event.target.files?.[0]?.name || "")} />
        </label>
        <label className="upload-field">
          <span>{t.contact.fields.images} <small>{t.contact.optional}</small></span>
          <span className="upload-dropzone"><UploadCloud /><strong>{t.contact.uploadAction}</strong><small>{imageCount ? `${imageCount} ${t.contact.selectedFiles}` : t.contact.uploadImagesHelp}</small></span>
          <input type="file" name="businessImages" accept="image/*" multiple onChange={(event) => setImageCount(event.target.files?.length || 0)} />
        </label>
        <label>{t.contact.fields.vision} <small>{t.contact.optional}</small><textarea name="vision" rows="3" placeholder={t.contact.fields.visionPlaceholder} /></label>
        <label>{t.contact.fields.mission} <small>{t.contact.optional}</small><textarea name="mission" rows="3" placeholder={t.contact.fields.missionPlaceholder} /></label>
        <label className="full-field">{t.contact.fields.details} <small>{t.contact.optional}</small><textarea name="details" rows="4" placeholder={t.contact.fields.detailsPlaceholder} /></label>
      </fieldset>

      <div className="form-actions">
        {step > 0 && <button className="form-back-button" type="button" onClick={() => setStep((value) => value - 1)}><ArrowLeft />{t.contact.back}</button>}
        {step < 2 ? (
          <button className="form-next-button" type="button" onClick={advanceStep}>{t.contact.next}<ArrowRight /></button>
        ) : (
          <button className="form-submit-button" type="submit" disabled={isSubmitting}>{isSubmitting ? t.contact.statusSending : t.contact.submit}<Send /></button>
        )}
      </div>
      {statusMessage && <p className={`form-status ${submitStatus}`} aria-live="polite">{statusMessage}</p>}
    </form>
  );
}

function FinalProductShowcase({ product, copy }) {
  const marqueeGroups = [0, 1, 2];

  return (
    <section className="final-product-section" aria-label={copy.aria}>
      <article className="recent-work-showcase">
        <div className="final-product-copy">
          <span className="section-label">{copy.label}</span>
          <div>
            <h2>{copy.title}</h2>
            <p>
              {copy.textBefore} {product.name} {copy.textAfter}
            </p>
          </div>
          <div className="final-product-actions">
            <span className="final-product-pill">{copy.pill}</span>
            <a
              className="final-product-link"
              href={product.url}
              target="_blank"
              rel="noreferrer"
            >
              {copy.cta}
              <ExternalLink />
            </a>
          </div>
        </div>

        <div className="recent-sites-marquee" aria-label={`${copy.marqueeLabel} ${product.name}`}>
          <div className="recent-sites-track">
            {marqueeGroups.map((group) => (
              <div
                className="recent-sites-group"
                key={group}
                aria-hidden={group === 0 ? undefined : true}
              >
                {product.screenshots.map((screenshot) => (
                  <a
                    className="recent-site-card"
                    href={product.url}
                    key={`${screenshot.label}-${group}`}
                    rel="noreferrer"
                    target="_blank"
                    tabIndex={group === 0 ? undefined : -1}
                    aria-label={`${copy.openLabel} ${product.name}`}
                  >
                    <img
                      src={screenshot.image}
                      alt={group === 0 ? `${product.name}: ${copy.imageAlt} ${screenshot.label}` : ""}
                      loading={group === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

function HeroProductPreview({ copy }) {
  return (
    <section className="hero-product" aria-label={copy.aria}>
      <div className="hero-product-shell">
        <div className="hero-product-window">
          <div className="preview-browser-bar">
            <div className="browser-dots">
              <span />
              <span />
              <span />
            </div>
            <strong>{copy.path}</strong>
            <span className="preview-status">{copy.status}</span>
          </div>

          <div className="handoff-board">
            <div className="process-floaters" aria-hidden="true">
              {copy.floaters.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <article className="handoff-card request-card">
              <span className="handoff-label">{copy.requestLabel}</span>
              <h3>{copy.requestTitle}</h3>
              <p>{copy.requestText}</p>
            </article>

            <article className="handoff-card preview-card">
              <span className="handoff-label">{copy.previewLabel}</span>
              <h3>{copy.previewTitle}</h3>
              <div className="wireframe-preview" aria-hidden="true">
                <span className="wire-hero" />
                <span className="wire-copy" />
                <span className="wire-copy short" />
                <div>
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </article>

            <article className="handoff-card approval-card">
              <span className="handoff-label">{copy.approvalLabel}</span>
              <h3>{copy.approvalTitle}</h3>
              <div className="approval-price">{copy.approvalPrice}</div>
              <p>{copy.approvalText}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
