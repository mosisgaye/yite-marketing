"use client";

import Image from "next/image";
import { Button } from "../ui/Button";
import { HighlightText } from "../ui/HighlightText";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

function AnimatedStat({
  end,
  suffix,
  label,
  delay,
  isInView,
}: {
  end: number;
  suffix: string;
  label: string;
  delay: number;
  isInView: boolean;
}) {
  const count = useCountUp({ end, duration: 2000, delay, enabled: isInView });

  return (
    <div className="text-center sm:text-left">
      <div className="text-3xl md:text-4xl font-bold text-[#C1F11D]">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-white/70">{label}</div>
    </div>
  );
}

export function Hero() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="relative h-[80vh] min-h-[550px] max-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/banner.png"
        alt="Livraison YITE - Un transporteur remet un colis à une cliente"
        fill
        priority
        className="object-cover object-center"
        quality={90}
      />

      {/* Overlay gradient - improved contrast */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#C1F11D] rounded-full opacity-20 blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-48 h-48 bg-[#C1F11D] rounded-full opacity-20 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 max-w-[1152px] mx-auto px-6 py-16 pt-24"
      >
        <div className="max-w-2xl">
          {/* Title with animation */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6 transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Expédiez vos colis{" "}
            <HighlightText>au meilleur prix</HighlightText>
          </h1>

          {/* Description with animation */}
          <p
            className={`text-base md:text-lg text-white/80 mb-8 transition-all duration-700 delay-100 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            YITE connecte expéditeurs et transporteurs en temps réel. Publiez
            votre demande, recevez des offres et choisissez le transporteur qui
            vous convient.
          </p>

          {/* CTA Buttons with animation */}
          <div
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-200 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Button variant="primary" size="lg">
              Télécharger l&apos;appli
            </Button>
            <Button variant="secondary" size="lg">
              Devenir transporteur
            </Button>
          </div>

          {/* Stats with count-up animation */}
          <div
            className={`mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-md transition-all duration-700 delay-300 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <AnimatedStat
              end={50}
              suffix="K+"
              label="Expéditions"
              delay={500}
              isInView={isInView}
            />
            <AnimatedStat
              end={5}
              suffix="K+"
              label="Transporteurs"
              delay={700}
              isInView={isInView}
            />
            <AnimatedStat
              end={98}
              suffix="%"
              label="Satisfaction"
              delay={900}
              isInView={isInView}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
          aria-hidden="true"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
