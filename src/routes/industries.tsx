import { createFileRoute } from "@tanstack/react-router";
import { Industries } from "@/components/site/sections/HomeSections";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | SinghBouncers Security" },
      { name: "description", content: "Trusted across corporate, healthcare, retail, education, hospitality, government, banking, logistics and more." },
      { property: "og:title", content: "Industries We Serve | SinghBouncers" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: () => (
    <>
      <section className="bg-hero-radial py-20 border-b border-border/60">
        <div className="container-x text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Industries</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl">Every sector, <span className="text-gradient-gold">tailored.</span></h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Our Security Personals and supervisors are trained to the conduct, compliance and culture of the environments they serve.</p>
        </div>
      </section>
      <Industries />
    </>
  ),
});
