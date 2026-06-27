"use client";

import Script from "next/script";

export default function Booking() {
  return (
    <section id="booking" className="relative overflow-hidden bg-[#F8F4EE] py-32">
      <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-[#D4AF37]/12 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#6F1730]">Online Booking</p>
          <h2 className="mt-5 font-serif text-5xl text-[#24000C] md:text-6xl">Book Your Appointment</h2>
          <p className="mt-7 text-lg leading-8 text-gray-600">
            Choose your preferred service, date and time using our secure online booking system.
          </p>
        </div>

        <div className="overflow-hidden rounded-[40px] border border-[#D4AF37]/30 bg-white shadow-[0_35px_110px_rgba(20,0,6,0.16)]">
          <div className="bg-gradient-to-r from-[#140006] via-[#3B0014] to-[#140006] px-7 py-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">Secure Acuity Scheduling</p>
          </div>
          <iframe
            src="https://app.acuityscheduling.com/schedule.php?owner=39303939"
            title="LSGHair Booking"
            width="100%"
            height="900"
            frameBorder="0"
            className="w-full"
          />
        </div>

        <Script src="https://embed.acuityscheduling.com/js/embed.js" strategy="afterInteractive" />
      </div>
    </section>
  );
}
