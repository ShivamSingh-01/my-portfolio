import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { MagneticButton } from "./MagneticButton";

const HIGHLIGHTS = [
  { k: "Degree", v: "B.Tech ECE" },
  { k: "Institute", v: "JGEC" },
  { k: "Batch", v: "2023 – 2027" },
  { k: "Focus", v: "GenAI / Agentic AI" },
  { k: "Stack", v: "Python • LangGraph" },
  { k: "Location", v: "India" },
];

export function Resume() {
  return (
    <section id="resume" className="relative py-32 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 gradient-radial opacity-50" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader idx="04" title="Get The Dossier" sub="resume // download" />

        <div className="grid lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-strong clip-corner p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 h-64 w-64 gradient-crimson opacity-20 blur-3xl rounded-full" />
            <div className="relative">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon)] mb-4">
                // resume.pdf — v2026.05
              </div>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95]">
                Download my <span className="text-[var(--neon)] text-glow-strong">resume</span>.
              </h3>
              <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
                The full dossier — education, GenAI projects, agentic AI systems, RAG pipelines and
                the tooling I ship with. One click. No paywall. No tracking.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <MagneticButton href="/shivam-singh-resume.pdf" download>
                  ↓ download resume.pdf
                </MagneticButton>
                <MagneticButton href="/shivam-singh-resume.pdf" variant="ghost">
                  open in browser →
                </MagneticButton>
              </div>

              <div className="mt-10 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-[var(--neon)] animate-pulse shadow-[0_0_10px_var(--neon-glow)]" />
                <span>file_type: pdf</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">updated: 2026</span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.k}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass clip-corner p-4 hover:border-[var(--neon)]/60 transition-all"
                data-cursor="hover"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
                  // {h.k}
                </div>
                <div className="font-bold text-sm text-foreground group-hover:text-[var(--neon)]">
                  {h.v}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
