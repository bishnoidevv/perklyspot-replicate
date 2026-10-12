import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck, BadgeCheck, Zap, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claim Your $750 Walmart Gift Card Reward" },
      {
        name: "description",
        content:
          "Follow four quick steps, complete the required deals and receive your $750 Walmart gift card reward once verified.",
      },
      { property: "og:title", content: "Claim Your $750 Walmart Gift Card Reward" },
      {
        property: "og:description",
        content:
          "Complete the steps, get verified and receive your $750 Walmart gift card reward within 24-48 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const OFFER_URL = "https://linkthem.net/aff_c?offer_id=1921&aff_id=148566";

const steps = [
  "Click the button below",
  "Enter your email & basic info",
  "Complete 4 to 5 required deals",
  "Receive your reward once verified",
];

const faqs = [
  {
    q: "How many deals do I need to complete?",
    a: "You need to complete 4 to 5 sponsored deals to qualify. Completing all required offers gives you the chance to receive the reward.",
  },
  {
    q: "What kind of deals are involved?",
    a: "Deals include free trials, app downloads, and special offers from our partners.",
  },
  {
    q: "When will I receive my reward?",
    a: "Eligible participants receive their reward within 24-48 hours after all requirements are verified.",
  },
];

const badges = [
  { icon: ShieldCheck, label: "Secure" },
  { icon: BadgeCheck, label: "Verified" },
  { icon: Zap, label: "Fast" },
];

function Index() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto w-full max-w-md">
        {/* Gift card hero */}
        <div
          className="relative overflow-hidden rounded-2xl px-6 py-10 text-center"
          style={{ background: "var(--gradient-card)", boxShadow: "var(--shadow-card)" }}
        >
          <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-16 -left-8 h-44 w-44 rounded-full bg-white/5" />
          <span className="relative inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold tracking-[0.2em] text-primary-foreground">
            WALMART
          </span>
          <p className="relative mt-4 text-6xl font-extrabold tracking-tight text-brand-yellow">
            $750
          </p>
          <p className="relative mt-3 text-xs font-semibold tracking-[0.25em] text-primary-foreground/80">
            GIFT CARD REWARD
          </p>
        </div>

        <h1 className="mt-8 text-center text-2xl font-extrabold leading-snug text-foreground">
          Follow the steps below
          <br />
          to receive your reward
        </h1>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Complete each step to qualify. Verification is required before your reward is issued.
        </p>

        <ol className="mt-7 space-y-3">
          {steps.map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-4 rounded-xl bg-card px-4 py-4"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <span className="text-sm font-semibold text-card-foreground">{step}</span>
            </li>
          ))}
        </ol>

        <a
          href={OFFER_URL}
          className="mt-7 flex h-14 items-center justify-center rounded-xl text-base font-bold text-primary-foreground transition-transform hover:scale-[1.01]"
          style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-card)" }}
        >
          Get Started →
        </a>

        <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
          Available in selected countries — US, UK, AU, CA
          <br />
          Reward subject to eligibility and offer terms.
        </p>

        <hr className="my-8 border-border" />

        <h2 className="text-center text-lg font-extrabold text-foreground">
          Frequently Asked Questions
        </h2>
        <div className="mt-5 divide-y divide-border border-b border-border">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="py-4">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="text-sm font-bold text-foreground">{faq.q}</span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}`}
                  />
                </span>
              </button>
              {open === i && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
