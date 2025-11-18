'use client';

import Link from 'next/link';
import { Check, Building2, Store, Factory, Star, Shield, Clock, Home } from 'lucide-react'; 
import { useLanguage } from '@/contexts/LanguageContext';

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003580] to-[#0047ab] text-white section-padding">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            {t('pricing.title')}
          </h1>
          <p className="text-xl  md:text-2xl text-gray-100 mx-auto">
            {t('pricing.subtitle')}
          </p>
      
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-container section-padding">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '2rem' }}> 
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col`}
            >
              
              <div className="flex-grow flex flex-col" style={{ padding: '1.5rem' }}>
                <div className={`bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center`} style={{ marginBottom: '1rem' }}>
                  <plan.icon className={`h-8 w-8 text-[#003580]`} />
                </div>
                
                <h3 className="text-2xl font-bold text-[#003580]" style={{ marginBottom: '0.5rem' }}>
                  {plan.name}
                </h3>
                
                <p className="text-gray-600" style={{ marginBottom: '1.5rem', minHeight: '3rem' }}>
                  {plan.description}
                </p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <div className="flex items-baseline">
                    <span className="text-4xl md:text-5xl font-bold text-[#003580]">
                      {plan.priceFrom}
                    </span>
                    <span className="text-gray-600" style={{ marginLeft: '0.5rem' }}>
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
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" style={{ marginRight: '0.75rem', marginTop: '0.125rem' }} />
                      <span className="text-gray-700 text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/order"
                  className={`block text-center rounded-lg font-semibold transition-all bg-gray-100 text-[#003580] hover:bg-gray-200`}
                  style={{ padding: '0.75rem 1.5rem' }}
                >
                  {t('home.hero.cta')}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Info text */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p className="text-gray-600">
            {t('pricing.info_text')}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 section-padding">
        <div className="section-container">
          <h2 className="heading-2 text-center" style={{ marginBottom: '3rem' }}>{t('pricing.benefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '2rem', marginBottom: '3rem' }}>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                style={{ padding: '2rem' }}
              >
                <div className="bg-[#003580] w-16 h-16 rounded-full flex items-center justify-center mx-auto" style={{ marginBottom: '1rem' }}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#003580]" style={{ marginBottom: '0.75rem' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed inclusions */}
          <div className="bg-white rounded-xl shadow-lg" style={{ maxWidth: '64rem', margin: '0 auto', padding: '2rem' }}>
            <h3 className="text-2xl font-bold text-[#003580] text-center" style={{ marginBottom: '1.5rem' }}>
              {t('pricing.inclusions.title')}
            </h3>
            <div className="grid md:grid-cols-2" style={{ gap: '1.5rem' }}>
              <div className="flex items-start" style={{ gap: '0.75rem' }}>
                <div className="bg-green-100 rounded-full flex-shrink-0" style={{ padding: '0.25rem' }}>
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900" style={{ marginBottom: '0.25rem' }}>{t('pricing.inclusions1.title')}</h4>
                  <p className="text-gray-600 text-sm">{t('pricing.inclusions1.desc')}</p>
                </div>
              </div>

              <div className="flex items-start" style={{ gap: '0.75rem' }}>
                <div className="bg-green-100 rounded-full flex-shrink-0" style={{ padding: '0.25rem' }}>
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900" style={{ marginBottom: '0.25rem' }}>{t('pricing.inclusions2.title')}</h4>
                  <p className="text-gray-600 text-sm">{t('pricing.inclusions2.desc')}</p>
                </div>
              </div>

              <div className="flex items-start" style={{ gap: '0.75rem' }}>
                <div className="bg-green-100 rounded-full flex-shrink-0" style={{ padding: '0.25rem' }}>
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900" style={{ marginBottom: '0.25rem' }}>{t('pricing.inclusions3.title')}</h4>
                  <p className="text-gray-600 text-sm">{t('pricing.inclusions3.desc')}</p>
                </div>
              </div>

              <div className="flex items-start" style={{ gap: '0.75rem' }}>
                <div className="bg-green-100 rounded-full flex-shrink-0" style={{ padding: '0.25rem' }}>
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900" style={{ marginBottom: '0.25rem' }}>{t('pricing.inclusions4.title')}</h4>
                  <p className="text-gray-600 text-sm">{t('pricing.inclusions4.desc')}</p>
                </div>
              </div>

              <div className="flex items-start" style={{ gap: '0.75rem' }}>
                <div className="bg-green-100 rounded-full flex-shrink-0" style={{ padding: '0.25rem' }}>
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900" style={{ marginBottom: '0.25rem' }}>{t('pricing.inclusions5.title')}</h4>
                  <p className="text-gray-600 text-sm">{t('pricing.inclusions5.desc')}</p>
                </div>
              </div>

              <div className="flex items-start" style={{ gap: '0.75rem' }}>
                <div className="bg-green-100 rounded-full flex-shrink-0" style={{ padding: '0.25rem' }}>
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900" style={{ marginBottom: '0.25rem' }}>{t('pricing.inclusions6.title')}</h4>
                  <p className="text-gray-600 text-sm">{t('pricing.inclusions6.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="section-container section-padding">
        <div className="bg-gradient-to-br from-[#003580] to-[#0047ab] rounded-2xl text-white text-center" style={{ padding: '3rem 2rem' }}>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ marginBottom: '1rem' }}>
            {t('pricing.custom_cta.title')}
          </h2>
          <p className="text-xl text-gray-100 mx-auto" style={{ marginBottom: '2rem', maxWidth: '42rem' }}>
            {t('pricing.custom_cta.desc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center" style={{ gap: '1rem' }}>
            <Link 
              href="/order" 
              className="btn-primary bg-white text-[#003580] hover:bg-gray-100"
            >
              {t('pricing.contact.cta')}
            </Link>
            <a 
              href="tel:+358401234567" 
              className="btn-secondary border-white text-white hover:bg-white/10"
            >
              Soita: +358 40 123 4567
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-50 section-padding">
        <div className="section-container">
          <h2 className="heading-2 text-center" style={{ marginBottom: '3rem' }}>{t('pricing.compare.title')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-[#003580] text-white">
                <tr>
                  <th className="text-left font-semibold" style={{ padding: '1rem 1.5rem' }}>{t('pricing.compare.feature')}</th>
                  <th className="text-center font-semibold" style={{ padding: '1rem 1.5rem' }}>{t('pricing.compare.office')}</th>
                  <th className="text-center font-semibold" style={{ padding: '1rem 1.5rem' }}>{t('pricing.compare.business')}</th>
                  <th className="text-center font-semibold" style={{ padding: '1rem 1.5rem' }}>{t('pricing.compare.industrial')}</th>
                  <th className="text-center font-semibold" style={{ padding: '1rem 1.5rem' }}>{t('pricing.compare.construction_end')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-900" style={{ padding: '1rem 1.5rem' }}>{t('pricing.compare.regular')}</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>-</td> 
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-900" style={{ padding: '1rem 1.5rem' }}>{t('pricing.compare.special')}</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>-</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td> 
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-900" style={{ padding: '1rem 1.5rem' }}>{t('pricing.compare.height_work')}</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>-</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>-</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td> 
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td> 
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-900" style={{ padding: '1rem 1.5rem' }}>{t('pricing.compare.weekend')}</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-900" style={{ padding: '1rem 1.5rem' }}>{t('pricing.compare.eco')}</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-900" style={{ padding: '1rem 1.5rem' }}>{t('pricing.compare.quality_control')}</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container section-padding">
        <h2 className="heading-2 text-center" style={{ marginBottom: '3rem' }}>{t('pricing.faq.title')}</h2>
        <div style={{ maxWidth: '48rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <details className="bg-white rounded-lg shadow-md group" style={{ padding: '1.5rem' }}>
            <summary className="font-semibold text-[#003580] cursor-pointer list-none flex items-center justify-between">
              {t('pricing.faq1.title')}
              <span className="text-2xl group-open:rotate-45 transition-transform" style={{ marginLeft: '1rem' }}>+</span>
            </summary>
            <p className="text-gray-600" style={{ marginTop: '1rem' }}>
              {t('pricing.faq1.desc')}
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-md group" style={{ padding: '1.5rem' }}>
            <summary className="font-semibold text-[#003580] cursor-pointer list-none flex items-center justify-between">
              {t('pricing.faq2.title')}
              <span className="text-2xl group-open:rotate-45 transition-transform" style={{ marginLeft: '1rem' }}>+</span>
            </summary>
            <p className="text-gray-600" style={{ marginTop: '1rem' }}>
              {t('pricing.faq2.desc')}
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-md group" style={{ padding: '1.5rem' }}>
            <summary className="font-semibold text-[#003580] cursor-pointer list-none flex items-center justify-between">
              {t('pricing.faq3.title')}
              <span className="text-2xl group-open:rotate-45 transition-transform" style={{ marginLeft: '1rem' }}>+</span>
            </summary>
            <p className="text-gray-600" style={{ marginTop: '1rem' }}>
              {t('pricing.faq3.desc')}
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-md group" style={{ padding: '1.5rem' }}>
            <summary className="font-semibold text-[#003580] cursor-pointer list-none flex items-center justify-between">
              {t('pricing.faq4.title')}
              <span className="text-2xl group-open:rotate-45 transition-transform" style={{ marginLeft: '1rem' }}>+</span>
            </summary>
            <p className="text-gray-600" style={{ marginTop: '1rem' }}>
              {t('pricing.faq4.desc')}
            </p>
          </details>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#003580] text-white section-padding">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ marginBottom: '1.5rem' }}>
            {t('pricing.final_cta.title')}
          </h2>
          <p className="text-xl text-gray-100 mx-auto" style={{ marginBottom: '2rem' }}>
            {t('pricing.final_cta.desc')}
          </p>
          <Link href="/order" className="btn-primary bg-white text-[#003580] hover:bg-gray-100 inline-block">
            {t('pricing.final_cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}