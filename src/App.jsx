import { useState } from "react";
import {
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
          name: "Vista previa",
          price: "$0",
          text: "Solicitas una muestra con los detalles de tu negocio antes de pagar.",
          bullets: ["Formulario inicial", "Estilo personalizado", "Página de muestra"]
        },
        {
          name: "Página inicial",
          price: "$100",
          text: "Si te gusta la muestra, pagas y recibes esa página lista para usar.",
          bullets: ["Diseño responsive", "Secciones esenciales", "Entrega para publicar"]
        },
        {
          name: "Publicación completa",
          price: "Desde $250",
          text: "Para conectar dominio, formulario, perfil de Google y ajustes finales.",
          bullets: ["Dominio y formulario", "SEO local básico", "Ajustes finales"]
        }
      ],
      addOnTitle: "Extras opcionales",
      addOnText: "Extras digitales se cotizan aparte cuando el negocio los necesita.",
      addOns: [
        "Menú digital para restaurantes",
        "Enlaces para reseñas o contacto",
        "Botón de mensaje",
        "Actualizaciones de menú",
        "Formularios avanzados"
      ]
    },
    contact: {
      label: "Solicita tu muestra",
      title: "Cuéntanos qué debe decir tu página.",
      text:
        "Con estos detalles preparamos una primera vista de tu página. Si apruebas el resultado, pagas $100 para recibir la página.",
      fields: {
        businessName: "Nombre del negocio",
        businessPlaceholder: "Ej. Café Local",
        businessType: "Tipo de negocio",
        select: "Selecciona una opción",
        businessOptions: ["Barbería / salón", "Restaurante / café", "Contratista / servicio", "Otro"],
        goal: "Objetivo principal",
        goalOptions: [
          "Recibir llamadas",
          "Recibir reservas o citas",
          "Recibir solicitudes por formulario",
          "Mostrar servicios y precios"
        ],
        details: "Detalles para la muestra",
        detailsPlaceholder: "Servicios, horarios, pueblo, estilo, enlaces, fotos o ideas..."
      },
      submit: "Solicitar vista previa",
      status:
        "Solicitud de muestra preparada. Conecta este formulario a correo, Tally o tu sistema de clientes cuando publiques el sitio."
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
      previewTitle: "Una landing lista para revisar",
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
          name: "Preview",
          price: "$0",
          text: "Request a sample using your business details before paying.",
          bullets: ["Initial form", "Custom style", "Sample page"]
        },
        {
          name: "Starter page",
          price: "$100",
          text: "If you like the sample, you pay and receive that page ready to use.",
          bullets: ["Responsive design", "Essential sections", "Ready to publish"]
        },
        {
          name: "Full publishing",
          price: "From $250",
          text: "For connecting domain, form, Google profile, and final adjustments.",
          bullets: ["Domain and form", "Basic local SEO", "Final adjustments"]
        }
      ],
      addOnTitle: "Optional extras",
      addOnText: "Digital extras are quoted separately when the business needs them.",
      addOns: [
        "Digital menu for restaurants",
        "Review or contact links",
        "Message button",
        "Menu updates",
        "Advanced forms"
      ]
    },
    contact: {
      label: "Request your sample",
      title: "Tell us what your page should say.",
      text:
        "With these details, we prepare the first view of your page. If you approve the result, you pay $100 to receive the page.",
      fields: {
        businessName: "Business name",
        businessPlaceholder: "Ex. Local Cafe",
        businessType: "Business type",
        select: "Select an option",
        businessOptions: ["Barbershop / salon", "Restaurant / cafe", "Contractor / service", "Other"],
        goal: "Main goal",
        goalOptions: [
          "Receive calls",
          "Receive bookings or appointments",
          "Receive form requests",
          "Show services and prices"
        ],
        details: "Details for the sample",
        detailsPlaceholder: "Services, hours, town, style, links, photos, or ideas..."
      },
      submit: "Request preview",
      status:
        "Sample request prepared. Connect this form to email, Tally, or your customer system when you publish the site."
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
  const [submitted, setSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(null);
  const t = copy[language];
  const nextLanguage = language === "es" ? "en" : "es";

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleLanguageToggle() {
    setLanguage(nextLanguage);
    setMenuOpen(false);
  }

  return (
    <div className="site-shell" lang={language}>
      <header className="nav-wrap">
        <a className="brand" href="#inicio" aria-label="Elevalo">
          <img className="brand-logo" src={elevaloLogo} alt="" aria-hidden="true" />
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label={t.nav.label}>
          <a href="#producto" onClick={() => setMenuOpen(false)}>
            {t.nav.services}
            <ChevronDown />
          </a>
          <a href="#paquetes" onClick={() => setMenuOpen(false)}>
            {t.nav.prices}
          </a>
          <a href="#proceso" onClick={() => setMenuOpen(false)}>
            {t.nav.process}
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="language-toggle"
            type="button"
            aria-label={t.nav.toggle}
            onClick={handleLanguageToggle}
          >
            {nextLanguage.toUpperCase()}
          </button>
          <a href="#contacto" className="nav-cta">
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

      <main>
        <section className="hero-section" id="inicio">
          <h1>
            {t.hero.titleStart}
            <em>{t.hero.titleEmphasis}</em>
          </h1>

          <p className="hero-subtitle">{t.hero.subtitle}</p>

          <div className="hero-actions">
            <a href="#contacto" className="primary-button">
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
              <p>{t.pricing.addOnText}</p>
            </div>
            <div className="addon-list">
              {t.pricing.addOns.map((item) => (
                <span key={item}>{item}</span>
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

          <form className="lead-form" onSubmit={handleSubmit}>
            <label>
              {t.contact.fields.businessName}
              <input type="text" placeholder={t.contact.fields.businessPlaceholder} />
            </label>
            <label>
              {t.contact.fields.businessType}
              <select defaultValue="">
                <option value="" disabled>
                  {t.contact.fields.select}
                </option>
                {t.contact.fields.businessOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              {t.contact.fields.goal}
              <select defaultValue="">
                <option value="" disabled>
                  {t.contact.fields.select}
                </option>
                {t.contact.fields.goalOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              {t.contact.fields.details}
              <textarea rows="4" placeholder={t.contact.fields.detailsPlaceholder} />
            </label>
            <button type="submit">
              {t.contact.submit}
              <Send />
            </button>
            {submitted && <p className="form-status">{t.contact.status}</p>}
          </form>
        </section>
      </main>
    </div>
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
