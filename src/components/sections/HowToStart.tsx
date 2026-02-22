"use client";

import { useInView } from "@/hooks/useInView";

const shipperSteps = [
  { n: "1", title: "Créez votre expédition", desc: "Indiquez les adresses et votre budget." },
  { n: "2", title: "Recevez des offres", desc: "Les transporteurs vous envoient leurs propositions." },
  { n: "3", title: "Choisissez et suivez", desc: "Acceptez et suivez votre colis sur la carte." },
];

const carrierSteps = [
  { n: "1", title: "Inscrivez-vous", desc: "Créez votre profil et ajoutez vos véhicules." },
  { n: "2", title: "Trouvez des opportunités", desc: "Consultez les expéditions et soumettez vos offres." },
  { n: "3", title: "Livrez et gagnez", desc: "Effectuez la livraison et recevez votre paiement." },
];

export function HowToStart() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-10 md:py-16 bg-[#E4FFF2]">
      <div ref={ref} className="px-4 md:px-6 max-w-[1152px] mx-auto">
        <div className={`text-center mb-8 transition-all duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <span className="inline-block px-3 py-1 bg-[#F4F3D8] text-[#141414] text-xs font-medium rounded-full mb-2">
            Comment ça marche
          </span>
          <h2 className="text-xl md:text-3xl font-bold">
            Commencez en{" "}
            <span className="relative inline-block">
              <span className="relative z-10">3 étapes</span>
              <span className="absolute bottom-0.5 left-0 w-full h-2 bg-[#C1F11D] -z-0 opacity-60" />
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Expéditeurs */}
          <div className={`bg-white rounded-2xl p-5 transition-all duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}>
            <h3 className="text-sm font-bold text-[#141414] mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#C1F11D] rounded-full flex items-center justify-center text-sm">📦</span>
              Pour les expéditeurs
            </h3>
            <div className="space-y-3">
              {shipperSteps.map((s, i) => (
                <div key={i} className="flex gap-3">
                  <span className="w-7 h-7 bg-[#C1F11D] rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {s.n}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#141414]">{s.title}</h4>
                    <p className="text-xs text-[#141414]/60">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="mt-4 block py-2.5 bg-[#C1F11D] text-[#141414] text-sm font-semibold rounded-xl text-center">
              Expédier un colis
            </a>
          </div>

          {/* Transporteurs */}
          <div className={`bg-white rounded-2xl p-5 transition-all duration-500 delay-100 ${isInView ? "opacity-100" : "opacity-0"}`}>
            <h3 className="text-sm font-bold text-[#141414] mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[#C1F11D] rounded-full flex items-center justify-center text-sm">🚚</span>
              Pour les transporteurs
            </h3>
            <div className="space-y-3">
              {carrierSteps.map((s, i) => (
                <div key={i} className="flex gap-3">
                  <span className="w-7 h-7 bg-[#141414] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {s.n}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#141414]">{s.title}</h4>
                    <p className="text-xs text-[#141414]/60">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="mt-4 block py-2.5 bg-[#141414] text-white text-sm font-semibold rounded-xl text-center">
              Devenir transporteur
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
