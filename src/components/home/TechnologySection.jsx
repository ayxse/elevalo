import { Atom, Braces, CheckCircle2, GitBranch, PanelsTopLeft } from "lucide-react";

const technologyIcons = [Atom, Braces, PanelsTopLeft, GitBranch];

export default function TechnologySection({ copy }) {
  return (
    <section className="technology-section" aria-label={copy.aria}>
      <div className="technology-copy">
        <span className="technology-label">{copy.label}</span>
        <h2>{copy.title}</h2>
        <p>{copy.text}</p>
        <ul>
          {copy.proofs.map((proof) => <li key={proof}><CheckCircle2 />{proof}</li>)}
        </ul>
      </div>

      <div className="technology-stack" aria-label={copy.stackLabel}>
        {copy.stack.map((item, index) => {
          const Icon = technologyIcons[index];
          return (
            <article key={item.name}>
              <span className="technology-icon" aria-hidden="true"><Icon /></span>
              <div><strong>{item.name}</strong><p>{item.text}</p></div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
