"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";

export default function OrderPage() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Lähetys epäonnistui / Submission failed"
        );
      }

      // Success
      setIsSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(
        err instanceof Error ? err.message : "Tuntematon virhe / Unknown error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    { value: "office", label: t("order.form.service.office") },
    { value: "business", label: t("order.form.service.business") },
    { value: "industrial", label: t("order.form.service.industrial") },
    { value: "home_cleaning", label: t("order.form.service.home_cleaning") },
    { value: "other", label: t("order.form.service.other") },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-[#003580] mb-4">
            {t("order.success.title")}
          </h2>
          <p className="text-gray-600 text-lg">{t("order.success.message")}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Hero
        variant="simple"
        title={t("order.title")}
        subtitle={t("order.subtitle")}
        imageSrc="/images/sky.jpg"
        imageAlt={t('order.title')}
        imagePriority
      />

      {/* Form Section */}
      <section className="section-container section-padding">
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg"
            style={{ padding: "2rem" }}
          >
            {/* Company Name */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-gray-700"
                style={{ marginBottom: "0.5rem" }}
              >
                {t("order.form.company")} *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition"
                style={{ padding: "0.75rem 1rem" }}
                // KORJAUS: Paikkamerkki käännettäväksi
                placeholder={t("order.form.placeholder.company")}
              />
            </div>

            {/* Contact Person */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="contact"
                className="block text-sm font-semibold text-gray-700"
                style={{ marginBottom: "0.5rem" }}
              >
                {t("order.form.contact")} *
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition"
                style={{ padding: "0.75rem 1rem" }}
                // KORJAUS: Paikkamerkki käännettäväksi
                placeholder={t("order.form.placeholder.contact")}
              />
            </div>

            {/* Email and Phone */}
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ gap: "1.5rem", marginBottom: "1.5rem" }}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                  style={{ marginBottom: "0.5rem" }}
                >
                  {t("order.form.email")} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition"
                  style={{ padding: "0.75rem 1rem" }}
                  // KORJAUS: Paikkamerkki käännettäväksi
                  placeholder={t("order.form.placeholder.email")}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700"
                  style={{ marginBottom: "0.5rem" }}
                >
                  {t("order.form.phone")} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition"
                  style={{ padding: "0.75rem 1rem" }}
                  // KORJAUS: Paikkamerkki käännettäväksi
                  placeholder={t("order.form.placeholder.phone")}
                />
              </div>
            </div>

            {/* Service Selection */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="service"
                className="block text-sm font-semibold text-gray-700"
                style={{ marginBottom: "0.5rem" }}
              >
                {t("order.form.service")} *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition bg-white"
                style={{ padding: "0.75rem 1rem" }}
              >
                {/* KORJAUS: Oletusvalinnan teksti käännettäväksi */}
                <option value="">
                  {t("order.form.placeholder.service_select")}
                </option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700"
                style={{ marginBottom: "0.5rem" }}
              >
                {t("order.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition resize-none"
                style={{ padding: "0.75rem 1rem" }}
                // KORJAUS: Paikkamerkki käännettäväksi
                placeholder={t("order.form.placeholder.message")}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full btn-primary flex items-center justify-center ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{ gap: "0.5rem" }}
            >
              <Send className="h-5 w-5" />
              <span>
                {isLoading ? t("order.form.sending") : t("order.form.submit")}
              </span>
            </button>

            <p
              className="text-sm text-gray-500 text-center"
              style={{ marginTop: "1rem" }}
            >
              {t("order.form.required_fields")}
            </p>
          </form>

          {/* Additional Info - KORJATTU KÄYTTÄMÄÄN KÄÄNNÖSAVAIMIA */}
          <div className="bg-white/6 backdrop-blur-sm p-5 rounded-xl" style={{ marginTop: '2rem' }}>
            <h3 className="font-semibold text-[#003580] mb-3">{t('order.next.title')}</h3>

            <ol className="flex flex-col gap-4 text-gray-700">
              {[t('order.next.step1'), t('order.next.step2'), t('order.next.step3'), t('order.next.step4')].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#003580] text-white flex items-center justify-center font-semibold flex-shrink-0">{i + 1}</div>
                  <div className="flex-1">{step}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
