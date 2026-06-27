"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-[#140006]/92 shadow-2xl backdrop-blur-2xl border-b border-[#D4AF37]/20"
          : "bg-gradient-to-b from-[#140006]/65 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <a href="#" className="group flex items-center gap-3" aria-label="LSGHair home">
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#D4AF37]/35 bg-[#24000C]/80 shadow-xl">
            <Image
              src="/images/logo.png"
              alt="LSGHair Logo"
              fill
              priority
              sizes="48px"
              className="object-cover opacity-90 transition duration-500 group-hover:scale-110"
            />
          </span>

          <span className="font-serif text-3xl font-bold tracking-[0.08em] bg-gradient-to-r from-[#F8E39A] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
            LSGHair
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium tracking-wide text-white/90 transition-all duration-300 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:text-[#F8E39A] hover:after:w-full"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#booking"
            className="rounded-full bg-gradient-to-r from-[#F8E39A] via-[#D4AF37] to-[#B8860B] px-8 py-3 text-sm font-extrabold text-[#24000C] shadow-[0_14px_35px_rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(212,175,55,0.33)]"
          >
            Book Appointment
          </a>
        </nav>

        <button
          className="md:hidden rounded-full border border-[#D4AF37]/25 bg-white/5 p-2 text-white backdrop-blur"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#D4AF37]/20 bg-[#140006]/97 px-6 py-7 shadow-2xl backdrop-blur-2xl">
          <div className="space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-2xl px-4 py-3 text-lg font-semibold text-white transition hover:bg-white/5 hover:text-[#F8E39A]"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block rounded-full bg-gradient-to-r from-[#F8E39A] via-[#D4AF37] to-[#B8860B] py-4 text-center font-extrabold text-[#24000C]"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
