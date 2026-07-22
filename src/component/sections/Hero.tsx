"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Grids & Ambient Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[80px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Status Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900/80 border white-800/280 rounded-full mb-6">
              {/* <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span> */}
              <span className="text-xs font-medium tracking-wide text-zinc-400">
                Available for Frontend Opportunities
              </span>
            </div>

            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-indigo-400 mb-3">
              Frontend Developer
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-500">
              Hi, I&apos;m <br className="sm:hidden" />
              <span className="text-white">Syed Hammad</span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              I specialize in constructing fast, high-fidelity, and pixel perfect user interfaces using <span className="text-zinc-200 font-medium">React</span>, <span className="text-zinc-200 font-medium">Next.js</span>, and <span className="text-zinc-200 font-medium">TypeScript</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button>
                  View Projects
                </Button>
              </a>

              <a href="/SyedHammadCv.pdf" download>
                <Button variant="outline" className="inline-flex items-center gap-2">
                  <FiDownload className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Outer soft glow that amplifies on hover */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700" />

              {/* Image Container with precise border */}
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-950/80">
                <Image
                  src="/images/profile.jpg"
                  alt="Syed Hammad"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
