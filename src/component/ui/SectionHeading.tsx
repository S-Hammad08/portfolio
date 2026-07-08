type SectionHeadingProps = {
    title: string;
    subtitle?: string;
};

export default function SectionHeading({
    title,
    subtitle,
}: SectionHeadingProps) {
    return (
        <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-3">
                {subtitle}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
                {title}
            </h2>
        </div>
    );
}