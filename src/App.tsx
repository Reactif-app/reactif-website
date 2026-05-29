const fonctionnalites = [
  {
    titre: "RCP adulte",
    texte:
      "Compteurs adrénaline/cordarone/chocs, minuteurs codés couleur, minuteur d'analyse, événements annexes, aides de calcul, métronome, annulation haptique, gestion RACS et export PDF.",
  },
  {
    titre: "RCP pédiatrique",
    texte:
      "Inclut toutes les options de la RCP adulte, avec en plus un calculateur de doses par âge/poids et un rappel des doses directement visible pendant l'intervention.",
  },
  {
    titre: "RCP néonatale",
    texte:
      "Version adaptée aux nourrissons avec suppression de la cordarone (minuteur/compteur) et ajout d'un minuteur dédié au remplissage vasculaire.",
  },
];

const etapes = [
  {
    titre: "Le besoin terrain",
    texte:
      "Pendant une réanimation cardiaque, suivre précisément les délais entre médicaments et chocs ajoute une forte charge mentale aux soignants.",
  },
  {
    titre: "La réponse RéACTIF",
    texte:
      "RéACTIF accompagne les équipes SMUR en chronométrant automatiquement les séquences clés pour libérer l'attention clinique au chevet du patient.",
  },
  {
    titre: "L'après-intervention",
    texte:
      "L'application facilite l'horodatage et la description du déroulé, pour améliorer le retour d'expérience et la qualité des analyses post-RCP.",
  },
];

const faq = [
  {
    q: "À qui s'adresse RéACTIF ?",
    r: "RéACTIF est pensé pour les soignants en SMUR et, plus largement, les équipes réalisant des réanimations cardiaques.",
  },
  {
    q: "L'application a-t-elle besoin d'Internet ?",
    r: "Non. RéACTIF ne requiert aucun accès Internet pendant l'utilisation, ce qui la rend adaptée aux contextes d'urgence sur le terrain.",
  },
  {
    q: "Quelles données sont collectées ?",
    r: "Aucune donnée médicale ou personnelle n'est collectée. Les historiques de RCP sont stockés localement sur l'appareil et ne contiennent pas de données sensibles.",
  },
];

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <img src="/banner_logo.png" alt="RéACTIF" className="brand__logo" />
        </div>
        <div className="navlinks">
          <a href="#fonctionnalites">Fonctionnalités</a>

          <a href="/confidentialite">Confidentialité</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          className="btn btn--ghost"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </nav>

      <main>
        <section className="hero" id="accueil">
          <div className="hero__visual">
            <img
              src="/website_screenshot.png"
              alt="Capture de l'application RéACTIF sur iPad et iPhone"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="hero__content">
            <p className="tag">APPLICATION MÉDICALE • TRAÇABILITÉ</p>
            <img
              src="/banner_logo.png"
              alt="RéACTIF"
              className="hero__title-logo"
            />
            <p>
              RéACTIF accompagne les soignants pendant l'intervention en
              chronométrant automatiquement les délais entre adrénaline,
              cordarone et chocs, afin de réduire la charge mentale et de mieux
              focaliser l'attention sur le patient.
            </p>
            <div className="store-row" aria-label="Liens de téléchargement">
              <img
                className="store-row__appicon"
                src="/icon.png"
                alt="Icône RéACTIF"
              />
              <div className="store-grid">
                <a
                  className="store-btn"
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <span className="store-btn__kicker">Disponible sur</span>
                    <strong>
                      <span className="store-btn__storeicon" aria-hidden="true">
                        ▶
                      </span>
                      Google Play
                    </strong>
                  </span>
                </a>
                <a
                  className="store-btn"
                  href="https://www.apple.com/fr/app-store/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <span className="store-btn__kicker">Disponible sur</span>
                    <strong>
                      <span className="store-btn__storeicon" aria-hidden="true">
                        
                      </span>
                      App Store
                    </strong>
                  </span>
                </a>
              </div>
            </div>
            <div className="cta-row">
              <a className="btn" href="#fonctionnalites">
                Voir les fonctionnalités
              </a>
            </div>
          </div>
        </section>

        <section
          className="section"
          id="fonctionnalites"
          aria-labelledby="fonctionnalites-title"
        >
          <p className="eyebrow">Ce que fait RéACTIF</p>
          <h2 id="fonctionnalites-title">Fonctions cliniques principales</h2>
          <div className="grid grid-3">
            {fonctionnalites.map((item) => (
              <article className="card" key={item.titre}>
                <h3>{item.titre}</h3>
                <p>{item.texte}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section"
          id="histoire"
          aria-labelledby="histoire-title"
        >
          <p className="eyebrow">Pourquoi ce projet</p>
          <h2 id="histoire-title">L'histoire de RéACTIF</h2>
          <div className="grid grid-3">
            {etapes.map((item) => (
              <article className="card card--lift" key={item.titre}>
                <h3>{item.titre}</h3>
                <p>{item.texte}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section"
          id="confidentialite"
          aria-labelledby="confidentialite-title"
        >
          <p className="eyebrow">Objectif de recherche</p>
          <h2 id="confidentialite-title">
            Retour d'expérience et confidentialité
          </h2>
          <div className="grid grid-2">
            <article className="card">
              <h3>Visée de recherche</h3>
              <p>
                RéACTIF vise à faciliter le retour d'expérience afin de
                perfectionner le déroulement des réanimations cardiaques et
                d'améliorer les pratiques d'intervention.
              </p>
            </article>
            <article className="card">
              <h3>Données et conformité</h3>
              <p>
                L'application fonctionne sans Internet, ne collecte aucune
                donnée médicale ni personnelle et stocke l'historique uniquement
                en local. Les historiques ne contiennent pas de données
                sensibles.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="faq" aria-labelledby="faq-title">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 id="faq-title">FAQ</h2>
          <div className="faq">
            {faq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.r}</p>
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
