"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiDownload } from "react-icons/fi";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-28 sm:py-32">
      {/* Background Grids & Ambient Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-white/[0.025] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-zinc-700/[0.035] blur-[80px] pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-[13rem] font-black tracking-[-0.08em] text-white/[0.015] xl:block"
      >
        SH
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-center"
        >
          {/* Status Indicator Badge */}
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900/80 border border-zinc-800/80 rounded-full mb-7"> */}
          {/* <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span> */}
          {/* <span className="text-xs font-medium tracking-wide text-green-200">
              Available for Frontend Opportunities
            </span> */}
          {/* </div> */}

          <p className="uppercase tracking-[0.28em] text-xs font-bold  text-yellow-300 mb-4">
            Syed Hammad · Frontend Developer
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.04] tracking-[-0.045em] mb-7 text-white">
            Frontend experiences,
            <span className="block text-white">built with intent.</span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed mb-9 max-w-2xl mx-auto">
            I turn product ideas into fast, accessible interfaces with
            <span className="text-zinc-200 font-medium"> React</span>,
            <span className="text-zinc-200 font-medium"> Next.js</span>, and
            <span className="text-zinc-200 font-medium"> TypeScript</span>—with
            equal attention to the code and the experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button href="#projects" className="inline-flex items-center gap-2">
              View my work
              <FiArrowUpRight className="w-4 h-4" />
            </Button>

            <Button
              href="/SyedHammadCv.pdf"
              download
              variant="outline"
              className="inline-flex items-center gap-2"
            >
              <FiDownload className="w-4 h-4" />
              Download Resume
            </Button>
          </div>

          <div className="mt-12 grid w-full max-w-2xl grid-cols-3 divide-x divide-white/[0.08] border-y border-white/[0.08] py-4 text-left sm:mt-14">
            <div className="px-3 sm:px-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Based in
              </p>
              <p className="mt-1 text-xs font-medium text-zinc-300 sm:text-sm">
                Lahore, PK
              </p>
            </div>
            <div className="px-3 sm:px-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Focus
              </p>
              <p className="mt-1 text-xs font-medium text-zinc-300 sm:text-sm">
                Product UI
              </p>
            </div>
            <div className="px-3 sm:px-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                Open to
              </p>
              <p className="mt-1 text-xs font-medium text-zinc-300 sm:text-sm">
                Remote roles
              </p>
            </div>
          </div>

          <a
            href="#about"
            aria-label="Scroll to the About section"
            className="mt-7 hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-600 transition hover:text-zinc-300 sm:inline-flex"
          >
            Explore
            <FiArrowDown className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
