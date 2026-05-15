import { motion } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { SectionHeader } from "./SectionHeader";

const CATEGORIES = [
  { t: "Languages", items: ["Python", "C++", "JavaScript"] },
  { t: "GenAI / LLMs", items: ["LLMs", "Transformers", "Prompt Eng.", "RAG"] },
  { t: "Agentic AI", items: ["LangChain", "LangGraph", "LangSmith", "AI Agents"] },
  { t: "NLP", items: ["Embeddings", "FAISS", "Hugging Face", "NLP"] },
  { t: "Backend", items: ["FastAPI", "REST APIs", "Python"] },
  { t: "Frontend", items: ["React.js", "HTML", "CSS", "Streamlit"] },
  { t: "ML / Data", items: ["NumPy", "Pandas", "Scikit-learn", "ML"] },
  { t: "CS Core / Tools", items: ["DSA", "DBMS", "OOP", "MySQL", "Git", "Docker"] },
];

const MARQUEE = [
  "LANGGRAPH",
  "LANGCHAIN",
  "RAG",
  "AGENTIC AI",
  "FAISS",
  "GROQ",
  "HUGGING FACE",
  "FASTAPI",
  "PYTHON",
  "C++",
  "REACT",
  "DOCKER",
  "MYSQL",
  "STREAMLIT",
];

function TiltCard({ idx, t, items }: { idx: number; t: string; items: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current!.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(0)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateY(0) rotateX(0)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.06 }}
      className="relative"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="glass clip-corner p-6 h-full transition-transform duration-200 will-change-transform group hover:border-[var(--neon)]/60"
        data-cursor="hover"
      >
        <div
          className="absolute -inset-px clip-corner opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{
            background: "linear-gradient(135deg, oklch(0.62 0.28 25 / 0.4), transparent 60%)",
          }}
        />
        <div className="relative">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
            // {String(idx + 1).padStart(2, "0")}
          </div>
          <div className="font-bold text-xl mb-4 group-hover:text-[var(--neon)] transition-colors">
            {t}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {items.map((i) => (
              <span
                key={i}
                className="text-[11px] font-mono uppercase tracking-wider px-2 py-1 rounded-sm bg-secondary/50 text-muted-foreground border border-[var(--neon)]/10"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader idx="02" title="Arsenal" sub="skills + stack" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((c, i) => (
            <TiltCard key={c.t} idx={i} t={c.t} items={c.items} />
          ))}
        </div>
      </div>

      <div className="mt-24 relative border-y border-[var(--neon)]/20 py-6 overflow-hidden">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className="text-4xl md:text-6xl font-bold tracking-tighter">
              {m} <span className="text-[var(--neon)] mx-2">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
