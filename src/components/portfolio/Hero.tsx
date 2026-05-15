import { motion } from "framer-motion";
import { Particles } from "./Particles";
import { MagneticButton } from "./MagneticButton";
import { useEffect, useState } from "react";

const ROLES = [
  "AI Engineer",
  "GenAI Developer",
  "DSA Enthusiast",
  "Full Stack Developer",
  "Agentic AI Builder",
];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = ROLES[i];
    const t = setTimeout(
      () => {
        if (!del) {
          if (text.length < cur.length) setText(cur.slice(0, text.length + 1));
          else setTimeout(() => setDel(true), 1400);
        } else {
          if (text.length > 0) setText(cur.slice(0, text.length - 1));
          else {
            setDel(false);
            setI((i + 1) % ROLES.length);
          }
        }
      },
      del ? 35 : 70,
    );
    return () => clearTimeout(t);
  }, [text, del, i]);
  return (
    <span className="text-[var(--neon)] text-glow">
      {text}
      <span className="animate-blink">▍</span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center">
      <Particles density={70} />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 gradient-radial" />

      {/* concentric rings */}
      <div className="pointer-events-none absolute right-[-200px] top-1/2 -translate-y-1/2 opacity-40">
        <div className="relative h-[700px] w-[700px]">
          <div className="absolute inset-0 rounded-full border border-[var(--neon)]/30 animate-spin-slow" />
          <div
            className="absolute inset-10 rounded-full border border-[var(--neon)]/20"
            style={{ animation: "spin-slow 30s linear reverse infinite" }}
          />
          <div className="absolute inset-24 rounded-full border border-[var(--neon)]/15 animate-spin-slow" />
          <div className="absolute inset-40 rounded-full border-2 border-dashed border-[var(--neon)]/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-32 w-32 rounded-full gradient-crimson opacity-40 blur-3xl animate-pulse-neon" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--neon)] animate-pulse shadow-[0_0_10px_var(--neon-glow)]" />
          <span>// agent_id : 0xSHIVAM • status : online</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold tracking-[-0.04em] leading-[0.9] text-[clamp(3.2rem,11vw,10rem)]"
        >
          <span className="block">SHIVAM</span>
          <span className="block">
            <span className="text-[var(--neon)] text-glow-strong">SINGH</span>
            <span className="text-[var(--neon)]">.</span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 max-w-2xl font-mono text-base md:text-lg text-muted-foreground"
        >
          <span className="text-foreground">$ whoami →</span> <Typer />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="mt-4 max-w-xl text-muted-foreground"
        >
          3rd-year engineering student building autonomous AI systems, RAG pipelines and algorithmic
          chaos in C++. I ship at the speed of inference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton href="#projects">view work →</MagneticButton>
          <MagneticButton href="/shivam-singh-resume.pdf" variant="ghost" download>
            ↓ download resume
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-10 left-6 md:left-10 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground"
        >
          <div className="relative h-10 w-px bg-[var(--neon)]/30 overflow-hidden">
            <div className="absolute inset-x-0 h-3 bg-[var(--neon)] animate-scan" />
          </div>
          scroll
        </motion.div>

        <div className="absolute bottom-10 right-6 md:right-10 hidden md:flex flex-col items-end gap-2 text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-[var(--neon)]">v3.0.25</span>
          <span>build / portfolio.exe</span>
        </div>
      </div>
    </section>
  );
}
