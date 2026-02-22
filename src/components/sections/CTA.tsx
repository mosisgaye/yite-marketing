"use client";

import { useInView } from "@/hooks/useInView";

export function CTA() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-10 md:py-16 bg-[#141414]">
      <div ref={ref} className="px-4 md:px-6 max-w-[800px] mx-auto text-center">
        <h2 className={`text-xl md:text-3xl font-bold text-white mb-3 transition-all duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}>
          Prêt à expédier avec YITE ?
        </h2>
        <p className={`text-sm text-white/70 mb-6 transition-all duration-700 delay-100 ${isInView ? "opacity-100" : "opacity-0"}`}>
          Rejoignez des milliers d&apos;utilisateurs en Afrique de l&apos;Ouest.
        </p>

        <div className={`flex flex-col gap-3 mb-8 transition-all duration-700 delay-200 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <a href="#" className="py-3 bg-[#C1F11D] text-[#141414] text-sm font-semibold rounded-xl">
            Télécharger l&apos;appli
          </a>
          <a href="#" className="py-3 border border-white/30 text-white text-sm font-semibold rounded-xl">
            Devenir transporteur
          </a>
        </div>

        {/* App badges */}
        <div className={`flex justify-center gap-3 mb-6 transition-all duration-700 delay-300 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <a href="#" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <span className="text-white text-xs font-medium">App Store</span>
          </a>
          <a href="#" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.303 2.303-8.633-8.635z" />
            </svg>
            <span className="text-white text-xs font-medium">Google Play</span>
          </a>
        </div>

        {/* Trust indicators */}
        <div className={`flex flex-wrap justify-center gap-4 text-white/50 text-[10px] transition-all duration-700 delay-400 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <span>🔒 Paiements sécurisés</span>
          <span>✓ Transporteurs vérifiés</span>
          <span>📞 Support 7j/7</span>
        </div>
      </div>
    </section>
  );
}
