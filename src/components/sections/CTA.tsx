import { Button } from "../ui/Button";

export function CTA() {
  return (
    <section className="py-20 bg-[#141414]">
      <div className="max-w-[1152px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Prêt à expédier avec YITE ?
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
          Rejoignez des milliers d&apos;expéditeurs et transporteurs qui font confiance
          à YITE pour leurs livraisons en Afrique de l&apos;Ouest.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg">
            Télécharger l&apos;appli
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10"
          >
            Devenir transporteur
          </Button>
        </div>

        {/* App badges */}
        <div className="mt-12 flex justify-center gap-4">
          <a
            href="#"
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-70">Télécharger sur</div>
              <div className="font-semibold">App Store</div>
            </div>
          </a>
          <a
            href="#"
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.303 2.303-8.633-8.635z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-70">Disponible sur</div>
              <div className="font-semibold">Google Play</div>
            </div>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/50 text-sm">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Paiements sécurisés
          </div>
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Transporteurs vérifiés
          </div>
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Support 7j/7
          </div>
        </div>
      </div>
    </section>
  );
}
