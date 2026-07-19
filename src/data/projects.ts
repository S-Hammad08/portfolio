export type Project = {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    image?: string;
};

export const projects: Project[] = [
    {
        title: "DevFlow - Developer QA Platform",
        description: "A comprehensive developer community platform featuring question answering, voting, reputation tracking, global search, and AI-generated answers. Built to support robust, interactive technical discussions.",
        tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose"],
        github: "https://github.com/S-Hammad08",
        link: "https://github.com/S-Hammad08",
    },
];
