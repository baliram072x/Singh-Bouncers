import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | SinghBouncers" },
      { name: "description", content: "Terms governing your use of the SinghBouncers website and services." },
      { property: "og:title", content: "Terms and Conditions | SinghBouncers" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <article className="container-x max-w-3xl py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-gold">Legal</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Terms and Conditions</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: January 2026</p>
      <div className="mt-8 space-y-6 text-sm text-foreground/85 leading-relaxed">
        <Section title="1. Acceptance">By accessing this website you agree to these Terms. If you do not agree, please do not use the site.</Section>
        <Section title="2. Services">All security services are provided pursuant to a separate written agreement that governs the specific scope, deliverables, fees and liability.</Section>
        <Section title="3. Intellectual property">All content, marks and materials on this site are owned by SinghBouncers or its licensors and may not be reproduced without permission.</Section>
        <Section title="4. Disclaimers">The site is provided "as is" without warranties of any kind, to the maximum extent permitted by law.</Section>
        <Section title="5. Limitation of liability">To the fullest extent permitted by law, SinghBouncers shall not be liable for indirect, incidental or consequential damages arising from your use of the site.</Section>
        <Section title="6. Governing law">These Terms are governed by the laws of the State of New York, without regard to its conflict of laws principles.</Section>
        <Section title="7. Contact">Questions? Email <a className="text-gold hover:underline" href="mailto:legal@SinghBouncers.co">legal@SinghBouncers.co</a>.</Section>
      </div>
    </article>
  ),
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl text-gold">{title}</h2>
      <p className="mt-2">{children}</p>
    </section>
  );
}
