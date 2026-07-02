import {
  Shield, UserCheck, Camera, Building2, Car, Briefcase, AlarmSmoke, Dog,
  Search, Users, Lock, KeyRound, ShieldAlert, Radio, HeartHandshake,
  PartyPopper, Plane, Banknote, Hotel, Hammer,
  Factory, Store, GraduationCap, Stethoscope, ShoppingBag, Landmark, Warehouse, HomeIcon,
} from "lucide-react";

export const SERVICES = [
  { icon: Shield, title: "Security Guard Services", desc: "Professional uniformed security guards deployed across fixed posts and patrols, 24/7." },
  { icon: Shield, title: "Campus Perimeter Combat Security", desc: "Specialized perimeter security for campuses and large facilities with rapid response." },
  { icon: UserCheck, title: "Bouncer Security Services", desc: "Trained bouncers for events, clubs, and private functions." },
  { icon: Building2, title: "Corporate Security Services", desc: "Front-of-house, access control and risk management for offices and HQs." },
  { icon: Building2, title: "Security For Mall and Commercial Complexes", desc: "Comprehensive security solutions for malls, shopping centers and commercial complexes." },
  { icon: UserCheck, title: "Security For Celebrities", desc: "Discreet celebrity security and protection services." },
  { icon: HomeIcon, title: "Residential Society or Complexes Security", desc: "24/7 security for residential societies and apartment complexes." },
  { icon: UserCheck, title: "Security for Personal Guard", desc: "Personal protection officers and bodyguards for individuals." },
  { icon: Warehouse, title: "Security For Warehouse Godowns", desc: "Warehouse and godown security with inventory protection and access control." },
  { icon: Banknote, title: "Security For Banks or ATMs", desc: "Specialized security for banks, ATMs and financial institutions." },
  { icon: Stethoscope, title: "Security Services for Hospital", desc: "Hospital security with patient safety and crowd management." },
  { icon: GraduationCap, title: "Security Services For Educational Institutions", desc: "Campus security for schools, colleges and universities." },
  { icon: Hotel, title: "Security Guards For Hotels or Restaurants", desc: "Hotel and restaurant security with guest-first approach." },
  { icon: Banknote, title: "Banking Institutional and Customer Safety", desc: "Complete safety solutions for banking and institutional clients." },
  { icon: Car, title: "Secure Transit Security", desc: "Secure transit and escort services for valuables and personnel." },
  { icon: Store, title: "Real Estate and Market Place Security", desc: "Security for real estate sites and market places." },
  { icon: Users, title: "Women Safety and Transport Security", desc: "Specialized women safety and transport security services." },
  { icon: UserCheck, title: "VVIP Security", desc: "High-level VVIP security and protection services." },
  { icon: PartyPopper, title: "Event Management Security", desc: "Complete event security planning and execution." },
] as const;

export const INDUSTRIES = [
  { icon: Building2, name: "Corporate Offices" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Store, name: "Retail and Malls" },
  { icon: GraduationCap, name: "Education" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: ShoppingBag, name: "Hospitality" },
  { icon: Landmark, name: "Government" },
  { icon: Warehouse, name: "Logistics and Warehousing" },
  { icon: HomeIcon, name: "Residential Estates" },
  { icon: Banknote, name: "Banking and Finance" },
  { icon: PartyPopper, name: "Events and Venues" },
  { icon: Hammer, name: "Construction" },
] as const;

export const STATS = [
  { value: 18, suffix: "+", label: "Years of Service" },
  { value: 2400, suffix: "+", label: "Security Personals Deployed" },
  { value: 320, suffix: "+", label: "Client Sites" },
  { value: 99.6, suffix: "%", label: "Incident Response" },
] as const;

export const TIMELINE = [
  { year: "2007", title: "Founded", text: "Established with a small unit of veteran protective Security Personals in Pune." },
  { year: "2010", title: "Pune Expansion", text: "Opened regional ops centers across Pune and surrounding areas." },
  { year: "2015", title: "ISO 9001 Certified", text: "Achieved international quality management certification." },
  { year: "2020", title: "Tech Division", text: "Launched CCTV, alarms and integrated access control practice." },
  { year: "2026", title: "Pune Reach", text: "Crossed 300 active sites with a 24/7 control room in Pune." },
  { year: "2026", title: "Today", text: "Trusted by leading businesses, events, and residential complexes in Pune." },
] as const;

export const TESTIMONIALS = [
  { name: "Marcus Hale", role: "COO, Northcliff Holdings", quote: "Singh Bouncers & Security Services transformed our site security. Their Security Personals are calm, professional, and exceptionally well-trained." },
  { name: "Dr. Priya Nair", role: "Director, Meridian Hospital", quote: "Hospital environments demand empathy and vigilance in equal measure. Singh Bouncers & Security Services delivers both, consistently." },
  { name: "Liam Becker", role: "GM, The Rosewood Hotel", quote: "Their concierge security blends seamlessly with our guest experience. We wouldn't trust anyone else." },
  { name: "Anika Roy", role: "Event Director, LUMEN Festival", quote: "From accreditation to crowd flow, their event team made a 40,000-person weekend feel effortless." },
] as const;

export const FAQS = [
  { q: "Are your Security Personals, bouncers, and lady bouncers licensed and insured?", a: "Every Security Personal, bouncer, and lady bouncer is fully licensed in Maharashtra, verified, and covered under our comprehensive liability and workers' compensation insurance." },
  { q: "How quickly can you deploy to a new site in Pune?", a: "Standard mobilization is 48 hours. For urgent needs, our rapid-response unit can deploy qualified Security Personals or bouncers within 4–6 hours in Pune." },
  { q: "Do you provide armed and unarmed Security Personals and bouncers?", a: "Yes. We deploy unarmed, armed, and tactically trained Security Personals and bouncers based on a site-specific risk assessment we perform before contract." },
  { q: "Can I scale services up or down seasonally?", a: "Absolutely. Many of our retail, hospitality and event clients in Pune flex Security Personal or bouncer counts weekly. Our contracts are designed around that reality." },
  { q: "How do you supervise and audit Security Personals and bouncers?", a: "Every post is monitored by our 24/7 control room with GPS check-ins, body-worn cameras where appropriate, and randomized supervisor visits." },
  { q: "Do you offer integrated tech + manpower?", a: "Yes — manned guarding, bouncers, lady bouncers combined with CCTV, access control and alarm response is our most-requested package in Pune." },
] as const;
