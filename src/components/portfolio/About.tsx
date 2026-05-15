import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

const STATS = [
  { v: 5, s: "+", l: "GenAI Projects" },
  { v: 4, s: "", l: "Agent Systems" },
  { v: 2027, s: "", l: "B.Tech Batch" },
  { v: 99, s: "%", l: "Caffeine Uptime" },
];

const FOCUS = [
  {
    t: "Generative AI",
    d: "LLM systems, prompt engineering, embeddings and RAG pipelines built with LangChain & Hugging Face.",
  },
  {
    t: "Agentic AI",
    d: "Autonomous LangGraph agents that route, research, plan and execute toward real goals.",
  },
  {
    t: "Backend / APIs",
    d: "FastAPI services, Python tooling, MySQL data layers and Docker-friendly deployments.",
  },
  {
    t: "Frontend",
    d: "React.js, JavaScript and Streamlit — from polished UIs to fast experimental dashboards.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader idx="01" title="System Profile" sub="about" />

        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass clip-corner p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 gradient-crimson opacity-20 blur-3xl rounded-full" />
            <div className="relative">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon)] mb-4">
                // bio.txt
              </div>
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
                I'm <span className="text-[var(--neon)] text-glow">Shivam Singh</span> — a B.Tech
                ECE student at{" "}
                <span className="text-foreground">Jalpaiguri Government Engineering College</span>,
                building at the edge of <span className="text-foreground">Generative AI</span>,{" "}
                <span className="text-foreground">LLMs</span> and{" "}
                <span className="text-foreground">Agentic systems</span>.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                I ship AI-powered products end-to-end — multi-agent workflows in{" "}
                <span className="text-foreground">LangGraph</span>, RAG pipelines with{" "}
                <span className="text-foreground">FAISS</span> &amp; Hugging Face, and FastAPI
                backends wired to React or Streamlit frontends. My core stack lives in Python and
                C++, and my favorite line of code is the one that closes the loop between{" "}
                <span className="text-foreground">model</span> and{" "}
                <span className="text-foreground">user</span>.
              </p>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.l}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border-l-2 border-[var(--neon)]/60 pl-3"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[var(--neon)] text-glow">
                      <Counter to={s.v} suffix={s.s} />
                    </div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                      {s.l}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FOCUS.map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass clip-corner p-5 group hover:border-[var(--neon)]/60 transition-all hover:-translate-y-1"
                data-cursor="hover"
              >
                <div className="mb-3 h-8 w-8 rounded-sm gradient-crimson neon-border-soft group-hover:animate-pulse-neon" />
                <div className="font-bold text-lg mb-1.5">{f.t}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{f.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
