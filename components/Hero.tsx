"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#140006]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(20,0,6,0.96) 0%, rgba(36,0,12,0.86) 32%, rgba(20,0,6,0.44) 62%, rgba(20,0,6,0.22) 100%), url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.16),transparent_28%),linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(20,0,6,0.78))]" />
      <div className="absolute -left-24 top-40 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#140006] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 lg:px-10">
        <div className="max-w-3xl py-24">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.42em] text-[#D4AF37] md:text-sm"
          >
            Luxury Hair Studio • Colchester
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="font-serif text-5xl leading-[0.96] text-white md:text-7xl lg:text-8xl"
          >
            Elegant Hair
            <br />
            Styled To{" "}
            <span className="bg-gradient-to-r from-[#F8E39A] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
              Perfection
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.8 }}
            className="mt-8 max-w-2xl text-lg leading-9 text-white/82 md:text-xl"
          >
            
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.8 }}
            className="mt-11 flex flex-col gap-5 sm:flex-row"
          >
            <a
              href="#booking"
              className="rounded-full bg-gradient-to-r from-[#F8E39A] via-[#D4AF37] to-[#B8860B] px-10 py-5 text-center font-extrabold text-[#24000C] shadow-[0_20px_55px_rgba(212,175,55,0.28)] transition hover:-translate-y-1"
            >
              Book Appointment
            </a>

            <a
              href="#services"
              className="rounded-full border border-[#D4AF37]/65 px-10 py-5 text-center font-bold text-white backdrop-blur transition hover:bg-[#D4AF37] hover:text-[#24000C]"
            >
              View Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="mt-14 grid max-w-xl grid-cols-3 gap-4"
          >
            {[
              ["3+", "Years Experience"],
              ["50+", "Happy Clients"],
              ["★★★★★", "Luxury Service"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-[#D4AF37]/20 bg-white/[0.06] p-4 backdrop-blur-md">
                <h3 className="text-xl font-extrabold text-[#D4AF37] md:text-3xl">{value}</h3>
                <p className="mt-1 text-xs text-white/78 md:text-sm">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-sm text-white/70 animate-bounce"
      >
        ↓ Scroll
      </a>
    </section>
  );
}
