import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function SiteFrame({ children, language, menuOpen, onLanguageSelect, page, setMenuOpen, t }) {
  return (
    <div className={`site-shell page-${page}`} lang={language}>
      <SiteHeader
        language={language}
        menuOpen={menuOpen}
        onLanguageSelect={onLanguageSelect}
        page={page}
        setMenuOpen={setMenuOpen}
        t={t}
      />
      {children}
      <SiteFooter t={t} />
    </div>
  );
}
