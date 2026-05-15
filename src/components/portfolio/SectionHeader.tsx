import { motion } from "framer-motion";

export function SectionHeader({ idx, title, sub }: { idx: string; title: string; sub: string }) {
  return (
    <div className="mb-16 flex items-end justify-between gap-8 flex-wrap">
      <div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.4em] text-[var(--neon)]"
        >
          <span className="h-px w-10 bg-[var(--neon)]" />
          {idx} — {sub}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tighter"
        >
          {title}
        </motion.h2>
      </div>
    </div>
  );
}
