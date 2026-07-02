import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  FileText,
  Globe2,
  Mail,
  Menu,
  SearchCheck,
  Send,
  X
} from "lucide-react";
import elevaloLogo from "./assets/elevalo-logo.png";

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

const steps = [
  {
    title: "Completas el formulario",
    text: "Envías el nombre del negocio, servicios, estilo, pueblo y el objetivo principal de la página."
  },
  {
    title: "Recibes una página de muestra",
    text: "Preparamos una vista real con tus detalles para que veas el estilo, la estructura y el mensaje antes de pagar."
  },
  {
    title: "Pagas $100 si te gusta",
    text: "Si apruebas la muestra, pagas $100 y recibes esa página lista para usar, publicar o conectar a tu dominio."
  }
];

const tools = [
  {
    icon: Globe2,
    title: "Sitio web claro",
    text: "Una página móvil con servicios, horario, ubicación y contacto directo."
  },
  {
    icon: SearchCheck,
    title: "SEO local básico",
    text: "Estructura, títulos, ubicación y conexión con el perfil de Google para que el negocio se entienda mejor."
  },
  {
    icon: FileText,
    title: "Formulario de contacto",
    text: "Un formulario simple para solicitudes, reservas, estimados o mensajes de clientes."
  },
  {
    icon: Mail,
    title: "Dominio y correo",
    text: "Orientación para que el negocio use dominio, correo profesional y enlaces correctos."
  }
];

const packages = [
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
];

const addOns = [
  "Menú digital para restaurantes",
  "Enlaces para reseñas o contacto",
  "Botón de mensaje",
  "Actualizaciones de menú",
  "Formularios avanzados"
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeStep, setActiveStep] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#inicio" aria-label="Elevalo">
          <img className="brand-logo" src={elevaloLogo} alt="" aria-hidden="true" />
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Principal">
          <a href="#producto" onClick={() => setMenuOpen(false)}>
            Servicios
            <ChevronDown />
          </a>
          <a href="#paquetes" onClick={() => setMenuOpen(false)}>
            Precios
          </a>
          <a href="#proceso" onClick={() => setMenuOpen(false)}>
            Proceso
          </a>
        </nav>

        <div className="nav-actions">
          <a href="#contacto" className="nav-cta">
            Pedir vista
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="eyebrow">
            <span aria-hidden="true" />
            Primero ves la muestra. Luego decides.
          </div>

          <h1>
            Ve cómo se vería tu sitio <em>antes de pagar</em>
          </h1>

          <p className="hero-subtitle">
            Nos envías los detalles del negocio, preparamos una página de muestra y,
            si te gusta, pagas $100 para recibirla lista para usar.
          </p>

          <div className="hero-actions">
            <a href="#contacto" className="primary-button">
              Pedir vista
            </a>
            <a href="#proceso" className="secondary-button">
              Cómo funciona
            </a>
          </div>
        </section>

        <HeroProductPreview />

        <section className="logo-context" aria-label="Servicios para cualquier industria">
          <p>Para negocios de cualquier industria. Construido con herramientas modernas.</p>
        </section>

        <section className="proof-strip" aria-label="Tecnologías que puede usar Elevalo">
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
            <span className="section-label">Cómo funciona.</span>
            <h2>Primero ves una muestra. Solo pagas si te gusta.</h2>
            <p>
              La idea es que no pagues por adivinar. Usamos tu formulario para
              crear una página de muestra y luego decides si quieres recibirla.
            </p>
          </div>

          <div className="step-list">
            {steps.map((step, index) => (
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
            <h2>Herramientas que hacen visible a tu negocio.</h2>
            <p>
              Elevalo se enfoca primero en el sitio web: una página clara,
              móvil, profesional y preparada para crecer con extras cuando hagan falta.
            </p>
          </div>

          <div className="tool-grid">
            {tools.map((tool) => {
              const Icon = tool.icon;
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

        <section className="showcase-section">
          <div className="showcase-card preview-flow-card">
            <span className="showcase-label">Antes de pagar</span>
            <h3>Ves una página real usando los detalles de tu negocio.</h3>
            <div className="mini-flow" aria-label="Flujo del servicio">
              <span>Formulario</span>
              <span>Vista previa</span>
              <span>Aprobación</span>
            </div>
          </div>
          <div className="showcase-card deliverable-card">
            <span className="showcase-label">$100 al aprobar</span>
            <h3>Recibes la página para usarla, publicarla o conectarla.</h3>
            <div className="deliverable-list">
              <span>Página responsive</span>
              <span>Texto base organizado</span>
              <span>Formulario preparado</span>
              <span>Guía de próximos pasos</span>
            </div>
          </div>
        </section>

        <section className="pricing-section" id="paquetes">
          <div className="section-heading">
            <h2>Precios claros para empezar.</h2>
            <p>Primero ves la muestra. El pago llega cuando sabes que te gusta.</p>
          </div>

          <div className="pricing-grid">
            {packages.map((item) => (
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
              <span>Extras opcionales</span>
              <p>Extras digitales se cotizan aparte cuando el negocio los necesita.</p>
            </div>
            <div className="addon-list">
              {addOns.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-copy">
            <span className="section-label">Solicita tu muestra</span>
            <h2>Cuéntanos qué debe decir tu página.</h2>
            <p>
              Con estos detalles preparamos una primera vista de tu página.
              Si apruebas el resultado, pagas $100 para recibir la página.
            </p>
          </div>

          <form className="lead-form" onSubmit={handleSubmit}>
            <label>
              Nombre del negocio
              <input type="text" placeholder="Ej. Café Local" />
            </label>
            <label>
              Tipo de negocio
              <select defaultValue="">
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option>Barbería / salón</option>
                <option>Restaurante / café</option>
                <option>Contratista / servicio</option>
                <option>Otro</option>
              </select>
            </label>
            <label>
              Objetivo principal
              <select defaultValue="">
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option>Recibir llamadas</option>
                <option>Recibir reservas o citas</option>
                <option>Recibir solicitudes por formulario</option>
                <option>Mostrar servicios y precios</option>
              </select>
            </label>
            <label>
              Detalles para la muestra
              <textarea rows="4" placeholder="Servicios, horarios, pueblo, estilo, enlaces, fotos o ideas..." />
            </label>
            <button type="submit">
              Solicitar vista previa
              <Send />
            </button>
            {submitted && (
              <p className="form-status">
                Solicitud de muestra preparada. Conecta este formulario a correo,
                Tally o tu sistema de clientes cuando publiques el sitio.
              </p>
            )}
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

function HeroProductPreview() {
  return (
    <section className="hero-product" aria-label="Vista previa del servicio">
      <div className="hero-product-shell">
        <div className="hero-product-window">
          <div className="preview-browser-bar">
            <div className="browser-dots">
              <span />
              <span />
              <span />
            </div>
            <strong>elevalo.digital/proceso</strong>
            <span className="preview-status">Muestra en revisión</span>
          </div>

          <div className="handoff-board">
            <div className="process-floaters" aria-hidden="true">
              <span>Servicios</span>
              <span>Estilo</span>
              <span>Contacto</span>
              <span>Responsive</span>
              <span>Formulario</span>
              <span>Fotos</span>
            </div>

            <article className="handoff-card request-card">
              <span className="handoff-label">1. Solicitud</span>
              <h3>Detalles del negocio</h3>
              <p>Nombre, servicios, estilo, pueblo, fotos y objetivo principal.</p>
            </article>

            <article className="handoff-card preview-card">
              <span className="handoff-label">2. Muestra web</span>
              <h3>Una landing lista para revisar</h3>
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
              <span className="handoff-label">3. Aprobación</span>
              <h3>Pagas solo si te gusta</h3>
              <div className="approval-price">$100</div>
              <p>Recibes la página para usarla, publicarla o conectarla.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
