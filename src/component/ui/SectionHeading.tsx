type SectionHeadingProps = {
    title: string;
    subtitle?: string;
    description?: string;
};

export default function SectionHeading({
    title,
    subtitle,
    description,
}: SectionHeadingProps) {
    return (
        <div className="mb-10 flex flex-col gap-5 border-t border-white/[0.08] pt-6 sm:mb-12 md:flex-row md:items-end md:justify-between">
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 mb-3">
                    {subtitle}
                </p>

                <h2 className="text-3xl font-bold tracking-[-0.035em] text-white md:text-5xl">
                    {title}
                </h2>
            </div>

            {description && (
                <p className="max-w-md text-sm leading-relaxed text-zinc-500 sm:text-base md:text-right">
                    {description}
                </p>
            )}
        </div>
    );
}
