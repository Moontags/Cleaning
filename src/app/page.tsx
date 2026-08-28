"use client";

import Link from "next/link";
import { Building2, Store, Factory, Home, Construction } from "lucide-react";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t("services.office.title"),
      description: t("services.office.desc"),
      href: "/services/office-cleaning",
    },
    {
      icon: Store,
      title: t("services.business.title"),
      description: t("services.business.desc"),
      href: "/services/commercial-cleaning",
    },
    {
      icon: Factory,
      title: t("services.industrial.title"),
      description: t("services.industrial.desc"),
      href: "/services/industrial-cleaning",
    },
    {
      icon: Construction,
      title: t("services.construction_end.title"),
      description: t("services.construction_end.desc"),
      href: "/services/post-construction-cleaning",
    },
    {
      icon: Home,
      title: t("services.home_cleaning.title"),
      description: t("services.home_cleaning.desc"),
      href: "/services/home-cleaning",
    },
  ];

  return (
    <div>
      <Hero
        variant="main"
        title={t("home.hero.title")}
        subtitle={t("home.hero.subtitle")}
        imageSrc="/images/kitchen.png"
        imageAlt={t("home.hero.title")}
        imagePriority
      />

      {/* Services Section - Glassmorphism kortit - MARGIN KORJATTU */}
      <section
        className="section-container section-padding"
        style={{ marginTop: "-3rem" }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
          style={{ gap: "1.5rem" }}
        >
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl transition-all duration-300 border border-gray-100 overflow-hidden block"
              style={{ padding: "1.75rem" }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gray-100 text-[#655c4e] group-hover:bg-gray-200 transition-colors"
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h3
                  className="text-lg font-semibold text-[#36302a] group-hover:text-[#36302a] transition-colors"
                  style={{ marginBottom: "0.75rem" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {/* Dekoratiivinen elementti */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
            </Link>
          ))}
        </div>
      </section>

      <WhyChoose />

      {/* CTA Section - PARANNETTU SIIRTYMÄ FOOTERIIN */}
      <section
        className="relative text-white section-padding overflow-hidden"
      >
        {/* Background overlay for contrast and airy look */}
        <div className="absolute inset-0 bg-linear-to-b from-[#4e463b] via-[#655c4e] to-[#847866]"></div>

        {/* Soft decorative shapes (keeps previous feel) */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-12 right-12 w-72 h-72 bg-white/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-12 left-12 w-96 h-96 bg-gray-300/6 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container text-center relative z-10">
          <h2
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ marginBottom: "1.25rem" }}
          >
            {t("home.hero.cta")}
          </h2>
          <p
            className="text-lg md:text-xl text-gray-50 max-w-2xl mx-auto"
            style={{ marginBottom: "1.75rem" }}
          >
            {t("contact.subtitle")}
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center items-center"
            style={{ gap: "1rem" }}
          >
            <Link
              href="/order"
              className="inline-flex items-center justify-center bg-white text-[#36302a] rounded-full px-8 py-3 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {t("nav.order")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white/20 text-white rounded-full px-6 py-3 font-medium border border-white/25 backdrop-blur-sm hover:backdrop-brightness-110 transition-all duration-300"
            >
              {t("nav.contact")}
            </Link>
          </div>
        </div>

        {/* UUSI: Pehmeä gradient-siirtymä footeriin - Luo saumattoman siirtymän */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-b from-transparent via-[#221e19]/40 to-[#221e19]/80 pointer-events-none"></div>
      </section>
    </div>
  );
}
