"use client";

import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  Clock,
  Shield,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function OfficeCleaningPage() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Shield,
      title: t("service.office.why.benefit1.title"),
      description: t("service.office.why.benefit1.desc"),
    },
    {
      icon: Clock,
      title: t("service.office.why.benefit2.title"),
      description: t("service.office.why.benefit2.desc"),
    },
    {
      icon: Building2,
      title: t("service.office.why.benefit3.title"),
      description: t("service.office.why.benefit3.desc"),
    },
  ];

  const servicesIncluded = [
    t("service.office.what.item1"),
    t("service.office.what.item2"),
    t("service.office.what.item3"),
    t("service.office.what.item4"),
    t("service.office.what.item5"),
    t("service.office.what.item6"),
    t("service.office.what.item7"),
    t("service.office.what.item8"),
  ];

  const frequencies = [
    {
      title: t("service.office.frequency.daily.title"),
      description: t("service.office.frequency.daily.desc"),
    },
    {
      title: t("service.office.frequency.weekly.title"),
      description: t("service.office.frequency.weekly.desc"),
    },
    {
      title: t("service.office.frequency.biweekly.title"),
      description: t("service.office.frequency.biweekly.desc"),
    },
    {
      title: t("service.office.frequency.custom.title"),
      description: t("service.office.frequency.custom.desc"),
    },
  ];

  return (
    <main className="min-h-screen">
      <Hero
        variant="service"
        title={t("service.office.hero.title")}
        subtitle={t("service.office.hero.subtitle")}
        ctaButton={{ text: t("service.office.cta.button") }}
        imageSrc="/images/sky.jpg"
        imageAlt={t("service.office.hero.title")}
      />

      {/* Introduction */}
      <section
        className="section-container"
        style={{ paddingTop: "5rem", paddingBottom: "3rem" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("service.office.intro")}
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
            {t("service.office.why.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
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
            {t("service.office.what.title")}
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

      {/* Frequency Options */}
      <section
        className="bg-gradient-to-br from-blue-50 to-white"
        style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
      >
        <div className="section-container">
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-[#003580]"
            style={{ marginBottom: "3rem" }}
          >
            {t("service.office.frequency.title")}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {frequencies.map((frequency, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-[#003580] mb-2">
                    {frequency.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {frequency.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - image background */}
      <section
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage: `url('/images/hero_banner_cta.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#05263a]/60 via-[#003580]/55 to-[#003580]/65"></div>

        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-12 right-12 w-72 h-72 bg-white/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-12 left-12 w-96 h-96 bg-blue-300/6 rounded-full blur-3xl"></div>
        </div>

        <div
          className="section-container text-center relative z-10"
          style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("service.office.cta.title")}
            </h2>
            <p className="text-xl text-blue-50 mb-8">
              {t("service.office.cta.subtitle")}
            </p>
            <Link
              href="/order"
              className="inline-flex items-center gap-2 bg-white text-[#003580] px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {t("service.office.cta.button")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
