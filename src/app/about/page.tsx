'use client';

import { Award, Heart, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';

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
      <Hero
        variant="main"
        title={t('about.title')}
        subtitle={t('about.subtitle')}
        maxWidth="48rem"
        imageSrc="/images/sky.jpg"
        imageAlt={t('about.title')}
        imagePriority
      />

      {/* Story Section - Moderni korttiasettelu */}
      <section className="section-container section-padding" style={{ marginTop: '-3rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <h2 className="heading-2 text-center text-[#003580]" style={{ marginBottom: '3rem' }}>
            {t('about.story.title')}
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100" style={{ padding: '2.5rem' }}>
            <div className="text-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.story.p1')}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.story.p2')}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.story.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Modernit kortit */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white section-padding">
        <div className="section-container">
          <h2 className="heading-2 text-center text-[#003580]" style={{ marginBottom: '3rem' }}>
            {t('about.values.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '1.5rem' }}>
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                style={{ padding: '1.25rem' }}
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 border border-white/20 bg-white/10 text-[#003580]" style={{ marginBottom: '0.75rem' }}>
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#003580]" style={{ marginBottom: '0.5rem' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}