"use client";

import { useInView } from "@/hooks/useInView";

const clients = [
  { label: "E-commerce", icon: "🛒" },
  { label: "Restaurants", icon: "🍽️" },
  { label: "Grossistes", icon: "📦" },
  { label: "Pharmacies", icon: "💊" },
  { label: "Agriculteurs", icon: "🌾" },
  { label: "Artisans", icon: "🔨" },
  { label: "Boutiques", icon: "👕" },
  { label: "Particuliers", icon: "👤" },
];

export function Clients() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-10 md:py-16 bg-[#E4FFF2]">
      <div ref={ref} className="px-4 md:px-6 max-w-[800px] mx-auto">
        <h2 className={`text-xl md:text-3xl font-bold text-center mb-6 italic transition-all duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}>
          Qui utilise YITE ?
        </h2>

        <div className="flex flex-wrap justify-center gap-2">
          {clients.map((c, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-1.5 px-3 py-2 bg-white rounded-full text-xs font-medium text-[#141414] transition-all duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span>{c.icon}</span>
              {c.label}
            </span>
          ))}
        </div>

        <p className={`text-center text-xs text-[#141414]/60 mt-4 transition-all duration-700 delay-500 ${isInView ? "opacity-100" : "opacity-0"}`}>
          Entreprises et particuliers en Afrique de l&apos;Ouest.
        </p>
      </div>
    </section>
  );
}
