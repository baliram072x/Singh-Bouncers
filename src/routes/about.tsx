import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Timeline } from "@/components/site/sections/HomeSections";
import { Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Singh Bouncers & Security Services — Discipline, Discretion, Trust | Pune" },
      { name: "description", content: "Veteran-led, ISO 9001 certified private security firm in Pune protecting enterprises, estates and events for nearly two decades with bouncers, lady bouncers, and more." },
      { property: "og:title", content: "About Singh Bouncers & Security Services | Pune" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-hero-radial py-20 lg:py-28 border-b border-border/60">
        <div className="container-x text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">About Us</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl">A firm built on <span className="text-gradient-gold">trust earned.</span></h1>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">Founded in 2007 by a small team of veteran protective Security Personals, Singh Bouncers & Security Services has grown into Pune's leading security firm known for one thing above all: Security Personals, bouncers, and lady bouncers you can trust.</p>
        </div>
      </section>

      <section className="container-x py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionHeading align="left" eyebrow="Our Mission" title={<>Protect what <span className="text-gradient-gold">matters most.</span></>} />
          <p className="mt-5 text-muted-foreground">We exist to give our clients calm. Calm comes from preparation, from people who care, and from an operations culture that refuses shortcuts. Whether we are guarding a hospital lobby or escorting a principal across borders, the standard is the same.</p>
        </div>
        <div>
          <SectionHeading align="left" eyebrow="Our Values" title={<>What we <span className="text-gradient-gold">stand for.</span></>} />
          <ul className="mt-5 space-y-3">
            {["Integrity above all", "Respect for every person on every site", "Continuous training and feedback", "Transparent reporting and audits", "Long-term partnerships, not transactions"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-gold mt-1" /> {t}</li>
            ))}
          </ul>
        </div>
      </section>

      <Timeline />
    </>
  );
}
