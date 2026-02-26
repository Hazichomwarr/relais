// app/page.tsx
// Single-page RELAIS landing (Next.js App Router) — Tailwind required.

import Link from "next/link";

const BRAND = {
  name: "RELAIS",
  domain: "relaisplatform.com",
  email: "contact@relaisplatform.com",
  phoneDisplay: "+1 (929) 453-7790",
  phoneHref: "+19294537790",
};

const hrefs = {
  website: `https://${BRAND.domain}`,
  mailto: `mailto:${BRAND.email}?subject=${encodeURIComponent(
    "RELAIS — New request",
  )}`,
  tel: `tel:${BRAND.phoneHref}`,
};

export default function HomePage2() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Header />

      {/* HERO */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest text-neutral-600">
                COORDINATION & ASSISTANCE SERVICES
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Trusted coordination for your family and projects back home.
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-700">
                Submit a request. We assign a verified local coordinator. You
                receive photo/video proof and clear updates until completion.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#request"
                  className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
                >
                  Submit a Request
                </a>
                <a
                  href="#how"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                >
                  How it works
                </a>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <TrustPill
                  title="Verified updates"
                  desc="Photos, notes, receipts"
                />
                <TrustPill
                  title="Human-reviewed"
                  desc="Not a random marketplace"
                />
                <TrustPill
                  title="Fast response"
                  desc="Same-day acknowledgment"
                />
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-700">
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
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-600">{BRAND.domain}</span>
              </div>
            </div>

            {/* “Status update” mock */}
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-neutral-800">
                  Example status update
                </p>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200">
                  Request ID: RL-1042
                </span>
              </div>

              <div className="mt-5 rounded-xl bg-white p-4 ring-1 ring-neutral-200">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-neutral-500">
                      REQUEST
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      Pay school fees & confirm enrollment
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      City: Ouagadougou • Urgency: Normal
                    </p>
                  </div>

                  <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                    Assigned
                  </span>
                </div>

                <div className="mt-4 border-t border-neutral-200 pt-4">
                  <p className="text-xs font-semibold text-neutral-500">
                    PROOF DELIVERED
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <ProofThumb label="Photo" />
                    <ProofThumb label="Receipt" />
                    <ProofThumb label="Report" />
                    <span className="ml-2 text-sm text-neutral-600">
                      3 items attached
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-white p-4 ring-1 ring-neutral-200">
                <p className="text-xs font-semibold text-neutral-500">UPDATE</p>
                <p className="mt-1 text-sm text-neutral-700">
                  Coordinator visited the school, confirmed enrollment status,
                  and submitted receipt + report for your approval.
                </p>
              </div>

              <div className="mt-5 text-xs text-neutral-500">
                RELAIS tracks each request: Pending → Assigned → In progress →
                Completed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title="Simple. Structured. Accountable."
            subtitle="No confusion. Clear steps from submission to completion."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <StepCard
              step="01"
              title="Submit a request"
              desc="Tell us what you need, where it should happen, and how urgent it is."
            />
            <StepCard
              step="02"
              title="We assign a coordinator"
              desc="We match your request to a trusted local coordinator approved by RELAIS."
            />
            <StepCard
              step="03"
              title="You receive verified proof"
              desc="Photos/videos + a written report, plus completion confirmation."
            />
          </div>

          <p className="mt-8 max-w-3xl text-sm text-neutral-600">
            You’re not hiring strangers. You’re working through RELAIS — with
            tracking, review, and clear accountability.
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
            eyebrow="SERVICES"
            title="What we help with"
            subtitle="Common diaspora needs — coordinated with proof and updates."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Home & property"
              items={["Inspections", "Repair follow-ups", "Renovation checks"]}
            />
            <ServiceCard
              title="Family support"
              items={["School fees support", "Document delivery", "Errands"]}
            />
            <ServiceCard
              title="Admin support"
              items={[
                "Paperwork drop-off/pick-up",
                "Appointment help",
                "Local coordination",
              ]}
            />
            <ServiceCard
              title="Purchases & deliveries"
              items={[
                "Materials & supplies",
                "Verified delivery",
                "Receipt capture",
              ]}
            />
            <ServiceCard
              title="Local verification"
              items={[
                "On-ground confirmation",
                "“Is this real?” checks",
                "Due diligence support",
              ]}
            />
            <ServiceCard
              title="Custom requests"
              items={[
                "Not listed? Submit anyway",
                "We’ll confirm feasibility",
                "You approve before work begins",
              ]}
            />
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section id="proof" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow="VERIFIED PROOF"
            title="What “verified” means at RELAIS"
            subtitle="Every completed request includes proof you can archive and share with family."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ProofCard
              title="Before / During / After"
              desc="We capture progress so you see what happened — not just a message."
            />
            <ProofCard
              title="Receipt / invoice (if applicable)"
              desc="For purchases and payments, we record supporting proof."
            />
            <ProofCard
              title="Coordinator report"
              desc="A structured summary: what was done, outcomes, and next steps."
            />
          </div>
        </div>
      </section>

      {/* TRUST & SAFETY */}
      <section
        id="trust"
        className="border-t border-neutral-200 bg-neutral-50 scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow="TRUST & SAFETY"
            title="Built for accountability"
            subtitle="We reduce uncertainty with clear process and review."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <BulletCard
              title="Approved coordinators"
              desc="Coordinators are reviewed before receiving assignments."
            />
            <BulletCard
              title="Tracked requests"
              desc="Each request moves through clear statuses with updates."
            />
            <BulletCard
              title="Human support"
              desc={`Reach us anytime at ${BRAND.email} or call ${BRAND.phoneDisplay}.`}
            />
            <BulletCard
              title="Review & dispute handling"
              desc="If something feels off, RELAIS reviews and resolves with you."
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            eyebrow="PRICING"
            title="Transparent, request-based quotes"
            subtitle="You see the quote before any work begins."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <PricingCard
              title="Service fee"
              desc="Covers coordination, tracking, and verification."
              note="Quoted per request"
            />
            <PricingCard
              title="Execution cost"
              desc="Coordinator time + local expenses when applicable."
              note="Quoted per request"
            />
          </div>

          <p className="mt-6 max-w-3xl text-sm text-neutral-600">
            Early MVP note: we acknowledge your request same-day and provide a
            quote after confirming details.
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
                READY TO START?
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Submit a request today.
              </h2>
              <p className="mt-3 max-w-xl text-neutral-200">
                Email us what you need and where it should happen. We’ll respond
                with next steps and a quote.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={hrefs.mailto}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-200"
                >
                  Email a request
                </a>
                <a
                  href={hrefs.tel}
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Call {BRAND.phoneDisplay}
                </a>
              </div>

              <p className="mt-6 text-sm text-neutral-300">
                Prefer web forms later? No problem — we’ll add a secure request
                form in the next iteration.
              </p>
            </div>

            {/* Request template card */}
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-sm font-semibold text-white">
                Copy/paste request template
              </p>

              <div className="mt-4 rounded-xl bg-black/30 p-4 text-sm text-neutral-200">
                <p>
                  <span className="text-white font-semibold">
                    Service type:
                  </span>{" "}
                  (example: School fees / Property check)
                </p>
                <p className="mt-2">
                  <span className="text-white font-semibold">
                    City + country:
                  </span>
                </p>
                <p className="mt-2">
                  <span className="text-white font-semibold">Details:</span>
                </p>
                <p className="mt-2">
                  <span className="text-white font-semibold">Urgency:</span>{" "}
                  Normal / Urgent
                </p>
                <p className="mt-2">
                  <span className="text-white font-semibold">
                    Best contact:
                  </span>{" "}
                  Email / Phone
                </p>
              </div>

              <p className="mt-4 text-xs text-neutral-300">
                Send to <span className="text-white">{BRAND.email}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ----------------------------- Components ----------------------------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-sm font-bold text-white">
            R
          </span>
          <span className="font-semibold tracking-tight">RELAIS</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-neutral-700 md:flex">
          <a className="hover:text-neutral-900" href="#how">
            How it works
          </a>
          <a className="hover:text-neutral-900" href="#services">
            Services
          </a>
          <a className="hover:text-neutral-900" href="#trust">
            Trust
          </a>
          <a className="hover:text-neutral-900" href="#pricing">
            Pricing
          </a>
        </nav>

        <a
          href="#request"
          className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Submit
        </a>
      </div>
    </header>
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

function TrustPill({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm text-neutral-600">{desc}</p>
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
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProofCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <p className="text-lg font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>

      <div className="mt-5 flex items-center gap-2">
        <ProofThumb label="Photo" />
        <ProofThumb label="Photo" />
        <ProofThumb label="Report" />
      </div>
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

function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">RELAIS</p>
            <p className="mt-1 text-sm text-neutral-600">
              Trusted coordination. Reliable execution. Verified proof.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-700">
            <a
              className="underline underline-offset-4 hover:text-neutral-900"
              href={hrefs.mailto}
            >
              contact@relaisplatform.com
            </a>
            <a
              className="underline underline-offset-4 hover:text-neutral-900"
              href={hrefs.tel}
            >
              +1 (929) 453-7790
            </a>
            <a
              className="underline underline-offset-4 hover:text-neutral-900"
              href={hrefs.website}
              target="_blank"
              rel="noreferrer"
            >
              relaisplatform.com
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} RELAIS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
