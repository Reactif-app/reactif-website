import { useEffect, useState } from "react";

export type Language = "fr" | "en";

const languageStorageKey = "reactif-language";

export const translations = {
  fr: {
    languageToggleLabel: "Passer le site en anglais",
    languageToggleTitle: "Changer la langue",
    menu: "Menu",
    openMenu: "Ouvrir le menu",
    nav: {
      home: "Accueil",
      features: "Fonctionnalités",
      privacy: "Confidentialité",
      faq: "FAQ",
      contact: "Contact",
      support: "Support",
    },
    app: {
      heroAlt: "Capture de l'application RéACTIF sur iPad et iPhone",
      intro:
        "RéACTIF est une aide cognitive de type time keeper qui accompagne les équipes de soin lors des réanimations cardio-pulmonaire ( RCP) spécialisée. Cette application intègre les timers nécessaires pour la gestion précise des délais recommandés concernant l'analyse du rythme et l'administration des traitements.",
      downloadLinks: "Liens de téléchargement",
      appIconAlt: "Icône RéACTIF",
      availableOn: "Disponible sur",
      availabilityPrefix: "Gratuit, sans publicité, libre sous",
      copyleftLicense: "licence copyleft",
      availabilityAnd: "et",
      githubOpen: "ouvert sur GitHub",
      viewFeatures: "Voir les fonctionnalités",
      mainFunctions: "Fonctions principales",
      storyTitle: "L'histoire de RéACTIF",
      privacyTitle: "Retour d'expérience et confidentialité",
      features: [
        {
          title: "RCP adulte",
          text:
            "Timer et compteurs pour les chocs et les médicaments, saisie des  événements annexes, aide de calcul pour le réglage du respirateur, métronome, annulation haptique, gestion de la RACS, historique des évènements horodaté et export PDF.",
        },
        {
          title: "RCP pédiatrique",
          text:
            "Inclut toutes les options de la RCP adulte, avec en plus un calculateur de doses par âge/poids et un rappel des doses directement visible pendant l'intervention.",
        },
        {
          title: "RCP néonatale",
          text:
            "Version adaptée à la réanimation du nouveau né avec timer bloqué à 30 secondes pour l'analyse de la fréquence cardiaque et un compteur d'adrénaline et de remplissage vasculaire si indiqué.",
        },
      ],
      steps: [
        {
          title: "Le besoin terrain",
          text:
            "Durant la réanimation cardio-pulmonaire, suivre précisément les délais recommandés entre les analyses et les médicaments ajoute une forte charge mentale aux soignants.",
        },
        {
          title: "La réponse RéACTIF",
          text:
            "RéACTIF accompagne les équipes en chronométrant automatiquement les séquences clés de la RCP spécialisée.",
        },
        {
          title: "L'après-intervention",
          text:
            "L'application permet  l'horodatage et la description précise du déroulé de la RCP pour faciliter la saisie des évènements dans le dossier médical et les registres. Cette chronologie précise s'avère aussi particulièrement utile pour l'amélioration des pratiques, le retour d'expérience et l'évaluation  lors du debriefing en equipe.",
        },
      ],
      researchPrivacy: [
        {
          title: "Visée de recherche",
          text:
            "RéACTIF permet la saisie en temps réel de l'ensemble des soins et techniques mobilisés tout au long de la RCP. L'outil permet donc de garantir la précision des horaires dans les protocoles de recherche et les registres.",
        },
        {
          title: "Données et conformité",
          text:
            "L'application fonctionne sans Internet, ne collecte aucune donnée médicale ni personnelle et stocke l'historique uniquement en local. Les historiques ne contiennent pas de données sensibles.",
        },
      ],
      faq: [
        {
          question: "À qui s'adresse RéACTIF ?",
          answer:
            "RéACTIF est pensé pour toutes les équipes impliquées dans la RCP spécialisée en extra ou intra hospitalier.",
        },
        {
          question: "L'application a-t-elle besoin d'Internet ?",
          answer:
            "Non. RéACTIF ne requiert aucun accès Internet pendant l'utilisation, ce qui la rend adaptée aux contextes d'urgence sur le terrain.",
        },
        {
          question: "Quelles données sont collectées ?",
          answer:
            "Aucune donnée médicale ou personnelle n'est collectée. Les historiques de RCP sont stockés localement sur l'appareil et ne contiennent pas de données sensibles.",
        },
      ],
    },
    support: {
      title: "Centre de support RéACTIF",
      intro: "Pour toute demande, merci de nous contacter à l'adresse suivante.",
      contactLabel: "Contact unique",
      contactText:
        "pour toutes les demandes (support, partenariat, technique, informations générales).",
      contactSection: "Contact support",
    },
    privacy: {
      title: "Engagement de confidentialité",
      intro:
        "RéACTIF s'engage à respecter la confidentialité de ses utilisateurs. L'application ne collecte aucune donnée personnelle, médicale ou technique.",
      principlesLabel: "Principes confidentialité",
      contactTitle: "Contact",
      contactText:
        "Pour toute question relative à cet engagement de confidentialité, vous pouvez nous contacter à",
      items: [
        {
          title: "Absence de collecte",
          text:
            "RéACTIF ne recueille aucune information permettant d'identifier un utilisateur, un patient, un établissement ou une intervention. Aucune donnée n'est transmise à un serveur distant.",
        },
        {
          title: "Fonctionnement hors ligne",
          text:
            "L'application ne nécessite pas d'accès à Internet pour fonctionner. Les fonctionnalités sont conçues pour être utilisées localement sur l'appareil de l'utilisateur.",
        },
        {
          title: "Aucun partage de données",
          text:
            "RéACTIF ne vend, ne partage et ne communique aucune donnée à des tiers. Aucun outil de suivi publicitaire, d'analyse comportementale ou de mesure d'audience n'est intégré à l'application.",
        },
        {
          title: "Historique local",
          text:
            "Lorsque des historiques de RCP sont enregistrés, ils restent stockés localement sur l'appareil. Ils ne contiennent pas de données personnelles ou médicales sensibles.",
        },
        {
          title: "Suppression des données",
          text:
            "Les données sont stockées uniquement en local sur l'appareil. Elles peuvent être supprimées manuellement par l'utilisateur et sont définitivement supprimées lors de la désinstallation de l'application. Aucune donnée n'est stockée dans des bases de données externes ni transmise hors de l'appareil.",
        },
      ],
    },
  },
  en: {
    languageToggleLabel: "Switch site to French",
    languageToggleTitle: "Change language",
    menu: "Menu",
    openMenu: "Open menu",
    nav: {
      home: "Home",
      features: "Features",
      privacy: "Privacy",
      faq: "FAQ",
      contact: "Contact",
      support: "Support",
    },
    app: {
      heroAlt: "Screenshot of the RéACTIF app on iPad and iPhone",
      intro:
        "RéACTIF is a cognitive time-keeping aid that supports care teams during advanced cardiopulmonary resuscitation (CPR). The app includes the timers needed to precisely manage recommended intervals for rhythm analysis and treatment administration.",
      downloadLinks: "Download links",
      appIconAlt: "RéACTIF icon",
      availableOn: "Available on",
      availabilityPrefix: "Free, ad-free, released under a",
      copyleftLicense: "copyleft license",
      availabilityAnd: "and",
      githubOpen: "open on GitHub",
      viewFeatures: "View features",
      mainFunctions: "Main features",
      storyTitle: "The story behind RéACTIF",
      privacyTitle: "Feedback and privacy",
      features: [
        {
          title: "Adult CPR",
          text:
            "Timers and counters for shocks and medications, logging of associated events, ventilator settings calculation aid, metronome, haptic cancellation, ROSC management, timestamped event history, and PDF export.",
        },
        {
          title: "Pediatric CPR",
          text:
            "Includes all adult CPR options, with an additional dose calculator by age/weight and dose reminders directly visible during the intervention.",
        },
        {
          title: "Neonatal CPR",
          text:
            "A version adapted for newborn resuscitation, with a timer locked to 30 seconds for heart-rate assessment and counters for adrenaline and vascular filling when indicated.",
        },
      ],
      steps: [
        {
          title: "The field need",
          text:
            "During cardiopulmonary resuscitation, precisely tracking the recommended intervals between analyses and medications adds a heavy cognitive load for caregivers.",
        },
        {
          title: "RéACTIF's answer",
          text:
            "RéACTIF supports teams by automatically timing the key sequences of advanced CPR.",
        },
        {
          title: "After the intervention",
          text:
            "The app makes it possible to timestamp and precisely describe the CPR timeline, making it easier to record events in the medical file and registries. This precise chronology is also especially useful for practice improvement, feedback, and debriefing evaluation.",
        },
      ],
      researchPrivacy: [
        {
          title: "Research use",
          text:
            "RéACTIF enables real-time entry of all care actions and techniques used throughout CPR. The tool therefore helps guarantee accurate timing in research protocols and registries.",
        },
        {
          title: "Data and compliance",
          text:
            "The app works without Internet access, collects no medical or personal data, and stores history only locally. Histories contain no sensitive data.",
        },
      ],
      faq: [
        {
          question: "Who is RéACTIF for?",
          answer:
            "RéACTIF is designed for all teams involved in advanced CPR, whether in pre-hospital or in-hospital settings.",
        },
        {
          question: "Does the app need Internet access?",
          answer:
            "No. RéACTIF does not require Internet access during use, making it suitable for emergency contexts in the field.",
        },
        {
          question: "What data is collected?",
          answer:
            "No medical or personal data is collected. CPR histories are stored locally on the device and contain no sensitive data.",
        },
      ],
    },
    support: {
      title: "RéACTIF support center",
      intro: "For any request, please contact us at the following address.",
      contactLabel: "Single contact",
      contactText:
        "for all requests (support, partnerships, technical questions, general information).",
      contactSection: "Support contact",
    },
    privacy: {
      title: "Privacy commitment",
      intro:
        "RéACTIF is committed to respecting user privacy. The app does not collect any personal, medical, or technical data.",
      principlesLabel: "Privacy principles",
      contactTitle: "Contact",
      contactText:
        "For any question about this privacy commitment, you can contact us at",
      items: [
        {
          title: "No collection",
          text:
            "RéACTIF does not collect any information that could identify a user, patient, institution, or intervention. No data is sent to a remote server.",
        },
        {
          title: "Offline operation",
          text:
            "The app does not require Internet access to work. Features are designed to be used locally on the user's device.",
        },
        {
          title: "No data sharing",
          text:
            "RéACTIF does not sell, share, or disclose any data to third parties. No advertising tracking, behavioral analytics, or audience measurement tools are integrated into the app.",
        },
        {
          title: "Local history",
          text:
            "When CPR histories are recorded, they remain stored locally on the device. They do not contain sensitive personal or medical data.",
        },
        {
          title: "Data deletion",
          text:
            "Data is stored only locally on the device. It can be deleted manually by the user and is permanently deleted when the app is uninstalled. No data is stored in external databases or sent off device.",
        },
      ],
    },
  },
} as const;

function detectInitialLanguage(): Language {
  const savedLanguage = window.localStorage.getItem(languageStorageKey);

  if (savedLanguage === "fr" || savedLanguage === "en") {
    return savedLanguage;
  }

  const browserLanguage = navigator.languages?.[0] ?? navigator.language;

  return browserLanguage.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(detectInitialLanguage);
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(languageStorageKey, language);
  }, [language]);

  return {
    language,
    setLanguage,
    t,
    toggleLanguage: () =>
      setLanguage((currentLanguage) => (currentLanguage === "fr" ? "en" : "fr")),
  };
}

type LanguageToggleProps = {
  language: Language;
  label: string;
  title: string;
  onToggle: () => void;
};

export function LanguageToggle({
  language,
  label,
  title,
  onToggle,
}: LanguageToggleProps) {
  return (
    <button
      className="language-toggle"
      type="button"
      aria-label={label}
      title={title}
      onClick={onToggle}
    >
      <span className={language === "fr" ? "is-active" : ""}>FR</span>
      <span aria-hidden="true">/</span>
      <span className={language === "en" ? "is-active" : ""}>EN</span>
    </button>
  );
}
