"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const advantages = [
  { icon: "💰", title: "Négociez vos tarifs", desc: "Fixez votre budget, recevez des offres, gardez le contrôle." },
  { icon: "📦", title: "Tous types de cargaisons", desc: "Général, fragile, volumineux. Véhicule adapté à chaque besoin." },
  { icon: "🔐", title: "Code PIN sécurisé", desc: "Un code unique sécurise chaque enlèvement et livraison." },
  { icon: "💳", title: "Paiement intégré", desc: "Portefeuille FCFA. Payez et suivez vos transactions." },
];

export function Advantages() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section id="avantages" className="py-10 md:py-16 bg-[#E4FFF2]">
      <div ref={ref} className="px-4 md:px-6 max-w-[1152px] mx-auto">
        <div className={`mb-6 transition-all duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <span className="inline-block px-3 py-1 bg-[#F4F3D8] text-[#141414] text-xs font-medium rounded-full mb-2">
            Avantages
          </span>
          <h2 className="text-xl md:text-3xl font-bold max-w-md">
            Solution complète pour vos expéditions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Image */}
          <div className={`relative rounded-2xl overflow-hidden h-[250px] md:h-[350px] transition-all duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}>
            <Image
              src="/entreprise.png"
              alt="Équipe YITE"
              fill
              className="object-cover"
              quality={85}
            />
          </div>

          {/* Advantages List */}
          <div className="space-y-4">
            {advantages.map((a, i) => (
              <div
                key={i}
                className={`flex gap-3 transition-all duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
              >
                <span className="w-9 h-9 bg-[#C1F11D] rounded-lg flex items-center justify-center text-base flex-shrink-0">
                  {a.icon}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#141414]">{a.title}</h3>
                  <p className="text-xs text-[#141414]/70">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
