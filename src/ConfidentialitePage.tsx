function ConfidentialitePage() {
  return (
    <>
      <header className="topbar">
        <p>Confidentialité RéACTIF • Contenu de démonstration (spoof)</p>
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
        <section className="section" aria-labelledby="privacy-title">
          <p className="eyebrow">Protection des données</p>
          <h1 id="privacy-title">Politique de confidentialité (spoof)</h1>
          <p className="legal-intro">
            Cette politique est un contenu de démonstration. Elle doit être validée juridiquement avant publication finale.
          </p>
        </section>

        <section className="grid grid-2" aria-label="Principes confidentialité">
          <article className="card">
            <h3>Données traitées</h3>
            <p>
              RéACTIF ne collecte pas de données médicales nominatives dans ce scénario de démonstration. Les informations
              d'intervention restent stockées localement sur le terminal utilisateur.
            </p>
          </article>
          <article className="card">
            <h3>Connexion Internet</h3>
            <p>
              L'application peut fonctionner sans Internet pour les usages d'urgence. Les exports sont réalisés à la demande de
              l'utilisateur.
            </p>
          </article>
          <article className="card">
            <h3>Conservation (spoof)</h3>
            <p>
              Les historiques sont conservés localement pendant 12 mois par défaut, puis archivables ou supprimables depuis les
              paramètres.
            </p>
          </article>
          <article className="card">
            <h3>Droits utilisateurs (spoof)</h3>
            <p>
              Toute demande relative à la confidentialité peut être adressée à <a href="mailto:privacy@reactif.app">privacy@reactif.app</a>.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default ConfidentialitePage;
