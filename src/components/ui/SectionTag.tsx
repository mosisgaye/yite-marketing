import { ReactNode } from "react";

interface SectionTagProps {
  children: ReactNode;
  className?: string;
}

export function SectionTag({ children, className = "" }: SectionTagProps) {
  return (
    <span
      className={`inline-block px-4 py-2 text-sm font-medium rounded-full bg-[#F4F3D8] text-[#141414] ${className}`}
    >
      {children}
    </span>
  );
}
