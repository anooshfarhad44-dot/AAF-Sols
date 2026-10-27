import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function Card({ children, className = "", hoverEffect = true }: CardProps) {
    return (
        <div
            className={`bg-zinc-900/40 rounded-3xl p-6 sm:p-8 border border-zinc-800 ${
                hoverEffect ? "hover:border-zinc-700 hover:shadow-2xl hover:shadow-amber-500/5 hover:-translate-y-1 transition-all duration-300" : ""
            } ${className}`}
        >
            {children}
        </div>
    );
}
