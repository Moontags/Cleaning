"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const services = {
  office: { title: "services.office.title", value: "office" },
  business: { title: "services.business.title", value: "business" },
  industrial: { title: "services.industrial.title", value: "industrial" },
  home: { title: "services.home_cleaning.title", value: "home_cleaning" },
  construction: { title: "services.construction_end.title", value: "other" },
  floor: { title: "services.floor.title", value: "machine_floor_cleaning" },
};

export default function CompactService({ service }: { service: keyof typeof services }) {
  const { t } = useLanguage();
  const info = services[service];

  return (
    <section className="service-screen section-container" aria-labelledby="service-title">
      <div className="service-screen-content">
        <div className="service-screen-heading">
          <p className="floor-campaign-eyebrow">{t("services.title")}</p>
          <h1 id="service-title">{t(info.title)}</h1>
          <p className="service-screen-intro">{t(`compact.${service}.intro`)}</p>
        </div>
        <div className="service-screen-details">
          <ul className="service-screen-list">
            {[1, 2, 3].map((item) => (
              <li key={item}><Check size={18} aria-hidden="true" /><span>{t(`compact.${service}.item${item}`)}</span></li>
            ))}
          </ul>
          {service === "floor" && (
            <div className="service-screen-note">
              <strong>{t("pricing.floor.from")}</strong>
              <p>{t("pricing.floor.consumer")} · {t("pricing.floor.minimum")}</p>
              <p>{t("pricing.floor.extra")}</p>
              <p>{t("service.floor.scope.desc")}</p>
            </div>
          )}
          {service === "home" && (
            <div className="service-screen-note">
              <p>{t("compact.home.textile")}</p>
              <Link href="/order?service=textile">{t("compact.home.textileCta")} <ArrowUpRight size={15} aria-hidden="true" /></Link>
            </div>
          )}
          <div className="service-screen-actions">
            <Link href={`/order?service=${info.value}`} className="btn-primary">{t("compact.services.quote")} <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link href="/services" className="service-screen-back"><ArrowLeft size={16} aria-hidden="true" />{t("compact.services.back")}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
