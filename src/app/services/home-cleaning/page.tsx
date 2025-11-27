"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Home, Clock, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";

export default function HomeCleaningPage() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Clock,
      title: t("service.home.why.benefit1.title"),
      description: t("service.home.why.benefit1.desc"),
    },
    {
      icon: Home,
      title: t("service.home.why.benefit2.title"),
      description: t("service.home.why.benefit2.desc"),
    },
    {
      icon: ShieldCheck,
      title: t("service.home.why.benefit3.title"),
      description: t("service.home.why.benefit3.desc"),
    },
  ];

  const servicesIncluded = [
    t("service.home.what.item1"),
    t("service.home.what.item2"),
    t("service.home.what.item3"),
    t("service.home.what.item4"),
    t("service.home.what.item5"),
    t("service.home.what.item6"),
    t("service.home.what.item7"),
    t("service.home.what.item8"),
  ];

  const options = [
    {
      title: t("service.home.options.regular.title"),
      description: t("service.home.options.regular.desc"),
    },
    {
      title: t("service.home.options.onetime.title"),
      description: t("service.home.options.onetime.desc"),
    },
    {
      title: t("service.home.options.deep.title"),
      description: t("service.home.options.deep.desc"),
    },
    {
      title: t("service.home.options.custom.title"),
      description: t("service.home.options.custom.desc"),
    },
  ];

  return (
    <main className="min-h-screen">
      <Hero
        variant="service"
        title={t("service.home.hero.title")}
        subtitle={t("service.home.hero.subtitle")}
        imageSrc="/images/sky.jpg"
        imageAlt={t('service.home.hero.title')}
        ctaButton={{ text: t("service.home.cta.button") }}
      />

      {/* Introduction */}
      <section className="section-container" style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("service.home.intro")}
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="section-container">
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-[#003580]"
            style={{ marginBottom: "3rem" }}
          >
            {t("service.home.why.title")}
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
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-container" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-[#003580]"
            style={{ marginBottom: "3rem" }}
          >
            {t("service.home.what.title")}
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

      {/* Options */}
      <section className="bg-gradient-to-br from-blue-50 to-white" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-center text-[#003580]"
              style={{ marginBottom: "3rem" }}
            >
              {t("service.home.options.title")}
            </h2>
            <div className="space-y-4">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-[#003580]"
                >
                  <h3 className="text-lg font-semibold text-[#003580] mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600">{option.description}</p>
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

        <div className="section-container relative z-10" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("service.home.cta.title")}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t("service.home.cta.subtitle")}
            </p>
            <Link
              href="/order"
              className="inline-flex items-center gap-2 bg-white text-[#003580] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:gap-3"
            >
              {t("service.home.cta.button")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
