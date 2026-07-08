"use client";

import { useState } from "react";
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
    const [isHovered, setIsHovered] = useState(false);
    const Icon = skill.icon;

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={
                isHovered
                    ? {
                          borderColor: `${skill.color}40`,
                          backgroundColor: "rgba(9, 9, 11, 0.4)",
                          boxShadow: `0 8px 30px ${skill.color}15`,
                      }
                    : {}
            }
            className="w-44 sm:w-48 flex-shrink-0 border border-zinc-900 bg-zinc-950/20 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 group cursor-pointer"
        >
            <div className="flex flex-col items-center text-center gap-4">

                <Icon 
                    style={isHovered ? { color: skill.color } : {}}
                    className="text-4xl text-zinc-400 group-hover:scale-110 transition-all duration-300" 
                />

                <p 
                    className="text-zinc-400 group-hover:text-zinc-100 font-medium text-sm sm:text-base transition-colors duration-300"
                >
                    {skill.name}
                </p>

            </div>
        </div>
    );
}
