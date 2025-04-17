import Hero from "../app/components/Hero";
import About from "../app/components/About";
import Projects from "../app/components/Projects";
import Contact from "../app/components/Contact";
import Skills from "../app/components/skills";
import Experience from "../app/components/Experience";
import Certificate from "../app/components/Certificate";
import Extracurricular from "../app/components/Extracurricular";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificate />
      <Extracurricular />
      <Contact />
    </>
  );
}
