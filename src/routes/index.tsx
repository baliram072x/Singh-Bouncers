import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/sections/Hero";
import { Intro, Services, Industries, Stats, Timeline, Testimonials, FAQ, ContactBlock } from "@/components/site/sections/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SinghBouncers — Premium Private Security Services | Pune" },
      { name: "description", content: "Manned guarding, bouncers, lady bouncers, executive protection, CCTV and integrated security services in Pune. GST registered, PASARA approved, government registered, 24/7." },
      { property: "og:title", content: "SinghBouncers — Premium Private Security Services | Pune" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Industries />
      <Stats />
      <Timeline />
      {/* <Testimonials /> */}
      <FAQ />
      <ContactBlock />
    </>
  );
}
