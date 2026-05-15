import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "> initializing neural cortex...",
  "> loading agentic protocols...",
  "> mounting LLM inference layer...",
  "> calibrating crimson grid...",
  "> handshake // shivam.singh online",
];

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const [lineIdx, setLineIdx] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const dur = 2200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(100, Math.round(((t - start) / dur) * 100));
      setPct(p);
      setLineIdx(Math.min(LINES.length - 1, Math.floor((p / 100) * LINES.length)));
      if (p < 100) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => {
          setDone(true);
          setTimeout(onDone, 550);
        }, 280);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute inset-0 gradient-radial" />
          <div className="absolute inset-0 scanlines opacity-50" />
          <div className="relative w-[min(90vw,560px)] font-mono text-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-[var(--neon)] shadow-[0_0_12px_var(--neon-glow)]" />
              <span className="text-[var(--neon)] tracking-[0.3em] uppercase text-xs">
                // SYS_BOOT
              </span>
            </div>
            <motion.h1
              className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter text-glow-strong"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="animate-glitch inline-block">SHIVAM</span>
              <span className="text-[var(--neon)]">.</span>
              <span>OS</span>
            </motion.h1>

            <div className="mb-3 h-px w-full bg-[var(--neon)]/20" />
            <div className="space-y-1 text-muted-foreground min-h-[140px]">
              {LINES.slice(0, lineIdx + 1).map((l, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                  {l}
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex items-end justify-between mb-2">
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  load
                </span>
                <span className="text-3xl font-bold text-[var(--neon)] text-glow tabular-nums">
                  {pct.toString().padStart(3, "0")}%
                </span>
              </div>
              <div className="h-1 w-full overflow-hidden rounded bg-secondary">
                <motion.div
                  className="h-full gradient-crimson neon-border-soft"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
