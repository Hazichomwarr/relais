//app / page.tsx;
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Lang = "fr" | "en";

const BRAND = {
  name: "Relais",
  domain: "relaisplatform.com",
  email: "contact@relaisplatform.com",
  phoneDisplay: "+1 (929) 453-7790",
  phoneHref: "+19294537790",
};

const hrefs = {
  website: `https://${BRAND.domain}`,
  mailto: `mailto:${BRAND.email}?subject=${encodeURIComponent("RELAIS — Nouvelle demande")}`,
  tel: `tel:${BRAND.phoneHref}`,
};

const HERO_IMAGE = "/images/relais-hero.png";

const COPY = {
  fr: {
    nav: {
      how: "Comment ça marche",
      services: "Services",
      trust: "Confiance",
      pricing: "Tarifs",
      submit: "Démarrer une demande",
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

export default function HomePage1() {
  const [lang, setLang] = useState<Lang>("fr");
  const t = useMemo(() => COPY[lang], [lang]);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Header lang={lang} setLang={setLang} t={t} />

      {/* HERO with background image */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          aria-hidden="true"
        />
        {/* Overlay for readability */}
        <div
          className="absolute inset-0 bg-linear-to-b from-black/60 via-black/45 to-white/0"
          aria-hidden="true"
        />

        <div className="relative border-b border-neutral-200">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="text-white">
                <p className="text-sm font-semibold tracking-widest text-white/80">
                  {t.hero.eyebrow}
                </p>

                <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                  {t.hero.h1}
                </h1>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90">
                  {t.hero.sub}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="/homepage2"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500"
                  >
                    {t.hero.ctaPrimary}
                  </a>
                  <a
                    href="#how"
                    className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    {t.hero.ctaSecondary}
                  </a>
                </div>

                {/* Trust pills */}
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {t.hero.pills.map((p) => (
                    <TrustPill
                      key={p.title}
                      title={p.title}
                      desc={p.desc}
                      variant="dark"
                    />
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/90">
                  <a
                    className="underline underline-offset-4 hover:text-white"
                    href={hrefs.mailto}
                  >
                    {BRAND.email}
                  </a>
                  <a
                    className="underline underline-offset-4 hover:text-white"
                    href={hrefs.tel}
                  >
                    {BRAND.phoneDisplay}
                  </a>
                  <span className="text-white/50">•</span>
                  <span className="text-white/80">{BRAND.domain}</span>
                </div>
              </div>

              {/* Example card (on light surface for contrast) */}
              <div className="rounded-2xl border border-white/20 bg-white/90 p-6 shadow-sm backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-neutral-800">
                    {t.hero.exampleTitle}
                  </p>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200">
                    Request ID: RL-1042
                  </span>
                </div>

                <div className="mt-5 rounded-xl bg-white p-4 ring-1 ring-neutral-200">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold text-neutral-500">
                        {t.hero.requestLabel}
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        {t.hero.requestTitle}
                      </p>
                      <p className="mt-1 text-sm text-neutral-600">
                        {t.hero.requestMeta}
                      </p>
                    </div>

                    <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                      {t.hero.status}
                    </span>
                  </div>

                  <div className="mt-4 border-t border-neutral-200 pt-4">
                    <p className="text-xs font-semibold text-neutral-500">
                      {t.hero.proofLabel}
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <ProofThumb label={lang === "fr" ? "Photo" : "Photo"} />
                      <ProofThumb label={lang === "fr" ? "Reçu" : "Receipt"} />
                      <ProofThumb
                        label={lang === "fr" ? "Rapport" : "Report"}
                      />
                      <span className="ml-2 text-sm text-neutral-600">
                        {t.hero.proofHint}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-white p-4 ring-1 ring-neutral-200">
                  <p className="text-xs font-semibold text-neutral-500">
                    {t.hero.updateLabel}
                  </p>
                  <p className="mt-1 text-sm text-neutral-700">
                    {t.hero.updateText}
                  </p>
                </div>

                <div className="mt-5 text-xs text-neutral-500">
                  {t.hero.flowHint}
                </div>
              </div>
            </div>
          </div>

          {/* soft fade into white below hero */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-linear-to-b from-transparent to-white" />
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow={t.how.eyebrow}
            title={t.how.title}
            subtitle={t.how.subtitle}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.how.steps.map((s) => (
              <StepCard
                key={s.step}
                step={s.step}
                title={s.title}
                desc={s.desc}
              />
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm text-neutral-600">
            {t.how.note}
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-t border-neutral-200 bg-neutral-50 scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            subtitle={t.services.subtitle}
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.cards.map((c) => (
              <ServiceCard key={c.title} title={c.title} items={c.items} />
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section id="trust" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow={t.trust.eyebrow}
            title={t.trust.title}
            subtitle={t.trust.subtitle}
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {t.trust.bullets.map((b) => (
              <BulletCard key={b.title} title={b.title} desc={b.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="border-t border-neutral-200 bg-neutral-50 scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow={t.pricing.eyebrow}
            title={t.pricing.title}
            subtitle={t.pricing.subtitle}
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {t.pricing.cards.map((p) => (
              <PricingCard
                key={p.title}
                title={p.title}
                desc={p.desc}
                note={p.note}
              />
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm text-neutral-600">
            {t.pricing.note}
          </p>
        </div>
      </section>

      {/* REQUEST CTA */}
      <section
        id="request"
        className="border-t border-neutral-200 bg-neutral-900 text-white scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest text-neutral-300">
                {t.cta.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {t.cta.title}
              </h2>
              <p className="mt-3 max-w-xl text-neutral-200">{t.cta.sub}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={hrefs.mailto}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-200"
                >
                  {t.cta.emailBtn}
                </a>
                <a
                  href={hrefs.tel}
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  {t.cta.callBtn}
                </a>
              </div>

              <p className="mt-6 text-sm text-neutral-300">{t.cta.small}</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-sm font-semibold text-white">
                {t.cta.templateTitle}
              </p>

              <div className="mt-4 rounded-xl bg-black/30 p-4 text-sm text-neutral-200">
                {t.cta.template.map(([k, v]) => (
                  <p key={k} className="mt-2 first:mt-0">
                    <span className="text-white font-semibold">{k}:</span>{" "}
                    {v || "__________________"}
                  </p>
                ))}
              </div>

              <p className="mt-4 text-xs text-neutral-300">
                {t.cta.templateHint}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}

/* ----------------------------- Components ----------------------------- */

function Header({
  lang,
  setLang,
  t,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof COPY)[Lang];
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-sm font-bold text-white">
            R
          </span>
          <span className="font-semibold tracking-tight">{BRAND.name}</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-neutral-700 md:flex">
          <a className="hover:text-neutral-900" href="#how">
            {t.nav.how}
          </a>
          <a className="hover:text-neutral-900" href="#services">
            {t.nav.services}
          </a>
          <a className="hover:text-neutral-900" href="#trust">
            {t.nav.trust}
          </a>
          <a className="hover:text-neutral-900" href="#pricing">
            {t.nav.pricing}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
          <a
            href="#request"
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            {t.nav.submit}
          </a>
        </div>
      </div>
    </header>
  );
}

function LangToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  return (
    <div className="inline-flex rounded-xl border border-neutral-200 bg-white p-1">
      <button
        type="button"
        onClick={() => setLang("fr")}
        className={[
          "rounded-lg px-3 py-1 text-xs font-semibold",
          lang === "fr"
            ? "bg-neutral-900 text-white"
            : "text-neutral-700 hover:bg-neutral-50",
        ].join(" ")}
        aria-pressed={lang === "fr"}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={[
          "rounded-lg px-3 py-1 text-xs font-semibold",
          lang === "en"
            ? "bg-neutral-900 text-white"
            : "text-neutral-700 hover:bg-neutral-50",
        ].join(" ")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold tracking-widest text-neutral-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-neutral-700">
        {subtitle}
      </p>
    </div>
  );
}

function TrustPill({
  title,
  desc,
  variant = "light",
}: {
  title: string;
  desc: string;
  variant?: "light" | "dark";
}) {
  const cls =
    variant === "dark"
      ? "border-white/15 bg-white/10 text-white"
      : "border-neutral-200 bg-white text-neutral-900";
  const descCls = variant === "dark" ? "text-white/80" : "text-neutral-600";

  return (
    <div className={`rounded-xl border p-4 shadow-sm ${cls}`}>
      <p className="text-sm font-semibold">{title}</p>
      <p className={`mt-1 text-sm ${descCls}`}>{desc}</p>
    </div>
  );
}

function StepCard({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold tracking-widest text-neutral-500">
        STEP {step}
      </p>
      <p className="mt-2 text-lg font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
    </div>
  );
}

function ServiceCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <p className="text-lg font-semibold">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-neutral-700">
        {items.map((it) => (
          <li key={it} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BulletCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <p className="text-lg font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
    </div>
  );
}

function PricingCard({
  title,
  desc,
  note,
}: {
  title: string;
  desc: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <p className="text-lg font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
      <div className="mt-5 inline-flex rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white">
        {note}
      </div>
    </div>
  );
}

function ProofThumb({ label }: { label: string }) {
  return (
    <div className="inline-flex h-9 w-14 items-center justify-center rounded-lg bg-neutral-100 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200">
      {label}
    </div>
  );
}

function Footer({ t }: { t: (typeof COPY)[Lang] }) {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">{BRAND.name}</p>
            <p className="mt-1 text-sm text-neutral-600">{t.footer.line}</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-700">
            <a
              className="underline underline-offset-4 hover:text-neutral-900"
              href={hrefs.mailto}
            >
              {BRAND.email}
            </a>
            <a
              className="underline underline-offset-4 hover:text-neutral-900"
              href={hrefs.tel}
            >
              {BRAND.phoneDisplay}
            </a>
            <a
              className="underline underline-offset-4 hover:text-neutral-900"
              href={hrefs.website}
              target="_blank"
              rel="noreferrer"
            >
              {BRAND.domain}
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
