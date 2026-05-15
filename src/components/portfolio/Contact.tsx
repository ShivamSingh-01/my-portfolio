import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { MagneticButton } from "./MagneticButton";

const SOCIALS = [
  { l: "GitHub", h: "https://github.com/ShivamSingh-01", u: "@ShivamSingh-01" },
  { l: "Gmail", h: "mailto:shivamjgec@gmail.com", u: "shivamjgec@gmail.com" },
  { l: "Phone", h: "tel:+918900762605", u: "+91 8900 762 605" },
  { l: "LinkedIn", h: "https://www.linkedin.com/in/shivamsingh-01", u: "/in/shivamsingh-01" },
  { l: "Resume", h: "/shivam-singh-resume.pdf", u: "download .pdf" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 gradient-radial opacity-60" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader idx="06" title="Establish Link" sub="contact" />

        <div className="grid lg:grid-cols-12 gap-6">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="lg:col-span-7 glass-strong clip-corner p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 h-40 w-40 gradient-crimson opacity-20 blur-3xl rounded-full" />
            <div className="relative space-y-5">
              <div>
                <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--neon)]">
                  // name
                </label>
                <input
                  required
                  className="mt-2 w-full bg-transparent border-b border-[var(--neon)]/30 pb-2 outline-none focus:border-[var(--neon)] transition-colors text-lg"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--neon)]">
                  // email
                </label>
                <input
                  required
                  type="email"
                  className="mt-2 w-full bg-transparent border-b border-[var(--neon)]/30 pb-2 outline-none focus:border-[var(--neon)] transition-colors text-lg"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--neon)]">
                  // transmission
                </label>
                <textarea
                  required
                  rows={4}
                  className="mt-2 w-full bg-transparent border-b border-[var(--neon)]/30 pb-2 outline-none focus:border-[var(--neon)] transition-colors text-lg resize-none"
                />
              </div>
              <div className="pt-3">
                <MagneticButton>{sent ? "✓ packet sent" : "transmit →"}</MagneticButton>
              </div>
            </div>
          </motion.form>

          <div className="lg:col-span-5 space-y-3">
            {SOCIALS.map((s, i) => (
              <motion.a
                key={s.l}
                href={s.h}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative flex items-center justify-between glass clip-corner px-5 py-4 hover:border-[var(--neon)]/60 transition-all hover:-translate-x-1 overflow-hidden"
                data-cursor="hover"
              >
                <div className="absolute inset-0 gradient-crimson opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative flex items-center gap-4">
                  <div className="h-9 w-9 rounded-sm border border-[var(--neon)]/40 flex items-center justify-center font-mono text-xs text-[var(--neon)] group-hover:bg-[var(--neon)] group-hover:text-primary-foreground transition-all">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="font-bold group-hover:text-[var(--neon)] transition-colors">
                      {s.l}
                    </div>
                    <div className="text-[11px] font-mono text-muted-foreground">{s.u}</div>
                  </div>
                </div>
                <span className="relative font-mono text-[var(--neon)] opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-[var(--neon)]/20 pt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <div>© 2025 // shivam.singh — built with crimson photons</div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--neon)] animate-pulse" />
            all systems operational
          </div>
        </div>
      </div>
    </section>
  );
}
