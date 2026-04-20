"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const stories = [
  {
    title: "Latte Art",
    image: "/ELE-charlotteDEFARGES-7109.webp",
    caption: "L'art du latte, une technique précise qui transforme le café en toile.",
  },
  {
    title: "Torréfaction",
    image: "/atelier-torrefaction.webp",
    caption: "Maîtriser la chaleur pour révéler les arômes cachés du grain.",
  },
  {
    title: "Cupping",
    image: "/cupping.webp",
    caption: "Le protocole de dégustation des professionnels du café.",
  },
  {
    title: "Espresso",
    image: "/espresso-delonghi-home2.webp",
    caption: "L'espresso, fondement de toute culture café.",
  },
  {
    title: "V60",
    image: "/v60_footer.webp",
    caption: "La précision du V60 pour une tasse filtrée parfaite.",
  },
  {
    title: "Chemex",
    image: "/chemex-home.webp",
    caption: "L'élégance du Chemex, entre design et extraction.",
  },
  {
    title: "L'Équipe",
    image: "/pros-home.webp",
    caption: "Notre équipe passionnée, à votre service chaque jour.",
  },
  {
    title: "Atelier",
    image: "/atelier-methodes-douces.webp",
    caption: "Dans les coulisses de nos ateliers caféologie.",
  },
];

export default function StoriesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i - 1 + stories.length) % stories.length : 0));
  }, []);

  const next = useCallback(() => {
    setActiveIndex((i) => (i !== null ? (i + 1) % stories.length : 0));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeIndex]);

  const story = activeIndex !== null ? stories[activeIndex] : null;

  return (
    <>
      {/* Section */}
      <section className="bg-[#F6F1EB] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Overline */}
          <p className="font-sans text-[#C89B3C] text-xs tracking-[0.25em] uppercase mb-5">
            Nos Moments
          </p>

          {/* Title */}
          <h2 className="font-serif text-[#4B2E2B] text-4xl md:text-5xl font-medium mb-16">
            En Coulisses
          </h2>

          {/* Story circles */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {stories.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActiveIndex(i)}
                className="flex flex-col items-center gap-3 group cursor-pointer"
              >
                {/* Ring + circle */}
                <div className="p-[3px] rounded-full bg-gradient-to-br from-[#C89B3C] via-[#e8c97a] to-[#C89B3C]">
                  <div className="p-[2px] rounded-full bg-[#F6F1EB]">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
                {/* Label */}
                <span className="font-sans text-[#4B2E2B] text-xs tracking-wide">
                  {s.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {story && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={close}
        >
          <div
            className="relative w-full max-w-sm mx-4 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ aspectRatio: "9/16", maxHeight: "90vh" }}
          >
            {/* Background image */}
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-cover"
              priority
            />

            {/* Dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 px-4 pt-4 flex flex-col gap-3">
              {/* Progress bars */}
              <div className="flex gap-1">
                {stories.map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-[2px] rounded-full overflow-hidden bg-white/30"
                  >
                    <div
                      className="h-full bg-white rounded-full transition-all duration-300"
                      style={{ width: i <= (activeIndex ?? 0) ? "100%" : "0%" }}
                    />
                  </div>
                ))}
              </div>

              {/* Avatar + title + close */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-[2px] rounded-full bg-gradient-to-br from-[#C89B3C] to-[#e8c97a]">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#F5E6D3]">
                      <Image src={story.image} alt="" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="font-sans text-white text-xs font-semibold leading-none">
                      {story.title}
                    </p>
                    <p className="font-sans text-white/60 text-[10px] mt-0.5">
                      Ateliers Caféologie
                    </p>
                  </div>
                </div>
                <button
                  onClick={close}
                  className="text-white/80 hover:text-white transition-colors w-7 h-7 flex items-center justify-center"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Left / Right click zones */}
            <button
              onClick={prev}
              className="absolute left-0 top-0 bottom-0 w-1/3 flex items-center justify-start pl-3 text-white/0 hover:text-white/80 transition-colors"
              aria-label="Précédent"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-0 bottom-0 w-1/3 flex items-center justify-end pr-3 text-white/0 hover:text-white/80 transition-colors"
              aria-label="Suivant"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-6">
              <p className="font-serif text-white text-lg font-medium leading-snug mb-1">
                {story.title}
              </p>
              <p className="font-sans text-white/75 text-sm leading-relaxed">
                {story.caption}
              </p>

              {/* Dots */}
              <div className="flex justify-center gap-1.5 mt-4">
                {stories.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      i === activeIndex ? "bg-white scale-125" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
