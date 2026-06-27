"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  { image: "/images/gallery1.png", title: "Brazilian Body Waves", tag: "Signature" },
  { image: "/images/gallery2.png", title: "Soft Glam Waves", tag: "Premium" },
  { image: "/images/gallery3.png", title: "Luxury Volume Curls", tag: "Glamour" },
  { image: "/images/gallery4.png", title: "Peruvian Sleek Finish", tag: "Polished" },
  { image: "/images/gallery5.png", title: "Deep Wave Styling", tag: "Elegant" },
  { image: "/images/gallery6.png", title: "Full Curly Glam", tag: "Volume" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-[#0B0B0B] py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.08),transparent_30%),radial-gradient(circle_at_90%_60%,rgba(111,23,48,0.22),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">Portfolio</p>
          <h2 className="mt-5 font-serif text-5xl text-white md:text-6xl">Recent Luxury Looks</h2>
          <p className="mt-7 text-lg leading-8 text-white/66">
            A curated collection of elegant Brazilian and Peruvian hairstyles crafted for confidence,
            beauty and unforgettable moments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`gallery-card group relative overflow-hidden rounded-[36px] border border-[#D4AF37]/18 bg-[#140006] shadow-2xl ${
                index === 1 || index === 4 ? "h-[540px]" : "h-[460px]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140006]/96 via-[#140006]/18 to-transparent opacity-90" />
              <div className="absolute left-0 right-0 top-0 flex justify-end p-5">
                <span className="rounded-full border border-[#D4AF37]/30 bg-[#140006]/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37] backdrop-blur">
                  {item.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">LSGHair</p>
                <h3 className="mt-2 font-serif text-3xl text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
