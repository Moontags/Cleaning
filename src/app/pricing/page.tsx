'use client';

import Link from 'next/link';
import { Check, Building2, Store, Factory, Sparkles, Star, Shield, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PricingPage() {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      icon: Building2,
      name: t('services.office.title'),
      description: 'Toimistojen säännöllinen siivous',
      features: [
        'Päivittäinen tai viikoittainen siivous',
        'Pöytäpintojen puhdistus',
        'Lattioiden imurointi ja pesu',
        'WC-tilojen huolto',
        'Keittiötilojen siivous',
        'Roskapönttöjen tyhjennys',
        'Yleisten tilojen puhdistus',
      ],
      priceFrom: '25',
      priceUnit: '€/tunti',
      popular: false,
    },
    {
      icon: Store,
      name: t('services.business.title'),
      description: 'Kauppojen ja ravintoloiden siivous',
      features: [
        'Myyntitilan siivous',
        'Ikkunoiden pesu sisältä',
        'Lattioiden hoito ja kiillotus',
        'Erityishuomio asiakastiloihin',
        'Saniteettitilojen huolto',
        'Räätälöity aikataulu',
        'Säännöllinen laadunvalvonta',
      ],
      priceFrom: '30',
      priceUnit: '€/tunti',
      popular: true,
    },
    {
      icon: Factory,
      name: t('services.industrial.title'),
      description: 'Teollisuusympäristöjen siivous',
      features: [
        'Tuotantotilojen siivous',
        'Erikoispuhdistukset',
        'Turvallisuusvaatimukset huomioitu',
        'Kokenut henkilökunta',
        'Räätälöidyt ratkaisut',
        'Sopimushinta',
        'Säännölliset tarkastukset',
      ],
      priceFrom: 'Tarjous',
      priceUnit: '',
      popular: false,
    },
    {
      icon: Sparkles,
      name: t('services.window.title'),
      description: 'Ikkunanpesu ja lasipinnat',
      features: [
        'Ikkunoiden sisä- ja ulkopuoli',
        'Korkealta tehty pesu',
        'Ammattilaisvälineet',
        'Raidaton lopputulos',
        'Turvallisuus etusijalla',
        'Kertaluonteiset tai sopimukset',
        'Takuupalvelu',
      ],
      priceFrom: '3',
      priceUnit: '€/m²',
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Laatutakuu',
      description: 'Jos et ole tyytyväinen, korjaamme asian välittömästi.',
    },
    {
      icon: Star,
      title: 'Ammattilaiset',
      description: 'Koulutettu ja kokenut henkilökunta palveluksessasi.',
    },
    {
      icon: Clock,
      title: 'Joustavuus',
      description: 'Räätälöimme aikataulut juuri teidän tarpeisiinne.',
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
          <p className="text-xl  md:text-2xl text-gray-100 mx-auto mb-8">
            {t('pricing.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5" />
              <span>Ei piilokustannuksia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5" />
              <span>Ilmainen tarjous</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5" />
              <span>Joustava laskutus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '2rem' }}>
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col ${
                plan.popular ? 'ring-4 ring-[#003580] transform lg:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-[#003580] to-[#0047ab] text-white text-center font-bold flex items-center justify-center" style={{ padding: '0.75rem', fontSize: '0.875rem', gap: '0.5rem' }}>
                  <Star className="h-4 w-4 fill-current" />
                  <span>SUOSITUIN</span>
                  <Star className="h-4 w-4 fill-current" />
                </div>
              )}
              
              <div className="flex-grow flex flex-col" style={{ padding: '1.5rem' }}>
                <div className={`${plan.popular ? 'bg-gradient-to-br from-[#003580] to-[#0047ab]' : 'bg-gray-100'} w-16 h-16 rounded-xl flex items-center justify-center`} style={{ marginBottom: '1rem' }}>
                  <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-white' : 'text-[#003580]'}`} />
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
                    <p className="text-sm text-gray-500" style={{ marginTop: '0.25rem' }}>Alkaen</p>
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
                  className={`block text-center rounded-lg font-semibold transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-[#003580] to-[#0047ab] text-white hover:shadow-lg transform hover:-translate-y-0.5' 
                      : 'bg-gray-100 text-[#003580] hover:bg-gray-200'
                  }`}
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
            * Hinnat ovat alkaen-hintoja ja voivat vaihdella kohteen koon, sijainnin ja palvelun laajuuden mukaan.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 section-padding">
        <div className="section-container">
          <h2 className="heading-2 text-center" style={{ marginBottom: '3rem' }}>Hintaan sisältyy aina</h2>
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
              Mitä hintaan sisältyy?
            </h3>
            <div className="grid md:grid-cols-2" style={{ gap: '1.5rem' }}>
              <div className="flex items-start" style={{ gap: '0.75rem' }}>
                <div className="bg-green-100 rounded-full flex-shrink-0" style={{ padding: '0.25rem' }}>
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900" style={{ marginBottom: '0.25rem' }}>Ammattilaisvälineet</h4>
                  <p className="text-gray-600 text-sm">Kaikki tarvittavat siivousvälineet ja -aineet sisältyvät hintaan.</p>
                </div>
              </div>

              <div className="flex items-start" style={{ gap: '0.75rem' }}>
                <div className="bg-green-100 rounded-full flex-shrink-0" style={{ padding: '0.25rem' }}>
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900" style={{ marginBottom: '0.25rem' }}>Vakuutettu henkilöstö</h4>
                  <p className="text-gray-600 text-sm">Kaikki työntekijämme ovat vakuutettuja ja taustaltaan tarkastettuja.</p>
                </div>
              </div>

              <div className="flex items-start" style={{ gap: '0.75rem' }}>
                <div className="bg-green-100 rounded-full flex-shrink-0" style={{ padding: '0.25rem' }}>
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900" style={{ marginBottom: '0.25rem' }}>Ympäristöystävälliset aineet</h4>
                  <p className="text-gray-600 text-sm">Käytämme ekologisia ja tehokkaita puhdistusaineita.</p>
                </div>
              </div>

              <div className="flex items-start" style={{ gap: '0.75rem' }}>
                <div className="bg-green-100 rounded-full flex-shrink-0" style={{ padding: '0.25rem' }}>
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900" style={{ marginBottom: '0.25rem' }}>Laadunvalvonta</h4>
                  <p className="text-gray-600 text-sm">Säännölliset tarkastukset ja laadun seuranta.</p>
                </div>
              </div>

              <div className="flex items-start" style={{ gap: '0.75rem' }}>
                <div className="bg-green-100 rounded-full flex-shrink-0" style={{ padding: '0.25rem' }}>
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900" style={{ marginBottom: '0.25rem' }}>Joustavat sopimukset</h4>
                  <p className="text-gray-600 text-sm">Ei pitkiä sitoumusaikoja, räätälöimme palvelun tarpeisiisi.</p>
                </div>
              </div>

              <div className="flex items-start" style={{ gap: '0.75rem' }}>
                <div className="bg-green-100 rounded-full flex-shrink-0" style={{ padding: '0.25rem' }}>
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900" style={{ marginBottom: '0.25rem' }}>Asiakastuki</h4>
                  <p className="text-gray-600 text-sm">Aina tavoitettavissa, jos tarvitset apua tai muutoksia.</p>
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
            Tarvitsetko räätälöidyn ratkaisun?
          </h2>
          <p className="text-xl text-gray-100 mx-auto" style={{ marginBottom: '2rem', maxWidth: '42rem' }}>
            Jokainen yritys on erilainen, ja ymmärrämme että tarpeesi saattavat olla ainutlaatuisia. 
            Ota yhteyttä, niin suunnitellaan juuri sinun yrityksellesi sopiva siivousratkaisu ja hinnoittelu.
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
          <h2 className="heading-2 text-center" style={{ marginBottom: '3rem' }}>Vertaile palveluitamme</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-[#003580] text-white">
                <tr>
                  <th className="text-left font-semibold" style={{ padding: '1rem 1.5rem' }}>Ominaisuus</th>
                  <th className="text-center font-semibold" style={{ padding: '1rem 1.5rem' }}>Toimisto</th>
                  <th className="text-center font-semibold" style={{ padding: '1rem 1.5rem' }}>Liiketilat</th>
                  <th className="text-center font-semibold" style={{ padding: '1rem 1.5rem' }}>Teollisuus</th>
                  <th className="text-center font-semibold" style={{ padding: '1rem 1.5rem' }}>Ikkunat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-900" style={{ padding: '1rem 1.5rem' }}>Säännöllinen siivous</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-900" style={{ padding: '1rem 1.5rem' }}>Erikoispuhdistukset</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>-</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>-</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-900" style={{ padding: '1rem 1.5rem' }}>Korkeatyöt</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>-</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>-</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}>-</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-900" style={{ padding: '1rem 1.5rem' }}>Viikonloppupalvelu</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-900" style={{ padding: '1rem 1.5rem' }}>Ympäristöystävälliset aineet</td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'center' }}><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="font-medium text-gray-900" style={{ padding: '1rem 1.5rem' }}>Laadunvalvonta</td>
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
        <h2 className="heading-2 text-center" style={{ marginBottom: '3rem' }}>Usein kysytyt kysymykset hinnoittelusta</h2>
        <div style={{ maxWidth: '48rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <details className="bg-white rounded-lg shadow-md group" style={{ padding: '1.5rem' }}>
            <summary className="font-semibold text-[#003580] cursor-pointer list-none flex items-center justify-between">
              Miten hinnoittelu toimii?
              <span className="text-2xl group-open:rotate-45 transition-transform" style={{ marginLeft: '1rem' }}>+</span>
            </summary>
            <p className="text-gray-600" style={{ marginTop: '1rem' }}>
              Hinnoittelumme perustuu työtunteihin tai pinta-alaan riippuen palvelusta. 
              Teemme aina ilmaisen kartoituksen ja tarjouksen ennen sopimuksen tekoa. 
              Säännöllisissä sopimuksissa saat usein paremman hinnan.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-md group" style={{ padding: '1.5rem' }}>
            <summary className="font-semibold text-[#003580] cursor-pointer list-none flex items-center justify-between">
              Onko hinnoissa lisämaksuja?
              <span className="text-2xl group-open:rotate-45 transition-transform" style={{ marginLeft: '1rem' }}>+</span>
            </summary>
            <p className="text-gray-600" style={{ marginTop: '1rem' }}>
              Ei, hinnat sisältävät kaikki normaalit siivousaineet ja -välineet. 
              Lisämaksuja voi tulla vain erikoispalveluista tai erityisvälineistä, 
              jotka sovitaan aina etukäteen.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-md group" style={{ padding: '1.5rem' }}>
            <summary className="font-semibold text-[#003580] cursor-pointer list-none flex items-center justify-between">
              Millaisia maksumahdollisuuksia on?
              <span className="text-2xl group-open:rotate-45 transition-transform" style={{ marginLeft: '1rem' }}>+</span>
            </summary>
            <p className="text-gray-600" style={{ marginTop: '1rem' }}>
              Tarjoamme joustavia maksuehtoja: kuukausilaskutus, laskutusjakso 14-30 päivää, 
              ja hyväksymme kaikki yleiset maksutavat. Säännöllisille asiakkaille tarjoamme myös 
              kuukausiveloituksen.
            </p>
          </details>

          <details className="bg-white rounded-lg shadow-md group" style={{ padding: '1.5rem' }}>
            <summary className="font-semibold text-[#003580] cursor-pointer list-none flex items-center justify-between">
              Voiko hintaa neuvotella?
              <span className="text-2xl group-open:rotate-45 transition-transform" style={{ marginLeft: '1rem' }}>+</span>
            </summary>
            <p className="text-gray-600" style={{ marginTop: '1rem' }}>
              Kyllä! Erityisesti pitkäaikaisille sopimuksille ja suuremmille kohteille 
              voimme räätälöidä hinnoittelun. Ota yhteyttä, niin keskustellaan yhdessä 
              sinulle sopivasta ratkaisusta.
            </p>
          </details>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#003580] text-white section-padding">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ marginBottom: '1.5rem' }}>
            Aloita puhtaampi työympäristö tänään
          </h2>
          <p className="text-xl text-gray-100 mx-auto" style={{ marginBottom: '2rem' }}>
            Pyydä ilmainen tarjous ja saat vastauksen 24 tunnin sisällä!
          </p>
          <Link href="/order" className="btn-primary bg-white text-[#003580] hover:bg-gray-100 inline-block">
            Pyydä ilmainen tarjous →
          </Link>
        </div>
      </section>
    </div>
  );
}