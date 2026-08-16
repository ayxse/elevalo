export default function ProcessSection({ activeStep, setActiveStep, t }) {
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
