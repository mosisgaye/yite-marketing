import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 bg-[#DCDBC7]">
      <div className="px-4 md:px-6 max-w-[1152px] mx-auto">
        {/* Logo + Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-1.5 mb-3">
              <div className="w-8 h-8 bg-[#C1F11D] rounded-lg flex items-center justify-center">
                <span className="text-[#141414] font-bold text-sm">Y</span>
              </div>
              <span className="text-lg font-bold text-[#141414]">YITE</span>
            </Link>
            <p className="text-xs text-[#141414]/60 mb-4">
              La plateforme de livraison en Afrique de l&apos;Ouest.
            </p>
            <div className="flex gap-2">
              <a href="#" className="px-3 py-1.5 bg-[#141414] text-white text-[10px] rounded-lg flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                App Store
              </a>
              <a href="#" className="px-3 py-1.5 bg-[#141414] text-white text-[10px] rounded-lg flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.303 2.303-8.633-8.635z" />
                </svg>
                Play Store
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold text-[#141414] mb-2">Services</h4>
            <ul className="space-y-1 text-xs text-[#141414]/70">
              <li><Link href="#expediteur">Expéditeurs</Link></li>
              <li><Link href="#transporteur">Transporteurs</Link></li>
              <li><Link href="#">Tarifs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#141414] mb-2">Entreprise</h4>
            <ul className="space-y-1 text-xs text-[#141414]/70">
              <li><Link href="#">À propos</Link></li>
              <li><Link href="#">Carrières</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#141414] mb-2">Légal</h4>
            <ul className="space-y-1 text-xs text-[#141414]/70">
              <li><Link href="#">CGU</Link></li>
              <li><Link href="#">Confidentialité</Link></li>
              <li><Link href="#">Mentions légales</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-4 border-t border-[#141414]/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-[#141414]/60">
            © YITE, 2026. Tous droits réservés.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full border border-[#141414]/10 flex items-center justify-center text-[#141414] hover:bg-[#C1F11D] hover:border-[#C1F11D] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2H15C13.67 2 12.4 2.53 11.46 3.46C10.53 4.4 10 5.67 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73 14.11 6.48 14.29 6.29C14.48 6.11 14.73 6 15 6H18V2Z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-[#141414]/10 flex items-center justify-center text-[#141414] hover:bg-[#C1F11D] hover:border-[#C1F11D] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-[#141414]/10 flex items-center justify-center text-[#141414] hover:bg-[#C1F11D] hover:border-[#C1F11D] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4L10.5 12.5M20 20L13.5 11.5M10.5 12.5L4 20H8L13.5 11.5M10.5 12.5L16 4H20L13.5 11.5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
