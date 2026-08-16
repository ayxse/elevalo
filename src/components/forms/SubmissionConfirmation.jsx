import { useEffect, useRef } from "react";
import { ArrowRight, Check, RotateCcw } from "lucide-react";

export default function SubmissionConfirmation({ onReset, t }) {
  const titleRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    titleRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <section className="submission-confirmation" aria-labelledby="submission-confirmation-title">
      <span className="confirmation-icon" aria-hidden="true"><Check /></span>
      <span className="confirmation-label">{t.contact.confirmation.label}</span>
      <h2 id="submission-confirmation-title" ref={titleRef} tabIndex={-1}>{t.contact.confirmation.title}</h2>
      <p className="confirmation-copy">{t.contact.confirmation.text}</p>

      <div className="confirmation-next">
        <strong>{t.contact.confirmation.nextLabel}</strong>
        <ol>
          {t.contact.confirmation.steps.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="confirmation-actions">
        <a className="confirmation-home" href="#inicio">{t.contact.confirmation.home}<ArrowRight /></a>
        <button className="confirmation-reset" type="button" onClick={onReset}><RotateCcw />{t.contact.confirmation.another}</button>
      </div>
    </section>
  );
}
