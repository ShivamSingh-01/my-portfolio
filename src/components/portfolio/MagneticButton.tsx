import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  download,
  target,
  rel,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  download?: boolean | string;
  target?: string;
  rel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    ref.current!.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const classes =
    variant === "primary"
      ? "bg-[var(--neon)] text-primary-foreground neon-border hover:animate-pulse-neon"
      : "border border-[var(--neon)]/40 text-foreground hover:border-[var(--neon)] hover:text-[var(--neon)]";

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`clip-corner inline-flex items-center gap-2 px-7 py-3.5 font-mono text-sm uppercase tracking-[0.25em] transition-all duration-300 ${classes}`}
    >
      {children}
    </motion.div>
  );
  if (href)
    return (
      <a
        href={href}
        onClick={onClick}
        download={download === true ? "" : download || undefined}
        target={target}
        rel={rel}
      >
        {inner}
      </a>
    );
  return <button onClick={onClick}>{inner}</button>;
}
