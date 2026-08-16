import elevaloLogo from "../../assets/elevalo-logo.png";
import { serviceRouteIds } from "../../routing";

export default function SiteFooter({ t }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><img src={elevaloLogo} alt="Elevalo" /><p>{t.pages.footer.text}</p></div>
        <div><span>{t.pages.footer.explore}</span><a href="#proyectos">{t.nav.projects}</a><a href="#precios">{t.nav.prices}</a><a href="#proceso">{t.nav.process}</a></div>
        <div><span>{t.pages.footer.services}</span>{t.pages.services.cards.map((service, index) => <a href={`#${serviceRouteIds[index]}`} key={service.title}>{service.title}</a>)}</div>
        <div><span>{t.pages.footer.contact}</span><a href="mailto:hola@elevalo.digital">hola@elevalo.digital</a><a href="#solicitud">{t.nav.cta}</a></div>
      </div>
      <div className="footer-bottom"><span>© {year} Elevalo. {t.pages.footer.rights}</span><span>Puerto Rico</span></div>
    </footer>
  );
}
