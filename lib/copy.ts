export const BRAND = {
  name: "Relais",
  domain: "relaisplatform.com",
  email: "contact@relaisplatform.com",
  phoneDisplay: "+1 (929) 453-7790",
  phoneHref: "+19294537790",
};

export const COPY = {
  fr: {
    nav: {
      how: "Comment ça marche",
      services: "Services",
      trust: "Confiance",
      pricing: "Tarifs",
      submit: "Démarrer une demande",
      problem: "Problème",
      faq: "FAQ",
    },
    hero: {
      eyebrow: "SERVICE DE COORDINATION & ASSISTANCE",
      h1: "Quand vous êtes loin, nous prenons le relais.",
      sub: "Soumettez une demande. Nous affectons un coordinateur local vérifié. Vous recevez des preuves (photos/vidéos) et des mises à jour claires jusqu’à la fin.",
      ctaPrimary: "Démarrer une demande",
      ctaSecondary: "Comment ça marche ?",
      pills: [
        {
          title: "Coordination réelle",
          desc: "Actions concrètes sur le terrain",
        },
        {
          title: "Confirmation claire",
          desc: "Rien n’avance sans votre accord",
        },
        {
          title: "Preuves, pas de promesses",
          desc: "Photos et reçus à chaque étape",
        },
      ],
      exampleTitle: "Exemple de suivi",
      requestLabel: "DEMANDE",
      requestTitle: "Payer des frais de scolarité & confirmer l’inscription",
      requestMeta: "Ville : Ouagadougou • Urgence : normale",
      status: "Affectée",
      proofLabel: "PREUVES",
      proofHint: "3 éléments joints",
      updateLabel: "MISE À JOUR",
      updateText:
        "Le coordinateur a visité l’école, confirmé l’inscription et envoyé reçu + rapport pour validation.",
      flowHint: "Suivi : En attente → Affectée → En cours → Terminée",
    },
    problem: {
      eyebrow: "LE PROBLÈME",
      title: "La distance ne doit pas créer de doute.",
      bullets: [
        "Vous voulez aider la famille, mais vous n’êtes pas sur place.",
        "Vous devez gérer une situation réelle (paiement, démarche, urgence).",
        "Vous ne savez pas qui est fiable.",
        "Vous voulez des preuves, pas des promesses.",
      ],
    },
    solution: {
      eyebrow: "LA SOLUTION RELAIS",
      title: "RELAIS coordonne, vérifie et vous tient informé.",
      subtitle: "Un processus clair — avec validation et preuves.",
      cards: [
        {
          title: "Demande",
          desc: "Vous décrivez le besoin, le lieu et l’urgence.",
        },
        {
          title: "Coordination locale",
          desc: "Nous affectons un coordinateur vérifié et préparons le plan.",
        },
        {
          title: "Suivi transparent",
          desc: "Mises à jour + preuves (photos, reçus, rapport) jusqu’à la fin.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions fréquentes",
      subtitle: "On répond aux points de doute avant que vous n’agissiez.",
      items: [
        {
          q: "Comment vérifiez-vous les coordinateurs ?",
          a: "Nous validons l’identité, le sérieux, et l’historique. Puis RELAIS supervise chaque demande avec suivi et preuves.",
        },
        {
          q: "Comment les paiements fonctionnent ?",
          a: "MVP : vous recevez un devis avant action. Certaines dépenses peuvent être payées directement sur place, selon la nature de la demande.",
        },
        {
          q: "Que se passe-t-il si quelque chose semble suspect ?",
          a: "RELAIS stoppe, vérifie, et vous propose une résolution. Rien n’avance sans votre accord.",
        },
        {
          q: "Où opérez-vous ?",
          a: "MVP : Burkina Faso (Ouagadougou et Bobo Dioulasso). D’autres villes arrivent bientot.",
        },
      ],
    },
    how: {
      eyebrow: "COMMENT ÇA MARCHE",
      title: "Simple. Structuré. Responsable.",
      subtitle: "Des étapes claires, du début à la fin — sans confusion.",
      steps: [
        {
          step: "01",
          title: "Vous expliquez le besoin",
          desc: "Dites ce que vous voulez, où, et le niveau d’urgence.",
        },
        {
          step: "02",
          title: "Nous confirmons les détails",
          desc: "Nous validons le plan et le devis avant toute action.",
        },
        {
          step: "03",
          title: "Nous gérons sur place",
          desc: "Un coordinateur local exécute et documente l’avancement.",
        },
      ],
      note: "Vous ne recrutez pas un inconnu. Vous passez par RELAIS — avec suivi, validation et preuves.",
    },
    services: {
      eyebrow: "CE QUE NOUS PRENONS EN CHARGE",
      title: "Des besoins diaspora, gérés avec preuves",
      subtitle:
        "Quelques exemples. Si ce n’est pas listé, soumettez quand même.",
      cards: [
        {
          title: "Gérer une tâche",
          items: [
            "Paiements / dépôts",
            "Suivis de réparation",
            "Rendez-vous & démarches",
          ],
        },
        {
          title: "Soutenir ma famille",
          items: ["Frais de scolarité", "Documents", "Courses & assistance"],
        },
        {
          title: "Acheter & livrer",
          items: [
            "Matériaux & fournitures",
            "Livraison vérifiée",
            "Reçus & photos",
          ],
        },
        {
          title: "Maison & propriété",
          items: ["Inspection", "Avancement travaux", "Photos avant / après"],
        },
        {
          title: "Vérification locale",
          items: [
            "Contrôles sur place",
            "“Est-ce vrai ?”",
            "Confirmation indépendante",
          ],
        },
        {
          title: "Demandes sur mesure",
          items: [
            "Nous évaluons la faisabilité",
            "Vous validez le devis",
            "Exécution + rapport",
          ],
        },
      ],
    },
    trust: {
      eyebrow: "CONFIANCE & SÉCURITÉ",
      title: "Conçu pour la confiance",
      subtitle:
        "La confiance vient de la transparence, du suivi et des preuves.",
      bullets: [
        {
          title: "Coordinateurs vérifiés",
          desc: "Les coordinateurs sont approuvés avant d’être affectés.",
        },
        {
          title: "Demandes suivies",
          desc: "Statuts clairs + mises à jour tout au long du processus.",
        },
        {
          title: "Support humain",
          desc: `Contact : ${BRAND.email} • ${BRAND.phoneDisplay}`,
        },
        {
          title: "Revue & résolution",
          desc: "En cas de doute, RELAIS vérifie et résout avec vous.",
        },
      ],
    },
    pricing: {
      eyebrow: "TARIFS",
      title: "Devis transparent, par demande",
      subtitle: "Vous voyez le devis avant toute action.",
      cards: [
        {
          title: "Frais de service",
          desc: "Coordination, suivi et vérification.",
          note: "Devis par demande",
        },
        {
          title: "Coût d’exécution",
          desc: "Temps + frais locaux si nécessaire.",
          note: "Devis par demande",
        },
      ],
      note: "MVP : accusé de réception le jour même, puis devis après confirmation des détails.",
    },
    cta: {
      eyebrow: "PRÊT À COMMENCER ?",
      title: "Démarrez une demande aujourd’hui.",
      sub: "Envoyez votre besoin par email. Nous répondons avec les prochaines étapes et un devis.",
      emailBtn: "Envoyer une demande par email",
      callBtn: `Appeler ${BRAND.phoneDisplay}`,
      templateTitle: "Modèle à copier/coller",
      template: [
        ["Type de service", "(ex: frais de scolarité / inspection)"],
        ["Ville + pays", ""],
        ["Détails", ""],
        ["Urgence", "Normale / Urgente"],
        ["Meilleur contact", "Email / Téléphone"],
      ],
      templateHint: `À envoyer à ${BRAND.email}`,
      small: "Formulaire web sécurisé (prochaine itération).",
    },
    footer: {
      line: "Coordination fiable. Exécution réelle. Preuves vérifiées.",
    },
  },

  en: {
    nav: {
      how: "How it works",
      services: "Services",
      trust: "Trust",
      pricing: "Pricing",
      submit: "Start a request",
      problem: "Problem",
      faq: "FAQ",
    },
    hero: {
      eyebrow: "COORDINATION & ASSISTANCE SERVICE",
      h1: "When you’re far away, we take the relay.",
      sub: "Submit a request. We assign a verified local coordinator. You receive proof (photos/videos) and clear updates until completion.",
      ctaPrimary: "Start a request",
      ctaSecondary: "How it works",
      pills: [
        { title: "Real coordination", desc: "On-the-ground execution" },
        { title: "Clear confirmation", desc: "Nothing moves without approval" },
        {
          title: "Proof, not promises",
          desc: "Photos & receipts when relevant",
        },
      ],
      exampleTitle: "Example status update",
      requestLabel: "REQUEST",
      requestTitle: "Pay school fees & confirm enrollment",
      requestMeta: "City: Ouagadougou • Urgency: normal",
      status: "Assigned",
      proofLabel: "PROOF",
      proofHint: "3 items attached",
      updateLabel: "UPDATE",
      updateText:
        "Coordinator visited the school, confirmed enrollment, and sent receipt + report for your review.",
      flowHint: "Tracked: Pending → Assigned → In progress → Completed",
    },
    // inside COPY.en
    problem: {
      eyebrow: "THE PROBLEM",
      title: "Distance shouldn’t mean uncertainty.",
      bullets: [
        "You want to help family, but you’re not there.",
        "You need something handled locally (payments, errands, emergencies).",
        "You don’t know who to trust.",
        "You want proof — not promises.",
      ],
    },
    solution: {
      eyebrow: "THE RELAIS SOLUTION",
      title: "RELAIS coordinates, verifies, and keeps you in control.",
      subtitle: "A clear process — with approval and proof.",
      cards: [
        {
          title: "Request",
          desc: "You describe the need, location, and urgency.",
        },
        {
          title: "Local coordination",
          desc: "We assign a verified coordinator and confirm the plan.",
        },
        {
          title: "Transparent follow-up",
          desc: "Updates + proof (photos, receipts, report) until completion.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      subtitle: "We address concerns before you take action.",
      items: [
        {
          q: "How do you verify coordinators?",
          a: "We vet identity, reliability, and track record. Then RELAIS supervises each request with statuses and proof.",
        },
        {
          q: "How do payments work?",
          a: "MVP: you receive a quote before any work begins. Some execution costs may be paid locally depending on the request.",
        },
        {
          q: "What if something feels off?",
          a: "RELAIS pauses, reviews, and resolves with you. Nothing proceeds without your approval.",
        },
        {
          q: "Where do you operate?",
          a: "MVP: Burkina Faso (Ouagadougou and Bobo Doioulasso). We expand city by city.",
        },
      ],
    },
    how: {
      eyebrow: "HOW IT WORKS",
      title: "Simple. Structured. Accountable.",
      subtitle: "Clear steps from submission to completion.",
      steps: [
        {
          step: "01",
          title: "You explain the need",
          desc: "Tell us what you need, where, and urgency.",
        },
        {
          step: "02",
          title: "We confirm the details",
          desc: "We confirm plan + quote before any action.",
        },
        {
          step: "03",
          title: "We execute on the ground",
          desc: "A local coordinator executes and documents progress.",
        },
      ],
      note: "You’re not hiring strangers. You’re working through RELAIS with tracking and proof.",
    },
    services: {
      eyebrow: "WHAT WE HANDLE",
      title: "Diaspora needs, managed with proof",
      subtitle: "Examples. If it’s not listed, submit anyway.",
      cards: [
        {
          title: "Handle a task",
          items: [
            "Payments / deposits",
            "Repair follow-ups",
            "Appointments & errands",
          ],
        },
        {
          title: "Support family",
          items: ["School fees", "Documents", "Assistance"],
        },
        {
          title: "Buy & deliver",
          items: [
            "Materials & supplies",
            "Verified delivery",
            "Receipts & photos",
          ],
        },
        {
          title: "Home & property",
          items: ["Inspection", "Renovation checks", "Before/after proof"],
        },
        {
          title: "Local verification",
          items: [
            "On-ground checks",
            "“Is it real?”",
            "Independent confirmation",
          ],
        },
        {
          title: "Custom requests",
          items: [
            "We confirm feasibility",
            "You approve the quote",
            "Execution + report",
          ],
        },
      ],
    },
    trust: {
      eyebrow: "TRUST & SAFETY",
      title: "Built for trust",
      subtitle: "Trust comes from transparency, tracking, and proof.",
      bullets: [
        {
          title: "Verified coordinators",
          desc: "Coordinators are approved before assignments.",
        },
        {
          title: "Tracked requests",
          desc: "Clear statuses + updates along the way.",
        },
        {
          title: "Human support",
          desc: `Reach us at ${BRAND.email} • ${BRAND.phoneDisplay}`,
        },
        {
          title: "Review & resolution",
          desc: "If something feels off, RELAIS reviews and resolves with you.",
        },
      ],
    },
    pricing: {
      eyebrow: "PRICING",
      title: "Transparent, request-based quotes",
      subtitle: "You see the quote before any work begins.",
      cards: [
        {
          title: "Service fee",
          desc: "Coordination, tracking, verification.",
          note: "Quoted per request",
        },
        {
          title: "Execution cost",
          desc: "Time + local expenses when needed.",
          note: "Quoted per request",
        },
      ],
      note: "MVP: same-day acknowledgment, then a quote after details are confirmed.",
    },
    cta: {
      eyebrow: "READY TO START?",
      title: "Submit a request today.",
      sub: "Email your need. We’ll reply with next steps and a quote.",
      emailBtn: "Email a request",
      callBtn: `Call ${BRAND.phoneDisplay}`,
      templateTitle: "Copy/paste template",
      template: [
        ["Service type", "(e.g., school fees / inspection)"],
        ["City + country", ""],
        ["Details", ""],
        ["Urgency", "Normal / Urgent"],
        ["Best contact", "Email / Phone"],
      ],
      templateHint: `Send to ${BRAND.email}`,
      small: "Secure web request form (next iteration).",
    },
    footer: {
      line: "Trusted coordination. Real execution. Verified proof.",
    },
  },
} as const;
