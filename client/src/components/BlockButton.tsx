import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface BlockButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
}

export const BlockButton = React.forwardRef<HTMLButtonElement, BlockButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-primary-foreground border-primary-foreground/20 hover:bg-primary/90",
      secondary: "bg-secondary text-white border-white/20 hover:bg-secondary/90",
      outline: "bg-transparent border-2 border-foreground text-foreground hover:bg-foreground/5",
      danger: "bg-destructive text-destructive-foreground border-white/20 hover:bg-destructive/90",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm border-b-4 active:border-b-0 active:translate-y-1",
      md: "px-6 py-3 text-base border-b-4 active:border-b-0 active:translate-y-1",
      lg: "px-8 py-4 text-lg border-b-[6px] active:border-b-0 active:translate-y-1.5",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "font-display uppercase tracking-wide rounded-xl font-bold transition-all duration-100",
          "shadow-lg hover:shadow-xl",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

BlockButton.displayName = "BlockButton";
