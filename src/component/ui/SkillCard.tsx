import type { CSSProperties } from "react";
import { IconType } from "react-icons";

type SkillCardProps = {
    skill: {
        name: string;
        icon: IconType;
        color: string;
    };
};

export default function SkillCard({
    skill,
}: SkillCardProps) {
    const Icon = skill.icon;

    return (
        <div
            style={{ "--skill-color": skill.color } as CSSProperties}
            className="skill-card group relative overflow-hidden rounded-2xl border bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] sm:p-5"
        >
            <div className="relative flex min-h-24 flex-col justify-between gap-6">
                <Icon
                    className="skill-icon text-3xl transition-all duration-300 group-hover:scale-110"
                />

                <p className="skill-name text-sm font-medium transition-colors duration-300">
                    {skill.name}
                </p>
            </div>
        </div>
    );
}

