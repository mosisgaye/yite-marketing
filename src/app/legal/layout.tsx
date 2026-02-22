import Link from "next/link";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#E4FFF2]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="px-4 md:px-6 max-w-[900px] mx-auto h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5">
            <div className="w-8 h-8 bg-[#C1F11D] rounded-lg flex items-center justify-center">
              <span className="text-[#141414] font-bold text-sm">Y</span>
            </div>
            <span className="text-lg font-bold text-[#141414]">YITE</span>
          </Link>
          <Link href="/" className="text-sm text-[#141414]/70 hover:text-[#141414]">
            Retour au site
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 md:px-6 py-8 md:py-12 max-w-[900px] mx-auto">
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
          {children}
        </div>

        {/* Legal Nav */}
        <nav className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-[#141414]/60">
          <Link href="/legal/cgu" className="hover:text-[#141414]">Conditions d&apos;utilisation</Link>
          <Link href="/legal/confidentialite" className="hover:text-[#141414]">Politique de confidentialité</Link>
          <Link href="/legal/mentions-legales" className="hover:text-[#141414]">Mentions légales</Link>
        </nav>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-[#141414]/50">
        © YITE, 2026. Tous droits réservés.
      </footer>
    </div>
  );
}
