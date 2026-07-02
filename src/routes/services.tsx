import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/sections/HomeSections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Security Services — Manned Guarding, Protection, CCTV | SinghBouncers" },
      { name: "description", content: "Twenty disciplines from manned guarding and executive protection to CCTV, K9, mobile patrols, event security and more." },
      { property: "og:title", content: "Security Services | SinghBouncers" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <>
      <section className="bg-hero-radial py-20 border-b border-border/60">
        <div className="container-x text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Services</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl">A full spectrum of <span className="text-gradient-gold">protection.</span></h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">From front-desk concierge to armed close protection, our service catalogue is designed to be combined.</p>
        </div>
      </section>
      <Services />
    </>
  ),
});
