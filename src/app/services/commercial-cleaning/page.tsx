"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Store, Users, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";

export default function CommercialCleaningPage() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Store,
      title: t("service.business.why.benefit1.title"),
      description: t("service.business.why.benefit1.desc"),
    },
    {
      icon: Users,
      title: t("service.business.why.benefit2.title"),
      description: t("service.business.why.benefit2.desc"),
    },
    {
      icon: Clock,
      title: t("service.business.why.benefit3.title"),
      description: t("service.business.why.benefit3.desc"),
    },
  ];

  const servicesIncluded = [
    t("service.business.what.item1"),
    t("service.business.what.item2"),
    t("service.business.what.item3"),
    t("service.business.what.item4"),
    t("service.business.what.item5"),
    t("service.business.what.item6"),
    t("service.business.what.item7"),
    t("service.business.what.item8"),
  ];

  const spaceTypes = [
    t("service.business.types.retail"),
    t("service.business.types.restaurant"),
    t("service.business.types.salon"),
    t("service.business.types.gym"),
    t("service.business.types.showroom"),
    t("service.business.types.clinic"),
  ];

  return (
    <main className="min-h-screen">
      <Hero
        variant="service"
        title={t("service.business.hero.title")}
        subtitle={t("service.business.hero.subtitle")}
        imageSrc="/images/sky.jpg"
        imageAlt={t('service.business.hero.title')}
        ctaButton={{ text: t("service.business.cta.button") }}
      />

      {/* Introduction */}
      <section
        className="section-container"
        style={{ paddingTop: "5rem", paddingBottom: "3rem" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("service.business.intro")}
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="bg-gray-50"
        style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
      >
        <div className="section-container">
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-[#003580]"
            style={{ marginBottom: "3rem" }}
          >
            {t("service.business.why.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-[#003580]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#003580] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section
        className="section-container"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-[#003580]"
            style={{ marginBottom: "3rem" }}
          >
            {t("service.business.what.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {servicesIncluded.map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Types */}
      <section
        className="bg-gradient-to-br from-blue-50 to-white"
        style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
      >
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-center text-[#003580]"
              style={{ marginBottom: "3rem" }}
            >
              {t("service.business.types.title")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {spaceTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-[#003580] hover:translate-x-1"
                >
                  <p className="text-gray-700 font-medium">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#003580] via-[#0047ab] to-[#003580] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div
          className="section-container relative z-10"
          style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("service.business.cta.title")}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t("service.business.cta.subtitle")}
            </p>
            <Link
              href="/order"
              className="inline-flex items-center gap-2 bg-white text-[#003580] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:gap-3"
            >
              {t("service.business.cta.button")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
