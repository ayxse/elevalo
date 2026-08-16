import { connectionItems } from "../../data/ui";

export default function ConnectionsStrip({ t }) {
  return (
    <>
      <section className="logo-context" aria-label={t.logoContext}>
        <p>{t.logoContext}</p>
      </section>
      <section className="connection-strip" aria-label={t.proofLabel}>
        <div className="connection-grid">
          {t.connections.map((item, index) => {
            const { id, Icon } = connectionItems[index];
            return (
              <article className={`connection-item ${id}`} key={item.name}>
                <span className="connection-icon" aria-hidden="true"><Icon /></span>
                <span className="connection-copy">
                  <strong>{item.name}</strong>
                  <small>{item.text}</small>
                </span>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
