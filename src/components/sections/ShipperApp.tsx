"use client";

import Image from "next/image";
import { SectionTag } from "../ui/SectionTag";
import { Button } from "../ui/Button";
import { HighlightText } from "../ui/HighlightText";
import { useInView } from "@/hooks/useInView";

const features = [
  {
    icon: "📦",
    title: "Publiez votre expédition",
    description: "Décrivez votre colis, indiquez les adresses et définissez votre budget.",
  },
  {
    icon: "🔔",
    title: "Recevez des offres en temps réel",
    description: "Les transporteurs à proximité vous envoient leurs propositions instantanément.",
  },
  {
    icon: "📍",
    title: "Suivez en direct",
    description: "Visualisez votre colis sur la carte et recevez des notifications à chaque étape.",
  },
  {
    icon: "🔐",
    title: "Livraison sécurisée",
    description: "Validez la réception avec un code PIN unique pour une transaction protégée.",
  },
];

export function ShipperApp() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section id="expediteur" className="py-12 sm:py-16 md:py-24 bg-white">
      <div ref={ref} className="max-w-[1152px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image à gauche */}
          <div
            className={`relative transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative aspect-[720/1600] max-w-[240px] sm:max-w-[280px] md:max-w-[320px] mx-auto lg:mx-0">
              {/* Background decorative elements */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-br from-[#C1F11D]/20 to-[#E4FFF2]/40 rounded-[32px] sm:rounded-[40px] -z-10" />
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 bg-[#C1F11D]/30 rounded-full blur-2xl -z-10" />

              <Image
                src="/images/expediteur.jpeg"
                alt="Application YITE pour les expéditeurs"
                fill
                className="object-contain rounded-[24px] sm:rounded-[32px] shadow-2xl"
                sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
              />
            </div>
          </div>

          {/* Texte à droite */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <SectionTag className="mb-4">Pour les expéditeurs</SectionTag>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Envoyez vos colis <HighlightText>en toute simplicité</HighlightText>
            </h2>

            <p className="text-base sm:text-lg text-[rgba(20,20,20,0.7)] mb-6 sm:mb-8">
              YITE connecte vos besoins de livraison aux transporteurs les plus proches.
              Publiez, comparez les offres et suivez en temps réel.
            </p>

            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-3 sm:gap-4 transition-all duration-500 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <span className="w-10 h-10 sm:w-12 sm:h-12 bg-[#E4FFF2] rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0">
                    {feature.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-[#141414] mb-0.5 sm:mb-1 text-sm sm:text-base">{feature.title}</h4>
                    <p className="text-xs sm:text-sm text-[rgba(20,20,20,0.7)]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Télécharger l&apos;app
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
