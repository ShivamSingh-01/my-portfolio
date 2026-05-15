import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Resume } from "@/components/portfolio/Resume";
import { Timeline } from "@/components/portfolio/Timeline";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivam Singh — AI Engineer • GenAI • Agentic AI" },
      {
        name: "description",
        content:
          "Cinematic portfolio of Shivam Singh — 3rd year engineering student building Generative AI, LLMs, agentic systems, and full-stack products.",
      },
      { property: "og:title", content: "Shivam Singh — AI Engineer Portfolio" },
      {
        property: "og:description",
        content: "Generative AI · LLMs · Agentic AI · DSA · Full Stack",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (loaded) document.body.style.overflow = "auto";
    else document.body.style.overflow = "hidden";
  }, [loaded]);

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <CustomCursor />
      {loaded && <SmoothScroll />}
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Timeline />
        <Contact />
      </main>
    </>
  );
}
