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
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#140006]/95 backdrop-blur-2xl border-b border-[#D4AF37]/20 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="LSGHair Logo"
              width={55}
              height={55}
              priority
              className="rounded-full"
            />

            <span className="text-3xl font-serif font-bold tracking-[0.08em] bg-gradient-to-r from-[#F8E39A] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
              LSGHair
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-white hover:text-[#F8E39A] transition-all duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#booking"
              className="px-8 py-3 rounded-full font-semibold text-[#24000C] bg-gradient-to-r from-[#F4D77B] via-[#D4AF37] to-[#B8860B] shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Book Appointment
            </a>
          </nav>

          <button
            className="md:hidden text-white z-[1002]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? <HiX size={36} /> : <HiMenu size={34} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[999] bg-[#140006] pt-28 px-8 md:hidden">
          <nav className="flex flex-col gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-3xl font-bold border-b border-[#D4AF37]/20 pb-6"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="mt-6 text-center rounded-full bg-gradient-to-r from-[#F8E39A] via-[#D4AF37] to-[#B8860B] py-5 text-[#24000C] text-xl font-bold shadow-2xl"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </>
  );
}