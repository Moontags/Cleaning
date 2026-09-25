"use client";

import Link from "next/link";
import Image from "next/image";
import { Layers, ClipboardCheck } from "lucide-react";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import FloorCleaningPrice from "@/components/FloorCleaningPrice";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MachineFloorCleaningPage() {
  const { t } = useLanguage();

  return (
    <div>
      <Hero
        variant="service"
        title={t("services.floor.title")}
        subtitle={t("service.floor.subtitle")}
        ctaButton={{ text: t("service.floor.cta"), href: "/order" }}
      />
      <section className="section-container section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="heading-2">{t("service.floor.equipment.title")}</h2>
              <p className="text-body">{t("service.floor.intro")}</p>
            </div>
            <figure className="rounded-2xl border border-gray-200 bg-white p-6">
              <Image
                src="/images/d0-431.avif"
                alt={t("service.floor.equipment.alt")}
                width={1200}
                height={1200}
                sizes="(max-width: 767px) 100vw, 50vw"
                className="mx-auto h-72 w-full object-contain md:h-96"
              />
              <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                {[1, 2, 3].map((detail) => (
                  <Image
                    key={detail}
                    src={`/images/k-mop-detail-${detail}.avif`}
                    alt={t(`service.floor.equipment.detail${detail}.alt`)}
                    width={1200}
                    height={1200}
                    sizes="(max-width: 767px) 28vw, (max-width: 1279px) 14vw, 160px"
                    className="aspect-square w-full rounded-lg border border-gray-100 object-contain"
                  />
                ))}
              </div>
              <figcaption className="mt-4 text-center text-sm font-semibold text-gray-700">
                Kärcher K-Mop 46 Bp Pack
              </figcaption>
            </figure>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card icon={Layers} title={t("service.floor.method.title")} description={t("service.floor.method.desc")} />
            <Card icon={ClipboardCheck} title={t("service.floor.scope.title")} description={t("service.floor.scope.desc")} />
          </div>
        </div>
      </section>
      <section className="section-container pb-12 md:pb-16" aria-labelledby="floor-care-title">
        <div className="mx-auto max-w-6xl">
          <h2 id="floor-care-title" className="heading-2">{t("service.floor.care.title")}</h2>
          <p className="text-body mb-8">{t("service.floor.care.intro")}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { key: "frequency", items: ["busy", "quiet", "deep"] },
              { key: "materials", items: ["wash", "check", "exclude"] },
            ].map(({ key, items }) => (
              <article key={key} className="rounded-xl border border-[#e7ded0] bg-[#fbf8f2] p-6">
                <h3 className="mb-4 text-xl font-semibold text-[#36302a]">{t(`service.floor.${key}.title`)}</h3>
                <ul className="list-disc space-y-4 pl-5 text-sm leading-relaxed text-gray-700 marker:text-primary">
                  {items.map((item) => <li key={item}>{t(`service.floor.${key}.${item}`)}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <article className="mt-6 rounded-xl border border-[#e7ded0] bg-white p-6">
            <h3 className="mb-4 text-xl font-semibold text-[#36302a]">{t("service.floor.wax.title")}</h3>
            <div className="grid gap-4 text-sm leading-relaxed text-gray-700 md:grid-cols-2">
              <p>{t("service.floor.wax.polish")}</p>
              <p>{t("service.floor.wax.strip")}</p>
            </div>
            <p className="mt-5 border-t border-gray-200 pt-5 text-sm leading-relaxed text-gray-700">{t("service.floor.wax.quote")}</p>
          </article>
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
