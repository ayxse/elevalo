import { ArrowRight, CheckCircle2 } from "lucide-react";
import { serviceIcons } from "../data/ui";
import { serviceRouteIds } from "../routing";

export default function ServicesPage({ t }) {
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
          const Icon = serviceIcons[index];
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
