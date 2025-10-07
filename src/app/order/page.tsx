'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function OrderPage() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
   
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        company: '',
        contact: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const services = [
    { value: 'office', label: t('order.form.service.office') },
    { value: 'business', label: t('order.form.service.business') },
    { value: 'industrial', label: t('order.form.service.industrial') },
    { value: 'window', label: t('order.form.service.window') },
    { value: 'other', label: t('order.form.service.other') },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-[#003580] mb-4">
            Kiitos yhteydenotostasi!
          </h2>
          <p className="text-gray-600 text-lg">
            Otamme sinuun yhteyttä mahdollisimman pian.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003580] to-[#0047ab] text-white section-padding">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('order.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mx-auto">
            {t('order.subtitle')}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-container section-padding">
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg" style={{ padding: '2rem' }}>
            {/* Company Name */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-700" style={{ marginBottom: '0.5rem' }}>
                {t('order.form.company')} *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition"
                style={{ padding: '0.75rem 1rem' }}
                placeholder="Yrityksen nimi"
              />
            </div>

            {/* Contact Person */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="contact" className="block text-sm font-semibold text-gray-700" style={{ marginBottom: '0.5rem' }}>
                {t('order.form.contact')} *
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition"
                style={{ padding: '0.75rem 1rem' }}
                placeholder="Nimi"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700" style={{ marginBottom: '0.5rem' }}>
                  {t('order.form.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition"
                  style={{ padding: '0.75rem 1rem' }}
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700" style={{ marginBottom: '0.5rem' }}>
                  {t('order.form.phone')} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition"
                  style={{ padding: '0.75rem 1rem' }}
                  placeholder="+358 40 123 4567"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700" style={{ marginBottom: '0.5rem' }}>
                {t('order.form.service')} *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition bg-white"
                style={{ padding: '0.75rem 1rem' }}
              >
                <option value="">Valitse palvelu</option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700" style={{ marginBottom: '0.5rem' }}>
                {t('order.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003580] focus:border-transparent outline-none transition resize-none"
                style={{ padding: '0.75rem 1rem' }}
                placeholder="Kerro meille tarkemmin tarpeistasi..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center"
              style={{ gap: '0.5rem' }}
            >
              <Send className="h-5 w-5" />
              <span>{t('order.form.submit')}</span>
            </button>

            <p className="text-sm text-gray-500 text-center" style={{ marginTop: '1rem' }}>
              * Pakolliset kentät
            </p>
          </form>

          {/* Additional Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl" style={{ marginTop: '2rem', padding: '1.5rem' }}>
            <h3 className="font-semibold text-[#003580]" style={{ marginBottom: '0.75rem' }}>Mitä tapahtuu seuraavaksi?</h3>
            <ol style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} className="text-gray-700">
              <li className="flex items-start">
                <span className="font-semibold text-[#003580]" style={{ marginRight: '0.5rem' }}>1.</span>
                <span>Käsittelemme tarjouspyyntösi 24 tunnin sisällä</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-[#003580]" style={{ marginRight: '0.5rem' }}>2.</span>
                <span>Otamme sinuun yhteyttä ja tarvittaessa sovimme tapaamisen</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-[#003580]" style={{ marginRight: '0.5rem' }}>3.</span>
                <span>Lähetämme räätälöidyn tarjouksen yrityksellesi</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-[#003580]" style={{ marginRight: '0.5rem' }}>4.</span>
                <span>Aloitamme palvelun sopimuksen mukaisesti</span>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}