import { motion } from "framer-motion";

const items = [
  { label: "00 / Home", href: "#home" },
  { label: "01 / About", href: "#about" },
  { label: "02 / Skills", href: "#skills" },
  { label: "03 / Work", href: "#projects" },
  { label: "04 / Resume", href: "#resume" },
  { label: "05 / Path", href: "#timeline" },
  { label: "06 / Contact", href: "#contact" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="glass-strong clip-corner flex items-center gap-1 px-2 py-2 text-xs font-mono">
        <a
          href="#home"
          className="px-3 py-1.5 text-[var(--neon)] tracking-[0.3em] uppercase font-bold"
        >
          SS
        </a>
        <span className="mx-1 h-4 w-px bg-[var(--neon)]/30" />
        {items.map((it) => (
          <a
            key={it.href}
            href={it.href}
            className="hidden md:inline-block px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
          >
            {it.label}
          </a>
        ))}
        <a
          href="#contact"
          className="ml-1 rounded-sm bg-[var(--neon)]/10 px-3 py-1.5 text-[var(--neon)] uppercase tracking-widest border border-[var(--neon)]/40 hover:bg-[var(--neon)]/20 transition"
        >
          Hire →
        </a>
      </div>
    </motion.nav>
  );
}
