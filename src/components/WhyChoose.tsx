"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function WhyChoose() {
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
    <section className="bg-[#faf8f3] border-t border-[#e7ded0]">
      <div className="section-container py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#36302a] mb-6">
          {t("why.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.key}
              className="bg-white border border-[#e7ded0] p-4 rounded-[10px] min-h-[120px] flex flex-col"
            >
              <h3 className="text-[#36302a] font-medium text-base mb-1.5">{it.title}</h3>
              <p className="text-[#6e6557] text-sm flex-1 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact CTA removed per request - kept section spacing intact */}
      </div>
    </section>
  );
}
