import Hero from "@/component/sections/Hero";
import Navbar from "@/component/layouts/Navbar";
import About from "@/component/sections/About";
import Skills from "@/component/sections/Skills";
import Projects from "@/component/sections/Projects";
import Contact from "@/component/sections/Contact";
export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
