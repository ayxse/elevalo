import { CheckCircle2 } from "lucide-react";

export default function PricingSection({ t }) {
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
