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
      borderColor: "border-[#003580]",
      iconBg: "bg-gradient-to-br from-[#003580] to-[#0047ab]",
      buttonBg: "bg-gradient-to-r from-[#003580] to-[#0047ab] hover:shadow-lg",
    },
    {
      icon: Mail,
      title: t("contact.email_card.title"),
      desc: t("contact.email_card.desc"),
      link: "mailto:info@siivousote.fi",
      linkText: "info@siivousote.fi",
      borderColor: "border-[#003580]",
      iconBg: "bg-gradient-to-br from-[#003580] to-[#0047ab]",
      buttonBg: "bg-gradient-to-r from-[#003580] to-[#0047ab] hover:shadow-lg",
    },
    {
      icon: MessageCircle,
      title: t("contact.form_card.title"),
      desc: t("contact.form_card.desc"),
      link: "/order",
      linkText: t("contact.form_card.button"),
      borderColor: "border-[#003580]",
      iconBg: "bg-gradient-to-br from-[#003580] to-[#0047ab]",
      buttonBg: "bg-gradient-to-r from-[#003580] to-[#0047ab] hover:shadow-lg",
      isInternal: true,
    },
  ];

  return (
    <div>
      <Hero
        variant="main"
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
        maxWidth="48rem"
        titleClassName="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in"
        subtitleClassName="text-xl md:text-2xl text-blue-50 leading-relaxed"
        imageSrc="/images/sky.jpg"
        imageAlt={t("contact.title")}
        imagePriority
      />

      {/* Contact Information Grid - Modernisoidtu */}
      <section
        className="section-container section-padding"
        style={{ marginTop: "-3rem" }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "1.5rem", marginBottom: "4rem" }}
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="relative z-10 p-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 border border-white/20 bg-white/10 text-[#003580]">
                  <info.icon className="h-7 w-7" />
                </div>
                <h3
                  className="font-semibold text-[#003580] text-lg"
                  style={{ marginBottom: "0.5rem" }}
                >
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-700 hover:text-[#0047ab] transition-colors font-medium"
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
              className="heading-2 text-[#003580]"
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
                  className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1`}
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
                      className={`${card.iconBg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300`}
                      style={{
                        background: "linear-gradient(135deg,#003580,#0047ab)",
                        boxShadow: "0 6px 14px rgba(0,53,128,0.08)",
                      }}
                    >
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-[#003580]"
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
                        className={`inline-block text-[#003580] bg-white rounded-full border border-white/30 transition-all duration-300 font-semibold`}
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
              className="heading-2 text-[#003580]"
              style={{ marginBottom: "2rem" }}
            >
              {t("contact.map.title")}
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 h-[500px] flex items-center justify-center relative overflow-hidden">
                <div className="text-center z-10" style={{ padding: "2rem" }}>
                  <div
                    className="bg-gradient-to-br from-[#003580] to-[#0047ab] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-xl"
                    style={{ marginBottom: "1.5rem" }}
                  >
                    <MapPin className="h-10 w-10 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold text-[#003580]"
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
                    className="inline-block bg-gradient-to-r from-[#003580] to-[#0047ab] hover:shadow-lg text-white rounded-lg transition-all duration-300 font-semibold shadow-md"
                    style={{ padding: "0.875rem 1.5rem" }}
                  >
                    {t("contact.map.button")}
                  </a>
                </div>
                {/* Decorative elements */}
                <div
                  className="absolute bg-[#003580] rounded-full"
                  style={{
                    top: "2.5rem",
                    left: "2.5rem",
                    width: "5rem",
                    height: "5rem",
                    opacity: 0.1,
                  }}
                ></div>
                <div
                  className="absolute bg-[#0047ab] rounded-full"
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
                className="bg-gradient-to-r from-[#003580] to-[#0047ab] text-white"
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
                    <p className="text-blue-100">
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

      {/* FAQ Section - Modernisoidtu */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white section-padding">
        <div className="section-container">
          <h2
            className="heading-2 text-center text-[#003580]"
            style={{ marginBottom: "3rem" }}
          >
            {t("contact.faq.title")}
          </h2>
          <div
            style={{
              maxWidth: "48rem",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[1, 2, 3, 4].map((num) => (
              <details
                key={num}
                className="group bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
                style={{ padding: "1.5rem" }}
              >
                <summary className="font-semibold text-[#003580] cursor-pointer list-none flex items-center justify-between group-hover:text-[#0047ab] transition-colors">
                  {t(`contact.faq${num}.title`)}
                  <span
                    className="text-2xl group-open:rotate-45 transition-transform bg-gradient-to-br from-[#003580] to-[#0047ab] w-8 h-8 rounded-lg flex items-center justify-center text-white"
                    style={{ marginLeft: "1rem" }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{ marginTop: "1rem" }}
                >
                  {t(`contact.faq${num}.desc`)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - image background */}
      <section
        className="relative text-white section-padding overflow-hidden"
        style={{
          backgroundImage: `url('/images/hero_banner_cta.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#05263a]/60 via-[#003580]/55 to-[#003580]/65"></div>

        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-12 right-12 w-72 h-72 bg-white/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-12 left-12 w-96 h-96 bg-blue-300/6 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container text-center relative z-10">
          <h2
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ marginBottom: "1.25rem" }}
          >
            {t("contact.cta.title")}
          </h2>
          <p
            className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto"
            style={{ marginBottom: "1.75rem" }}
          >
            {t("contact.cta.desc")}
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center items-center"
            style={{ gap: "1rem" }}
          >
            <Link
              href="/order"
              className="inline-flex items-center justify-center bg-white text-[#003580] rounded-full px-8 py-3 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {t("nav.order")}
            </Link>
            <a
              href="tel:+358402183270"
              className="inline-flex items-center justify-center bg-white/20 text-white rounded-full px-6 py-3 font-medium border border-white/25 backdrop-blur-sm hover:backdrop-brightness-110 transition-all duration-300"
            >
              {t("contact.cta.phone_number")}
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#001f3f]/40 to-[#001f3f]/80 pointer-events-none"></div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
