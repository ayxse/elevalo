import { ExternalLink } from "lucide-react";

export default function FinalProductShowcase({ product, copy }) {
  const marqueeGroups = [0, 1, 2];

  return (
    <section className="final-product-section" aria-label={copy.aria}>
      <article className="recent-work-showcase">
        <div className="final-product-copy">
          <span className="section-label">{copy.label}</span>
          <div>
            <h2>{copy.title}</h2>
            <p>{copy.textBefore} {product.name} {copy.textAfter}</p>
          </div>
          <div className="final-product-actions">
            <span className="final-product-pill">{copy.pill}</span>
            <a className="final-product-link" href={product.url} target="_blank" rel="noreferrer">
              {copy.cta}<ExternalLink />
            </a>
          </div>
        </div>

        <div className="recent-sites-marquee" aria-label={`${copy.marqueeLabel} ${product.name}`}>
          <div className="recent-sites-track">
            {marqueeGroups.map((group) => (
              <div className="recent-sites-group" key={group} aria-hidden={group === 0 ? undefined : true}>
                {product.screenshots.map((screenshot) => (
                  <a
                    className="recent-site-card"
                    href={product.url}
                    key={`${screenshot.label}-${group}`}
                    rel="noreferrer"
                    target="_blank"
                    tabIndex={group === 0 ? undefined : -1}
                    aria-label={`${copy.openLabel} ${product.name}`}
                  >
                    <img
                      src={screenshot.image}
                      alt={group === 0 ? `${product.name}: ${copy.imageAlt} ${screenshot.label}` : ""}
                      loading={group === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
