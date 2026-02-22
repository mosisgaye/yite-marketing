import { ReactNode } from "react";

interface PillProps {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Pill({ icon, children, className = "" }: PillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-5 py-3 bg-white border border-[rgba(0,0,0,0.1)] rounded-full text-[#141414] ${className}`}
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span className="font-medium">{children}</span>
    </span>
  );
}
