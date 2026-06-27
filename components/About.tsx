"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-[#F8F4EE] via-[#FCFAF7] to-white py-32">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative h-[620px] overflow-hidden rounded-[46px] border border-[#D4AF37]/25 shadow-[0_35px_95px_rgba(20,0,6,0.18)] lg:h-[720px]">
            <Image
              src="/images/stylist.png"
              alt="LSGHair Stylist"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140006]/30 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-7 left-6 right-6 rounded-[28px] border border-[#D4AF37]/25 bg-[#140006]/92 p-6 text-white shadow-2xl backdrop-blur md:-right-8 md:left-auto md:w-72">
            <p className="text-sm uppercase tracking-[0.28em] text-[#D4AF37]">Premium Care</p>
            <h3 className="mt-2 font-serif text-4xl text-white">3+ Years</h3>
            <p className="mt-2 text-sm leading-6 text-white/75">Creating polished, occasion-ready and confidence-building hairstyles.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#6F1730]">Meet Your Stylist</p>

          <h2 className="mt-5 font-serif text-5xl leading-[1.02] text-[#24000C] lg:text-7xl">
            Beauty.
            <br />
            Luxury.
            <br />
            <span className="bg-gradient-to-r from-[#A67C00] via-[#D4AF37] to-[#F8E39A] bg-clip-text text-transparent">
              Confidence.
            </span>
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-9 text-gray-600">
            <p>
              LSGHair specialises in premium Brazilian, Peruvian, bridal and occasion hairstyles that blend elegance,
              sophistication and long-lasting quality.
            </p>
            <p>
              Every appointment is designed to deliver a luxury salon experience from consultation to the final finish,
              ensuring every client leaves feeling confident, beautiful and unforgettable.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5">
            {[
              ["50+", "Happy Clients"],
              ["★★★★★", "Luxury Service"],
              ["Premium", "Hair Products"],
              ["Colchester", "Essex Salon"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-[28px] border border-[#D4AF37]/18 bg-white p-6 shadow-[0_18px_45px_rgba(20,0,6,0.08)]">
                <h3 className="font-serif text-3xl font-bold text-[#24000C]">{value}</h3>
                <p className="mt-2 text-sm text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
