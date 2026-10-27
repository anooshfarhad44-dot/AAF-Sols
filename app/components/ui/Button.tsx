import React from "react";
import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline" | "light";
    className?: string;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    children,
    href,
    onClick,
    variant = "primary",
    className = "",
    type = "button",
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all duration-300 focus:outline-none";

    const variants = {
        primary: "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20 active:scale-95",

        secondary: "bg-zinc-800 hover:bg-zinc-700 text-zinc-100 shadow-md border border-zinc-700 active:scale-95",

        outline: "border border-zinc-700 hover:border-amber-400 text-zinc-300 hover:text-amber-400 bg-transparent active:scale-95",

        light: "bg-zinc-100 text-zinc-950 hover:bg-white shadow-lg active:scale-95",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClassName}>
            {children}
        </button>
    );
}
