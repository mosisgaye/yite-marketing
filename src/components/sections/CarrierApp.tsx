"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const features = [
  { icon: "🗺️", title: "Opportunités autour de vous", description: "Visualisez les demandes sur une carte." },
  { icon: "💰", title: "Proposez vos tarifs", description: "Négociez directement avec les expéditeurs." },
  { icon: "📊", title: "Gérez vos revenus", description: "Suivez vos gains et paiements." },
  { icon: "⭐", title: "Construisez votre réputation", description: "Accumulez les avis positifs." },
];

export function CarrierApp() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section id="transporteur" className="py-12 md:py-20 bg-[#F4F3D8]">
      <div ref={ref} className="px-4 md:px-6 max-w-[1152px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text - order 2 on mobile, 1 on desktop */}
          <div className={`order-2 lg:order-1 transition-all duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}>
            <span className="inline-block px-3 py-1 bg-white text-[#141414] text-xs font-medium rounded-full mb-3">
              Pour les transporteurs
            </span>

            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#141414] leading-tight mb-3">
              Développez votre activité{" "}
              <span className="relative inline-block">
                <span className="relative z-10">sans limites</span>
                <span className="absolute bottom-0.5 left-0 w-full h-2 bg-[#C1F11D] -z-0 opacity-60" />
              </span>
            </h2>

            <p className="text-sm text-[#141414]/70 mb-6">
              Rejoignez YITE et accédez à des milliers d&apos;opportunités.
            </p>

            <div className="space-y-3 mb-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-base flex-shrink-0 shadow-sm">
                    {f.icon}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#141414]">{f.title}</h4>
                    <p className="text-xs text-[#141414]/60">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 p-3 bg-white/60 rounded-xl mb-6">
              <div className="text-center">
                <p className="text-lg font-bold text-[#141414]">5K+</p>
                <p className="text-[10px] text-[#141414]/60">Transporteurs</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-[#141414]">98%</p>
                <p className="text-[10px] text-[#141414]/60">Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-[#141414]">24h</p>
                <p className="text-[10px] text-[#141414]/60">Paiement</p>
              </div>
            </div>

            <a
              href="#"
              className="inline-block w-full md:w-auto py-3 px-6 bg-[#141414] text-white text-sm font-semibold rounded-xl text-center hover:bg-[#3F3F3F] transition-colors"
            >
              Devenir transporteur
            </a>
          </div>

          {/* Image - order 1 on mobile, 2 on desktop */}
          <div className={`order-1 lg:order-2 transition-all duration-700 delay-100 ${isInView ? "opacity-100" : "opacity-0"}`}>
            <div className="relative aspect-[9/16] max-w-[200px] md:max-w-[280px] mx-auto lg:ml-auto">
              <div className="absolute -inset-3 bg-gradient-to-bl from-[#C1F11D]/30 to-[#9DD90D]/20 rounded-3xl -z-10" />
              <Image
                src="/images/transporteur.jpeg"
                alt="App Transporteur YITE"
                fill
                className="object-contain rounded-2xl shadow-xl"
                sizes="(max-width: 768px) 200px, 280px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
