import { ArrowRight } from "lucide-react";
import FinalProductShowcase from "../components/home/FinalProductShowcase";
import { featuredProject } from "../data/projects";

export default function ProjectsPage({ t }) {
  return (
    <main className="interior-page projects-page">
      <section className="interior-hero">
        <span className="section-label">{t.pages.projects.label}</span>
        <h1>{t.pages.projects.title}</h1>
        <p>{t.pages.projects.text}</p>
      </section>
      <section className="project-detail-strip">
        {t.pages.projects.details.map((detail, index) => (
          <article key={detail.title}><span>0{index + 1}</span><h2>{detail.title}</h2><p>{detail.text}</p></article>
        ))}
      </section>
      <FinalProductShowcase product={featuredProject} copy={t.showcase} />
      <section className="closing-cta compact-cta">
        <div><span className="section-label">{t.contact.label}</span><h2>{t.process.title}</h2></div>
        <a className="primary-button" href="#solicitud">{t.nav.cta}<ArrowRight /></a>
      </section>
    </main>
  );
}
