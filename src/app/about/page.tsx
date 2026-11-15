'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Hero from '@/components/Hero';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <Hero
        variant="simple"
        title={t('about.title')}
        subtitle={t('about.subtitle')}
        imageSrc="/images/olohuone.png"
        maxWidth="48rem"
        imageAlt={t('about.title')}
        pageBackground
      />

      {/* Story text follows the page introduction without a separate card. */}
      <section className="section-container pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl bg-transparent">
            <div className="text-body" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.story.p1')}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.story.p2a')}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.story.p2b')}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.story.p3')}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.story.laatutakuu')}
              </p>
            </div>
        </div>
      </section>

    </div>
  );
}
