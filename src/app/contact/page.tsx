"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";

export default function ContactPage() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.email"),
      value: "info@siivousote.fi",
      link: "mailto:info@siivousote.fi",
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      value: "+358 40 2183270",
      link: "tel:+358402183270",
    },
    {
      icon: MapPin,
      title: t("contact.address"),
      value: `${t("contact.address.line1")}, ${t("contact.address.line2")}`,
      link: "https://maps.google.com/?q=Riihimäki",
    },
    {
      icon: Clock,
      title: t("contact.hours"),
      value: t("contact.hours.value"),
      link: null,
    },
  ];

  const quickContact = [
    {
      icon: Phone,
      title: t("contact.phone_card.title"),
      desc: t("contact.phone_card.desc"),
      link: "tel:+358402183270",
      linkText: "+358 40 2183270",
      borderColor: "border-primary",
      iconBg: "bg-gradient-to-br from-primary-dark to-primary",
      buttonBg: "bg-gradient-to-r from-primary-darker to-primary-dark",
    },
    {
      icon: Mail,
      title: t("contact.email_card.title"),
      desc: t("contact.email_card.desc"),
      link: "mailto:info@siivousote.fi",
      linkText: "info@siivousote.fi",
      borderColor: "border-primary",
      iconBg: "bg-gradient-to-br from-primary-dark to-primary",
      buttonBg: "bg-gradient-to-r from-primary-darker to-primary-dark",
    },
    {
      icon: MessageCircle,
      title: t("contact.form_card.title"),
      desc: t("contact.form_card.desc"),
      link: "/order",
      linkText: t("contact.form_card.button"),
      borderColor: "border-primary",
      iconBg: "bg-gradient-to-br from-primary-dark to-primary",
      buttonBg: "bg-gradient-to-r from-primary-darker to-primary-dark",
      isInternal: true,
    },
  ];

  return (
    <div className="contact-page">
      <Hero
        variant="simple"
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
        imageSrc="/images/olohuone.png"
        maxWidth="48rem"
        titleClassName="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in"
        subtitleClassName="text-xl md:text-2xl text-gray-700 leading-relaxed"
        imageAlt={t("contact.title")}
        pageBackground
      />

      {/* Contact Information Grid - Modernisoidtu */}
      <section
        className="section-container pb-16 md:pb-24"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "1.5rem", marginBottom: "4rem" }}
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group relative bg-transparent rounded-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="relative z-10 p-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 border border-white/20 bg-white/10 text-primary">
                  <info.icon className="h-7 w-7" />
                </div>
                <h3
                  className="font-semibold text-[#36302a] text-lg"
                  style={{ marginBottom: "0.5rem" }}
                >
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-700 hover:text-primary-dark transition-colors font-medium"
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-700 font-medium">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "3rem" }}
        >
          {/* Left Column - Contact Methods */}
          <div>
            <h2
              className="heading-2 text-[#36302a]"
              style={{ marginBottom: "2rem" }}
            >
              {t("contact.methods.title")}
            </h2>

            {/* Quick Contact Cards - Valkoiset glassmorphism-kortit */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {quickContact.map((card, index) => (
                <div
                  key={index}
                  className={`group relative bg-transparent rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-1`}
                  style={{ padding: "1.5rem" }}
                >
                  {/* Border accent */}
                  {/* Hover overlay subtle */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/4"></div>

                  <div
                    className="flex items-start relative z-10"
                    style={{ gap: "1rem", marginLeft: "0.5rem" }}
                  >
                    <div
                      className={`${card.iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300`}
                      style={{
                        background: "linear-gradient(135deg,var(--color-primary-dark),var(--color-primary))",
                        boxShadow: "0 6px 14px rgba(87,69,53,0.12)",
                      }}
                    >
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-[#36302a]"
                        style={{ marginBottom: "0.5rem" }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="text-gray-600 leading-relaxed"
                        style={{ marginBottom: "0.75rem" }}
                      >
                        {card.desc}
                      </p>
                      <Link
                        href={card.link}
                        className={`inline-block text-primary-dark bg-white rounded-full border border-white/30 transition-all duration-300 font-semibold`}
                        style={{ padding: "0.5rem 1rem" }}
                      >
                        {card.linkText}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Map */}
          <div>
            <h2
              className="heading-2 text-[#36302a]"
              style={{ marginBottom: "2rem" }}
            >
              {t("contact.map.title")}
            </h2>
            <div className="bg-transparent rounded-2xl overflow-hidden border border-gray-100">
              {/* Map Placeholder */}
              <div className="bg-transparent h-[500px] flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10" style={{ padding: "2rem" }}>
                  <div
                    className="bg-gradient-to-br from-primary-dark to-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto"
                    style={{ marginBottom: "1.5rem" }}
                  >
                    <MapPin className="h-10 w-10 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#36302a]"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    {t("contact.map.location")}
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ marginBottom: "1.5rem" }}
                  >
                    {t("contact.map.address1")}
                    <br />
                    {t("contact.map.address2")}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Riihimäki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-primary-darker to-primary-dark text-white rounded-lg transition-all duration-300 font-semibold"
                    style={{ padding: "0.875rem 1.5rem" }}
                  >
                    {t("contact.map.button")}
                  </a>
                </div>
                {/* Decorative elements */}
                <div
                  className="absolute bg-primary rounded-full"
                  style={{
                    top: "2.5rem",
                    left: "2.5rem",
                    width: "5rem",
                    height: "5rem",
                    opacity: 0.1,
                  }}
                ></div>
                <div
                  className="absolute bg-primary-light rounded-full"
                  style={{
                    bottom: "2.5rem",
                    right: "2.5rem",
                    width: "8rem",
                    height: "8rem",
                    opacity: 0.1,
                  }}
                ></div>
              </div>

              {/* Business Hours Info */}
              <div
                className="bg-transparent border-t border-gray-200 text-gray-800"
                style={{ padding: "1.5rem" }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4
                      className="font-semibold"
                      style={{ marginBottom: "0.25rem" }}
                    >
                      {t("contact.map.hours_title")}
                    </h4>
                    <p className="text-gray-700">
                      {t("contact.map.hours_period")}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">
                      {t("contact.hours.value")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
