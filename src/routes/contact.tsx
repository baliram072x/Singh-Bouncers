import { createFileRoute } from "@tanstack/react-router";
import { ContactBlock } from "@/components/site/sections/HomeSections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SinghBouncers — Request a Security Consultation" },
      { name: "description", content: "Tell us what you need to protect. Our advisors respond within one business hour." },
      { property: "og:title", content: "Contact SinghBouncers" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <>
      <section className="bg-hero-radial py-20 border-b border-border/60">
        <div className="container-x text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Contact</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl">Let's talk about <span className="text-gradient-gold">your security.</span></h1>
        </div>
      </section>
      <ContactBlock />
    </>
  ),
});
