"use client";

import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#F8E39A] via-[#D4AF37] to-[#B8860B] text-[#24000C] shadow-2xl transition hover:-translate-y-1 hover:scale-105"
      aria-label="Scroll to top"
    >
      <HiArrowUp size={24} />
    </button>
  );
}
