import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";

type ProjectType = {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    image?: string;
    role: string;
    highlights: string[];
};

type ProjectCardProps = {
    project: ProjectType;
    index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const formattedIndex = String(index + 1).padStart(2, "0");

    return (
        <article className="group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-black transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-500">{formattedIndex} / Featured build</p>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                    {/* <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> */}
                    Live product
                </div>
            </div>

            <div className="grid lg:grid-cols-12">
                <div className="relative min-h-[260px] overflow-hidden border-b border-white/[0.08] bg-zinc-950 sm:min-h-[360px] lg:col-span-7 lg:min-h-[620px] lg:border-b-0 lg:border-r">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(min-width: 1024px) 58vw, 100vw"
                            className="object-contain p-4 sm:p-8 lg:p-12 transition-transform duration-700 group-hover:scale-[1.025]"
                        />
                    ) : (
                        /* Abstract Gradient Background if no image is available */
                        <div className="w-full h-full bg-zinc-950 flex items-center justify-center p-6 transition-all duration-500 group-hover:bg-zinc-900">
                            <div className="absolute inset-0 bg-grid-pattern opacity-[0.1] group-hover:opacity-[0.15] transition-opacity" />
                            <span className="text-xl font-bold tracking-widest text-zinc-700/40 uppercase group-hover:text-zinc-500/50 transition-colors duration-300">
                                {project.title.split(" ")[0]}
                            </span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col p-6 sm:p-8 lg:col-span-5 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{project.role}</p>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                        {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
                        {project.description}
                    </p>

                    <div className="mt-8 border-t border-white/[0.08] pt-6">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-600">What I built</p>
                        <ul className="mt-4 space-y-3">
                            {project.highlights.map((highlight) => (
                                <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {project.tech.map((techItem) => (
                            <span
                                key={techItem}
                                className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-zinc-500"
                            >
                                {techItem}
                            </span>
                        ))}
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-10">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] px-4 py-2.5 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                            >
                                <FiGithub className="w-4 h-4" />
                                <span>Code</span>
                            </a>
                        )}
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
                            >
                                <span>Live Demo</span>
                                <FiExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
