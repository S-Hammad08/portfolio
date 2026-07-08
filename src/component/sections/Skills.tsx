"use client";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import SkillCard from "../ui/SkillCard";
import { skills } from "@/data/skills";

export default function Skills() {
    return (
        <section
            id="skills"
            className="py-24 sm:py-32 relative overflow-hidden"
        >
            <Container>
                <SectionHeading
                    title="Skills"
                    subtitle="Technologies"
                />

                <div className="relative overflow-hidden mt-12 py-4 marquee-mask">
                    <div className="flex w-max animate-marquee gap-6">
                        {[...skills, ...skills, ...skills].map((skill, index) => (
                            <SkillCard
                                key={`${skill.name}-${index}`}
                                skill={skill}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}