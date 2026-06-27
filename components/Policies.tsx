"use client";

import { CheckCircleIcon, ClockIcon, CreditCardIcon, SparklesIcon } from "@heroicons/react/24/outline";

const policies = [
  { title: "Please Arrive On Time", text: "Arrive 5–10 minutes before your appointment so your service can begin smoothly.", icon: ClockIcon },
  { title: "Hair Preparation", text: "Hair should be clean, dry and detangled unless washing is included in your booking.", icon: SparklesIcon },
  { title: "Deposits", text: "Selected appointments may require a deposit to secure your booking.", icon: CreditCardIcon },
  { title: "Late Arrivals", text: "Late arrival may reduce your appointment time or require rescheduling.", icon: CheckCircleIcon },
];

export default function Policies() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F8F4EE] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#6F1730]">Salon Etiquette</p>
          <h2 className="mt-5 font-serif text-5xl text-[#24000C] md:text-6xl">Before Your Visit</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">A few simple notes to help every appointment feel calm, organised and premium.</p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {policies.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[32px] border border-[#D4AF37]/18 bg-white p-8 shadow-[0_18px_50px_rgba(20,0,6,0.08)] transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#24000C]">
                  <Icon className="h-7 w-7 text-[#D4AF37]" />
                </div>
                <h3 className="mt-7 font-serif text-2xl text-[#24000C]">{item.title}</h3>
                <p className="mt-4 leading-7 text-gray-600">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
