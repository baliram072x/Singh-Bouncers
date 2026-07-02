import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";

const POSTS = [
  { slug: "choosing-security-firm", title: "How to choose a private security firm in 2026", date: "Mar 12, 2026", excerpt: "A practical buyer's guide for facilities and operations leaders evaluating providers." },
  { slug: "cctv-vs-guards", title: "CCTV vs. guards: why the best programs use both", date: "Feb 28, 2026", excerpt: "Cameras see; people decide. Here's how to architect the right blend." },
  { slug: "event-security-playbook", title: "An event security playbook for 10K+ attendees", date: "Feb 02, 2026", excerpt: "From accreditation to crowd flow to crisis comms — the operating model we use." },
  { slug: "training-the-top-6-percent", title: "Inside our academy: training the top 6%", date: "Jan 18, 2026", excerpt: "A look at how we recruit, train and retain Security Personals above the industry standard." },
  { slug: "executive-protection-myths", title: "Five myths about executive protection", date: "Jan 04, 2026", excerpt: "Real close protection doesn't look like the movies — and that's the point." },
  { slug: "ops-center-anatomy", title: "Anatomy of a 24/7 security operations center", date: "Dec 12, 2025", excerpt: "What goes on behind the dispatch radios, screens and protocols." },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Security Insights and Field Notes | SinghBouncers" },
      { name: "description", content: "Field notes, guides and analysis from our security operations team." },
      { property: "og:title", content: "Blog | SinghBouncers" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: () => (
    <>
      <section className="bg-hero-radial py-20 border-b border-border/60">
        <div className="container-x text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Blog</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl">Field notes from the <span className="text-gradient-gold">front line.</span></h1>
        </div>
      </section>
      <section className="container-x py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {POSTS.map((p) => (
          <article key={p.slug} className="surface-card overflow-hidden flex flex-col">
            <div className="aspect-[16/9] bg-gradient-to-br from-navy to-ink relative overflow-hidden">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, oklch(0.80 0.14 85), transparent 60%)" }} />
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="text-xs text-muted-foreground inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-gold" /> {p.date}</div>
              <h2 className="mt-2 font-display text-xl">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{p.excerpt}</p>
              <Link to="/blog" className="mt-4 inline-flex items-center gap-1 text-sm text-gold hover:underline">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  ),
});
