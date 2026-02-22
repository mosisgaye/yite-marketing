"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const features = [
  { icon: "📦", title: "Publiez votre expédition", description: "Décrivez votre colis et définissez votre budget." },
  { icon: "🔔", title: "Recevez des offres", description: "Les transporteurs vous envoient leurs propositions." },
  { icon: "📍", title: "Suivez en direct", description: "Visualisez votre colis sur la carte." },
  { icon: "🔐", title: "Livraison sécurisée", description: "Validez avec un code PIN unique." },
];

export function ShipperApp() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section id="expediteur" className="py-12 md:py-20 bg-white">
      <div ref={ref} className="px-4 md:px-6 max-w-[1152px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className={`transition-all duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}>
            <div className="relative aspect-[9/16] max-w-[200px] md:max-w-[280px] mx-auto">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#C1F11D]/20 to-[#E4FFF2]/40 rounded-3xl -z-10" />
              <Image
                src="/images/expediteur.jpeg"
                alt="App Expéditeur YITE"
                fill
                className="object-contain rounded-2xl shadow-xl"
                sizes="(max-width: 768px) 200px, 280px"
              />
            </div>
          </div>

          {/* Text */}
          <div className={`transition-all duration-700 delay-100 ${isInView ? "opacity-100" : "opacity-0"}`}>
            <span className="inline-block px-3 py-1 bg-[#E4FFF2] text-[#141414] text-xs font-medium rounded-full mb-3">
              Pour les expéditeurs
            </span>

            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#141414] leading-tight mb-3">
              Envoyez vos colis{" "}
              <span className="relative inline-block">
                <span className="relative z-10">simplement</span>
                <span className="absolute bottom-0.5 left-0 w-full h-2 bg-[#C1F11D] -z-0 opacity-60" />
              </span>
            </h2>

            <p className="text-sm text-[#141414]/70 mb-6">
              YITE connecte vos besoins aux transporteurs les plus proches.
            </p>

            <div className="space-y-3 mb-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="w-9 h-9 bg-[#E4FFF2] rounded-lg flex items-center justify-center text-base flex-shrink-0">
                    {f.icon}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#141414]">{f.title}</h4>
                    <p className="text-xs text-[#141414]/60">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-block w-full md:w-auto py-3 px-6 bg-[#C1F11D] text-[#141414] text-sm font-semibold rounded-xl text-center hover:bg-[#9DD90D] transition-colors"
            >
              Télécharger l&apos;app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
