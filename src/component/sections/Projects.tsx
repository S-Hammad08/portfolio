import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-24 sm:py-32 relative bg-zinc-950/10"
        >
            <Container>
                <SectionHeading
                    title="Featured Projects"
                    subtitle="My Work"
                />

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {projects.map((project, idx) => (
                        <ProjectCard
                            key={idx}
                            project={project}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
