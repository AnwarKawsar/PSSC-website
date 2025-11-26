"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps & { href?: string }>(
    ({ className, variant = "primary", size = "md", isLoading, children, disabled, href, ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-black hover:brightness-110 border border-transparent shadow-[0_0_10px_rgba(0,243,255,0.2)] hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]",
            secondary: "bg-secondary text-white hover:brightness-110 border border-transparent shadow-[0_0_10px_rgba(188,19,254,0.2)] hover:shadow-[0_0_20px_rgba(188,19,254,0.5)]",
            outline: "bg-transparent border border-primary/50 text-primary hover:bg-primary/10",
            ghost: "bg-transparent hover:bg-white/5 text-gray-300 hover:text-white",
            danger: "bg-red-500/10 border border-red-500/50 text-red-500 hover:bg-red-500/20",
        };

        const sizes = {
            sm: "h-8 px-3 text-xs",
            md: "h-10 px-4 py-2",
            lg: "h-12 px-8 text-lg",
            icon: "h-10 w-10 p-2 flex items-center justify-center",
        };

        const baseStyles = cn(
            "relative inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
            variants[variant],
            sizes[size],
            className
        );

        if (href) {
            return (
                <Link href={href} passHref legacyBehavior>
                    <motion.a
                        ref={ref as React.Ref<HTMLAnchorElement>}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={baseStyles}
                        {...(props as any)}
                    >
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {children}
                    </motion.a>
                </Link>
            );
        }

        return (
            <motion.button
                ref={ref as React.Ref<HTMLButtonElement>}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={disabled || isLoading}
                className={baseStyles}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
