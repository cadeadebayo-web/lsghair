"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/447429555581"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-5 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}