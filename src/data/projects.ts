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
        title: "DealBazaar -  Community-driven Platform ",
        image: "/images/Dealbazaar.jpg",
        description: "A community-driven deal discovery platform that collects and organizes the latest offers from Pakistani retailers. Users can explore deals by category, search products, submit offers, vote, comment, and receive price alerts.",
        tech: ["React.js", "Express.js", "MongoDB", "Tailwind CSS", "Automated Web Scraping"],
        github: "https://github.com/S-Hammad08/DealBazar..",
        link: "https://dealbazar-project.vercel.app/",
    },

];
