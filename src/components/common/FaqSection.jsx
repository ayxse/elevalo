export default function FaqSection({ t, title }) {
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
