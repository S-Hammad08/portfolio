import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import SkillCard from "../ui/SkillCard";
import { skills } from "@/data/skills";

export default function Skills() {
    return (
        <section
            id="skills"
            className="scroll-mt-20 py-12 sm:py-20 relative"
        >
            <Container>
                <SectionHeading
                    title="A focused toolkit"
                    subtitle="02 / Capabilities"
                    description="A practical stack for shipping polished interfaces and the product systems behind them."
                />

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={`${skill.name}-${index}`}
                            skill={skill}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
