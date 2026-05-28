function SupportPage() {
  return (
    <>
      <header className="topbar">
        <p>Support RéACTIF • Contenu de démonstration (spoof)</p>
      </header>

      <nav className="navbar">
        <div className="brand">
          <div className="brand__dot" aria-hidden="true" />
          <span>RéACTIF</span>
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
            Cette page contient un contenu de démonstration pour simuler un centre d'assistance utilisateur.
          </p>
        </section>

        <section className="grid grid-2" aria-label="Contacts support">
          <article className="card">
            <h3>Support clinique (spoof)</h3>
            <p>
              Horaires indicatifs: 7j/7, 08:00 - 22:00. Pour une question d'usage pendant une simulation, contactez
              <a href="mailto:support.clinique@reactif.app"> support.clinique@reactif.app</a>.
            </p>
          </article>
          <article className="card">
            <h3>Support technique (spoof)</h3>
            <p>
              Assistance déploiement, export PDF et paramètres avancés: <a href="mailto:tech@reactif.app">tech@reactif.app</a>.
              Délai de réponse cible: 24h ouvrées.
            </p>
          </article>
        </section>

        <section className="section" aria-labelledby="faq-support-title">
          <h2 id="faq-support-title">FAQ support (spoof)</h2>
          <div className="faq">
            <details>
              <summary>Comment signaler un bug ?</summary>
              <p>Envoyez un email avec version de l'app, appareil, et étapes de reproduction.</p>
            </details>
            <details>
              <summary>Comment exporter un rapport RCP ?</summary>
              <p>Depuis l'écran de fin d'intervention, utilisez l'action "Exporter en PDF".</p>
            </details>
            <details>
              <summary>Comment récupérer l'historique local ?</summary>
              <p>Accédez à l'onglet Historique, puis sélectionnez l'intervention concernée.</p>
            </details>
          </div>
        </section>
      </main>
    </>
  );
}

export default SupportPage;
