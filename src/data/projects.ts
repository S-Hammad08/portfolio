export type Project = {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    image?: string;
    role: string;
    highlights: string[];
};

export const projects: Project[] = [
    {
        title: "DealBazaar — Community-driven platform",
        image: "/images/Dealbazaar.jpg",
        description: "A community-driven deal discovery platform that collects and organizes the latest offers from Pakistani retailers. Users can explore deals by category, search products, submit offers, vote, comment, and receive price alerts.",
        tech: ["React.js", "Express.js", "MongoDB", "Tailwind CSS", "Automated Web Scraping"],
        role: "Full-stack product build",
        highlights: [
            "Searchable discovery across retailers and categories",
            "Community submissions, voting, and discussion flows",
            "Automated deal collection with price-alert support",
        ],
        github: "https://github.com/S-Hammad08/DealBazar..",
        link: "https://dealbazar-project.vercel.app/",
    },
    {
        title: "StaffFlow — Employee Management Dashboard",
        image: "/images/staffflow.jpg",
        description: "A full-stack employee management dashboard designed to manage employees, departments, attendance, and workforce reports. StaffFlow includes secure admin authentication, complete CRUD operations, search, filtering, sorting, pagination, and real-time dashboard statistics.",
        tech: [
            "Next.js",
            "TypeScript",
            "Express.js",
            "MongoDB Atlas",
            "TanStack Query",
            "Tailwind CSS"
        ],
        role: "Full-stack dashboard development",
        highlights: [
            "Employee, department, and attendance CRUD management",
            "JWT authentication with secure HTTP-only cookies",
            "Search, filtering, sorting, pagination, and dashboard reports",
        ],
        github: "https://github.com/S-Hammad08/StaffFlow",
        link: "https://staff-flow-ten.vercel.app/",
    },


];
