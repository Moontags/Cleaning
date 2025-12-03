"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Logo } from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const navigation = [
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.pricing"), href: "/pricing" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const services = [
    { name: t("services.office.title"), href: "/services/office-cleaning" },
    {
      name: t("services.business.title"),
      href: "/services/commercial-cleaning",
    },
    {
      name: t("services.industrial.title"),
      href: "/services/industrial-cleaning",
    },
    {
      name: t("services.construction_end.title"),
      href: "/services/post-construction-cleaning",
    },
    {
      name: t("services.home_cleaning.title"),
      href: "/services/home-cleaning",
    },
  ];

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="section-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Modernisoidtu */}
          <Link
            href="/"
            aria-label="Siivousote"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center space-x-3 flex-shrink-0 group"
          >
            <Logo
              color="#003580"
              className="transition-transform duration-300 max-h-[80px] group-hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div
            className="hidden lg:flex items-center justify-center flex-1"
            style={{ marginLeft: "2rem", marginRight: "2rem" }}
          >
            <div className="flex items-center" style={{ gap: "2rem" }}>
              {/* Palvelut dropdown (desktop) - KORJATTU */}
              <div
                className="relative"
                onMouseEnter={() => setDesktopServicesOpen(true)}
                onMouseLeave={() => setDesktopServicesOpen(false)}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={desktopServicesOpen}
                  className="relative text-base font-medium transition-all duration-300 whitespace-nowrap text-gray-700 hover:text-[#003580] flex items-center gap-1"
                  style={{ paddingBottom: "0.25rem" }}
                >
                  {t("services.title")}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      desktopServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown menu - PARANNETTU */}
                <div
                  className={`absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl ring-1 ring-black/5 transition-all duration-200 ${
                    desktopServicesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                  style={{ zIndex: 100 }}
                >
                  <div className="py-2">
                    {services.map((svc) => (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-[#003580] transition-all duration-200"
                      >
                        {svc.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-base font-medium transition-all duration-300 whitespace-nowrap group ${
                    isActive(item.href)
                      ? "text-[#003580]"
                      : "text-gray-700 hover:text-[#003580]"
                  }`}
                  style={{ paddingBottom: "0.25rem" }}
                >
                  {item.name}
                  {/* Moderni alakriiva animaatiolla - KORJATTU SIJAINTI */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#003580] to-[#0047ab] transition-all duration-300 ${
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side: CTA Button + Language Switcher */}
          <div
            className="hidden lg:flex items-center flex-shrink-0"
            style={{ gap: "1.5rem" }}
          >
            {/* CTA Button */}
            <Link
              href="/order"
              className="bg-gradient-to-r from-[#003580] to-[#0047ab] hover:from-[#0047ab] hover:to-[#0056d6] text-white rounded-lg font-medium transition-all duration-300 hover:shadow-md whitespace-nowrap"
              style={{ padding: "0.5rem 0.875rem", fontSize: "0.875rem" }}
            >
              {t("nav.order")}
            </Link>

            {/* Language Switcher - Modernisoidtu */}
            <div
              className="flex items-center"
              style={{
                gap: "0.5rem",
                paddingLeft: "1.5rem",
                marginLeft: "0.5rem",
              }}
            >
              <button
                onClick={() => setLanguage("fi")}
                className={`flex items-center rounded-lg transition-all duration-300 ${
                  language === "fi"
                    ? "bg-gradient-to-r from-[#003580] to-[#0047ab] text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
                style={{ gap: "0.25rem", padding: "0.5rem 0.875rem" }}
              >
                <span className="text-lg">🇫🇮</span>
                <span className="text-sm font-medium">FI</span>
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`flex items-center rounded-lg transition-all duration-300 ${
                  language === "en"
                    ? "bg-gradient-to-r from-[#003580] to-[#0047ab] text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
                style={{ gap: "0.25rem", padding: "0.5rem 0.875rem" }}
              >
                <span className="text-lg">🇬🇧</span>
                <span className="text-sm font-medium">EN</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button - Modernisoidtu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 transition-all duration-300 hover:shadow-md"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#003580]" />
            ) : (
              <Menu className="h-6 w-6 text-[#003580]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Modernisoidtu */}
        {isMenuOpen && (
          <div
            className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm rounded-b-2xl shadow-lg"
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              marginTop: "0.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full text-left relative text-base font-medium transition-all duration-300 overflow-hidden flex items-center justify-between ${
                    mobileServicesOpen
                      ? "text-[#003580] font-semibold bg-gradient-to-r from-blue-50 to-blue-100"
                      : "text-gray-700 hover:text-[#003580] hover:bg-gray-50"
                  }`}
                  style={{ padding: "0.875rem 1rem", borderRadius: "0.75rem" }}
                >
                  <span>{t("services.title")}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.25rem",
                      paddingLeft: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    {services.map((svc) => (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="block text-gray-700 hover:text-[#003580] px-4 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200"
                      >
                        {svc.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative text-base font-medium transition-all duration-300 overflow-hidden ${
                    isActive(item.href)
                      ? "text-[#003580] font-semibold bg-gradient-to-r from-blue-50 to-blue-100"
                      : "text-gray-700 hover:text-[#003580] hover:bg-gray-50"
                  }`}
                  style={{ padding: "0.875rem 1rem", borderRadius: "0.75rem" }}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#003580] to-[#0047ab] rounded-r"></span>
                  )}
                </Link>
              ))}

              {/* Mobile CTA Button - Modernisoidtu */}
              <Link
                href="/order"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#003580] hover:bg-[#0047ab] text-white text-center rounded-xl font-medium transition-all duration-300 hover:shadow-lg block"
                style={{ marginTop: "1rem", padding: "1.125rem 2rem" }}
              >
                {t("nav.order")}
              </Link>

              {/* Mobile Language Switcher - Modernisoidtu */}
              <div
                className="flex items-center border-t border-gray-100"
                style={{ gap: "0.5rem", paddingTop: "1rem", marginTop: "1rem" }}
              >
                <button
                  onClick={() => setLanguage("fi")}
                  className={`flex items-center rounded-xl transition-all duration-300 flex-1 justify-center ${
                    language === "fi"
                      ? "bg-gradient-to-r from-[#003580] to-[#0047ab] text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                  style={{ gap: "0.25rem", padding: "0.875rem 1rem" }}
                >
                  <span className="text-lg">🇫🇮</span>
                  <span className="text-sm font-medium">FI</span>
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`flex items-center rounded-xl transition-all duration-300 flex-1 justify-center ${
                    language === "en"
                      ? "bg-gradient-to-r from-[#003580] to-[#0047ab] text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                  style={{ gap: "0.25rem", padding: "0.875rem 1rem" }}
                >
                  <span className="text-lg">🇬🇧</span>
                  <span className="text-sm font-medium">EN</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
