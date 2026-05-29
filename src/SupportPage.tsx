import { useState } from "react";

function SupportPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          aria-label="Ouvrir le menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          Menu
        </button>
        <div className="navlinks">
          <a href="/" onClick={() => setMobileMenuOpen(false)}>Accueil</a>
          <a href="/support/" onClick={() => setMobileMenuOpen(false)}>Support</a>
          <a href="/confidentialite/" onClick={() => setMobileMenuOpen(false)}>Confidentialité</a>
        </div>
      </nav>

      <main className="legal-page">
        <section className="section" aria-labelledby="support-title">
          <h1 id="support-title">Centre de support RéACTIF</h1>
          <p className="legal-intro">
            Pour toute demande, merci de nous contacter à l'adresse suivante.
          </p>
        </section>

        <section className="grid grid-2" aria-label="Contact support">
          <article className="card">
            <h3>Contact unique</h3>
            <p>
              <a href="mailto:contact@reactif.app">contact@reactif.app</a> — pour toutes les demandes (support, partenariat,
              technique, informations générales).
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default SupportPage;
