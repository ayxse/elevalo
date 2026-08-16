import FaqSection from "../components/common/FaqSection";
import ProcessSection from "../components/home/ProcessSection";

export default function ProcessPage({ activeStep, setActiveStep, t }) {
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
