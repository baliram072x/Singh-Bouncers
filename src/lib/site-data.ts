import {
  Shield, UserCheck, Camera, Building2, Car, Briefcase, AlarmSmoke, Dog,
  Search, Users, Lock, KeyRound, ShieldAlert, Radio, HeartHandshake,
  PartyPopper, Plane, Banknote, Hotel, Hammer,
  Factory, Store, GraduationCap, Stethoscope, ShoppingBag, Landmark, Warehouse, HomeIcon,
} from "lucide-react";

export const SERVICES = [
  { icon: Shield, title: "Manned Guarding", desc: "Trained, uniformed Security Personals deployed across fixed posts and patrols, 24/7." },
  { icon: UserCheck, title: "Personal Protection", desc: "Discreet close-protection Security Personals for executives, dignitaries, and families." },
  { icon: Camera, title: "CCTV Surveillance", desc: "Design, install and monitor high-definition camera systems with remote response." },
  { icon: Building2, title: "Corporate Security", desc: "Front-of-house, access control and risk management for offices and HQs." },
  { icon: Car, title: "Mobile Patrols", desc: "Marked vehicle patrols with GPS-verified visit logs and rapid response." },
  { icon: Briefcase, title: "Cash-in-Transit", desc: "Armored and unarmored escort for high-value cash and asset movement." },
  { icon: AlarmSmoke, title: "Fire & Safety", desc: "Fire watch, evacuation marshals, and on-site safety Security Personals." },
  { icon: Dog, title: "K9 Security", desc: "Certified detection and patrol dogs handled by accredited Security Personals." },
  { icon: Search, title: "Investigations", desc: "Confidential corporate, due diligence and background investigations." },
  { icon: Users, title: "Event Security", desc: "Crowd management, accreditation and VIP control for events of any scale." },
  { icon: Lock, title: "Access Control", desc: "Visitor management, turnstiles, badging and biometric access systems." },
  { icon: KeyRound, title: "Key Holding", desc: "Secure key custody with alarm response and out-of-hours attendance." },
  { icon: ShieldAlert, title: "Risk Assessment", desc: "On-site security audits, threat modeling and mitigation plans." },
  { icon: Radio, title: "Control Room", desc: "24/7 alarm monitoring and dispatch from our certified operations center." },
  { icon: HeartHandshake, title: "Concierge Security", desc: "Polished front-desk Security Personals blending hospitality with vigilance." },
  { icon: PartyPopper, title: "Wedding & Private", desc: "Discreet protection for private celebrations and high-profile gatherings." },
  { icon: Plane, title: "Travel Security", desc: "Secure transfers, advance work, and protective travel logistics." },
  { icon: Banknote, title: "Bank & ATM Guarding", desc: "Specialist Security Personals trained for financial institution protocols." },
  { icon: Hotel, title: "Hospitality Security", desc: "Luxury hotel and resort security with guest-first conduct." },
  { icon: Hammer, title: "Construction Site", desc: "Site protection, plant security and access control for active builds." },
] as const;

export const INDUSTRIES = [
  { icon: Building2, name: "Corporate Offices" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Store, name: "Retail & Malls" },
  { icon: GraduationCap, name: "Education" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: ShoppingBag, name: "Hospitality" },
  { icon: Landmark, name: "Government" },
  { icon: Warehouse, name: "Logistics & Warehousing" },
  { icon: HomeIcon, name: "Residential Estates" },
  { icon: Banknote, name: "Banking & Finance" },
  { icon: PartyPopper, name: "Events & Venues" },
  { icon: Hammer, name: "Construction" },
] as const;

export const STATS = [
  { value: 18, suffix: "+", label: "Years of Service" },
  { value: 2400, suffix: "+", label: "Security Personals Deployed" },
  { value: 320, suffix: "+", label: "Client Sites" },
  { value: 99.6, suffix: "%", label: "Incident Response" },
] as const;

export const TIMELINE = [
  { year: "2007", title: "Founded", text: "Established with a small unit of veteran protective Security Personals." },
  { year: "2010", title: "Statewide Expansion", text: "Opened regional ops centers across three states." },
  { year: "2015", title: "ISO 9001 Certified", text: "Achieved international quality management certification." },
  { year: "2020", title: "Tech Division", text: "Launched CCTV, alarms and integrated access control practice." },
  { year: "2026", title: "National Reach", text: "Crossed 300 active sites with a 24/7 national control room." },
  { year: "2026", title: "Today", text: "Trusted by Fortune-listed clients, embassies, and private estates." },
] as const;

export const TESTIMONIALS = [
  { name: "Marcus Hale", role: "COO, Northcliff Holdings", quote: "SinghBouncers transformed our site security. Their Security Personals are calm, professional, and exceptionally well-trained." },
  { name: "Dr. Priya Nair", role: "Director, Meridian Hospital", quote: "Hospital environments demand empathy and vigilance in equal measure. SinghBouncers delivers both, consistently." },
  { name: "Liam Becker", role: "GM, The Rosewood Hotel", quote: "Their concierge security blends seamlessly with our guest experience. We wouldn't trust anyone else." },
  { name: "Anika Roy", role: "Event Director, LUMEN Festival", quote: "From accreditation to crowd flow, their event team made a 40,000-person weekend feel effortless." },
] as const;

export const FAQS = [
  { q: "Are your Security Personals licensed and insured?", a: "Every Security Personal is fully licensed in their state, verfied, and covered under our comprehensive liability and workers' compensation insurance." },
  { q: "How quickly can you deploy to a new site?", a: "Standard mobilization is 48 hours. For urgent needs, our rapid-response unit can deploy qualified Security Personals within 4–6 hours in major metros." },
  { q: "Do you provide armed and unarmed Security Personals?", a: "Yes. We deploy unarmed, armed, and tactically trained Security Personals based on a site-specific risk assessment we perform before contract." },
  { q: "Can I scale services up or down seasonally?", a: "Absolutely. Many of our retail, hospitality and event clients flex Security Personal counts weekly. Our contracts are designed around that reality." },
  { q: "How do you supervise and audit Security Personals?", a: "Every post is monitored by our 24/7 control room with GPS check-ins, body-worn cameras where appropriate, and randomized supervisor visits." },
  { q: "Do you offer integrated tech + manpower?", a: "Yes — manned guarding combined with CCTV, access control and alarm response is our most-requested package." },
] as const;
