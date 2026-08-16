import { useEffect, useRef } from "react";
import { UploadCloud } from "lucide-react";
import elevaloLogo from "../../assets/elevalo-logo.png";

export default function SubmissionLoading({ t }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    titleRef.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div className="submission-loading-backdrop">
      <section className="submission-loading" role="status" aria-live="assertive" aria-atomic="true">
        <span className="submission-loading-mark" style={{ "--symbol-url": `url(${elevaloLogo})` }} aria-hidden="true" />
        <span className="submission-progress" aria-hidden="true"><span /></span>
        <span className="submission-loading-label">{t.contact.loading.label}</span>
        <h2 ref={titleRef} tabIndex={-1}>{t.contact.loading.title}</h2>
        <p>{t.contact.loading.text}</p>
        <div className="submission-loading-note">
          <UploadCloud aria-hidden="true" />
          <span>{t.contact.loading.note}</span>
        </div>
      </section>
    </div>
  );
}
