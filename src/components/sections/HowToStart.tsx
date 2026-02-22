"use client";

import { SectionTag } from "../ui/SectionTag";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { HighlightText } from "../ui/HighlightText";
import { useInView } from "@/hooks/useInView";

const shipperSteps = [
  {
    number: "1",
    title: "Créez votre expédition",
    description:
      "Indiquez les adresses d'enlèvement et de livraison, le type de cargaison et votre budget.",
  },
  {
    number: "2",
    title: "Recevez des offres",
    description:
      "Les transporteurs à proximité voient votre demande et vous envoient leurs propositions en temps réel.",
  },
  {
    number: "3",
    title: "Choisissez et suivez",
    description:
      "Acceptez la meilleure offre, suivez votre colis sur la carte et validez la livraison avec le code PIN.",
  },
];

const carrierSteps = [
  {
    number: "1",
    title: "Inscrivez-vous",
    description:
      "Créez votre profil transporteur et ajoutez vos véhicules avec leurs caractéristiques.",
  },
  {
    number: "2",
    title: "Trouvez des opportunités",
    description:
      "Consultez les expéditions disponibles autour de vous et soumettez vos offres.",
  },
  {
    number: "3",
    title: "Livrez et gagnez",
    description:
      "Une fois accepté, effectuez la livraison et recevez votre paiement directement sur votre portefeuille.",
  },
];

export function HowToStart() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#E4FFF2]">
      <div ref={ref} className="max-w-[1152px] mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionTag className="mb-4">Comment ça marche</SectionTag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Commencez en{" "}
            <HighlightText>3 étapes simples</HighlightText>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Pour les expéditeurs */}
          <div
            className={`bg-white rounded-3xl p-6 md:p-8 transition-all duration-700 delay-100 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl font-bold text-[#141414] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[#C1F11D] rounded-full flex items-center justify-center text-lg">
                📦
              </span>
              Pour les expéditeurs
            </h3>
            <div className="space-y-5">
              {shipperSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <Badge size="md" className="flex-shrink-0 font-bold text-lg">
                    {step.number}
                  </Badge>
                  <div>
                    <h4 className="text-base font-bold text-[#141414] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-[rgba(20,20,20,0.7)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="primary" size="md" className="mt-6 w-full sm:w-auto">
              Expédier un colis
            </Button>
          </div>

          {/* Pour les transporteurs */}
          <div
            className={`bg-white rounded-3xl p-6 md:p-8 transition-all duration-700 delay-200 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl font-bold text-[#141414] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-[#C1F11D] rounded-full flex items-center justify-center text-lg">
                🚚
              </span>
              Pour les transporteurs
            </h3>
            <div className="space-y-5">
              {carrierSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <Badge size="md" className="flex-shrink-0 font-bold text-lg">
                    {step.number}
                  </Badge>
                  <div>
                    <h4 className="text-base font-bold text-[#141414] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-[rgba(20,20,20,0.7)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="secondary" size="md" className="mt-6 w-full sm:w-auto">
              Devenir transporteur
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
