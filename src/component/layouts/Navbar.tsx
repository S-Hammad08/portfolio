"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";

const navLinks = [
    "About",
    "Skills",
    "Projects",
    "Contact",
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg border-b border-zinc-900 bg-zinc-950/60 transition-all duration-300">
            <Container className="flex items-center justify-between h-16 sm:h-20">
                <a
                    href="/"
                    className="text-xl font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 hover:to-white transition duration-300 cursor-pointer"
                >
                    SH
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-sm font-medium text-zinc-400 hover:text-white relative py-1 transition-colors duration-300 group"
                        >
                            {link}
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-zinc-400 hover:text-white transition cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </Container>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full border-b border-zinc-900 bg-zinc-950/95 backdrop-blur-xl py-6 px-6 space-y-4 flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-medium text-zinc-400 hover:text-white py-2 border-b border-zinc-900 last:border-0 transition"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}