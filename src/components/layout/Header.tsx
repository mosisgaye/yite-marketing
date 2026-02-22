"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1152px] mx-auto px-6 h-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10">
            <div className="w-10 h-10 bg-[#C1F11D] rounded-xl flex items-center justify-center">
              <span className="text-[#141414] font-bold text-lg">Y</span>
            </div>
            <span
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? "text-[#141414]" : "text-white"
              }`}
            >
              YITE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className={`text-sm font-semibold transition-colors link-underline ${
                isScrolled
                  ? "text-[#141414] hover:text-[#9DD90D]"
                  : "text-white hover:text-[#C1F11D]"
              }`}
            >
              Services
            </Link>
            <Link
              href="#avantages"
              className={`text-sm font-semibold transition-colors link-underline ${
                isScrolled
                  ? "text-[#141414] hover:text-[#9DD90D]"
                  : "text-white hover:text-[#C1F11D]"
              }`}
            >
              Avantages
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
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <button
              className={`hidden sm:flex items-center gap-2 px-3 py-2 rounded-full border transition-colors ${
                isScrolled
                  ? "border-[rgba(0,0,0,0.1)] text-[#141414] hover:bg-[#F4F3D8]"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
              aria-label="Changer de langue"
            >
              <span className="text-lg">🇫🇷</span>
              <span className="text-sm font-medium">Fr</span>
            </button>

            {/* CTA Button - always visible on desktop */}
            <Button variant="primary" size="sm" className="hidden md:flex">
              Télécharger l&apos;appli
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                isScrolled || isMobileMenuOpen
                  ? "bg-white border border-[rgba(0,0,0,0.1)]"
                  : "bg-white/90"
              }`}
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
                  isMobileMenuOpen ? "rotate-90" : ""
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
              <span className="text-sm font-semibold text-[#141414]">
                {isMobileMenuOpen ? "Fermer" : "Menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-overlay transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-[80px] left-0 right-0 z-40 bg-white shadow-lg transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-1">
          <Link
            href="#services"
            className="text-[#141414] font-semibold py-3 px-4 rounded-xl hover:bg-[#F4F3D8] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#avantages"
            className="text-[#141414] font-semibold py-3 px-4 rounded-xl hover:bg-[#F4F3D8] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Avantages
          </Link>
          <Link
            href="#faq"
            className="text-[#141414] font-semibold py-3 px-4 rounded-xl hover:bg-[#F4F3D8] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          <div className="pt-4 space-y-3">
            <Button variant="primary" className="w-full">
              Télécharger l&apos;appli
            </Button>
            <Button variant="outline" className="w-full">
              Devenir transporteur
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
