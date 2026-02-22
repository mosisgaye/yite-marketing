"use client";

import Image from "next/image";
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
    <div className="text-center">
      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#C1F11D]">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-[10px] md:text-xs text-white/70">{label}</div>
    </div>
  );
}

export function Hero() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Livraison YITE"
        fill
        priority
        className="object-cover"
        quality={85}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}
      <div ref={ref} className="relative z-10 w-full px-4 md:px-6 pt-20 pb-12 max-w-[1152px] mx-auto">
        <div className="max-w-xl">
          {/* Title */}
          <h1
            className={`text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Expédiez vos colis{" "}
            <span className="relative inline-block">
              <span className="relative z-10">au meilleur prix</span>
              <span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-[#C1F11D] -z-0 opacity-80" />
            </span>
          </h1>

          {/* Description */}
          <p
            className={`text-sm md:text-base text-white/80 mb-6 transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            YITE connecte expéditeurs et transporteurs en temps réel.
            Publiez votre demande, recevez des offres et choisissez le meilleur.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col gap-3 mb-8 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#"
              className="py-3 px-6 bg-[#C1F11D] text-[#141414] text-sm font-semibold rounded-xl text-center hover:bg-[#9DD90D] transition-colors"
            >
              Télécharger l&apos;appli
            </a>
            <a
              href="#"
              className="py-3 px-6 bg-[#141414] text-white text-sm font-semibold rounded-xl text-center hover:bg-[#3F3F3F] transition-colors"
            >
              Devenir transporteur
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-xl transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <AnimatedStat end={50} suffix="K+" label="Expéditions" delay={500} isInView={isInView} />
            <AnimatedStat end={5} suffix="K+" label="Transporteurs" delay={700} isInView={isInView} />
            <AnimatedStat end={98} suffix="%" label="Satisfaction" delay={900} isInView={isInView} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white/60">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
