import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Check, MapPin, Phone, Mail } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { ContactForm } from "../ContactForm";
import { SERVICES, INDUSTRIES, STATS, TIMELINE, TESTIMONIALS, FAQS } from "@/lib/site-data";


export function Intro() {
  return (
    <section className="container-x py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-3">Who We Are</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display">
          A modern security firm in Pune built on <span className="text-gradient-gold">old-school discipline.</span>
        </h2>
        <p className="mt-5 text-muted-foreground text-lg">
          For nearly two decades Singh Bouncers & Security Services has protected enterprises, estates, dignitaries, and events in Pune with a single standard: world-class people, backed by serious technology and a relentless operations culture.
        </p>
        <ul className="mt-6 space-y-2">
          {["Veteran-led leadership team", "In-house training academy for bouncers and lady bouncers", "24/7 control room", "Integrated tech + manpower model"].map((t) => (
            <li key={t} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-gold" /> {t}</li>
          ))}
        </ul>
        <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-gold hover:underline">
          More about us <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { k: "Risk-First", v: "Every engagement starts with a site assessment." },
          { k: "People-Led", v: "We recruit, train and retain the top 6% of Security Personals, bouncers, and lady bouncers." },
          { k: "Tech-Enabled", v: "Patrol GPS, body cams and live ops dashboards." },
          { k: "Always-On", v: "A real human answers in under 30 minutes, 24/7." },
        ].map((c, i) => (
          <motion.div
            key={c.k}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="surface-card p-5"
          >
            <div className="text-gold font-display text-xl">{c.k}</div>
            <p className="mt-2 text-sm text-muted-foreground">{c.v}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="py-20 lg:py-28 bg-navy-deep/40 border-y border-border/60">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title={<>Twenty disciplines, one <span className="text-gradient-gold">standard.</span></>}
          description="A full spectrum of protective services, delivered with the same calm professionalism end to end."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
              className="surface-card p-5 group hover:border-gold/40 transition"
            >
              <div className="h-10 w-10 rounded-md bg-gold/10 ring-1 ring-gold/30 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition">
                <s.icon className="h-5 w-5 text-gold" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        eyebrow="Industries We Serve"
        title={<>Trusted across <span className="text-gradient-gold">every sector.</span></>}
        description="From quiet residential estates to high-traffic hospitals, our officers adapt to the environment they protect."
      />
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {INDUSTRIES.map((i, idx) => (
          <motion.div
            key={i.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.03 }}
            className="surface-card p-5 text-center hover:border-gold/40 transition"
          >
            <i.icon className="h-6 w-6 text-gold mx-auto" />
            <div className="mt-3 text-sm">{i.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => (to % 1 === 0 ? Math.floor(v).toLocaleString() : v.toFixed(1)));
  const [val, setVal] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setVal(v));
    return () => { controls.stop(); unsub(); };
  }, [inView, mv, rounded, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-navy-deep/60">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((s) => (
          <div key={s.label} className="surface-card p-6 text-center">
            <div className="font-display text-4xl lg:text-5xl text-gradient-gold">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Timeline() {
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        eyebrow="Our Journey"
        title={<>Two decades, <span className="text-gradient-gold">one mission.</span></>}
      />
      <div className="mt-14 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-10">
          {TIMELINE.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                <div className="font-display text-3xl text-gold">{t.year}</div>
                <div className="mt-1 text-lg font-semibold">{t.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
              </div>
              <div className="hidden md:block" />
              <span className="absolute left-4 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-navy-deep/40 border-y border-border/60">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client Voices"
          title={<>Why clients <span className="text-gradient-gold">stay with us.</span></>}
        />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="surface-card p-7"
            >
              <div className="text-gold text-3xl font-display leading-none">“</div>
              <blockquote className="mt-2 text-base lg:text-lg text-foreground/90">{t.quote}</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gold to-amber-700 flex items-center justify-center font-display text-primary-foreground">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-x py-20 lg:py-28 grid lg:grid-cols-[1fr_2fr] gap-12">
      <div>
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title={<>Answers, <span className="text-gradient-gold">up front.</span></>}
          description="Most prospective clients ask us these. If yours isn't here, just reach out."
        />
      </div>
      <div className="space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="surface-card overflow-hidden">
              <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                <span className="font-medium">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function ContactBlock() {
  return (
    <section className="container-x py-20 lg:py-28 grid lg:grid-cols-2 gap-10">
      <div>
        <SectionHeading
          align="left"
          eyebrow="Get In Touch"
          title={<>Tell us what you need to <span className="text-gradient-gold">protect.</span></>}
          description="Our security advisors will respond within one business hour."
        />
        <div className="mt-8 space-y-4 text-sm">
          <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-gold" /> Morewada Ganesh Chowk, Mundhwa, Pune City, Pune, Maharashtra - 411036</div>
          <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-gold" /> 9689483851</div>
          <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-gold" /> singhbouncerssecurityservices@gmail.com</div>
        </div>
       <div className="mt-8 rounded-xl overflow-hidden border border-border aspect-[16/10]">
  <iframe
    title="Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0061803601553!2d73.93424547506113!3d18.536676269243395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c17d5185fa4b%3A0x68440616f868f907!2sMorewada%20Ganesh%20Chowk%2C%20Mundhwa%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1783073090832!5m2!1sen!2sin"
    className="w-full h-full border-0"
    loading="lazy"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>
      </div>
      <ContactForm />
    </section>
  );
}
