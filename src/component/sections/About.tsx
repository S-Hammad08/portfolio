import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
    const highlights = [
        {
            number: "01",
            title: "Product thinking",
            description: "I start with the user flow and the job the interface needs to accomplish."
        },
        {
            number: "02",
            title: "Frontend craft",
            description: "Responsive layouts, accessible interactions, deliberate motion, and clean component systems."
        },
        {
            number: "03",
            title: "Full-stack context",
            description: "Enough backend experience to design interfaces around real data, APIs, and product constraints."
        }
    ];

    return (
        <section
            id="about"
            className="scroll-mt-20 py-12 sm:py-20 relative"
        >
            <Container>
                <SectionHeading
                    title="About Me"
                    subtitle="01 / Introduction"
                    description="I care about the small decisions that make a product feel obvious, fast, and dependable."
                />

                <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                    <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-zinc-950 lg:col-span-4">
                        <div className="relative aspect-[4/5] min-h-[420px]">
                            <Image
                                src="/images/profile.jpg"
                                alt="Portrait of Syed Hammad"
                                fill
                                sizes="(min-width: 1024px) 32vw, 100vw"
                                className="object-cover object-[55%_35%] grayscale transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">Design + code</p>
                                    <p className="mt-1 text-sm font-medium text-white">From Lahore to the web.</p>
                                </div>
                                <FiArrowUpRight className="h-5 w-5 text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between lg:col-span-8">
                        <div className="max-w-3xl space-y-6">
                            <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
                                I build the layer where product decisions become real experiences.
                            </h3>
                            <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
                                I&apos;m a frontend developer focused on turning complex requirements into interfaces that feel clear and responsive. My work balances design fidelity with maintainable React and TypeScript code.
                            </p>
                            <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
                                Building DealBazaar pushed me beyond a landing page: searchable deal discovery, community submissions, voting, comments, automated collection, and price alerts all had to work as one coherent product.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-3 sm:grid-cols-3">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="rounded-2xl border border-white/[0.08] bg-black p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.025]"
                            >
                                <span className="text-[10px] font-semibold tracking-[0.2em] text-zinc-500">{item.number}</span>
                                <h4 className="mt-5 text-sm font-semibold text-white">
                                    {item.title}
                                </h4>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
