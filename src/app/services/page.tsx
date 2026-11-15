"use client";

import Link from "next/link";
import { Building2, Store, Factory, Home, Construction, Sparkles, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  { key: "floor", title: "services.floor.title", route: "machine-floor-cleaning", icon: Sparkles },
  { key: "office", title: "services.office.title", route: "office-cleaning", icon: Building2 },
  { key: "business", title: "services.business.title", route: "commercial-cleaning", icon: Store },
  { key: "industrial", title: "services.industrial.title", route: "industrial-cleaning", icon: Factory },
  { key: "construction", title: "services.construction_end.title", route: "post-construction-cleaning", icon: Construction },
  { key: "home", title: "services.home_cleaning.title", route: "home-cleaning", icon: Home },
];

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <section className="service-screen services-overview section-container" aria-labelledby="services-title">
      <div className="services-overview-heading">
        <h1 id="services-title">{t("compact.services.title")}</h1>
        <p className="service-screen-intro">{t("compact.services.intro")}</p>
      </div>
      <div className="services-overview-grid">
        {services.map(({ key, title, route, icon: Icon }) => (
          <Link key={key} href={`/services/${route}`} className="services-overview-link">
            <Icon size={24} aria-hidden="true" />
            <h2>{t(title)}</h2>
            <p>{t(`compact.${key}.intro`)}</p>
            <ArrowUpRight className="services-overview-arrow" size={18} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}
