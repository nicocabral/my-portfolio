import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";


export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-black text-white">
   
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}