"use client";

import {
  Building2,
  Store,
  Factory,
  Home,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import FloorCleaningPrice from "@/components/FloorCleaningPrice";

export default function PricingPage() {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      icon: Building2,
      name: t("services.office.title"),
      description: t("pricing.office.desc"),
      features: [
        t("pricing.office.feature1"),
        t("pricing.office.feature2"),
        t("pricing.office.feature3"),
        t("pricing.office.feature4"),
        t("pricing.office.feature5"),
        t("pricing.office.feature6"),
        t("pricing.office.feature7"),
      ],
      priceFrom: "36",
      priceUnit: t("pricing.unit_hourly"),
      popular: false,
    },
    {
      icon: Store,
      name: t("services.business.title"),
      description: t("pricing.business.desc"),
      features: [
        t("pricing.business.feature1"),
        t("pricing.business.feature2"),
        t("pricing.business.feature3"),
        t("pricing.business.feature4"),
        t("pricing.business.feature5"),
        t("pricing.business.feature6"),
        t("pricing.business.feature7"),
      ],
      priceFrom: "38",
      priceUnit: t("pricing.unit_hourly"),
      popular: false,
    },
    {
      icon: Factory,
      name: t("services.industrial.title"),
      description: t("pricing.industrial.desc"),
      features: [
        t("pricing.industrial.feature1"),
        t("pricing.industrial.feature2"),
        t("pricing.industrial.feature3"),
        t("pricing.industrial.feature4"),
        t("pricing.industrial.feature5"),
        t("pricing.industrial.feature6"),
        t("pricing.industrial.feature7"),
      ],
      priceFrom: "42",
      priceUnit: t("pricing.unit_hourly"),
      popular: false,
    },
    {
      icon: Home,
      name: t("services.construction_end.title"),
      description: t("pricing.construction.desc"),
      features: [
        t("pricing.construction.feature1"),
        t("pricing.construction.feature2"),
        t("pricing.construction.feature3"),
        t("pricing.construction.feature4"),
        t("pricing.construction.feature5"),
        t("pricing.construction.feature6"),
        t("pricing.construction.feature7"),
      ],
      priceFrom: "42",
      priceUnit: t("pricing.unit_hourly"),
      popular: false,
    },
    {
      icon: Home,
      name: t("services.home_cleaning.title"),
      description: t("pricing.home.desc"),
      features: [
        t("pricing.home.feature1"),
        t("pricing.home.feature2"),
        t("pricing.home.feature3"),
        t("pricing.home.min_charge"),
      ],
      priceFrom: "46",
      priceUnit: t("pricing.unit_hourly"),
      popular: false,
    },
  ];


  return (
    <div className="pricing-page">
      <Hero
        variant="simple"
        title={t("pricing.title")}
        subtitle={t("pricing.subtitle")}
        imageSrc="/images/olohuone.png"
        imageAlt={t("pricing.title")}
        pageBackground
      />
      {/* Pricing Cards - Card component */}
      <section
        className="section-container pb-16 md:pb-24"
      >
        <div
          className="pricing-plans grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "1.25rem" }}
        >
          <FloorCleaningPrice showDetails transparent />
          {pricingPlans.map((plan, index) => (
            <Card
              transparent
              key={index}
              icon={plan.icon}
              title={plan.name}
              description={plan.description}
              priceFrom={plan.priceFrom}
              priceUnit={plan.priceUnit}
              features={plan.features}
              ctaText={t("home.hero.cta")}
              ctaHref="/order"
            />
          ))}
        </div>

        {/* Info text */}
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <p className="text-gray-600 text-base">{t("pricing.info_text")}</p>
        </div>

        {/* Window cleaning info */}
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <p className="text-gray-600 text-base">
            {t("pricing.window_cleaning_info")}
          </p>
          <p className="text-gray-600 text-base" style={{ marginTop: "1rem" }}>
            {t("pricing.textile_info")}
          </p>
        </div>
      </section>

    </div>
  );
}
