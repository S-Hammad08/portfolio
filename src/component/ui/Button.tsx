import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type SharedProps = {
    children: ReactNode;
    variant?: "primary" | "outline";
    className?: string;
};

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
};

type LinkProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};

export default function Button({
    children,
    variant = "primary",
    className,
    ...props
}: ButtonProps | LinkProps) {
    const styles = twMerge(
        "rounded-xl px-6 py-3 font-medium tracking-wide transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent/50",
        variant === "primary" && "bg-white text-black hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-[0_0_24px_rgba(255,255,255,0.14)]",
        variant === "outline" && "border border-zinc-800 text-zinc-300 hover:-translate-y-0.5 hover:border-zinc-600 hover:bg-white/[0.03] hover:text-white",
        className
    );

    if ("href" in props && props.href) {
        return (
            <a className={styles} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {children}
            </a>
        );
    }

    return (
        <button className={styles} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
            {children}
        </button>
    );
}
