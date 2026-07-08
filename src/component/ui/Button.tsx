import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "outline";
};

export default function Button({
    children,
    variant = "primary",
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={twMerge(
                "px-6 py-3 rounded-xl font-medium tracking-wide transition-all duration-300 active:scale-98 focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer",
                variant === "primary" && "bg-white text-black hover:bg-zinc-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:-translate-y-0.5",
                variant === "outline" && "border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-500 hover:bg-zinc-950 hover:-translate-y-0.5",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}