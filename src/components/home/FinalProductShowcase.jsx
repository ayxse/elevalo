import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export default function FinalProductShowcase({ product, copy }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeScreenshot = product.screenshots[activeIndex];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isPaused || prefersReducedMotion || product.screenshots.length < 2) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % product.screenshots.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [isPaused, product.screenshots.length]);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? product.screenshots.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % product.screenshots.length);
  };

  return (
    <section className="final-product-section" aria-label={copy.aria}>
      <article className="recent-work-showcase">
        <div className="final-product-copy">
          <span className="section-label">{copy.label}</span>
          <h2>{product.name}</h2>
          <p className="final-product-lede">{copy.title}</p>
          <p>{copy.text}</p>
          <a className="final-product-link" href={product.url} target="_blank" rel="noreferrer">
            {copy.cta}<ExternalLink />
          </a>
        </div>

        <div
          className="project-browser"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
          }}
        >
          <div className="project-browser-bar">
            <span className="project-browser-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="project-browser-name">{product.name}</span>
            <span className="project-browser-status">{copy.status}</span>
          </div>

          <a
            className="project-browser-viewport"
            href={product.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${copy.openLabel} ${product.name}`}
          >
            <img
              key={activeScreenshot.image}
              src={activeScreenshot.image}
              alt={`${product.name}: ${copy.imageAlt} ${activeScreenshot.label}`}
              loading="eager"
              decoding="async"
            />
          </a>

          <div className="project-browser-controls">
            <div className="project-browser-caption" aria-live="polite">
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              <strong>{activeScreenshot.label}</strong>
            </div>

            <div className="project-browser-progress" aria-label={copy.navigationLabel}>
              {product.screenshots.map((screenshot, index) => (
                <button
                  className={index === activeIndex ? "is-active" : ""}
                  type="button"
                  key={screenshot.label}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${copy.showLabel} ${screenshot.label}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  title={screenshot.label}
                />
              ))}
            </div>

            <div className="project-browser-arrows">
              <button type="button" onClick={showPrevious} aria-label={copy.previous} title={copy.previous}>
                <ArrowLeft />
              </button>
              <button type="button" onClick={showNext} aria-label={copy.next} title={copy.next}>
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
