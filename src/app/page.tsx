"use client";

import Link from "next/link";
import { Building2, Store, Factory, Home, Construction, ArrowRight } from "lucide-react";
import Image from "next/image";
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
      image: "/images/toimisto.webp",
    },
    {
      icon: Store,
      title: t("services.business.title"),
      description: t("services.business.desc"),
      href: "/services/commercial-cleaning",
      image: "/images/liiketila.webp",
    },
    {
      icon: Factory,
      title: t("services.industrial.title"),
      description: t("services.industrial.desc"),
      href: "/services/industrial-cleaning",
      image: "/images/teollisuus.webp",
    },
    {
      icon: Construction,
      title: t("services.construction_end.title"),
      description: t("services.construction_end.desc"),
      href: "/services/post-construction-cleaning",
      image: "/images/loppusiivous.webp",
    },
    {
      icon: Home,
      title: t("services.home_cleaning.title"),
      description: t("services.home_cleaning.desc"),
      href: "/services/home-cleaning",
      image: "/images/kotisiivous.webp",
    },
  ];

  return (
    <div>
      <section className="border-b border-gray-200 bg-linear-to-br from-gray-100 via-[#faf8f3] to-white">
        <div className="section-container grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-primary-dark">{t("home.floor.eyebrow")}</p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-800 sm:text-5xl lg:text-6xl">{t("home.floor.title")}</h1>
            <p className="text-body mt-6 max-w-xl">{t("home.floor.description")}</p>
            <div className="my-7 border-l-2 border-primary-light pl-5">
              <p className="text-2xl font-bold text-primary-dark">{t("pricing.floor.from")}</p>
              <p className="mt-1 text-sm text-gray-600">{t("pricing.floor.consumer")}</p>
              <p className="mt-1 text-sm text-gray-600">{t("pricing.floor.minimum")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/services/machine-floor-cleaning" className="btn-primary inline-flex items-center justify-center gap-2 text-center">
                {t("home.floor.explore")}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
              <Link href="/order" className="btn-secondary inline-flex items-center justify-center text-center">{t("service.floor.cta")}</Link>
            </div>
          </div>
          <figure className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <Image src="/images/d0-431.avif" alt={t("service.floor.equipment.alt")} width={1200} height={1200} priority sizes="(max-width: 1023px) 90vw, 45vw" className="h-64 w-full object-contain sm:h-80 lg:h-96" />
            <figcaption className="mt-4 border-t border-gray-100 pt-4 text-center">
              <p className="text-sm font-semibold text-gray-800">Kärcher K-Mop 46 Bp Pack</p>
              <p className="mt-1 text-sm text-gray-600">{t("home.floor.caption")}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Other services remain easy to find below the main service. */}
      <section
        className="section-container section-padding"
        aria-labelledby="home-services-title"
      >
        <div className="mb-8 max-w-2xl">
          <h2 id="home-services-title" className="heading-2">{t("home.services.heading")}</h2>
          <p className="text-body">{t("home.services.intro")}</p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6"
          style={{ gap: "1.5rem" }}
        >
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`group relative flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden transition-shadow duration-300 hover:shadow-lg ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-white">
                <Image src={service.image} alt="" fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className={service.href.endsWith("machine-floor-cleaning") ? "object-contain p-4" : "object-cover transition-transform duration-300 group-hover:scale-105"} />
              </div>
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-1 flex-col p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gray-100 text-primary group-hover:bg-gray-200 transition-colors"
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h3
                  className="text-lg font-semibold text-[#36302a] group-hover:text-primary-dark transition-colors"
                  style={{ marginBottom: "0.75rem" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
                <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-primary-dark">{t("home.services.more")}<ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
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
        <div className="absolute inset-0 bg-linear-to-b from-primary-darkest via-primary-darker to-primary-dark"></div>

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
              className="inline-flex items-center justify-center bg-white text-primary-dark rounded-full px-8 py-3 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
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
