"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(percentage);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[9999] h-[3px] w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#A67C00] via-[#D4AF37] to-[#F8E39A]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}