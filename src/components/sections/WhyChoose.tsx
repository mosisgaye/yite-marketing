"use client";

import { useInView } from "@/hooks/useInView";

const features = [
  {
    icon: "⚡",
    title: "Enchères en temps réel",
    description: "Publiez et recevez des offres instantanément des transporteurs à proximité.",
  },
  {
    icon: "📍",
    title: "Suivi GPS en direct",
    description: "Suivez votre colis sur la carte avec notifications à chaque étape.",
  },
  {
    icon: "✅",
    title: "Transporteurs vérifiés",
    description: "Identité, permis et assurance vérifiés. Consultez les notes et avis.",
  },
];

export function WhyChoose() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-10 md:py-16 bg-[#E4FFF2]">
      <div ref={ref} className="px-4 md:px-6 max-w-[1152px] mx-auto">
        <h2 className={`text-xl md:text-3xl font-bold text-center mb-8 transition-all duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}>
          Pourquoi choisir{" "}
          <span className="relative inline-block">
            <span className="relative z-10">YITE</span>
            <span className="absolute bottom-0.5 left-0 w-full h-2 bg-[#C1F11D] -z-0 opacity-60" />
          </span>
          {" "}?
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-5 text-center transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="inline-flex w-12 h-12 bg-[#C1F11D]/20 rounded-xl items-center justify-center text-2xl mb-3">
                {f.icon}
              </span>
              <h3 className="text-sm font-bold text-[#141414] mb-2">{f.title}</h3>
              <p className="text-xs text-[#141414]/70">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
