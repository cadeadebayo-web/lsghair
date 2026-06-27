"use client";

import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white">
      <div className="bg-gradient-to-r from-[#140006] via-[#3B0014] to-[#140006] py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#D4AF37]">Luxury starts here</p>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl">Ready For Your Next Look?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Experience luxury hairstyling in Colchester with beautiful finishes and seamless online booking.
          </p>
          <a
            href="#booking"
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-[#F8E39A] via-[#D4AF37] to-[#B8860B] px-10 py-5 font-extrabold text-[#24000C] transition hover:-translate-y-1"
          >
            Book Appointment
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <span className="relative h-14 w-14 overflow-hidden rounded-full border border-[#D4AF37]/25 bg-[#24000C]">
                <Image src="/images/logo.png" alt="LSGHair" fill sizes="56px" className="object-cover" />
              </span>
              <h3 className="font-serif text-4xl text-[#D4AF37]">LSGHair</h3>
            </div>
            <p className="mt-6 leading-8 text-white/55">
              Luxury hairstyling in Colchester, specialising in premium Brazilian, Peruvian and custom styling.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-extrabold">Navigation</h4>
            <ul className="space-y-3 text-white/60">
              <li><a className="hover:text-[#D4AF37]" href="#">Home</a></li>
              <li><a className="hover:text-[#D4AF37]" href="#about">About</a></li>
              <li><a className="hover:text-[#D4AF37]" href="#services">Services</a></li>
              <li><a className="hover:text-[#D4AF37]" href="#gallery">Gallery</a></li>
              <li><a className="hover:text-[#D4AF37]" href="#booking">Booking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-extrabold">Contact</h4>
            <div className="space-y-3 text-white/60">
              <p>Colchester, Essex</p>
              <p>LSGhair23@gmail.com</p>
              <p>Monday – Saturday<br />10:00am – 6:00pm</p>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-extrabold">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/LSG_Hair"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#24000C] text-white transition hover:-translate-y-1 hover:bg-[#3B0014]"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://wa.me/447429555581"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          © {new Date().getFullYear()} LSGHair. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
