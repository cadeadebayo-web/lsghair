"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#140006]">
      <div className="text-center">
        <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border border-[#D4AF37]/30 bg-[#24000C] shadow-2xl">
          <Image src="/images/logo.png" alt="LSGHair" fill priority sizes="128px" className="object-cover" />
        </div>

        <h1 className="mt-6 font-serif text-4xl bg-gradient-to-r from-[#F8E39A] via-[#D4AF37] to-[#A67C00] bg-clip-text text-transparent">
          LSGHair
        </h1>

        <div className="shimmer-line mx-auto mt-6 h-[2px] w-44 bg-[#D4AF37]/20" />
      </div>
    </div>
  );
}
