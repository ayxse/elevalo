import { CheckCircle2, Send } from "lucide-react";
import elevaloLogo from "../assets/elevalo-logo.png";
import ConnectionsStrip from "../components/home/ConnectionsStrip";
import FinalProductShowcase from "../components/home/FinalProductShowcase";
import HeroProductPreview from "../components/home/HeroProductPreview";
import PricingSection from "../components/home/PricingSection";
import ProcessSection from "../components/home/ProcessSection";
import { featuredProject } from "../data/projects";
import { serviceIcons } from "../data/ui";

export default function HomePage({ activeStep, setActiveStep, t }) {
  return (
    <main>
      <section className="hero-section" id="inicio">
        <span className="hero-brand-symbol" style={{ "--symbol-url": `url(${elevaloLogo})` }} aria-hidden="true" />
        <h1>{t.hero.titleStart}<em>{t.hero.titleEmphasis}</em></h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <div className="hero-actions">
          <a href="#solicitud" className="primary-button">{t.hero.primary}</a>
          <a href="#proceso" className="secondary-button">{t.hero.secondary}</a>
        </div>
      </section>

      <HeroProductPreview copy={t.preview} />
      <ConnectionsStrip t={t} />
      <ProcessSection activeStep={activeStep} setActiveStep={setActiveStep} t={t} />

      <section className="tools-section" id="producto">
        <div className="section-heading"><h2>{t.tools.title}</h2><p>{t.tools.text}</p></div>
        <div className="tool-grid">
          {t.tools.cards.map((tool, index) => {
            const Icon = serviceIcons[index];
            return <article className="tool-card" key={tool.title}><Icon /><h3>{tool.title}</h3><p>{tool.text}</p></article>;
          })}
        </div>
      </section>

      <FinalProductShowcase product={featuredProject} copy={t.showcase} />
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
          <ul>{t.contact.bullets.map((bullet) => <li key={bullet}><CheckCircle2 />{bullet}</li>)}</ul>
          <a className="contact-request-link" href="#solicitud">{t.contact.cta}<Send /></a>
        </div>
      </section>
    </main>
  );
}
