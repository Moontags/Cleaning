'use client';

import { Award, Heart, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t('why.professional.title'),
      description: t('why.professional.desc'),
    },
    {
      icon: Shield,
      title: t('why.reliable.title'),
      description: t('why.reliable.desc'),
    },
    {
      icon: Heart,
      title: t('why.eco.title'),
      description: t('why.eco.desc'),
    },
    {
      icon: TrendingUp,
      title: t('why.flexible.title'),
      description: t('why.flexible.desc'),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003580] to-[#0047ab] text-white section-padding">
        <div className="section-container text-center">
          <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
            <h1 className="text-4xl md:text-5xl font-bold" style={{ marginBottom: '1.5rem' }}>
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-container section-padding">
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <h2 className="heading-2 text-center" style={{ marginBottom: '2rem' }}>{t('about.story.title')}</h2>
          <div className="text-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
             {t('about.story.p1')}
            </p>
            <p>
              {t('about.story.p2')}
            </p>
            <p>
              {t('about.story.p3')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 section-padding">
        <div className="section-container">
          <h2 className="heading-2 text-center" style={{ marginBottom: '3rem' }}>{t('about.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '2rem' }}>
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                style={{ padding: '1.5rem' }}
              >
                <div className="bg-[#003580] w-16 h-16 rounded-lg flex items-center justify-center" style={{ marginBottom: '1rem' }}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#003580]" style={{ marginBottom: '0.75rem' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}