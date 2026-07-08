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
    {
        title: "SaaS Analytics Dashboard",
        description: "A premium administration dashboard presenting real-time business telemetry. Includes custom charts for tracking active sessions, conversion funnels, financial trends, and user demographics.",
        tech: ["React.js", "Recharts", "Framer Motion", "Tailwind CSS", "TypeScript"],
        github: "https://github.com/S-Hammad08",
        link: "https://github.com/S-Hammad08",
    },
    {
        title: "AI Chat Interface",
        description: "An elegant, responsive chat platform integrated with LLMs. Features streaming responses, chat histories, code syntax highlighting, custom system prompt editing, and fully responsive layouts.",
        tech: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion", "API Integration"],
        github: "https://github.com/S-Hammad08",
        link: "https://github.com/S-Hammad08",
    },
    {
        title: "Premium E-Commerce Platform",
        description: "A lightning-fast e-commerce shopping experience with instant client-side filtering, detailed product pages, cart management, and visual checkout simulator.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Context API", "Stripe API"],
        github: "https://github.com/S-Hammad08",
        link: "https://github.com/S-Hammad08",
    }
];
