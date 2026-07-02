import About from "../components/sections/About";
import AI from "../components/sections/AI";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-ink-950 text-slate-200">
      {/* Ambient background — fixed gradient orbs behind everything */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-accent-blue/20 blur-[130px] animate-blob" />
        <div className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-accent-violet/20 blur-[130px] animate-blob [animation-delay:6s]" />
        <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-accent-cyan/10 blur-[130px] animate-blob [animation-delay:12s]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <AI />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
