import { useState } from "react";

function ConfidentialitePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="topbar">
        <p>Confidentialité RéACTIF</p>
      </header>

      <nav className={`navbar ${mobileMenuOpen ? "navbar--open" : ""}`}>
        <div className="brand">
          <img src="/banner_logo.png" alt="RéACTIF" className="brand__logo" />
        </div>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label="Ouvrir le menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          Menu
        </button>
        <div className="navlinks">
          <a href="/" onClick={() => setMobileMenuOpen(false)}>Accueil</a>
          <a href="/support" onClick={() => setMobileMenuOpen(false)}>Support</a>
          <a href="/confidentialite" onClick={() => setMobileMenuOpen(false)}>Confidentialité</a>
        </div>
      </nav>

      <main className="legal-page">
        <section className="section" aria-labelledby="privacy-title">
          <p className="eyebrow">Protection des données</p>
          <h1 id="privacy-title">Politique de confidentialité</h1>
          <p className="legal-intro">
            RéACTIF ne collecte aucune donnée personnelle, médicale ou technique.
          </p>
        </section>

        <section className="grid grid-2" aria-label="Principes confidentialité">
          <article className="card">
            <h3>Zéro collecte</h3>
            <p>
              L'application n'envoie, ne partage et ne vend aucune donnée.
            </p>
          </article>
          <article className="card">
            <h3>Hors ligne</h3>
            <p>
              RéACTIF fonctionne sans connexion Internet.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default ConfidentialitePage;
