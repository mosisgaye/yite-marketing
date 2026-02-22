import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Badge({ children, size = "md", className = "" }: BadgeProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  };

  return (
    <div
      className={`${sizes[size]} bg-[#C1F11D] rounded-full flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}
