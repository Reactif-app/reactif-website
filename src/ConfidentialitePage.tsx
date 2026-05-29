import { useState } from "react";

function ConfidentialitePage() {
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
        <section className="section" aria-labelledby="privacy-title">
          <h1 id="privacy-title">Engagement de confidentialité</h1>
          <p className="legal-intro">
            RéACTIF s'engage à respecter la confidentialité de ses utilisateurs. L'application ne collecte aucune donnée
            personnelle, médicale ou technique.
          </p>
        </section>

        <section className="grid grid-2" aria-label="Principes confidentialité">
          <article className="card">
            <h3>Absence de collecte</h3>
            <p>
              RéACTIF ne recueille aucune information permettant d'identifier un utilisateur, un patient, un établissement
              ou une intervention. Aucune donnée n'est transmise à un serveur distant.
            </p>
          </article>
          <article className="card">
            <h3>Fonctionnement hors ligne</h3>
            <p>
              L'application ne nécessite pas d'accès à Internet pour fonctionner. Les fonctionnalités sont conçues pour
              être utilisées localement sur l'appareil de l'utilisateur.
            </p>
          </article>
          <article className="card">
            <h3>Aucun partage de données</h3>
            <p>
              RéACTIF ne vend, ne partage et ne communique aucune donnée à des tiers. Aucun outil de suivi publicitaire,
              d'analyse comportementale ou de mesure d'audience n'est intégré à l'application.
            </p>
          </article>
          <article className="card">
            <h3>Historique local</h3>
            <p>
              Lorsque des historiques de RCP sont enregistrés, ils restent stockés localement sur l'appareil. Ils ne
              contiennent pas de données personnelles ou médicales sensibles.
            </p>
          </article>
        </section>

        <section className="section" aria-labelledby="privacy-contact-title">
          <h2 id="privacy-contact-title">Contact</h2>
          <p className="legal-intro">
            Pour toute question relative à cet engagement de confidentialité, vous pouvez nous contacter à
            <a href="mailto:contact@reactif.app"> contact@reactif.app</a>.
          </p>
        </section>
      </main>
    </>
  );
}

export default ConfidentialitePage;
