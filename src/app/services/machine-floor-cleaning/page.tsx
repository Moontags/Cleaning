"use client";

import Link from "next/link";
import { Layers, ClipboardCheck } from "lucide-react";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import FloorCleaningPrice from "@/components/FloorCleaningPrice";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MachineFloorCleaningPage() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero supports imageSrc when an owned photograph is available. */}
      <Hero
        variant="service"
        title={t("services.floor.title")}
        subtitle={t("service.floor.subtitle")}
        ctaButton={{ text: t("service.floor.cta"), href: "/order" }}
      />
      <section className="section-container section-padding">
        <div className="mx-auto max-w-4xl">
          <p className="text-body mb-8">{t("service.floor.intro")}</p>
          <div className="grid gap-6 md:grid-cols-2">
            <Card icon={Layers} title={t("service.floor.method.title")} description={t("service.floor.method.desc")} />
            <Card icon={ClipboardCheck} title={t("service.floor.scope.title")} description={t("service.floor.scope.desc")} />
          </div>
        </div>
      </section>
      <section className="bg-white section-padding">
        <div className="section-container grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="heading-2">{t("service.floor.quote.title")}</h2>
            <p className="text-body mb-6">{t("service.floor.quote.desc")}</p>
            <Link href="/order" className="btn-primary inline-block">{t("service.floor.cta")}</Link>
          </div>
          <FloorCleaningPrice />
        </div>
      </section>
    </div>
  );
}
