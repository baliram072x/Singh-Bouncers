import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  service: z.string().min(1, "Choose a service"),
  message: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(1000),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Create WhatsApp message
    const whatsappMessage = `
*New Enquiry - Singh Bouncers & Security Services*

👤 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
🛡️ Service: ${data.service}
💬 Message: ${data.message}
    `.trim();

    // WhatsApp number (your number with country code)
    const whatsappNumber = "919689483851";

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="surface-card p-6 lg:p-8 space-y-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name" error={errors.name?.message}>
          <input {...register("name")} className="field" placeholder="your name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} type="email" className="field" placeholder="your email" />
        </Field>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Phone" error={errors.phone?.message}>
          <input {...register("phone")} className="field" placeholder="+91" />
        </Field>
        <Field label="Service Required" error={errors.service?.message}>
          <select {...register("service")} className="field" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Manned Guarding</option>
            <option>Personal Protection</option>
            <option>CCTV & Surveillance</option>
            <option>Event Security</option>
            <option>Corporate Security</option>
            <option>Other</option>
          </select>
        </Field>
      </div>
      <Field label="Message" error={errors.message?.message}>
        <textarea {...register("message")} rows={5} className="field resize-none" placeholder="Tell us about your site, timeline, and any specific concerns…" />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 w-full rounded-md bg-gold px-5 py-3 font-medium text-primary-foreground hover:brightness-110 transition shadow-gold disabled:opacity-60"
      >
        {sent ? (<><CheckCircle2 className="h-4 w-4" /> Enquiry received</>) : (<><Send className="h-4 w-4" /> {isSubmitting ? "Sending…" : "Send Enquiry"}</>)}
      </button>

      <style>{`
        .field {
          width: 100%;
          background: oklch(0.14 0.02 260);
          color: var(--color-foreground);
          border: 1px solid var(--color-border);
          border-radius: 0.5rem;
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .field:focus { border-color: color-mix(in oklab, var(--gold) 60%, transparent); box-shadow: 0 0 0 3px color-mix(in oklab, var(--gold) 20%, transparent); }
        .field::placeholder { color: color-mix(in oklab, var(--color-muted-foreground) 80%, transparent); }
      `}</style>
    </motion.form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
