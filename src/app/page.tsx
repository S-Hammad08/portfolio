import Hero from "@/component/sections/Hero";
import Navbar from "@/component/layouts/Navbar";
import About from "@/component/sections/About";
import Skills from "@/component/sections/Skills";
// import Projects from "@/component/sections/Projects";
import Contact from "@/component/sections/Contact";
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </main>
  );
}