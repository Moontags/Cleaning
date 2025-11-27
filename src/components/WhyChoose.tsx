"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhyChoose({ imageSrc = "/images/sky.jpg" }: { imageSrc?: string }) {
  const { t } = useLanguage();

  const items = [
    {
      key: "professional",
      title: t("why.professional.title"),
      desc: t("why.professional.desc"),
    },
    {
      key: "reliable",
      title: t("why.reliable.title"),
      desc: t("why.reliable.desc"),
    },
    {
      key: "eco",
      title: t("why.eco.title"),
      desc: t("why.eco.desc"),
    },
    {
      key: "flexible",
      title: t("why.flexible.title"),
      desc: t("why.flexible.desc"),
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={t("why.title")}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#01263a]/60 via-[#003580]/50 to-[#003580]/65"></div>
      </div>

      <div className="section-container py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          {t("why.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.key}
              className="bg-white/6 backdrop-blur-sm p-5 rounded-xl min-h-[120px] flex flex-col"
            >
              <h3 className="text-white font-semibold text-lg mb-2">{it.title}</h3>
              <p className="text-blue-50 text-sm flex-1">{it.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact CTA removed per request - kept section spacing intact */}
      </div>
    </section>
  );
}
