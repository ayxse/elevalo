import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, Globe2, Menu, X } from "lucide-react";
import elevaloLogo from "../../assets/elevalo-logo.png";
import { serviceIcons } from "../../data/ui";
import { serviceRouteIds } from "../../routing";

export default function SiteHeader({ language, menuOpen, onLanguageSelect, page, setMenuOpen, t }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function closeOnOutsideClick(event) {
      if (!headerRef.current?.contains(event.target)) {
        setServicesOpen(false);
        setLanguageOpen(false);
      }
    }

    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setLanguageOpen(false);
        setMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [setMenuOpen]);

  function closeNavigation() {
    setMenuOpen(false);
    setServicesOpen(false);
    setLanguageOpen(false);
  }

  return (
    <header className={scrolled ? "site-header scrolled" : "site-header"} ref={headerRef}>
      <div className="announcement-bar">
        <a href="#solicitud" onClick={closeNavigation}>
          <span className="announcement-kicker">{t.announcement.kicker}</span>
          <strong>{t.announcement.message}</strong>
          <span className="announcement-detail">{t.announcement.detail}</span>
          <span className="announcement-mobile-message">{t.announcement.mobile}</span>
          <ArrowRight aria-hidden="true" />
        </a>
      </div>
      <div className="nav-wrap">
        <a className="brand" href="#inicio" aria-label="Elevalo" onClick={closeNavigation}>
          <img className="brand-logo" src={elevaloLogo} alt="" aria-hidden="true" />
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label={t.nav.label}>
          <div className={servicesOpen ? "nav-dropdown open" : "nav-dropdown"}>
            <button
              className={page === "services" ? "nav-dropdown-trigger active" : "nav-dropdown-trigger"}
              type="button"
              aria-expanded={servicesOpen}
              onClick={() => {
                setServicesOpen((value) => !value);
                setLanguageOpen(false);
              }}
            >
              {t.nav.services}<ChevronDown />
            </button>
            <div className="dropdown-panel services-panel">
              <div className="dropdown-intro"><span>{t.nav.serviceMenuTitle}</span><p>{t.nav.serviceMenuText}</p></div>
              <a className="dropdown-all" href="#servicios" onClick={closeNavigation}>{t.nav.allServices}<ArrowRight /></a>
              <div className="dropdown-service-grid">
                {t.pages.services.cards.map((service, index) => {
                  const Icon = serviceIcons[index];
                  return (
                    <a href={`#${serviceRouteIds[index]}`} key={service.title} onClick={closeNavigation}>
                      <Icon /><span><strong>{service.title}</strong><small>{service.text}</small></span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <a className={page === "projects" ? "active" : ""} href="#proyectos" onClick={closeNavigation}>{t.nav.projects}</a>
          <a className={page === "pricing" ? "active" : ""} href="#precios" onClick={closeNavigation}>{t.nav.prices}</a>
          <a className={page === "process" ? "active" : ""} href="#proceso" onClick={closeNavigation}>{t.nav.process}</a>
          <a className="mobile-nav-cta" href="#solicitud" onClick={closeNavigation}>{t.nav.cta}<ArrowRight /></a>
        </nav>

        <div className="nav-actions">
          <div className={languageOpen ? "language-menu open" : "language-menu"}>
            <button
              className="language-toggle"
              type="button"
              aria-label={t.nav.languageLabel}
              aria-expanded={languageOpen}
              onClick={() => {
                setLanguageOpen((value) => !value);
                setServicesOpen(false);
              }}
            >
              <Globe2 /><span>{t.nav.language}</span><ChevronDown />
            </button>
            <div className="language-panel" role="menu">
              <button className={language === "es" ? "selected" : ""} type="button" onClick={() => { onLanguageSelect("es"); closeNavigation(); }}>
                <span>ES</span>{t.nav.spanish}{language === "es" && <CheckCircle2 />}
              </button>
              <button className={language === "en" ? "selected" : ""} type="button" onClick={() => { onLanguageSelect("en"); closeNavigation(); }}>
                <span>EN</span>{t.nav.english}{language === "en" && <CheckCircle2 />}
              </button>
            </div>
          </div>
          <a href="#solicitud" className="nav-cta" onClick={closeNavigation}>{t.nav.cta}</a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
