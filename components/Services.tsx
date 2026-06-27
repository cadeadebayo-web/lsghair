"use client";

import { motion } from "framer-motion";
import { HeartIcon, ScissorsIcon, SparklesIcon, StarIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "Luxury Buns",
    description: "Elegant bun styling for weddings, birthdays and special occasions.",
    price: "From £45",
    duration: "1 hr 30 mins",
    icon: SparklesIcon,
  },
  {
    title: "Ponytails",
    description: "Sleek, curly and glamorous ponytail styles with flawless finishing.",
    price: "From £50",
    duration: "2 hrs",
    icon: HeartIcon,
  },
  {
    title: "Wig Styling",
    description: "Professional wig customisation, styling and luxury finishing.",
    price: "From £60",
    duration: "2 hrs",
    icon: StarIcon,
  },
  {
    title: "Installations",
    description: "Frontal, closure and wig installations with a natural premium finish.",
    price: "From £75",
    duration: "3 hrs",
    icon: ScissorsIcon,
  },
  {
    title: "Silk Press",
    description: "Healthy, silky smooth straightening with shine and body.",
    price: "From £55",
    duration: "2 hrs",
    icon: SparklesIcon,
  },
  {
    title: "Bridal Hair",
    description: "Luxury bridal hairstyles tailored perfectly for your special day.",
    price: "Consultation",
    duration: "Varies",
    icon: HeartIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-b from-[#140006] via-[#24000C] to-[#140006] py-32">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#6F1730]/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">Our Services</p>
          <h2 className="mt-5 font-serif text-5xl text-white md:text-6xl">Signature Hair Services</h2>
          <p className="mt-7 text-lg leading-8 text-white/70">
            Premium styling for beautiful finishes, elegant occasions and everyday confidence.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-[34px] border border-[#D4AF37]/18 bg-[#FCFAF7] p-8 shadow-2xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#A67C00] via-[#D4AF37] to-[#F8E39A]" />
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-2xl transition group-hover:bg-[#D4AF37]/20" />

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#24000C] shadow-lg">
                    <Icon className="h-8 w-8 text-[#D4AF37]" />
                  </div>

                  <h3 className="mt-8 font-serif text-3xl text-[#24000C]">{service.title}</h3>
                  <p className="mt-5 min-h-[84px] leading-7 text-gray-600">{service.description}</p>

                  <div className="mt-7 space-y-3 border-t border-[#D4AF37]/25 pt-6">
                    <div className="flex justify-between gap-4 text-sm">
                      <span className="text-gray-500">Duration</span>
                      <span className="font-semibold text-[#24000C]">{service.duration}</span>
                    </div>
                    <div className="flex justify-between gap-4 text-sm">
                      <span className="text-gray-500">Price</span>
                      <span className="font-extrabold text-[#3B0014]">{service.price}</span>
                    </div>
                  </div>

                  <a
                    href="#booking"
                    className="mt-8 inline-flex w-full justify-center rounded-full bg-gradient-to-r from-[#24000C] via-[#3B0014] to-[#5B0A23] py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    Book Appointment
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
