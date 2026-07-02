import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | SinghBouncers" },
      { name: "description", content: "How SinghBouncers collects, uses and protects your personal information." },
      { property: "og:title", content: "Privacy Policy | SinghBouncers" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <article className="container-x max-w-3xl py-20 prose-invert">
      <p className="text-xs uppercase tracking-[0.22em] text-gold">Legal</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: January 2026</p>
      <div className="mt-8 space-y-6 text-sm text-foreground/85 leading-relaxed">
        <Section title="1. Information we collect">
          We collect information you provide directly — name, email, phone, company and the details of your security enquiry — along with limited technical data about your visit (device, browser, pages viewed) to operate and improve this site.
        </Section>
        <Section title="2. How we use your information">
          To respond to enquiries, deliver requested services, manage contracts and engagements, comply with legal obligations and improve our website and services.
        </Section>
        <Section title="3. Sharing">
          We do not sell personal information. We share limited information with service providers acting on our behalf (e.g., hosting, email delivery) under appropriate confidentiality obligations, and where required by law.
        </Section>
        <Section title="4. Security">
          We use industry-standard administrative, technical and physical safeguards. No system is perfectly secure; we will notify affected individuals of any material breach in accordance with applicable law.
        </Section>
        <Section title="5. Your rights">
          Depending on where you reside, you may have rights to access, correct, delete or restrict our use of your personal information. Contact privacy@SinghBouncers.co to exercise these rights.
        </Section>
        <Section title="6. Contact">
          Questions? Email <a className="text-gold hover:underline" href="mailto:privacy@SinghBouncers.co">privacy@SinghBouncers.co</a>.
        </Section>
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
