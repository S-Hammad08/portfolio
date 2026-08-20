"use client";

import { useState } from "react";
import { FiArrowUp, FiArrowUpRight, FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("hammadshahali080@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            id="contact"
            className="scroll-mt-20 pt-12 sm:pt-20 relative overflow-hidden"
        >
            {/* Soft Ambient Glow */}
            <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-white/[0.02] blur-[90px] pointer-events-none" />

            <Container>
                <SectionHeading
                    title="Get In Touch"
                    subtitle="04 / Contact"
                    description="Open to junior frontend roles, internships, and thoughtful freelance collaborations."
                />

                <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-black p-6 sm:p-9 lg:p-12">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-3xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Have an opportunity in mind?</p>
                            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                                Let&apos;s make the next interface worth remembering.
                            </h3>
                        </div>
                        <a
                            href="mailto:hammadshahali080@gmail.com?subject=Let%27s%20work%20together"
                            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
                        >
                            Start a conversation
                            <FiArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        <a
                            href="mailto:hammadshahali080@gmail.com"
                            onClick={handleCopyEmail}
                            className="group flex items-center gap-4 rounded-xl border border-zinc-900 bg-zinc-950/10 p-4 transition duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/[0.06] relative"
                        >
                            <div className="shrink-0 rounded-lg bg-zinc-900 p-2.5 text-zinc-300 transition duration-300 group-hover:bg-indigo-500/15 group-hover:text-indigo-400">
                                <FiMail className="w-5 h-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold transition-colors group-hover:text-indigo-400">Email</p>
                                <p className="text-xs xl:text-sm text-zinc-300 group-hover:text-white transition truncate" title="hammadshahali080@gmail.com">
                                </p>
                            </div>
                            {copied && (
                                <span className="absolute -top-2 right-4 bg-indigo-600 text-[10px] text-white px-2 py-0.5 rounded-md font-semibold tracking-wide">
                                    Copied!
                                </span>
                            )}
                        </a>


                        <div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-900 bg-zinc-950/10 hover:border-zinc-800 transition duration-300">
                            <div className="p-2.5 rounded-lg bg-zinc-900 text-zinc-300 shrink-0">
                                <FiMapPin className="w-5 h-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Location</p>
                                <p className="text-xs xl:text-sm text-zinc-300 truncate" title="Lahore, Pakistan">Lahore, Pakistan</p>
                            </div>
                        </div>

                        <a
                            href="https://www.linkedin.com/in/syedhammad-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 rounded-xl border border-zinc-900 bg-zinc-950/10 p-4 transition duration-300 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/[0.06]"
                        >
                            <div className="shrink-0 rounded-lg bg-zinc-900 p-2.5 text-zinc-300 transition duration-300 group-hover:bg-[#0A66C2]/15 group-hover:text-[#4FA3E3]">
                                <FiLinkedin className="w-5 h-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold transition-colors group-hover:text-[#4FA3E3]">LinkedIn</p>
                                <p className="text-xs xl:text-sm text-zinc-300 group-hover:text-[#8CC8F2] transition truncate" title="syedhammad-dev">syedhammad-dev</p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/S-Hammad08"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 rounded-xl border border-zinc-900 bg-zinc-950/10 p-4 transition duration-300 hover:border-white/30 hover:bg-white/[0.045]"
                        >
                            <div className="shrink-0 rounded-lg bg-zinc-900 p-2.5 text-zinc-300 transition duration-300 group-hover:bg-white/10 group-hover:text-white">
                                <FiGithub className="w-5 h-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold transition-colors group-hover:text-zinc-300">GitHub</p>
                                <p className="text-xs xl:text-sm text-zinc-300 group-hover:text-white transition truncate" title="S-Hammad08">S-Hammad08</p>
                            </div>
                        </a>
                    </div>
                </div>
            </Container>

            <footer className="mt-20 border-t border-white/[0.08] py-7">
                <Container className="flex flex-col gap-4 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
                    <p>© 2026 Syed Hammad. Designed and built in Lahore.</p>
                    <a href="#main-content" className="inline-flex w-fit items-center gap-2 transition hover:text-zinc-300">
                        Back to top
                        <FiArrowUp className="h-3.5 w-3.5" />
                    </a>
                </Container>
            </footer>
        </section>
    );
}
