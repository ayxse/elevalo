import FaqSection from "../components/common/FaqSection";
import PricingSection from "../components/home/PricingSection";

export default function PricingPage({ t }) {
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
