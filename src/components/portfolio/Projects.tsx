import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const PROJECTS = [
  {
    n: "01",
    name: "Agentic BlogWriter",
    tagline: "Autonomous multi-agent blog system",
    desc: "Multi-agent AI system that turns a topic into a fully cited technical blog. Router, research, planner and worker agents orchestrated with LangGraph, with live web search and automatic citations.",
    stack: ["Python", "LangGraph", "LangChain", "Agentic"],
    href: "https://github.com/ShivamSingh-01",
    accent: "from-rose-500/30 to-red-900/0",
  },
  {
    n: "02",
    name: "HeartGPT",
    tagline: "Emotional AI chatbot",
    desc: "LLM-powered emotional companion with conversation memory and contextual responses. FastAPI backend wired to a real-time Streamlit chat interface for human-like dialogue.",
    stack: ["Python", "FastAPI", "Streamlit", "LLMs"],
    href: "https://github.com/ShivamSingh-01",
    accent: "from-red-500/30 to-rose-900/0",
  },
  {
    n: "03",
    name: "YouTube Video RAG Chatbot",
    tagline: "Chat with any YouTube video",
    desc: "Retrieval-Augmented Generation system that extracts video transcripts, embeds them into a FAISS vector store, and answers questions through Groq LLM — all behind an interactive Streamlit UI.",
    stack: ["LangChain", "FAISS", "Groq", "Streamlit"],
    href: "https://github.com/ShivamSingh-01",
    accent: "from-orange-500/30 to-red-900/0",
  },
  {
    n: "04",
    name: "DebateMind AI",
    tagline: "Real-time AI debate & interview simulator",
    desc: "MERN stack SaaS for training communication skills through real-time AI debates and interview simulations. Features voice-to-text, WebSocket streaming, resume analyzer, global leaderboard, and secure JWT auth.",
    stack: ["React", "Node.js", "MongoDB", "Socket.io", "Gemini"],
    href: "https://github.com/ShivamSingh-01/DebateMind-AI",
    accent: "from-violet-500/30 to-red-900/0",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader idx="03" title="Selected Work" sub="projects // 04" />

        <div className="space-y-8">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative glass-strong clip-corner overflow-hidden"
              data-cursor="hover"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-700`}
              />
              <div className="absolute inset-0 bg-grid opacity-20" />

              {/* scan line on hover */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--neon)] to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-y-full transition-all duration-1000" />

              <div className="relative grid md:grid-cols-12 gap-6 p-8 md:p-12 items-center">
                <div className="md:col-span-1 font-mono text-sm text-[var(--neon)] tracking-[0.3em]">
                  /{p.n}
                </div>

                <div className="md:col-span-7">
                  <div className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-2">
                    {p.tagline}
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 group-hover:text-glow-strong transition-all">
                    {p.name}
                  </h3>
                  <p className="text-muted-foreground max-w-xl mb-6 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 border border-[var(--neon)]/40 text-[var(--neon)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono uppercase tracking-[0.3em] px-4 py-2 border border-foreground/30 hover:border-[var(--neon)] hover:text-[var(--neon)] transition-colors"
                    >
                      github →
                    </a>
                    <a
                      href="https://github.com/ShivamSingh-01"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono uppercase tracking-[0.3em] px-4 py-2 bg-[var(--neon)] text-primary-foreground hover:animate-pulse-neon"
                    >
                      view repo →
                    </a>
                  </div>
                </div>

                <div className="md:col-span-4">
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[var(--neon)]/30">
                    <div className="absolute inset-0 bg-grid opacity-50" />
                    <div className="absolute inset-0 gradient-crimson opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute -inset-8 rounded-full border border-[var(--neon)]/30 animate-spin-slow" />
                        <div
                          className="absolute -inset-12 rounded-full border border-[var(--neon)]/20"
                          style={{ animation: "spin-slow 24s linear reverse infinite" }}
                        />
                        <div className="font-mono text-5xl font-bold text-[var(--neon)] text-glow">
                          {p.n}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 scanlines opacity-30" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
