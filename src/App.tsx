import { useState } from "react";
import { LanguageToggle, useLanguage } from "./i18n";

const githubUrl = "https://github.com/Reactif-app/reactif";

function PlayStoreIcon() {
  return (
    <svg
      className="store-btn__storeicon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 3.8v16.4c0 .6.7 1 1.2.7l9.1-8.9L5.2 3.1C4.7 2.8 4 3.2 4 3.8Z" />
      <path d="m15.4 10.9 2.3-2.2-9-5.1 6.7 7.3Z" opacity="0.75" />
      <path d="m15.4 13.1-6.7 7.3 9-5.1-2.3-2.2Z" opacity="0.55" />
      <path d="m16.5 12 2.7 2.6c.7-.4.7-1.4 0-1.8L16.5 12Z" opacity="0.9" />
    </svg>
  );
}

function AppStoreIcon() {
  return (
    <svg
      className="store-btn__storeicon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M15.8 2.8c.1 1.1-.3 2.1-1 2.9-.7.8-1.8 1.4-2.8 1.3-.1-1.1.4-2.1 1-2.8.7-.8 1.9-1.4 2.8-1.4Z" />
      <path d="M20.2 17.3c-.4 1-1 2-1.7 2.9-.9 1.2-1.8 2.3-3.1 2.3-1.3 0-1.7-.8-3.2-.8s-2 .8-3.2.8c-1.3 0-2.3-1.2-3.1-2.4-1.7-2.5-3-7.1-1.2-10.2.9-1.5 2.5-2.5 4.2-2.5 1.3 0 2.5.9 3.2.9.8 0 2.2-1.1 3.8-.9.6 0 2.5.3 3.6 2-3.2 1.9-2.7 6.5.7 7.9Z" />
    </svg>
  );
}

function App() {
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
          <a href="#fonctionnalites" onClick={() => setMobileMenuOpen(false)}>
            {t.nav.features}
          </a>

          <a href="/confidentialite/" onClick={() => setMobileMenuOpen(false)}>
            {t.nav.privacy}
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
            {t.nav.faq}
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
            {t.nav.contact}
          </a>
          <a href="/support/" onClick={() => setMobileMenuOpen(false)}>
            {t.nav.support}
          </a>
        </div>
        <a
          className="btn btn--ghost nav-cta"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <LanguageToggle
          language={language}
          label={t.languageToggleLabel}
          title={t.languageToggleTitle}
          onToggle={toggleLanguage}
        />
      </nav>

      <main>
        <section className="hero" id="accueil">
          <div className="hero__banner">
            <img
              src="/banner_logo.png"
              alt="RéACTIF"
              className="hero__title-logo"
            />
          </div>
          <div className="hero__visual">
            <img
              src="/website_screenshot.png"
              alt={t.app.heroAlt}
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="hero__content">
            <p>{t.app.intro}</p>
            <div className="store-row" aria-label={t.app.downloadLinks}>
              <img
                className="store-row__appicon"
                src="/icon.png"
                alt={t.app.appIconAlt}
              />
              <div className="store-grid">
                <a
                  className="store-btn"
                  href="https://play.google.com/store/apps/details?id=fr.reactif"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <span className="store-btn__kicker">
                      {t.app.availableOn}
                    </span>
                    <strong>
                      <PlayStoreIcon />
                      Google Play
                    </strong>
                  </span>
                </a>
                <a
                  className="store-btn"
                  href="https://apps.apple.com/app/r%C3%A9actif/id6768908796"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <span className="store-btn__kicker">
                      {t.app.availableOn}
                    </span>
                    <strong>
                      <AppStoreIcon />
                      App Store
                    </strong>
                  </span>
                </a>
              </div>
            </div>
            <p className="availability-note">
              {t.app.availabilityPrefix}{" "}
              <a
                href="https://github.com/Reactif-app/reactif/blob/main/LICENCE-fr"
                target="_blank"
                rel="noreferrer"
              >
                <u>{t.app.copyleftLicense}</u>
              </a>{" "}
              {t.app.availabilityAnd}{" "}
              <a href={githubUrl} target="_blank" rel="noreferrer">
                {t.app.githubOpen}
              </a>
              .
            </p>
            <div className="cta-row">
              <a className="btn" href="#fonctionnalites">
                {t.app.viewFeatures}
              </a>
            </div>
          </div>
        </section>

        <section
          className="section"
          id="fonctionnalites"
          aria-labelledby="fonctionnalites-title"
        >
          <h2 id="fonctionnalites-title">{t.app.mainFunctions}</h2>
          <div className="grid grid-3">
            {t.app.features.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section"
          id="histoire"
          aria-labelledby="histoire-title"
        >
          <h2 id="histoire-title">{t.app.storyTitle}</h2>
          <div className="grid grid-3">
            {t.app.steps.map((item) => (
              <article className="card card--lift" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section"
          id="confidentialite"
          aria-labelledby="confidentialite-title"
        >
          <h2 id="confidentialite-title">{t.app.privacyTitle}</h2>
          <div className="grid grid-2">
            {t.app.researchPrivacy.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="faq" aria-labelledby="faq-title">
          <h2 id="faq-title">FAQ</h2>
          <div className="faq">
            {t.app.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <a className="btn" href="mailto:contact@reactif.app">
          contact@reactif.app
        </a>
      </footer>
    </>
  );
}

export default App;
