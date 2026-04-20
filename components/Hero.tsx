"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${y * 0.35}px)`;
        }
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${y * 0.1}px)`;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background image — parallax layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110"
        style={{ willChange: "transform" }}
      >
        {/* Inner wrapper carries the floating animation independently */}
        <div className="absolute inset-0 animate-float">
          <Image
            src="/hero%20section%20fond.webp"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0a0605]/60" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0605] to-transparent" />

      {/* Content — subtle parallax */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ willChange: "transform" }}
      >
        {/* Heading */}
        <h1
          className="animate-fade-up-delay-1 font-cormorant font-medium text-[#F5E6D3] leading-none tracking-wide mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
        >
          Les Ateliers <em className="italic text-[#C89B3C]">Caféologie</em>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up-delay-2 font-cormorant italic text-[#C89B3C] text-2xl md:text-3xl tracking-wide mb-8">
          Explorez, Dégustez, Apprenez
        </p>

        {/* Description */}
        <p className="animate-fade-up-delay-2 font-sans text-[#F5E6D3]/75 text-base md:text-lg leading-relaxed tracking-wide max-w-xl mx-auto mb-14">
          Préparez un café avec différentes méthodes d'extraction, goûtez et apprenez à évaluer sur des critères précis avec nos ateliers caféologie. Vous ne boirez plus jamais votre café comme avant.
        </p>

        {/* CTA */}
        <div className="animate-fade-up-delay-3">
          <a
            href="/ateliers"
            className="inline-block border border-[#C89B3C] text-[#C89B3C] px-12 py-4 text-xs tracking-[0.25em] uppercase font-sans font-medium hover:bg-[#C89B3C] hover:text-[#0a0605] transition-all duration-300"
          >
            Réserver un atelier
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-[#F5E6D3] animate-pulse" />
      </div>

    </section>
  );
}
