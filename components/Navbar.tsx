"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

const NAV_HEIGHT = 80;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-[#0a0605]/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" onClick={scrollTo("hero")}>
        <Image
          src="/ele_header.webp"
          alt="Ateliers Caféologie"
          width={75}
          height={75}
          className="object-contain"
        />
      </Link>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-8">
        <a
          href="#ateliers"
          onClick={scrollTo("ateliers")}
          className="font-sans text-[#F5E6D3]/80 text-xs tracking-[0.15em] hover:text-[#F5E6D3] transition-colors duration-200"
        >
          Ateliers
        </a>
        <a
          href="#experiences"
          onClick={scrollTo("experiences")}
          className="font-sans text-[#F5E6D3]/80 text-xs tracking-[0.15em] hover:text-[#F5E6D3] transition-colors duration-200"
        >
          Expériences
        </a>
        <a
          href="#temoignages"
          onClick={scrollTo("temoignages")}
          className="font-sans text-[#F5E6D3]/80 text-xs tracking-[0.15em] hover:text-[#F5E6D3] transition-colors duration-200"
        >
          Témoignages
        </a>
        <a
          href="#contact"
          onClick={scrollTo("contact")}
          className="font-sans text-[#F5E6D3]/80 text-xs tracking-[0.15em] hover:text-[#F5E6D3] transition-colors duration-200"
        >
          Contact
        </a>
        <a
          href="#ateliers"
          onClick={scrollTo("ateliers")}
          className="font-sans text-xs tracking-[0.15em] bg-[#4B2E2B] text-[#F5E6D3] px-5 py-2.5 rounded hover:bg-[#C89B3C] hover:text-[#0a0605] transition-all duration-300"
        >
          Réserver
        </a>
      </nav>
    </header>
  );
}
