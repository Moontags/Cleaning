'use client';

import Link from 'next/link';
import { Check, Building2, Store, Factory, Star, Shield, Clock, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';

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
      priceFrom: t('pricing.quote'),
      priceUnit: '',
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
      priceFrom: t('pricing.quote'),
      priceUnit: '',
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

      {/* Pricing Cards - Glassmorphism */}
      <section className="section-container section-padding" style={{ marginTop: '-3rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '1.5rem' }}> 
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 transform hover:-translate-y-2"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#003580]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex-grow flex flex-col relative z-10" style={{ padding: '2rem' }}>
                <div className="bg-gradient-to-br from-[#003580] to-[#0047ab] w-16 h-16 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ marginBottom: '1.25rem' }}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#003580] group-hover:text-[#0047ab] transition-colors" style={{ marginBottom: '0.75rem' }}>
                  {plan.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed" style={{ marginBottom: '1.5rem', minHeight: '3rem' }}>
                  {plan.description}
                </p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div className="flex items-baseline">
                    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#003580] to-[#0047ab] bg-clip-text text-transparent">
                      {plan.priceFrom}
                    </span>
                    <span className="text-gray-600 font-medium" style={{ marginLeft: '0.5rem' }}>
                      {plan.priceUnit}
                    </span>
                  </div>
                  {plan.priceUnit && (
                    <p className="text-sm text-gray-500" style={{ marginTop: '0.25rem' }}>{t('pricing.starting_from')}</p>
                  )}
                </div>
                
                <ul className="flex-grow" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="bg-green-50 rounded-full p-1 flex-shrink-0" style={{ marginRight: '0.75rem' }}>
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/order"
                  className="block text-center rounded-xl font-semibold transition-all bg-gradient-to-r from-[#003580] to-[#0047ab] text-white hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
                  style={{ padding: '0.875rem 1.5rem' }}
                >
                  {t('home.hero.cta')}
                </Link>
              </div>

              {/* Dekoratiivinen elementti */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-[#003580]/5 rounded-full blur-2xl group-hover:bg-[#003580]/10 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Info text */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p className="text-gray-600 text-lg">
            {t('pricing.info_text')}
          </p>
        </div>
      </section>

      {/* Benefits Section - Modernit kortit */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white section-padding">
        <div className="section-container">
          <h2 className="heading-2 text-center text-[#003580]" style={{ marginBottom: '3rem' }}>{t('pricing.benefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '2rem', marginBottom: '3rem' }}>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 transform hover:-translate-y-2"
                style={{ padding: '2.5rem' }}
              >
                <div className="bg-gradient-to-br from-[#003580] to-[#0047ab] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ marginBottom: '1.25rem' }}>
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#003580] group-hover:text-[#0047ab] transition-colors" style={{ marginBottom: '0.75rem' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed inclusions - Modernisoidtu */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100" style={{ maxWidth: '64rem', margin: '0 auto', padding: '2.5rem' }}>
            <h3 className="text-2xl font-bold text-[#003580] text-center" style={{ marginBottom: '2rem' }}>
              {t('pricing.inclusions.title')}
            </h3>
            <div className="grid md:grid-cols-2" style={{ gap: '1.5rem' }}>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="flex items-start group" style={{ gap: '1rem' }}>
                  <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex-shrink-0 p-2 shadow-md group-hover:scale-110 transition-transform duration-300">
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

      {/* Custom Quote Section - Moderni gradient */}
      <section className="section-container section-padding">
        <div className="relative bg-gradient-to-br from-[#003580] via-[#0047ab] to-[#0056d6] rounded-2xl text-white text-center overflow-hidden" style={{ padding: '3rem 2rem' }}>
          {/* Dekoratiiviset elementit */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ marginBottom: '1rem' }}>
              {t('pricing.custom_cta.title')}
            </h2>
            <p className="text-xl text-blue-50 mx-auto" style={{ marginBottom: '2rem' }}>
              {t('pricing.custom_cta.desc').split('. ')[0]}.<br />
              {t('pricing.custom_cta.desc').split('. ')[1]}
            </p>
            <div className="flex flex-col sm:flex-row justify-center" style={{ gap: '1rem' }}>
              <Link 
                href="/order" 
                className="btn-primary bg-white text-[#003580] hover:bg-gray-100"
              >
                {t('pricing.contact.cta')}
              </Link>
              <a 
                href="tel:+358402183270" 
                className="btn-secondary border-white text-white hover:bg-white/10"
              >
                Soita: +358 40 218 3270
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table - Modernisoidtu */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white section-padding">
        <div className="section-container">
          <h2 className="heading-2 text-center text-[#003580]" style={{ marginBottom: '3rem' }}>{t('pricing.compare.title')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <thead className="bg-gradient-to-r from-[#003580] to-[#0047ab] text-white">
                <tr>
                  <th className="text-left font-semibold" style={{ padding: '1.25rem 1.5rem' }}>{t('pricing.compare.feature')}</th>
                  <th className="text-center font-semibold" style={{ padding: '1.25rem 1.5rem' }}>{t('pricing.compare.office')}</th>
                  <th className="text-center font-semibold" style={{ padding: '1.25rem 1.5rem' }}>{t('pricing.compare.business')}</th>
                  <th className="text-center font-semibold" style={{ padding: '1.25rem 1.5rem' }}>{t('pricing.compare.industrial')}</th>
                  <th className="text-center font-semibold" style={{ padding: '1.25rem 1.5rem' }}>{t('pricing.compare.construction_end')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { key: 'regular', checks: [true, true, true, false] },
                  { key: 'special', checks: [false, true, true, true] },
                  { key: 'height_work', checks: [false, false, true, true] },
                  { key: 'weekend', checks: [true, true, true, true] },
                  { key: 'eco', checks: [true, true, true, true] },
                  { key: 'quality_control', checks: [true, true, true, true] },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                    <td className="font-medium text-gray-900" style={{ padding: '1.25rem 1.5rem' }}>{t(`pricing.compare.${row.key}`)}</td>
                    {row.checks.map((hasCheck, colIdx) => (
                      <td key={colIdx} style={{ padding: '1.25rem 1.5rem', textAlign: 'center' }}>
                        {hasCheck ? (
                          <div className="bg-green-50 rounded-full p-1.5 inline-block">
                            <Check className="h-5 w-5 text-green-600" />
                          </div>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

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

      {/* Final CTA - Moderni gradient */}
      <section className="relative bg-gradient-to-br from-[#003580] via-[#0047ab] to-[#0056d6] text-white section-padding overflow-hidden">
        {/* Dekoratiiviset elementit */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ marginBottom: '1.5rem' }}>
            {t('pricing.final_cta.title')}
          </h2>
          <p className="text-xl text-blue-50 mx-auto" style={{ marginBottom: '2rem' }}>
            {t('pricing.final_cta.desc')}
          </p>
          <Link href="/order" className="btn-primary bg-white text-[#003580] hover:bg-gray-100 inline-block">
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