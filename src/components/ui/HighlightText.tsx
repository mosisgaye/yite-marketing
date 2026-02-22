import { ReactNode } from "react";

interface HighlightTextProps {
  children: ReactNode;
  className?: string;
}

export function HighlightText({
  children,
  className = "",
}: HighlightTextProps) {
  return (
    <span
      className={`relative inline highlight-marker ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20'%3E%3Cpath d='M0 15 Q25 5, 50 12 T100 10' stroke='%23C1F11D' stroke-width='15' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 70%",
        backgroundPosition: "center bottom",
        padding: "0 4px",
      }}
    >
      {children}
    </span>
  );
}
