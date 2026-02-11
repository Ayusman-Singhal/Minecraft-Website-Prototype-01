import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface BlockCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export const BlockCard = React.forwardRef<HTMLDivElement, BlockCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "bg-white rounded-2xl border-2 border-border p-6",
          "shadow-block hover:shadow-block-hover transition-shadow duration-300",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

BlockCard.displayName = "BlockCard";
