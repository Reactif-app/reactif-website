import { useState } from "react";
import { LanguageToggle, useLanguage } from "./i18n";

function SupportPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();

  return (
    <>
      <nav className={`navbar ${mobileMenuOpen ? "navbar--open" : ""}`}>
        <div className="brand">
          <img src="/banner_logo.png" alt="RéACTIF" className="brand__logo" />
        </div>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label={t.openMenu}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {t.menu}
        </button>
        <div className="navlinks">
          <a href="/" onClick={() => setMobileMenuOpen(false)}>
            {t.nav.home}
          </a>
          <a href="/support/" onClick={() => setMobileMenuOpen(false)}>
            {t.nav.support}
          </a>
          <a href="/confidentialite/" onClick={() => setMobileMenuOpen(false)}>
            {t.nav.privacy}
          </a>
        </div>
        <LanguageToggle
          language={language}
          label={t.languageToggleLabel}
          title={t.languageToggleTitle}
          onToggle={toggleLanguage}
        />
      </nav>

      <main className="legal-page">
        <section className="section" aria-labelledby="support-title">
          <h1 id="support-title">{t.support.title}</h1>
          <p className="legal-intro">{t.support.intro}</p>
        </section>

        <section className="grid grid-2" aria-label={t.support.contactSection}>
          <article className="card">
            <h3>{t.support.contactLabel}</h3>
            <p>
              <a href="mailto:contact@reactif.app">contact@reactif.app</a> -{" "}
              {t.support.contactText}
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default SupportPage;
