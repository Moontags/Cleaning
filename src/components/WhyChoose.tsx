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
    <section className="home-why">
      <div className="section-container home-why-inner">
        <h2 className="home-why-title">
          {t("why.title")}
        </h2>

        <div className="home-why-grid">
          {items.map((it) => (
            <div
              key={it.key}
              className="home-why-item"
            >
              <h3 className="text-[#36302a] font-medium text-base mb-1.5">{it.title}</h3>
              <p className="text-[#6e6557] text-sm flex-1 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
