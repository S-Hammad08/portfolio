"use client";

import { useState, FormEvent } from "react";
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setFormState({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        }, 1500);
    };

    return (
        <section
            id="contact"
            className="py-24 sm:py-32 relative overflow-hidden"
        >
            {/* Soft Ambient Glow */}
            <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-indigo-500/5 blur-[90px] pointer-events-none" />

            <Container>
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Contact"
                />

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">

                    {/* Left Column: Info & Details */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                                Let&apos;s build something together
                            </h3>
                            <p className="mt-4 text-zinc-400 text-base leading-relaxed">
                                I am currently looking for junior frontend roles, internships, or interesting freelance project collaborations. If you have an opportunity or just want to connect, feel free to drop me a message.
                            </p>
                        </div>

                        {/* Contact details list */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-900 bg-zinc-950/10 hover:border-zinc-800 transition duration-300">
                                <div className="p-2.5 rounded-lg bg-zinc-900 text-indigo-400">
                                    <FiMail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Email</p>
                                    <a href="mailto:hammadshahali080@gmail.com" className="text-sm text-zinc-300 hover:text-white transition">
                                        hammadshahali080@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-900 bg-zinc-950/10 hover:border-zinc-800 transition duration-300">
                                <div className="p-2.5 rounded-lg bg-zinc-900 text-indigo-400">
                                    <FiMapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Location</p>
                                    <p className="text-sm text-zinc-300">Lahore, Pakistan</p>
                                </div>
                            </div>

                            <a
                                href="https://www.linkedin.com/in/syedhammad-dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl border border-zinc-900 bg-zinc-950/10 hover:border-indigo-500/30 hover:bg-zinc-950/20 hover:shadow-[0_0_20px_rgba(99,102,241,0.06)] transition duration-300 group"
                            >
                                <div className="p-2.5 rounded-lg bg-zinc-900 text-indigo-400 group-hover:text-white transition duration-300">
                                    <FiLinkedin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">LinkedIn</p>
                                    <p className="text-sm text-zinc-300 group-hover:text-white transition">syedhammad-dev</p>
                                </div>
                            </a>

                            <a
                                href="https://github.com/S-Hammad08"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl border border-zinc-900 bg-zinc-950/10 hover:border-indigo-500/30 hover:bg-zinc-950/20 hover:shadow-[0_0_20px_rgba(99,102,241,0.06)] transition duration-300 group"
                            >
                                <div className="p-2.5 rounded-lg bg-zinc-900 text-indigo-400 group-hover:text-white transition duration-300">
                                    <FiGithub className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">GitHub</p>
                                    <p className="text-sm text-zinc-300 group-hover:text-white transition">S-Hammad08</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    {/* <div className="lg:col-span-7 w-full p-8 rounded-2xl border border-zinc-900 bg-zinc-950/20 backdrop-blur-md">
                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <FiCheckCircle className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
                                <h4 className="text-xl font-semibold text-white">Message Sent Successfully!</h4>
                                <p className="mt-2 text-zinc-400 text-sm max-w-xs">
                                    Thank you for reaching out. I will get back to you as soon as possible.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        // placeholder="John Doe"
                                        className="w-full px-4 py-3 bg-zinc-950/40 border border-zinc-900 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        // placeholder="johndoe@example.com"
                                        className="w-full px-4 py-3 bg-zinc-950/40 border border-zinc-900 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        required
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        placeholder="Hi Hammad, I'd like to talk about..."
                                        className="w-full px-4 py-3 bg-zinc-950/40 border border-zinc-900 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-300 resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                                    <FiSend className="w-4 h-4" />
                                </Button>
                            </form>
                        )}
                    </div> */}

                </div>
            </Container>
        </section>
    );
}
