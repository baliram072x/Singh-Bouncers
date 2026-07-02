import { Link } from "@tanstack/react-router";
import { Shield, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-navy-deep/60">
      <div className="container-x py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-18 w-18 items-center justify-center overflow-hidden rounded-md">
              <img
                src="/logo.png"
                alt="Singh Bouncers"
                className="h-full w-full object-contain"
              />
            </span>
            <div className="font-display text-lg"><span className="text-gold">Singh</span> Bouncers & Security Services</div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Premium private security and protective services for enterprises, estates, and events — built on discipline, discretion, and trust.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((I, i) => (
              <a key={i} href="https://www.instagram.com/singh_bouncers_pune?igsh=MW9taDZ5NmExeWduZw==" aria-label="social" className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border hover:border-gold/60 hover:text-gold transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/industries" className="hover:text-foreground">Industries</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/careers" className="hover:text-foreground">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms & Conditions</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> 3, Mundhwa Rd, Lonkar Ali, Magarpatta, Mundhwa</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> 9689483851</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> singhbouncerssecurityservices@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>Licensed · Insured · Bonded</p>
        </div>
      </div>
    </footer>
  );
}
