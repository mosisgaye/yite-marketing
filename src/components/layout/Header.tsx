"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1152px] mx-auto px-4 sm:px-6 h-[60px] sm:h-[70px] md:h-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#C1F11D] rounded-lg sm:rounded-xl flex items-center justify-center">
              <span className="text-[#141414] font-bold text-base sm:text-lg">Y</span>
            </div>
            <span
              className={`text-xl sm:text-2xl font-bold transition-colors ${
                isScrolled || isMobileMenuOpen ? "text-[#141414]" : "text-white"
              }`}
            >
              YITE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#expediteur"
              className={`text-sm font-semibold transition-colors link-underline ${
                isScrolled
                  ? "text-[#141414] hover:text-[#9DD90D]"
                  : "text-white hover:text-[#C1F11D]"
              }`}
            >
              Expéditeurs
            </Link>
            <Link
              href="#transporteur"
              className={`text-sm font-semibold transition-colors link-underline ${
                isScrolled
                  ? "text-[#141414] hover:text-[#9DD90D]"
                  : "text-white hover:text-[#C1F11D]"
              }`}
            >
              Transporteurs
            </Link>
            <Link
              href="#faq"
              className={`text-sm font-semibold transition-colors link-underline ${
                isScrolled
                  ? "text-[#141414] hover:text-[#9DD90D]"
                  : "text-white hover:text-[#C1F11D]"
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* CTA Button - always visible on desktop */}
            <Button variant="primary" size="sm" className="hidden lg:flex">
              Télécharger l&apos;appli
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 sm:w-auto sm:h-auto sm:gap-2 sm:px-4 sm:py-2 rounded-full transition-colors bg-[#C1F11D] hover:bg-[#9DD90D]"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              >
                {isMobileMenuOpen ? (
                  <path
                    d="M5 5L15 15M15 5L5 15"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M3 5H17M3 10H17M3 15H17"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
              <span className="hidden sm:inline text-sm font-semibold text-[#141414]">
                Menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-[60px] sm:top-[70px] left-0 right-0 z-40 bg-white shadow-xl transition-all duration-300 lg:hidden max-h-[calc(100vh-60px)] sm:max-h-[calc(100vh-70px)] overflow-y-auto ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-4 sm:p-6">
          <Link
            href="#expediteur"
            className="text-[#141414] font-semibold py-3 px-4 rounded-xl hover:bg-[#F4F3D8] transition-colors text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Expéditeurs
          </Link>
          <Link
            href="#transporteur"
            className="text-[#141414] font-semibold py-3 px-4 rounded-xl hover:bg-[#F4F3D8] transition-colors text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Transporteurs
          </Link>
          <Link
            href="#avantages"
            className="text-[#141414] font-semibold py-3 px-4 rounded-xl hover:bg-[#F4F3D8] transition-colors text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Avantages
          </Link>
          <Link
            href="#faq"
            className="text-[#141414] font-semibold py-3 px-4 rounded-xl hover:bg-[#F4F3D8] transition-colors text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </Link>

          <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
            <Button variant="primary" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              Télécharger l&apos;appli
            </Button>
            <Button variant="secondary" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              Devenir transporteur
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
