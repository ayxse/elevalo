import { ArrowLeft } from "lucide-react";
import elevaloLogo from "../assets/elevalo-logo.png";
import LeadForm from "../components/forms/LeadForm";
import SubmissionConfirmation from "../components/forms/SubmissionConfirmation";
import SubmissionLoading from "../components/forms/SubmissionLoading";

export default function RequestPage({ onReset, onSubmit, requestId, submitStatus, t }) {
  return (
    <main className="request-page">
      <section className="request-layout">
        <div className="request-intro">
          <a className="back-link" href="#inicio"><ArrowLeft />{t.requestPage.back}</a>
          <div className="request-kicker">
            <span className="request-brand-symbol" style={{ "--symbol-url": `url(${elevaloLogo})` }} aria-hidden="true" />
            <span className="section-label">{t.requestPage.label}</span>
          </div>
          <h1>{t.requestPage.title}</h1>
          <p>{t.requestPage.text}</p>
          <div className="request-overview">
            {t.requestPage.overview.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}
          </div>
        </div>
        {submitStatus === "success" ? (
          <SubmissionConfirmation onReset={onReset} requestId={requestId} t={t} />
        ) : (
          <LeadForm onSubmit={onSubmit} submitStatus={submitStatus} t={t} />
        )}
      </section>
      {submitStatus === "submitting" && <SubmissionLoading t={t} />}
    </main>
  );
}
