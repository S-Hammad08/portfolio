import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            className="scroll-mt-20 py-20 sm:py-28 relative bg-zinc-950/10"
        >
            <Container>
                <SectionHeading
                    title="Featured project"
                    subtitle="03 / Selected work"
                    description="One product, shown with enough context to explain the thinking—not just the final screen."
                />

                <div className="space-y-8">
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
