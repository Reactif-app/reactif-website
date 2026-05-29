import { useState } from "react";

const fonctionnalites = [
  {
    titre: "RCP adulte",
    texte:
      "Timer et compteurs pour les chocs et les médicaments, saisie des  événements annexes, aide de calcul pour le réglage du respirateur, métronome, annulation haptique, gestion de la RACS, historique des évènements horodaté et export PDF.",
  },
  {
    titre: "RCP pédiatrique",
    texte:
      "Inclut toutes les options de la RCP adulte, avec en plus un calculateur de doses par âge/poids et un rappel des doses directement visible pendant l'intervention.",
  },
  {
    titre: "RCP néonatale",
    texte:
      "Version adaptée à la réanimation du nouveau né avec timer bloqué à 30 secondes pour l'analyse de la fréquence cardiaque et un compteur d'adrénaline et de remplissage vasculaire si indiqué.",
  },
];

const etapes = [
  {
    titre: "Le besoin terrain",
    texte:
      "Durant la réanimation cardio-pulmonaire, suivre précisément les délais recommandés entre les analyses et les médicaments ajoute une forte charge mentale aux soignants.",
  },
  {
    titre: "La réponse RéACTIF",
    texte:
      "RéACTIF accompagne les équipes en chronométrant automatiquement les séquences clés de la RCP spécialisée.",
  },
  {
    titre: "L'après-intervention",
    texte:
      "L'application permet  l'horodatage et la description précise du déroulé de la RCP pour faciliter la saisie des évènements dans le dossier médical et les registres. Cette chronologie précise s'avère aussi particulièrement utile pour l'amélioration des pratiques, le retour d'expérience et l'évaluation  lors du debriefing en equipe.",
  },
];

const faq = [
  {
    q: "À qui s'adresse RéACTIF ?",
    r: "RéACTIF est pensé pour toutes les équipes impliquées dans la RCP spécialisée en extra ou intra hospitalier.",
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

const confidentialiteItems = [
  {
    titre: "Visée de recherche",
    texte:
      "RéACTIF permet la saisie en temps réel de l'ensemble des soins et techniques mobilisés tout au long de la RCP. L'outil permet donc de garantir la précision des horaires dans les protocoles de recherche et les registres.",
  },
  {
    titre: "Données et conformité",
    texte:
      "L'application fonctionne sans Internet, ne collecte aucune donnée médicale ni personnelle et stocke l'historique uniquement en local. Les historiques ne contiennent pas de données sensibles.",
  },
];

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
          <a href="#fonctionnalites" onClick={() => setMobileMenuOpen(false)}>
            Fonctionnalités
          </a>

          <a href="/confidentialite/" onClick={() => setMobileMenuOpen(false)}>
            Confidentialité
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </a>
          <a href="/support/" onClick={() => setMobileMenuOpen(false)}>
            Support
          </a>
        </div>
        <a
          className="btn btn--ghost nav-cta"
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
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
              alt="Capture de l'application RéACTIF sur iPad et iPhone"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="hero__content">
            <p>
              RéACTIF est une aide cognitive de type time keeper qui accompagne
              les équipes de soin lors des réanimations cardio-pulmonaire ( RCP)
              spécialisée. Cette application intègre les timers nécessaires pour
              la gestion précise des délais recommandés concernant l'analyse du
              rythme et l'administration des traitements.
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
                      <PlayStoreIcon />
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
                      <AppStoreIcon />
                      App Store
                    </strong>
                  </span>
                </a>
              </div>
            </div>
            <p className="availability-note">
              Gratuit, sans publicité, libre sous licence copyleft et ouvert.
            </p>
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
          <h2 id="fonctionnalites-title">Fonctions principales</h2>
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
          <h2 id="confidentialite-title">
            Retour d'expérience et confidentialité
          </h2>
          <div className="grid grid-2">
            {confidentialiteItems.map((item) => (
              <article className="card" key={item.titre}>
                <h3>{item.titre}</h3>
                <p>{item.texte}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="faq" aria-labelledby="faq-title">
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
