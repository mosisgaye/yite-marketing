"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

const faqs = [
  {
    q: "Comment fonctionne le système d'enchères ?",
    a: "Les transporteurs reçoivent votre demande et soumettent leurs offres. Vous choisissez la meilleure en fonction du prix et des notes.",
  },
  {
    q: "Quels types de cargaisons puis-je expédier ?",
    a: "Tous types : marchandises, fragile, périssable, matériaux, meubles. Précisez le type pour que les transporteurs équipés répondent.",
  },
  {
    q: "Comment sont vérifiés les transporteurs ?",
    a: "Identité, permis et assurance vérifiés. Consultez leur note, ponctualité et historique avant d'accepter.",
  },
  {
    q: "Comment fonctionne le code PIN ?",
    a: "Un code unique est généré. Le transporteur le vérifie à l'enlèvement et à la livraison pour sécuriser l'échange.",
  },
  {
    q: "Comment sont gérés les paiements ?",
    a: "Portefeuille intégré en FCFA. À la livraison confirmée, le montant est transféré au transporteur. Retrait vers compte ou mobile money.",
  },
];

function FaqItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full p-4 flex items-center justify-between text-left"
      >
        <span className="text-sm font-semibold text-[#141414] pr-4">{q}</span>
        <span className={`w-7 h-7 bg-[#C1F11D] rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2V10M2 6H10" stroke="#141414" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40" : "max-h-0"}`}>
        <p className="px-4 pb-4 text-xs text-[#141414]/70">{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-10 md:py-16 bg-[#E4FFF2]">
      <div ref={ref} className="px-4 md:px-6 max-w-[800px] mx-auto">
        <div className={`text-center mb-6 transition-all duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}>
          <span className="inline-block px-3 py-1 bg-[#F4F3D8] text-[#141414] text-xs font-medium rounded-full mb-2">
            FAQ
          </span>
          <h2 className="text-xl md:text-3xl font-bold">Questions fréquentes</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${isInView ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <FaqItem
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
