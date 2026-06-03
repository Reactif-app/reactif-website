import { useState } from "react";
import { LanguageToggle, useLanguage } from "./i18n";

function ConfidentialitePage() {
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
        <section className="section" aria-labelledby="privacy-title">
          <h1 id="privacy-title">{t.privacy.title}</h1>
          <p className="legal-intro">{t.privacy.intro}</p>
        </section>

        <section className="grid grid-2" aria-label={t.privacy.principlesLabel}>
          {t.privacy.items.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="section" aria-labelledby="privacy-contact-title">
          <h2 id="privacy-contact-title">{t.privacy.contactTitle}</h2>
          <p className="legal-intro">
            {t.privacy.contactText}
            <a href="mailto:contact@reactif.app"> contact@reactif.app</a>.
          </p>
        </section>
      </main>
    </>
  );
}

export default ConfidentialitePage;
