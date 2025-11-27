'use client';

import Link from 'next/link';
import { Check, Building2, Store, Factory, Star, Shield, Clock, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';
import Card from '@/components/Card';


export default function PricingPage() {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      icon: Building2,
      name: t('services.office.title'),
      description: t('pricing.office.desc'),
      features: [
        t('pricing.office.feature1'),
        t('pricing.office.feature2'),
        t('pricing.office.feature3'),
        t('pricing.office.feature4'),
        t('pricing.office.feature5'),
        t('pricing.office.feature6'),
        t('pricing.office.feature7'),
      ],
      priceFrom: '38',
      priceUnit: t('pricing.unit_hourly'),
      popular: false,
    },
    {
      icon: Store,
      name: t('services.business.title'),
      description: t('pricing.business.desc'),
      features: [
        t('pricing.business.feature1'),
        t('pricing.business.feature2'),
        t('pricing.business.feature3'),
        t('pricing.business.feature4'),
        t('pricing.business.feature5'),
        t('pricing.business.feature6'),
        t('pricing.business.feature7'),
      ],
      priceFrom: '42',
      priceUnit: t('pricing.unit_hourly'),
      popular: false,
    },
    {
      icon: Factory,
      name: t('services.industrial.title'),
      description: t('pricing.industrial.desc'),
      features: [
        t('pricing.industrial.feature1'),
        t('pricing.industrial.feature2'),
        t('pricing.industrial.feature3'),
        t('pricing.industrial.feature4'),
        t('pricing.industrial.feature5'),
        t('pricing.industrial.feature6'),
        t('pricing.industrial.feature7'),
      ],
      priceFrom: '46',
      priceUnit: t('pricing.unit_hourly'),
      popular: false,
    },
    {
      icon: Home,
      name: t('services.construction_end.title'),
      description: t('pricing.construction.desc'),
      features: [
        t('pricing.construction.feature1'),
        t('pricing.construction.feature2'),
        t('pricing.construction.feature3'),
        t('pricing.construction.feature4'),
        t('pricing.construction.feature5'),
        t('pricing.construction.feature6'),
        t('pricing.construction.feature7'),
      ],
      priceFrom: '50',
      priceUnit: t('pricing.unit_hourly'),
      popular: false,
    },
    {
      icon: Home,
      name: t('services.home_cleaning.title'),
      description: t('pricing.home.desc'),
      features: [
        t('pricing.home.feature1'),
        t('pricing.home.feature2'),
        t('pricing.home.feature3'),
        t('pricing.home.min_charge'),
      ],
      priceFrom: '45',
      priceUnit: t('pricing.unit_hourly'),
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: t('pricing.benefit1.title'),
      description: t('pricing.benefit1.desc'),
    },
    {
      icon: Star,
      title: t('pricing.benefit2.title'),
      description: t('pricing.benefit2.desc'),
    },
    {
      icon: Clock,
      title: t('pricing.benefit3.title'),
      description: t('pricing.benefit3.desc'),
    },
  ];

  return (
    <div>
      <Hero
        variant="main"
        title={t('pricing.title')}
        subtitle={t('pricing.subtitle')}
        imageSrc="/images/sky.jpg"
        imageAlt={t('pricing.title')}
        imagePriority
      />
      {/* Pricing Cards - Card component */}
      <section className="section-container section-padding" style={{ marginTop: '-3rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5" style={{ gap: '1.25rem' }}>
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              icon={plan.icon}
              title={plan.name}
              description={plan.description}
              priceFrom={plan.priceFrom}
              priceUnit={plan.priceUnit}
              features={plan.features}
              ctaText={t('home.hero.cta')}
              ctaHref="/order"
            />
          ))}
        </div>

        {/* Info text */}
        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
          <p className="text-gray-600 text-base">
            {t('pricing.info_text')}
          </p>
        </div>
      </section>

      {/* Benefits Section - Modernit kortit */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white section-padding">
        <div className="section-container">
          <h2 className="heading-2 text-center text-[#003580]" style={{ marginBottom: '3rem' }}>{t('pricing.benefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1.25rem', marginBottom: '2.5rem' }}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center transform hover:-translate-y-1"
                style={{ padding: '1.25rem' }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/20 bg-white/10" style={{ marginBottom: '0.75rem' }}>
                  <benefit.icon className="h-6 w-6 text-[#003580]" />
                </div>
                <h3 className="text-lg font-semibold text-[#003580]" style={{ marginBottom: '0.5rem' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed inclusions - Modernisoidtu */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-white/20" style={{ maxWidth: '64rem', margin: '0 auto', padding: '1.5rem' }}>
            <h3 className="text-xl font-semibold text-[#003580] text-center" style={{ marginBottom: '1.25rem' }}>
              {t('pricing.inclusions.title')}
            </h3>
            <div className="grid md:grid-cols-2" style={{ gap: '1rem' }}>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="flex items-start" style={{ gap: '0.75rem' }}>
                  <div className="rounded-xl flex-shrink-0 p-2" style={{ background: 'linear-gradient(135deg,#38a169,#2f855a)', boxShadow: '0 6px 14px rgba(47,133,90,0.08)' }}>
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900" style={{ marginBottom: '0.25rem' }}>{t(`pricing.inclusions${num}.title`)}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{t(`pricing.inclusions${num}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote section removed per request */}

      {/* Comparison table removed as requested */}

      {/* FAQ Section - Modernisoidtu */}
      <section className="section-container section-padding">
        <h2 className="heading-2 text-center text-[#003580]" style={{ marginBottom: '3rem' }}>{t('pricing.faq.title')}</h2>
        <div style={{ maxWidth: '48rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[1, 2, 3, 4].map((num) => (
            <details key={num} className="group bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100" style={{ padding: '1.5rem' }}>
              <summary className="font-semibold text-[#003580] cursor-pointer list-none flex items-center justify-between group-hover:text-[#0047ab] transition-colors">
                {t(`pricing.faq${num}.title`)}
                <span className="text-2xl group-open:rotate-45 transition-transform bg-gradient-to-br from-[#003580] to-[#0047ab] w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ marginLeft: '1rem' }}>+</span>
              </summary>
              <p className="text-gray-600 leading-relaxed" style={{ marginTop: '1rem' }}>
                {t(`pricing.faq${num}.desc`)}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA - image background */}
      <section
        className="relative text-white section-padding overflow-hidden"
        style={{
          backgroundImage: `url('/images/etusivu.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#05263a]/60 via-[#003580]/55 to-[#003580]/65"></div>

        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-12 right-12 w-72 h-72 bg-white/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-12 left-12 w-96 h-96 bg-blue-300/6 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ marginBottom: '1.5rem' }}>
            {t('pricing.final_cta.title')}
          </h2>
          <p className="text-xl text-blue-50 mx-auto" style={{ marginBottom: '2rem' }}>
            {t('pricing.final_cta.desc')}
          </p>
          <Link href="/order" className="inline-flex items-center justify-center bg-white text-[#003580] rounded-full px-8 py-3 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
            {t('pricing.final_cta.button')}
          </Link>
        </div>
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