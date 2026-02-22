"use client";

import Image from "next/image";
import { SectionTag } from "../ui/SectionTag";
import { Button } from "../ui/Button";
import { HighlightText } from "../ui/HighlightText";
import { useInView } from "@/hooks/useInView";

const features = [
  {
    icon: "🗺️",
    title: "Opportunités autour de vous",
    description: "Visualisez toutes les demandes d'expédition dans votre zone sur une carte interactive.",
  },
  {
    icon: "💰",
    title: "Proposez vos tarifs",
    description: "Soumettez vos offres et négociez directement avec les expéditeurs.",
  },
  {
    icon: "📊",
    title: "Gérez vos revenus",
    description: "Suivez vos gains, consultez l'historique et recevez vos paiements rapidement.",
  },
  {
    icon: "⭐",
    title: "Construisez votre réputation",
    description: "Accumulez les avis positifs et accédez à plus d'opportunités.",
  },
];

const stats = [
  { value: "5K+", label: "Transporteurs actifs" },
  { value: "98%", label: "Satisfaction" },
  { value: "24h", label: "Délai de paiement" },
];

export function CarrierApp() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section id="transporteur" className="py-12 sm:py-16 md:py-24 bg-[#F4F3D8]">
      <div ref={ref} className="max-w-[1152px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Texte à gauche */}
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <SectionTag className="mb-4">Pour les transporteurs</SectionTag>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Développez votre activité <HighlightText>sans limites</HighlightText>
            </h2>

            <p className="text-base sm:text-lg text-[rgba(20,20,20,0.7)] mb-6 sm:mb-8">
              Rejoignez le réseau YITE et accédez à des milliers d&apos;opportunités de transport.
              Vous êtes maître de vos horaires et de vos tarifs.
            </p>

            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-3 sm:gap-4 transition-all duration-500 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <span className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl flex-shrink-0 shadow-sm">
                    {feature.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-[#141414] mb-0.5 sm:mb-1 text-sm sm:text-base">{feature.title}</h4>
                    <p className="text-xs sm:text-sm text-[rgba(20,20,20,0.7)]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 p-3 sm:p-4 bg-white/50 rounded-xl sm:rounded-2xl">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#141414]">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-[rgba(20,20,20,0.6)]">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Devenir transporteur
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Voir les conditions
              </Button>
            </div>
          </div>

          {/* Image à droite */}
          <div
            className={`order-1 lg:order-2 relative transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative aspect-[720/1600] max-w-[240px] sm:max-w-[280px] md:max-w-[320px] mx-auto lg:ml-auto lg:mr-0">
              {/* Background decorative elements */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-bl from-[#C1F11D]/30 to-[#9DD90D]/20 rounded-[32px] sm:rounded-[40px] -z-10" />
              <div className="hidden sm:block absolute -top-6 -left-6 w-40 h-40 bg-[#C1F11D]/40 rounded-full blur-3xl -z-10" />

              <Image
                src="/images/transporteur.jpeg"
                alt="Application YITE pour les transporteurs"
                fill
                className="object-contain rounded-[24px] sm:rounded-[32px] shadow-2xl"
                sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
