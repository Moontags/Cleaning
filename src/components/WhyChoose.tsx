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
    <section className="bg-[#f7f9f7] border-t border-[#e5e7eb]">
      <div className="section-container py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1f2937] mb-6">
          {t("why.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.key}
              className="bg-white border border-[#e5e7eb] p-4 rounded-[10px] min-h-[120px] flex flex-col"
            >
              <h3 className="text-[#1f2937] font-medium text-base mb-1.5">{it.title}</h3>
              <p className="text-[#777] text-sm flex-1 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact CTA removed per request - kept section spacing intact */}
      </div>
    </section>
  );
}
