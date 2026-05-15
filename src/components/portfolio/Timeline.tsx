import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";

const NODES = [
  {
    y: "2022",
    t: "Class XII — Zoom International School",
    d: "Completed Senior Secondary education. First serious exposure to programming and problem solving.",
  },
  {
    y: "2023",
    t: "B.Tech ECE @ JGEC",
    d: "Started Electronics & Communication Engineering at Jalpaiguri Government Engineering College. Picked up Python and C++.",
  },
  {
    y: "2024",
    t: "GenAI Deep Dive",
    d: "Studied LLMs, transformers, prompt engineering and embeddings. Started building with LangChain & Hugging Face.",
  },
  {
    y: "2024",
    t: "RAG & Backend Systems",
    d: "Built the YouTube Video RAG Chatbot with FAISS + Groq, and HeartGPT on FastAPI + Streamlit.",
  },
  {
    y: "2025",
    t: "Agentic AI Era",
    d: "Shipped Agentic BlogWriter — a LangGraph multi-agent system with router, research, planner & worker agents.",
  },
  {
    y: "2027",
    t: "Graduation Target",
    d: "B.Tech ECE expected. Open to GenAI / Agentic AI internships, research collaborations and ambitious AI teams.",
  },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="timeline" className="relative py-32 px-6 md:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeader idx="05" title="Trajectory" sub="experience + education" />

        <div ref={ref} className="relative pl-8 md:pl-16">
          <div className="absolute left-2 md:left-6 top-0 bottom-0 w-px bg-[var(--neon)]/15" />
          <motion.div
            className="absolute left-2 md:left-6 top-0 w-px gradient-crimson neon-border-soft"
            style={{ height: lineH }}
          />

          <div className="space-y-12">
            {NODES.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="relative"
              >
                <div className="absolute -left-[22px] md:-left-[34px] top-2 h-3 w-3 rounded-full bg-[var(--neon)] shadow-[0_0_16px_var(--neon-glow)] animate-pulse" />
                <div className="absolute -left-[26px] md:-left-[38px] top-1 h-5 w-5 rounded-full border border-[var(--neon)]/40" />

                <div
                  className="glass clip-corner p-6 hover:border-[var(--neon)]/50 transition-all hover:translate-x-1"
                  data-cursor="hover"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[var(--neon)] font-mono text-xs tracking-[0.3em]">
                      {n.y}
                    </span>
                    <span className="h-px flex-1 bg-[var(--neon)]/20" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{n.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{n.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
