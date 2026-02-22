"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const headerBg = isScrolled || isMobileMenuOpen
    ? "bg-white shadow-sm"
    : "bg-transparent";

  const textColor = isScrolled || isMobileMenuOpen
    ? "text-[#141414]"
    : "text-white";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
        {/* Mobile: h-14 (56px), Desktop: h-16 (64px) */}
        <div className="h-14 md:h-16 px-4 md:px-6 max-w-[1152px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 z-10">
            <div className="w-8 h-8 bg-[#C1F11D] rounded-lg flex items-center justify-center">
              <span className="text-[#141414] font-bold text-sm">Y</span>
            </div>
            <span className={`text-lg font-bold transition-colors ${textColor}`}>
              YITE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#expediteur" className={`text-sm font-medium transition-colors ${textColor} hover:text-[#C1F11D]`}>
              Expéditeurs
            </Link>
            <Link href="#transporteur" className={`text-sm font-medium transition-colors ${textColor} hover:text-[#C1F11D]`}>
              Transporteurs
            </Link>
            <Link href="#faq" className={`text-sm font-medium transition-colors ${textColor} hover:text-[#C1F11D]`}>
              FAQ
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <Link
              href="#"
              className="hidden md:inline-flex items-center px-4 py-2 bg-[#C1F11D] text-[#141414] text-sm font-semibold rounded-full hover:bg-[#9DD90D] transition-colors"
            >
              Télécharger
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#C1F11D]"
              aria-label={isMobileMenuOpen ? "Fermer" : "Menu"}
            >
              {isMobileMenuOpen ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 4L14 14M14 4L4 14" stroke="#141414" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 4H16M2 9H16M2 14H16" stroke="#141414" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-14 left-0 right-0 z-40 bg-white md:hidden transition-all duration-200 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="p-4 flex flex-col gap-1">
          <Link
            href="#expediteur"
            className="py-3 px-4 text-[#141414] font-medium rounded-xl hover:bg-[#F4F3D8]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Expéditeurs
          </Link>
          <Link
            href="#transporteur"
            className="py-3 px-4 text-[#141414] font-medium rounded-xl hover:bg-[#F4F3D8]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Transporteurs
          </Link>
          <Link
            href="#avantages"
            className="py-3 px-4 text-[#141414] font-medium rounded-xl hover:bg-[#F4F3D8]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Avantages
          </Link>
          <Link
            href="#faq"
            className="py-3 px-4 text-[#141414] font-medium rounded-xl hover:bg-[#F4F3D8]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </Link>

          <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link
              href="#"
              className="py-3 text-center bg-[#C1F11D] text-[#141414] font-semibold rounded-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Télécharger l&apos;appli
            </Link>
            <Link
              href="#"
              className="py-3 text-center bg-[#141414] text-white font-semibold rounded-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Devenir transporteur
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
