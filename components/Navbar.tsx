"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

const NAV_HEIGHT = 80;

const navLinks = [
  { label: "Ateliers", id: "ateliers" },
  { label: "Expériences", id: "experiences" },
  { label: "Témoignages", id: "temoignages" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

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
      <Link href="/" onClick={isHome ? scrollTo("hero") : undefined}>
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
        {navLinks.map(({ label, id }) => (
          <a
            key={id}
            href={isHome ? `#${id}` : `/#${id}`}
            onClick={isHome ? scrollTo(id) : undefined}
            className="font-sans text-[#F5E6D3]/80 text-xs tracking-[0.15em] hover:text-[#F5E6D3] transition-colors duration-200"
          >
            {label}
          </a>
        ))}
        <a
          href={isHome ? "#ateliers" : "/#ateliers"}
          onClick={isHome ? scrollTo("ateliers") : undefined}
          className="font-sans text-xs tracking-[0.15em] bg-[#4B2E2B] text-[#F5E6D3] px-5 py-2.5 rounded hover:bg-[#C89B3C] hover:text-[#0a0605] transition-all duration-300"
        >
          Réserver
        </a>
      </nav>
    </header>
  );
}
