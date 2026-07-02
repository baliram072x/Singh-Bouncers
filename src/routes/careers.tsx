import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

const ROLES = [
  { title: "Security Security Personal (Unarmed)", location: "New York, NY", type: "Full-time", desc: "Front-of-house and patrol roles across our corporate and hospitality sites." },
  { title: "Armed Protection Security Personal", location: "Multiple Locations", type: "Full-time", desc: "For candidates with state armed certification and prior LE/military service." },
  { title: "Control Room Operator", location: "New York, NY", type: "Shift", desc: "Monitor CCTV feeds, alarms and dispatch from our 24/7 ops center." },
  { title: "Site Supervisor", location: "Boston, MA", type: "Full-time", desc: "Lead a roster of Security Personals across multi-site portfolios with daily reporting." },
  { title: "Close Protection Security Personal", location: "On Assignment", type: "Contract", desc: "Discreet executive protection for principals and families. SIA/CP qualifications preferred." },
  { title: "Recruiter — Security Talent", location: "Hybrid · NYC", type: "Full-time", desc: "Help us find and retain the top 6% of Security Personals in every market we operate." },
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at SinghBouncers — Join a Top-Tier Security Team" },
      { name: "description", content: "Open security and operations roles. Security Personal, supervisor, control room, recruiter and close protection positions." },
      { property: "og:title", content: "Careers at SinghBouncers" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: () => (
    <>
      <section className="bg-hero-radial py-20 border-b border-border/60">
        <div className="container-x text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Careers</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl">Build a career in <span className="text-gradient-gold">protective services.</span></h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">We invest in our Security Personals — fair pay, real training, clear advancement, and the equipment to do the job well.</p>
        </div>
      </section>

      <section className="container-x py-16 grid gap-4">
        {ROLES.map((r) => (
          <div key={r.title} className="surface-card p-6 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{r.title}</h2>
              <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-gold" /> {r.location}</span>
                <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-gold" /> {r.type}</span>
                <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5 text-gold" /> Security</span>
              </div>
            </div>
            <a href="mailto:careers@SinghBouncers.co" className="inline-flex items-center gap-1.5 rounded-md bg-gold px-4 py-2 text-sm font-medium text-primary-foreground hover:brightness-110 transition">
              Apply <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </section>
    </>
  ),
});
