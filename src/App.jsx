import { useEffect, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  FileText,
  Globe2,
  Mail,
  Menu,
  SearchCheck,
  Send,
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
      prices: "Precios",
      process: "Proceso",
      cta: "Pedir vista",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      label: "Principal",
      toggle: "Cambiar a inglés"
    },
    hero: {
      titleStart: "Ve cómo se vería tu sitio ",
      titleEmphasis: "antes de pagar",
      subtitle:
        "Nos envías los detalles del negocio, preparamos una página de muestra y, si te gusta, pagas $100 para recibirla lista para usar.",
      primary: "Pedir vista",
      secondary: "Cómo funciona"
    },
    logoContext: "Para negocios de cualquier industria. Construido con herramientas modernas.",
    proofLabel: "Tecnologías que puede usar Elevalo",
    process: {
      label: "Cómo funciona.",
      title: "Primero ves una muestra. Solo pagas si te gusta.",
      text:
        "La idea es que no pagues por adivinar. Usamos tu formulario para crear una página de muestra y luego decides si quieres recibirla.",
      steps: [
        {
          title: "Completas el formulario",
          text:
            "Envías el nombre del negocio, servicios, estilo, pueblo y el objetivo principal de la página."
        },
        {
          title: "Recibes una página de muestra",
          text:
            "Preparamos una vista real con tus detalles para que veas el estilo, la estructura y el mensaje antes de pagar."
        },
        {
          title: "Pagas $100 si te gusta",
          text:
            "Si apruebas la muestra, pagas $100 y recibes esa página lista para usar, publicar o conectar a tu dominio."
        }
      ]
    },
    tools: {
      title: "Herramientas que hacen visible a tu negocio.",
      text:
        "Elevalo se enfoca primero en el sitio web: una página clara, móvil, profesional y preparada para crecer con extras cuando hagan falta.",
      cards: [
        {
          title: "Sitio web claro",
          text: "Una página móvil con servicios, horario, ubicación y contacto directo."
        },
        {
          title: "SEO local básico",
          text:
            "Estructura, títulos, ubicación y conexión con el perfil de Google para que el negocio se entienda mejor."
        },
        {
          title: "Formulario de contacto",
          text: "Un formulario simple para solicitudes, reservas, estimados o mensajes de clientes."
        },
        {
          title: "Dominio y correo",
          text: "Orientación para que el negocio use dominio, correo profesional y enlaces correctos."
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
      title: "Precios claros para empezar.",
      text: "Primero ves la muestra. El pago llega cuando sabes que te gusta.",
      packages: [
        {
          name: "Vista",
          price: "$0",
          text: "Preparamos una muestra con la información de tu negocio. No pagas por verla.",
          bullets: ["Solicitud del negocio", "Estilo sugerido", "Página para revisar"]
        },
        {
          name: "Página inicial",
          price: "$100",
          text: "Si apruebas la muestra, pagas y recibes esa página lista para usar.",
          bullets: ["Se ve bien en celular", "Secciones principales", "Archivos para publicar"]
        },
        {
          name: "Publicación completa",
          price: "Desde $250",
          text: "Para conectar dominio, formulario, perfil de Google y dejar todo listo en línea.",
          bullets: ["Dominio conectado", "Formulario funcionando", "Ajustes finales"]
        }
      ],
      addOnTitle: "Después de publicar",
      addOnQuote: "Empieza con una página clara. Cuando el negocio lo pida, añadimos funciones para elevar tu presencia digital.",
      addOnText:
        "Estos trabajos se cotizan aparte para que no pagues por cosas que todavía no necesitas.",
      addOns: [
        {
          title: "Vender mejor",
          text: "Menú digital, servicios organizados o páginas específicas para ofertas."
        },
        {
          title: "Recibir más mensajes",
          text: "Botón de WhatsApp, enlaces de contacto y formularios con preguntas personalizadas."
        },
        {
          title: "Ganar confianza",
          text: "Enlace a reseñas de Google, ajustes de contenido y actualizaciones cuando cambie el negocio."
        }
      ]
    },
    contact: {
      label: "Solicitud de muestra",
      title: "Los detalles del proyecto completo viven en una página aparte.",
      text:
        "La página principal se queda ligera. Cuando estés listo, abre la solicitud y comparte el contexto que necesitamos para preparar una vista real de tu negocio.",
      cta: "Abrir solicitud",
      cardLabel: "Qué vas a compartir",
      cardTitle: "Logo, fotos, estilo y detalles del negocio en un solo lugar.",
      cardText:
        "La solicitud reúne el material importante sin interrumpir la experiencia principal del sitio.",
      bullets: [
        "Email, teléfono y WhatsApp opcional",
        "Tipo de negocio, objetivo y área que atiende",
        "Logo, imágenes, referencias, visión y servicios"
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
          "Recibir llamadas",
          "Recibir reservas o citas",
          "Recibir solicitudes por formulario",
          "Mostrar servicios y precios"
        ],
        vision: "Visión del negocio",
        visionPlaceholder: "Qué quieres que el negocio represente o hacia dónde quieres llevarlo...",
        mission: "Misión o historia",
        missionPlaceholder: "Qué hacen, a quién ayudan y qué los hace diferentes...",
        contentSection: "Contenido y estilo",
        services: "Servicios, productos o menú principal",
        servicesPlaceholder: "Lista los servicios, productos, paquetes, menú, horarios o precios que quieres mostrar...",
        referenceSite: "Página que te guste como concepto",
        referenceSitePlaceholder: "Pega un enlace de una página que te guste o describe el estilo...",
        styleNotes: "Estilo que quieres",
        styleNotesPlaceholder: "Moderno, elegante, familiar, minimal, colores favoritos, tono de voz...",
        uploadSection: "Logo e imágenes",
        logo: "Logo del negocio",
        images: "Fotos para usar en la página",
        uploadHint: "Puedes subir logo, fotos del local, productos, equipo, trabajos anteriores o cualquier imagen que ayude a crear la muestra.",
        details: "Notas adicionales",
        detailsPlaceholder: "Cualquier detalle importante: redes sociales, horarios, links, instrucciones o cosas que quieres evitar..."
      },
      submit: "Solicitar vista previa",
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
      label: "Detalles de proyecto",
      title: "Todo lo que necesitamos para crear tu primera vista.",
      text:
        "Completa esta solicitud con calma. Mientras más contexto compartas, más cerca queda la muestra de lo que tienes en mente.",
      overview: [
        {
          title: "Contacto",
          text: "Email, teléfono y preferencia de WhatsApp para poder dar seguimiento."
        },
        {
          title: "Identidad",
          text: "Logo, fotos, misión, visión y el estilo visual que quieres transmitir."
        },
        {
          title: "Contenido",
          text: "Servicios, productos, menú, referencias y notas para construir la página."
        }
      ]
    },
    preview: {
      aria: "Vista previa del servicio",
      path: "elevalo.digital/proceso",
      status: "Muestra en revisión",
      floaters: ["Servicios", "Estilo", "Contacto", "Responsive", "Formulario", "Fotos"],
      requestLabel: "1. Solicitud",
      requestTitle: "Detalles del negocio",
      requestText: "Nombre, servicios, estilo, pueblo, fotos y objetivo principal.",
      previewLabel: "2. Muestra web",
      previewTitle: "Una pagina lista para revisar",
      approvalLabel: "3. Aprobación",
      approvalTitle: "Pagas solo si te gusta",
      approvalText: "Recibes la página para usarla, publicarla o conectarla."
    }
  },
  en: {
    nav: {
      services: "Services",
      prices: "Pricing",
      process: "Process",
      cta: "Request preview",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      label: "Main",
      toggle: "Switch to Spanish"
    },
    hero: {
      titleStart: "See what your website could look like ",
      titleEmphasis: "before you pay",
      subtitle:
        "Send us your business details, we prepare a real preview page, and if you like it, you pay $100 to receive it ready to use.",
      primary: "Request preview",
      secondary: "How it works"
    },
    logoContext: "For businesses in any industry. Built with modern tools.",
    proofLabel: "Technologies Elevalo can use",
    process: {
      label: "How it works.",
      title: "First you see a sample. You only pay if you like it.",
      text:
        "The idea is simple: you do not pay for a guess. We use your form to create a real preview page, then you decide if you want to receive it.",
      steps: [
        {
          title: "You complete the form",
          text: "Send the business name, services, style, town, and the main goal for the page."
        },
        {
          title: "You receive a sample page",
          text:
            "We prepare a real view with your details so you can review the style, structure, and message before paying."
        },
        {
          title: "You pay $100 if you like it",
          text:
            "If you approve the preview, you pay $100 and receive that page ready to use, publish, or connect to your domain."
        }
      ]
    },
    tools: {
      title: "Tools that make your business visible.",
      text:
        "Elevalo starts with the website: a clear, mobile-friendly, professional page ready to grow with extras when needed.",
      cards: [
        {
          title: "Clear website",
          text: "A mobile page with services, hours, location, and direct contact."
        },
        {
          title: "Basic local SEO",
          text:
            "Structure, titles, location, and Google profile connection so the business is easier to understand."
        },
        {
          title: "Contact form",
          text: "A simple form for requests, bookings, estimates, or customer messages."
        },
        {
          title: "Domain and email",
          text: "Guidance so the business can use a domain, professional email, and correct links."
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
      title: "Clear pricing to get started.",
      text: "First you see the sample. Payment only happens when you know you like it.",
      packages: [
        {
          name: "View",
          price: "$0",
          text: "We prepare a sample using your business information. You do not pay to see it.",
          bullets: ["Business request", "Suggested style", "Page to review"]
        },
        {
          name: "Starter page",
          price: "$100",
          text: "If you approve the sample, you pay and receive that page ready to use.",
          bullets: ["Looks good on mobile", "Main sections", "Files ready to publish"]
        },
        {
          name: "Full publishing",
          price: "From $250",
          text: "For connecting domain, form, Google profile, and getting everything live.",
          bullets: ["Connected domain", "Working form", "Final adjustments"]
        }
      ],
      addOnTitle: "After publishing",
      addOnQuote: "Start with a clear page. When the business needs it, we add features to elevate your digital presence.",
      addOnText:
        "These are quoted separately so you do not pay for things you do not need yet.",
      addOns: [
        {
          title: "Sell better",
          text: "Digital menu, organized services, or specific pages for offers."
        },
        {
          title: "Receive more messages",
          text: "WhatsApp button, contact links, and forms with custom questions."
        },
        {
          title: "Build trust",
          text: "Google review link, content adjustments, and updates when the business changes."
        }
      ]
    },
    contact: {
      label: "Sample request",
      title: "The full brief lives on a separate page.",
      text:
        "The main page stays light. When you are ready, open the request and share the context we need to prepare a real first view of your business.",
      cta: "Open request",
      cardLabel: "What you will share",
      cardTitle: "Logo, photos, style, and business details in one place.",
      cardText:
        "The request keeps the important material together without interrupting the main site experience.",
      bullets: [
        "Email, phone, and optional WhatsApp",
        "Business type, main goal, and service area",
        "Logo, images, references, vision, and services"
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
          "Receive calls",
          "Receive bookings or appointments",
          "Receive form requests",
          "Show services and prices"
        ],
        vision: "Business vision",
        visionPlaceholder: "What you want the business to represent or where you want to take it...",
        mission: "Mission or story",
        missionPlaceholder: "What you do, who you help, and what makes you different...",
        contentSection: "Content and style",
        services: "Main services, products, or menu",
        servicesPlaceholder: "List the services, products, packages, menu, hours, or prices you want to show...",
        referenceSite: "Website you like as a concept",
        referenceSitePlaceholder: "Paste a link to a website you like or describe the style...",
        styleNotes: "Style you want",
        styleNotesPlaceholder: "Modern, elegant, familiar, minimal, favorite colors, tone of voice...",
        uploadSection: "Logo and images",
        logo: "Business logo",
        images: "Photos to use on the page",
        uploadHint: "You can upload a logo, storefront photos, products, team photos, previous work, or any image that helps create the sample.",
        details: "Additional notes",
        detailsPlaceholder: "Anything important: social media, hours, links, instructions, or things you want to avoid..."
      },
      submit: "Request preview",
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
      title: "Everything we need to create your first preview.",
      text:
        "Complete this request at your own pace. The more context you share, the closer the sample gets to what you have in mind.",
      overview: [
        {
          title: "Contact",
          text: "Email, phone, and WhatsApp preference so we can follow up."
        },
        {
          title: "Identity",
          text: "Logo, photos, mission, vision, and the visual style you want to communicate."
        },
        {
          title: "Content",
          text: "Services, products, menu, references, and notes to build the page."
        }
      ]
    },
    preview: {
      aria: "Service preview",
      path: "elevalo.digital/process",
      status: "Sample in review",
      floaters: ["Services", "Style", "Contact", "Responsive", "Form", "Photos"],
      requestLabel: "1. Request",
      requestTitle: "Business details",
      requestText: "Name, services, style, town, photos, and main goal.",
      previewLabel: "2. Web sample",
      previewTitle: "A landing page ready to review",
      approvalLabel: "3. Approval",
      approvalTitle: "Pay only if you like it",
      approvalText: "Receive the page to use, publish, or connect."
    }
  }
};

const toolIcons = [Globe2, SearchCheck, FileText, Mail];

const techLogos = [
  { id: "react", name: "React" },
  { id: "next", name: "Next.js" },
  { id: "svelte", name: "Svelte" },
  { id: "vite", name: "Vite" },
  { id: "tailwind", name: "Tailwind CSS" },
  { id: "vercel", name: "Vercel" },
  { id: "google", name: "Google Business" },
  { id: "tally", name: "Tally" }
];

function App() {
  const [language, setLanguage] = useState("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [activeStep, setActiveStep] = useState(null);
  const [route, setRoute] = useState(() => (typeof window === "undefined" ? "" : window.location.hash));
  const t = copy[language];
  const nextLanguage = language === "es" ? "en" : "es";
  const isRequestPage = route === "#solicitud";

  useEffect(() => {
    function handleHashChange() {
      setRoute(window.location.hash);
      setMenuOpen(false);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (route === "#solicitud") {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    if (route) {
      window.requestAnimationFrame(() => {
        document.querySelector(route)?.scrollIntoView();
      });
    }
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

      if (!response.ok) {
        throw new Error(`Request failed with ${response.status}`);
      }

      event.currentTarget.reset();
      setSubmitStatus("success");
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    }
  }

  function handleLanguageToggle() {
    setLanguage(nextLanguage);
    setMenuOpen(false);
  }

  if (isRequestPage) {
    return (
      <RequestPage
        language={language}
        menuOpen={menuOpen}
        nextLanguage={nextLanguage}
        onLanguageToggle={handleLanguageToggle}
        onSubmit={handleSubmit}
        setMenuOpen={setMenuOpen}
        submitStatus={submitStatus}
        t={t}
      />
    );
  }

  return (
    <div className="site-shell" lang={language}>
      <SiteHeader
        menuOpen={menuOpen}
        nextLanguage={nextLanguage}
        onLanguageToggle={handleLanguageToggle}
        setMenuOpen={setMenuOpen}
        t={t}
      />

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
            <a href="#solicitud" className="primary-button">
              {t.hero.primary}
            </a>
            <a href="#proceso" className="secondary-button">
              {t.hero.secondary}
            </a>
          </div>
        </section>

        <HeroProductPreview copy={t.preview} />

        <section className="logo-context" aria-label={t.logoContext}>
          <p>{t.logoContext}</p>
        </section>

        <section className="proof-strip" aria-label={t.proofLabel}>
          <div className="logo-marquee" aria-hidden="true">
            <div className="logo-track">
              {[...techLogos, ...techLogos].map((item, index) => (
                <span className={`tech-logo ${item.id}`} key={`${item.id}-${index}`}>
                  <TechMark id={item.id} />
                  <span className="tech-name">{item.name}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="how-section" id="proceso">
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
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

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

        <section className="pricing-section" id="paquetes">
          <div className="section-heading">
            <h2>{t.pricing.title}</h2>
            <p>{t.pricing.text}</p>
          </div>

          <div className="pricing-grid">
            {t.pricing.packages.map((item) => (
              <article className="pricing-card" key={item.name}>
                <h3>{item.name}</h3>
                <strong>{item.price}</strong>
                <p>{item.text}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>
                      <CheckCircle2 />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="addon-panel">
            <div>
              <span>{t.pricing.addOnTitle}</span>
              <strong>{t.pricing.addOnQuote}</strong>
              <p>{t.pricing.addOnText}</p>
            </div>
            <div className="addon-list">
              {t.pricing.addOns.map((item) => (
                <article className="addon-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

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
                <li key={bullet}>
                  <CheckCircle2 />
                  {bullet}
                </li>
              ))}
            </ul>
            <a className="contact-request-link" href="#solicitud">
              {t.contact.cta}
              <Send />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function SiteHeader({ menuOpen, nextLanguage, onLanguageToggle, setMenuOpen, t }) {
  return (
    <header className="nav-wrap">
      <a className="brand" href="#inicio" aria-label="Elevalo" onClick={() => setMenuOpen(false)}>
        <img className="brand-logo" src={elevaloLogo} alt="" aria-hidden="true" />
      </a>

      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label={t.nav.label}>
        <a href="#proceso" onClick={() => setMenuOpen(false)}>
          {t.nav.process}
          <ChevronDown />
        </a>
        <a href="#producto" onClick={() => setMenuOpen(false)}>
          {t.nav.services}
        </a>
        <a href="#paquetes" onClick={() => setMenuOpen(false)}>
          {t.nav.prices}
        </a>
      </nav>

      <div className="nav-actions">
        <button
          className="language-toggle"
          type="button"
          aria-label={t.nav.toggle}
          onClick={onLanguageToggle}
        >
          {nextLanguage.toUpperCase()}
        </button>
        <a href="#solicitud" className="nav-cta" onClick={() => setMenuOpen(false)}>
          {t.nav.cta}
        </a>
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
    </header>
  );
}

function RequestPage({ language, menuOpen, nextLanguage, onLanguageToggle, onSubmit, setMenuOpen, submitStatus, t }) {
  return (
    <div className="site-shell request-shell" lang={language}>
      <SiteHeader
        menuOpen={menuOpen}
        nextLanguage={nextLanguage}
        onLanguageToggle={onLanguageToggle}
        setMenuOpen={setMenuOpen}
        t={t}
      />

      <main className="request-page">
        <section className="request-layout">
          <div className="request-intro">
            <a className="back-link" href="#contacto">
              <ArrowLeft />
              {t.requestPage.back}
            </a>
            <div className="request-kicker">
              <span
                className="request-brand-symbol"
                style={{ "--symbol-url": `url(${elevaloLogo})` }}
                aria-hidden="true"
              />
              <span className="section-label">{t.requestPage.label}</span>
            </div>
            <h1>{t.requestPage.title}</h1>
            <p>{t.requestPage.text}</p>

            <div className="request-overview">
              {t.requestPage.overview.map((item) => (
                <article key={item.title}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <LeadForm onSubmit={onSubmit} submitStatus={submitStatus} t={t} />
        </section>
      </main>
    </div>
  );
}

function LeadForm({ onSubmit, submitStatus, t }) {
  const isSubmitting = submitStatus === "submitting";
  const statusMessage = {
    config: t.contact.statusConfig,
    error: t.contact.statusError,
    success: t.contact.status,
    submitting: t.contact.statusSending
  }[submitStatus];

  return (
    <form className="lead-form" encType="multipart/form-data" onSubmit={onSubmit}>
      <div className="form-section-title">{t.contact.fields.contactSection}</div>
      <label>
        {t.contact.fields.businessName}
        <input
          type="text"
          name="businessName"
          autoComplete="organization"
          placeholder={t.contact.fields.businessPlaceholder}
          required
        />
      </label>
      <label>
        {t.contact.fields.clientEmail}
        <input
          type="email"
          name="clientEmail"
          autoComplete="email"
          placeholder={t.contact.fields.clientEmailPlaceholder}
          required
        />
      </label>
      <label>
        {t.contact.fields.phone}
        <input type="tel" name="phone" autoComplete="tel" placeholder={t.contact.fields.phonePlaceholder} />
      </label>
      <label className="checkbox-field">
        <input type="checkbox" name="useWhatsapp" />
        <span>{t.contact.fields.useWhatsapp}</span>
      </label>

      <div className="form-section-title">{t.contact.fields.businessSection}</div>
      <label>
        {t.contact.fields.businessType}
        <input
          type="text"
          name="businessType"
          list="business-type-options"
          autoComplete="organization-title"
          placeholder={t.contact.fields.businessTypePlaceholder}
          required
        />
        <datalist id="business-type-options">
          {t.contact.fields.businessOptions.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
        <small className="field-hint">{t.contact.fields.businessTypeHint}</small>
      </label>
      <label>
        {t.contact.fields.location}
        <input type="text" name="location" autoComplete="address-level2" placeholder={t.contact.fields.locationPlaceholder} />
      </label>
      <label>
        {t.contact.fields.goal}
        <select name="goal" defaultValue="" required>
          <option value="" disabled>
            {t.contact.fields.select}
          </option>
          {t.contact.fields.goalOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label>
        {t.contact.fields.vision}
        <textarea name="vision" rows="3" placeholder={t.contact.fields.visionPlaceholder} />
      </label>
      <label className="full-field">
        {t.contact.fields.mission}
        <textarea name="mission" rows="3" placeholder={t.contact.fields.missionPlaceholder} />
      </label>

      <div className="form-section-title">{t.contact.fields.contentSection}</div>
      <label className="full-field">
        {t.contact.fields.services}
        <textarea name="services" rows="4" placeholder={t.contact.fields.servicesPlaceholder} required />
      </label>
      <label>
        {t.contact.fields.referenceSite}
        <input type="text" name="referenceSite" inputMode="url" placeholder={t.contact.fields.referenceSitePlaceholder} />
      </label>
      <label>
        {t.contact.fields.styleNotes}
        <textarea name="styleNotes" rows="3" placeholder={t.contact.fields.styleNotesPlaceholder} />
      </label>

      <div className="form-section-title">{t.contact.fields.uploadSection}</div>
      <p className="upload-note">{t.contact.fields.uploadHint}</p>
      <label>
        {t.contact.fields.logo}
        <input type="file" name="logo" accept="image/*,.pdf,.svg" />
      </label>
      <label>
        {t.contact.fields.images}
        <input type="file" name="businessImages" accept="image/*" multiple />
      </label>
      <label className="full-field">
        {t.contact.fields.details}
        <textarea name="details" rows="4" placeholder={t.contact.fields.detailsPlaceholder} />
      </label>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? t.contact.statusSending : t.contact.submit}
        <Send />
      </button>
      {statusMessage && <p className={`form-status ${submitStatus}`}>{statusMessage}</p>}
    </form>
  );
}

function TechMark({ id }) {
  if (id === "react") {
    return (
      <svg className="tech-mark" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="2.6" fill="currentColor" />
        <ellipse cx="16" cy="16" fill="none" rx="11" ry="4.4" stroke="currentColor" strokeWidth="1.8" />
        <ellipse
          cx="16"
          cy="16"
          fill="none"
          rx="11"
          ry="4.4"
          stroke="currentColor"
          strokeWidth="1.8"
          transform="rotate(60 16 16)"
        />
        <ellipse
          cx="16"
          cy="16"
          fill="none"
          rx="11"
          ry="4.4"
          stroke="currentColor"
          strokeWidth="1.8"
          transform="rotate(120 16 16)"
        />
      </svg>
    );
  }

  if (id === "next") {
    return (
      <svg className="tech-mark" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="currentColor" opacity="0.08" />
        <path d="M10 22V10h3.2l6.1 8.5V10H22v12h-3.1l-6.2-8.7V22H10Z" fill="currentColor" />
      </svg>
    );
  }

  if (id === "svelte") {
    return (
      <svg className="tech-mark" viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M21.8 8.4c-2.5-3.2-7.3-2.7-10 .2L8.6 12c-2.1 2.3-1.8 5.7.4 7.5a6.1 6.1 0 0 0 1.2 6.1c2.5 3 7 2.7 9.8-.1l3.4-3.5c2.2-2.3 1.9-5.8-.5-7.6a6 6 0 0 0-1.1-6Z"
          fill="currentColor"
          opacity="0.16"
        />
        <path
          d="M11.3 18.5c1.4 1.2 3.4 1.1 4.8-.2l2.3-2.1c.7-.7 1.9-.7 2.6 0 .7.7.7 1.8 0 2.5l-3.4 3.2c-1.6 1.5-4.2 1.6-5.8.1a3.9 3.9 0 0 1-.5-3.5Zm9.4-5c-1.4-1.1-3.4-1-4.8.2l-2.3 2.2c-.7.7-1.9.7-2.6 0-.7-.7-.7-1.8 0-2.5l3.4-3.2c1.6-1.5 4.2-1.6 5.8-.1.9.9 1.1 2.2.5 3.4Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (id === "vite") {
    return (
      <svg className="tech-mark" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 7.5 16 25 26 7.5H6Z" fill="currentColor" opacity="0.18" />
        <path d="m17.5 6-7.2 10.8h5.2L14.4 26l7.4-12h-5.1L17.5 6Z" fill="currentColor" />
      </svg>
    );
  }

  if (id === "tailwind") {
    return (
      <svg className="tech-mark" viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M8 14.8c1.2-4 3.7-6 7.5-6 2.3 0 4 1 5.4 3 1 1.4 2.1 2 3.4 2 1.4 0 2.6-.7 3.7-2-1.2 4-3.7 6-7.5 6-2.3 0-4-1-5.4-3-1-1.4-2.1-2-3.4-2-1.4 0-2.6.7-3.7 2Zm-4 6c1.2-4 3.7-6 7.5-6 2.3 0 4 1 5.4 3 1 1.4 2.1 2 3.4 2 1.4 0 2.6-.7 3.7-2-1.2 4-3.7 6-7.5 6-2.3 0-4-1-5.4-3-1-1.4-2.1-2-3.4-2-1.4 0-2.6.7-3.7 2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (id === "vercel") {
    return (
      <svg className="tech-mark" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 6 28 26H4L16 6Z" fill="currentColor" />
      </svg>
    );
  }

  if (id === "google") {
    return (
      <svg className="tech-mark" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="currentColor" opacity="0.1" />
        <path
          d="M23.6 16.2c0-.7-.1-1.3-.2-1.9H16v3.5h4.2a3.7 3.7 0 0 1-1.6 2.4v2h2.7c1.5-1.4 2.3-3.5 2.3-6Zm-7.6 7.6c2.2 0 4-.7 5.3-1.9l-2.7-2a5 5 0 0 1-7.5-2.6H8.3v2.1A8 8 0 0 0 16 23.8Zm-4.9-6.5a5 5 0 0 1 0-2.7v-2.1H8.3a8 8 0 0 0 0 6.9l2.8-2.1Zm4.9-5.9c1.2 0 2.3.4 3.2 1.2l2.4-2.4A8 8 0 0 0 8.3 12.5l2.8 2.1a5 5 0 0 1 4.9-3.2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg className="tech-mark" viewBox="0 0 32 32" aria-hidden="true">
      <rect x="7" y="6" width="18" height="20" rx="5" fill="currentColor" opacity="0.12" />
      <path d="M10 10h12v3H10v-3Zm0 5h12v3H10v-3Zm0 5h7v3h-7v-3Z" fill="currentColor" />
    </svg>
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
              <div className="approval-price">$100</div>
              <p>{copy.approvalText}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
