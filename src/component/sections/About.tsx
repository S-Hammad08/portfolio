import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
    const highlights = [
        {
            title: "User-Centric UX",
            description: "Building designs that feel natural, accessible, and responsive across every device size."
        },
        {
            title: "Modern Tech Stack",
            description: "Working with Next.js App Router, TypeScript, Framer Motion, and Tailwind CSS."
        },
        {
            title: "Performance First",
            description: "Optimizing code-splitting, state management, and asset loading for lightning fast speed."
        }
    ];

    return (
        <section
            id="about"
            className="py-24 sm:py-32 relative"
        >
            <Container>
                <SectionHeading
                    title="About Me"
                    subtitle="Introduction"
                />

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
                    
                    {/* Bio Text */}
                    <div className="lg:col-span-7 space-y-6">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                            Crafting clean, responsive, and interactive digital interfaces.
                        </h3>
                        <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                            I am a passionate frontend developer dedicated to building responsive, scalable, and modern web applications. I love taking complex problems and translating them into simple, beautiful, and intuitive user experiences.
                        </p>
                        <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                            My approach focuses on writing clean, modular code, leveraging modern APIs, and maintaining a high level of design fidelity. I continuously explore new patterns to optimize client-side rendering and build products that feel snappy and delightful to use.
                        </p>
                    </div>

                    {/* Highlight Cards */}
                    <div className="lg:col-span-5 space-y-4 w-full">
                        {highlights.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/20 backdrop-blur-md hover:border-zinc-700/80 hover:bg-zinc-950/40 transition duration-300"
                            >
                                <h4 className="text-md font-semibold text-white mb-2 tracking-wide">
                                    {item.title}
                                </h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
}