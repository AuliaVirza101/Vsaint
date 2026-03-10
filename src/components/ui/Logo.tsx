import React from "react";

interface LogoProps {
    className?: string;
    size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
    const textSizes = {
        sm: "text-xl",
        md: "text-2xl",
        lg: "text-4xl",
        xl: "text-5xl md:text-7xl",
    };

    const iconSizes = {
        sm: "w-5 h-5",
        md: "w-7 h-7",
        lg: "w-10 h-10",
        xl: "w-12 h-12 md:w-16 md:h-16",
    };

    return (
        <div className={`flex items-center justify-center font-extrabold tracking-tight ${className}`}>
            <svg
                className={`${iconSizes[size]} text-vsaint-500 mr-0.5 md:mr-1`}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Left diagonal - bold */}
                <path
                    d="M15 15L45 85H55L25 15H15Z"
                    fill="currentColor"
                />
                
                {/* Right diagonal - overlapping */}
                <path
                    d="M85 15L55 85H45L75 15H85Z"
                    fill="currentColor"
                    fillOpacity="0.7"
                />

                {/* Top connecting accent */}
                <path 
                    d="M15 15H40L35 25H20L15 15Z" 
                    fill="currentColor" 
                    fillOpacity="0.5"
                />
            </svg>
            <span className={`${textSizes[size]} text-zinc-900 dark:text-zinc-100 font-light tracking-[0.15em] ml-1`}>
                SAINT
            </span>
        </div>
    );
}
