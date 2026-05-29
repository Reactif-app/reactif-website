function SupportPage() {
  return (
    <>
      <header className="topbar">
        <p>Support RéACTIF</p>
      </header>

      <nav className="navbar">
        <div className="brand">
          <img src="/banner_logo.png" alt="RéACTIF" className="brand__logo" />
        </div>
        <div className="navlinks">
          <a href="/">Accueil</a>
          <a href="/support">Support</a>
          <a href="/confidentialite">Confidentialité</a>
        </div>
      </nav>

      <main className="legal-page">
        <section className="section" aria-labelledby="support-title">
          <p className="eyebrow">Aide & Assistance</p>
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
