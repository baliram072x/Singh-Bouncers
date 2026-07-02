import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

const ITEMS = Array.from({ length: 12 }, (_, i) => i);
const HUES = [260, 220, 85, 30, 200, 50];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — SinghBouncers Security Personals & Operations" },
      { name: "description", content: "A look at our Security Personals, vehicles, control rooms and the environments we protect." },
      { property: "og:title", content: "Gallery | SinghBouncers" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: () => (
    <>
      <section className="bg-hero-radial py-20 border-b border-border/60">
        <div className="container-x text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Gallery</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl">Inside <span className="text-gradient-gold">our work.</span></h1>
        </div>
      </section>
      <section className="container-x py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {ITEMS.map((i) => {
            const h = HUES[i % HUES.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                className="aspect-square rounded-xl overflow-hidden border border-border relative group"
                style={{ background: `linear-gradient(135deg, oklch(0.25 0.06 ${h}), oklch(0.14 0.02 260))` }}
              >
                <div className="absolute inset-0 opacity-40 mix-blend-overlay"
                  style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white, transparent 60%)" }} />
                <div className="absolute bottom-3 left-3 right-3 text-xs uppercase tracking-widest text-gold/80 opacity-0 group-hover:opacity-100 transition">
                  Operation {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  ),
});
