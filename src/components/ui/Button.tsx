"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  href?: string;
  isLoading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  isLoading = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold
    rounded-2xl transition-all duration-200
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C1F11D]
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    active:scale-[0.98]
  `;

  const variants = {
    primary: `
      bg-[#C1F11D] text-[#141414]
      hover:bg-[#9DD90D] hover:shadow-lg hover:shadow-[#C1F11D]/20 hover:-translate-y-0.5
      active:bg-[#8BC70A]
    `,
    secondary: `
      bg-[#141414] text-white
      hover:bg-[#3F3F3F] hover:shadow-lg hover:-translate-y-0.5
      active:bg-[#141414]
    `,
    outline: `
      border-2 border-[rgba(0,0,0,0.1)] bg-transparent text-[#141414]
      hover:bg-[#F4F3D8] hover:border-[#C1F11D] hover:-translate-y-0.5
      active:bg-[#F4F3D8]
    `,
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm min-h-[44px]",
    md: "px-6 py-3 text-base min-h-[48px]",
    lg: "px-8 py-4 text-lg min-h-[52px]",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = isLoading ? (
    <>
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      Chargement...
    </>
  ) : (
    children
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        aria-disabled={disabled || isLoading}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
