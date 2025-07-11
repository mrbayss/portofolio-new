import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
      <main className="bg-light-bg dark:bg-dark-bg transition-colors duration-300">
        <Navbar />
        <Hero />
        <Projects/>      
        <Skills />
        <Contact />
      </main>
  );
}