export default function HeroProductPreview({ copy }) {
  return (
    <section className="hero-product" aria-label={copy.aria}>
      <div className="hero-product-shell">
        <div className="hero-product-window">
          <div className="preview-browser-bar">
            <div className="browser-dots"><span /><span /><span /></div>
            <strong>{copy.path}</strong>
            <span className="preview-status">{copy.status}</span>
          </div>

          <div className="handoff-board">
            <div className="process-floaters" aria-hidden="true">
              {copy.floaters.map((item) => <span key={item}>{item}</span>)}
            </div>

            <article className="handoff-card request-card">
              <span className="handoff-label">{copy.requestLabel}</span>
              <h3>{copy.requestTitle}</h3>
              <p>{copy.requestText}</p>
            </article>

            <article className="handoff-card preview-card">
              <span className="handoff-label">{copy.previewLabel}</span>
              <h3>{copy.previewTitle}</h3>
              <div className="wireframe-preview" aria-hidden="true">
                <span className="wire-hero" />
                <span className="wire-copy" />
                <span className="wire-copy short" />
                <div><i /><i /><i /></div>
              </div>
            </article>

            <article className="handoff-card approval-card">
              <span className="handoff-label">{copy.approvalLabel}</span>
              <h3>{copy.approvalTitle}</h3>
              <div className="approval-price">{copy.approvalPrice}</div>
              <p>{copy.approvalText}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
