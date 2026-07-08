import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";

type ProjectType = {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    image?: string;
};

type ProjectCardProps = {
    project: ProjectType;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group relative flex flex-col h-full rounded-2xl border border-zinc-800/80 bg-zinc-950/20 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-zinc-700/80 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
            
            {/* Visual Container */}
            <div className="relative w-full aspect-video overflow-hidden border-b border-zinc-900 bg-zinc-900">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    /* Abstract Gradient Background if no image is available */
                    <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-indigo-950/20 flex items-center justify-center p-6 transition-all duration-500 group-hover:from-zinc-900 group-hover:via-indigo-950/10 group-hover:to-zinc-950">
                        <div className="absolute inset-0 bg-grid-pattern opacity-[0.1] group-hover:opacity-[0.15] transition-opacity" />
                        <span className="text-xl font-bold tracking-widest text-zinc-700/40 uppercase group-hover:text-indigo-400/30 transition-colors duration-300">
                            {project.title.split(" ")[0]}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-grow p-6">
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                </h3>
                
                {/* Description */}
                <p className="mt-3 text-zinc-400 text-sm leading-relaxed flex-grow">
                    {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((techItem) => (
                        <span
                            key={techItem}
                            className="px-2.5 py-1 bg-zinc-900/50 border border-zinc-800/80 rounded-md text-xs font-medium text-zinc-400 hover:text-zinc-300 hover:border-zinc-700 transition"
                        >
                            {techItem}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center gap-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-sm transition-colors duration-200"
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
                            className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-sm transition-colors duration-200 ml-auto"
                        >
                            <span>Live Demo</span>
                            <FiExternalLink className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
