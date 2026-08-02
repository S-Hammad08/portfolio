"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-xl transition-all duration-300">
            <Container className="flex items-center justify-between h-16 sm:h-20">
                <a
                    href="#main-content"
                    aria-label="Back to the top"
                    className="group inline-flex items-center gap-3"
                >
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-sm font-bold tracking-[0.12em] text-white transition group-hover:border-white/25 group-hover:bg-white/[0.08]">
                        SH
                    </span>
                    <span className="hidden text-[10px] font-semibold uppercase leading-tight tracking-[0.2em] text-zinc-500 sm:block">
                        Frontend developer
                        <span className="block text-zinc-300">Lahore, Pakistan</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:bg-white/[0.04] hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-zinc-400 hover:text-white transition cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </Container>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <nav
                    id="mobile-navigation"
                    aria-label="Mobile navigation"
                    className="md:hidden absolute top-16 left-0 w-full border-b border-white/[0.06] bg-[#050505]/95 backdrop-blur-xl py-4 px-6 flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-top-5"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-medium text-zinc-400 hover:text-white py-3 border-b border-white/[0.06] last:border-0 transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
