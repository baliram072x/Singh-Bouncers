import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-radial">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="container-x relative pt-20 pb-24 lg:pt-32 lg:pb-36 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-gold"
          >
            <ShieldCheck className="h-3.5 w-3.5" /> GST Registered · PASARA Approved · Government Registered
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display leading-[1.05]"
          >
            Protection,<br />
            <span className="text-gradient-gold">crafted with discipline.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            Singh Bouncers & Security Services provides premium private security in Pune — manned guarding, bouncers, lady bouncers, executive protection, surveillance and integrated risk solutions — for clients who refuse to compromise on safety.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-medium text-primary-foreground hover:brightness-110 transition shadow-gold">
              Request a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium hover:border-gold/60 hover:text-gold transition">
              Explore Services
            </Link>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { icon: Clock, label: "24/7 Ops Center" },
              { icon: Award, label: "ISO 9001 Certified" },
              { icon: ShieldCheck, label: "Verified" },
            ].map(({ icon: I, label }) => (
              <div key={label} className="text-xs text-muted-foreground">
                <I className="h-5 w-5 text-gold mb-2" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border surface-card flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.22_0.06_260),oklch(0.12_0.02_260))]" />
            <img 
              src="/logo.png" 
              alt="Singh Bouncers & Security Services"
              className="relative z-10 w-3/4 h-3/4 object-contain"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -left-4 bottom-10 surface-card p-4 w-56 hidden md:block"
          >
            <div className="text-xs text-gold uppercase tracking-widest">Live Status</div>
            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm">All sites secure</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">328 active patrols</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
