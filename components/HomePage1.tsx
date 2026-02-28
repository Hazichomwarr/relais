//app / page.tsx;
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BRAND, COPY } from "@/lib/copy";
import Image from "next/image";

export type Lang = "fr" | "en";

const hrefs = {
  website: `https://${BRAND.domain}`,
  mailto: `mailto:${BRAND.email}?subject=${encodeURIComponent("RELAIS — Nouvelle demande")}`,
  tel: `tel:${BRAND.phoneHref}`,
  whatsapp: `https://wa.me/${BRAND.phoneHref}?text=${encodeURIComponent(
    "Bonjour RELAIS...",
  )}`,
};

const HERO_IMAGE = "/images/relais-hero.png";

export default function HomePage1() {
  const [lang, setLang] = useState<Lang>("fr");
  const t = useMemo(() => COPY[lang], [lang]);

  return (
    <main className="min-h-screen bg-[rgb(var(--canvas))] text-[rgb(var(--ink))]">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x1/2 rounded-full bg-radial from-emerald-400/18 via-sky-400/10 to-transparent blur-3xl" />
        <div className="absolute bottom-[-180px] left-[-180px] h-[520px] w-[520px] rounded-full bg-radial from-emerald-400/10 via-transparent to-transparent blur-3xl" />
        <div />
      </div>
      <Header lang={lang} setLang={setLang} t={t} />

      {/* HERO with background image */}
      <section id="hero" className="relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-[1.03]"
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
              {/* Trust panel (human, not admin) */}
              <div className="rounded-2xl bg-white/20 p-6 shadow-md ring-1 ring-white/50 backdrop-blur">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white/90 bg-white/15 w-fit px-3 py-2 rounded-2xl ring-white/20">
                      {lang === "fr"
                        ? "Aperçu d’une demande réelle"
                        : "Real request preview"}
                    </p>
                    <p className="mt-2 text-sm text-white/80">
                      {lang === "fr"
                        ? "Vous restez en contrôle. RELAIS exécute sur place avec preuves."
                        : "You stay in control. RELAIS executes locally with proof."}
                    </p>
                  </div>

                  {/* Status chip */}
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900 ring-1 ring-emerald-900/10">
                    <span className="h-2 w-2 rounded-full bg-[rgb(var(--accent))]" />
                    {lang === "fr" ? "Suivi actif" : "Live tracking"}
                  </span>
                </div>

                {/* Body */}
                <div className="mt-5 grid gap-4">
                  {/* What the client requested */}
                  <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-200/70">
                    <p className="text-xs font-semibold tracking-widest text-neutral-500">
                      {lang === "fr" ? "VOTRE DEMANDE" : "YOUR REQUEST"}
                    </p>
                    <p className="mt-2 text-base font-semibold text-neutral-900">
                      {t.hero.requestTitle}
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      {t.hero.requestMeta}
                    </p>

                    {/* Control promise */}
                    <div className="mt-4 rounded-xl bg-neutral-50 p-4 ring-1 ring-neutral-200/60">
                      <p className="text-sm font-semibold text-neutral-900">
                        {lang === "fr"
                          ? "Règle RELAIS : rien n’avance sans votre validation."
                          : "RELAIS rule: nothing moves without your approval."}
                      </p>
                      <p className="mt-1 text-sm text-neutral-600">
                        {lang === "fr"
                          ? "Nous confirmons le plan + devis, puis on exécute."
                          : "We confirm plan + quote, then we execute."}
                      </p>
                    </div>
                  </div>

                  {/* Proof + updates
                  <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-200/70">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold tracking-widest text-neutral-500">
                          {lang === "fr"
                            ? "PREUVES & MISES À JOUR"
                            : "PROOF & UPDATES"}
                        </p>
                        <p className="mt-2 text-sm text-neutral-700">
                          {t.hero.updateText}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                        {t.hero.status}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <ProofThumb label={lang === "fr" ? "Photo" : "Photo"} />
                      <ProofThumb label={lang === "fr" ? "Reçu" : "Receipt"} />
                      <ProofThumb
                        label={lang === "fr" ? "Rapport" : "Report"}
                      />
                      <span className="ml-1 text-sm text-neutral-600">
                        {t.hero.proofHint}
                      </span>
                    </div>

                    <div className="mt-4 text-xs text-neutral-500">
                      {t.hero.flowHint}
                    </div>
                  </div> */}
                </div>

                {/* Contact strip */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-900/10">
                  <p className="text-sm font-semibold text-neutral-900">
                    {lang === "fr"
                      ? "Réponse rapide via WhatsApp ou appel"
                      : "Fast response via WhatsApp or call"}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={hrefs.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
                    >
                      {lang === "fr" ? "WhatsApp" : "WhatsApp"}
                    </a>
                    <a
                      href={hrefs.tel}
                      className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900 ring-1 ring-emerald-900/10 hover:bg-emerald-100/30"
                    >
                      {lang === "fr"
                        ? `Appeler ${BRAND.phoneDisplay}`
                        : `Call ${BRAND.phoneDisplay}`}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* soft fade into white below hero */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-linear-to-b from-transparent to-white" />
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="scroll-mt-24 bg-[rgb(var(--surface-2))]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow={t.problem.eyebrow}
            title={t.problem.title}
            subtitle={
              lang === "fr"
                ? "RELAIS existe pour enlever le doute — avec un processus et des preuves."
                : "RELAIS exists to remove uncertainty — with process and proof."
            }
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {t.problem.bullets.map((b) => (
              <div
                key={b}
                className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm text-neutral-800">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section
        id="solution"
        className="border-t border-[rgb(var(--border))]/10 bg-[rgb(var(--canvas))] scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow={t.solution.eyebrow}
            title={t.solution.title}
            subtitle={t.solution.subtitle}
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {t.solution.cards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold tracking-widest text-neutral-500">
                  {c.title.toUpperCase()}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
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
        id="services"
        className="border-t border-[rgb(var(--border))]/10 bg-[rgb(var(--surface-2))] scroll-mt-24"
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

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow={t.faq.eyebrow}
            title={t.faq.title}
            subtitle={t.faq.subtitle}
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {t.faq.items.map((it) => (
              <details
                key={it.q}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-semibold text-neutral-900">
                  <span className="mr-2 inline-block rounded-full bg-neutral-900 px-2 py-1 text-xs font-semibold text-white">
                    ?
                  </span>
                  {it.q}
                  <span className="float-right text-neutral-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {it.a}
                </p>
              </details>
            ))}
          </div>
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
        {/* <Link href="/#hero" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-sm font-bold text-white">
            R
          </span>
          <span className="font-semibold tracking-tight">{BRAND.name}</span>
        </Link> */}
        <Link href="/#hero" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Relais"
            width={50}
            height={30}
            className="rounded-full"
          />
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-neutral-700 md:flex">
          <a className="hover:text-neutral-900" href="#problem">
            {t.nav.problem}
          </a>
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
          <a className="hover:text-neutral-900" href="#faq">
            {t.nav.faq}
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
          "rounded-lg px-3 py-1 text-xs font-semibold cursor-pointer",
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
          "rounded-lg px-3 py-1 text-xs font-semibold cursor-pointer",
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

function ServiceCard({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
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

// function ProofThumb({ label }: { label: string }) {
//   return (
//     <div className="inline-flex h-9 w-14 items-center justify-center rounded-lg bg-neutral-100 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200">
//       {label}
//     </div>
//   );
// }

function Footer({ t }: { t: (typeof COPY)[Lang] }) {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Image src="/logo.jpg" alt="Relais" width={50} height={20} />
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
              href={hrefs.whatsapp}
            >
              WhatsApp
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
