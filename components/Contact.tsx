"use client";

import { useForm, ValidationError } from "@formspree/react";
import {
  MapPinIcon,
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [state, handleSubmit] = useForm("xqevbkwa");

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-[#24000C] via-[#3B0014] to-[#140006]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-serif text-white mt-5">
            Get In Touch
          </h2>

          <p className="mt-8 text-gray-300 max-w-3xl mx-auto text-lg leading-8">
            Send us a message directly from the website or book your appointment online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-[36px] bg-[#F8F4EE] p-8 md:p-10 shadow-2xl border border-[#D4AF37]/20">
            {state.succeeded ? (
              <div className="rounded-[28px] bg-white p-10 text-center border border-[#D4AF37]/30">
                <h3 className="text-3xl font-serif text-[#24000C]">
                  Thank You
                </h3>
                <p className="mt-4 text-gray-600 leading-8">
                  Your message has been sent successfully. LSGHair will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="_subject" value="New LSGHair Website Enquiry" />

                <input type="text" name="name" required placeholder="Full name" />
                <ValidationError field="name" errors={state.errors} />

                <input type="email" name="email" required placeholder="Email address" />
                <ValidationError field="email" errors={state.errors} />

                <input type="tel" name="phone" placeholder="Phone number" />

                <select name="subject" required defaultValue="">
                  <option value="" disabled>Select enquiry type</option>
                  <option value="Booking Enquiry">Booking Enquiry</option>
                  <option value="Service Question">Service Question</option>
                  <option value="Bridal / Occasion Hair">Bridal / Occasion Hair</option>
                  <option value="Price Enquiry">Price Enquiry</option>
                  <option value="Other">Other</option>
                </select>

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full rounded-full bg-gradient-to-r from-[#F8E39A] via-[#D4AF37] to-[#B8860B] py-4 font-bold text-[#24000C] shadow-xl hover:scale-[1.02] transition disabled:opacity-60"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="rounded-[36px] bg-[#F8F4EE] p-8 md:p-10 shadow-2xl border border-[#D4AF37]/20 space-y-8">
              <div className="flex gap-5">
                <MapPinIcon className="h-8 w-8 text-[#3B0014]" />
                <div>
                  <h3 className="text-xl font-bold text-[#24000C]">Location</h3>
                  <p className="mt-2 text-gray-600">Salon based in Colchester, Essex</p>
                </div>
              </div>

              <div className="flex gap-5">
                <ClockIcon className="h-8 w-8 text-[#3B0014]" />
                <div>
                  <h3 className="text-xl font-bold text-[#24000C]">Opening Hours</h3>
                  <p className="mt-2 text-gray-600">Monday – Saturday, 10am – 6pm</p>
                </div>
              </div>

              <div className="flex gap-5">
                <EnvelopeIcon className="h-8 w-8 text-[#3B0014]" />
                <div>
                  <h3 className="text-xl font-bold text-[#24000C]">Email</h3>
                  <p className="mt-2 text-gray-600">LSGhair23@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-5">
                <PhoneIcon className="h-8 w-8 text-[#3B0014]" />
                <div>
                  <h3 className="text-xl font-bold text-[#24000C]">WhatsApp</h3>
                  <p className="mt-2 text-gray-600">Add salon number here</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://instagram.com/LSG_Hair" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-[#24000C] px-7 py-4 text-white font-semibold">
                  <FaInstagram /> Instagram
                </a>

                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-green-600 px-7 py-4 text-white font-semibold">
                  <FaWhatsapp /> WhatsApp
                </a>

                <a href="#booking" className="inline-flex items-center rounded-full bg-gradient-to-r from-[#F8E39A] via-[#D4AF37] to-[#B8860B] px-7 py-4 text-[#24000C] font-bold">
                  Book Appointment
                </a>
              </div>
            </div>

            <div className="rounded-[36px] overflow-hidden shadow-2xl border border-[#D4AF37]/20">
              <iframe
                src="https://www.google.com/maps?q=Colchester,Essex&output=embed"
                width="100%"
                height="360"
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}