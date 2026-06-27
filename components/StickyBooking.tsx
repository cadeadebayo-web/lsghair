"use client";

import { CalendarDaysIcon } from "@heroicons/react/24/solid";

export default function StickyBooking() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] border-t border-[#D4AF37]/20 bg-[#FCFAF7]/96 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
      <a
        href="#booking"
        className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#F8E39A] via-[#D4AF37] to-[#B8860B] py-4 text-lg font-extrabold text-[#24000C] shadow-xl"
      >
        <CalendarDaysIcon className="h-6 w-6" />
        Book Appointment
      </a>
    </div>
  );
}
