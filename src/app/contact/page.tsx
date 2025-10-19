'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Youtube, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.email'),
      value: 'info@siivousote.fi',
      link: 'mailto:info@siivousote.fi',
      color: 'bg-blue-500',
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      value: '+358 40 123 4567',
      link: 'tel:+358401234567',
      color: 'bg-green-500',
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      value: 'Petsamonkatu, 11120 Riihimäki, Suomi',
      link: 'https://maps.google.com/?q=Riihimäki',
      color: 'bg-red-500',
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      value: t('contact.hours.value'),
      link: null,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#003580] to-[#0047ab] text-white section-padding">
        <div style={{ maxWidth: '80rem', margin: '0 auto', paddingLeft: '1rem', paddingRight: '1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: '700', marginBottom: '1.5rem', color: 'white' }}>
              {t('contact.title')}
            </h1>
            <p style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: 'rgb(229, 231, 235)' }}>
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '1.5rem', marginBottom: '4rem' }}>
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`${info.color} h-2`}></div>
              <div style={{ padding: '1.5rem' }}>
                <div className={`${info.color} w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`} style={{ marginBottom: '1rem' }}>
                  <info.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-[#003580] text-lg" style={{ marginBottom: '0.75rem' }}>
                  {info.title}
                </h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-gray-700 hover:text-[#003580] transition-colors font-medium"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-700 font-medium">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '3rem' }}>
          {/* Left Column - Contact Methods */}
          <div>
            <h2 className="heading-2" style={{ marginBottom: '2rem' }}>Tavat ottaa yhteyttä</h2>
            
            {/* Quick Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Phone Card */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl border-l-4 border-green-500" style={{ padding: '1.5rem' }}>
                <div className="flex items-start" style={{ gap: '1rem' }}>
                  <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900" style={{ marginBottom: '0.5rem' }}>Soita meille</h3>
                    <p className="text-gray-600" style={{ marginBottom: '0.75rem' }}>Nopein tapa saada vastaus kysymyksiisi</p>
                    <a 
                      href="tel:+358401234567"
                      className="inline-block bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-semibold"
                      style={{ padding: '0.5rem 1.5rem' }}
                    >
                      +358 40 123 4567
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-l-4 border-blue-500" style={{ padding: '1.5rem' }}>
                <div className="flex items-start" style={{ gap: '1rem' }}>
                  <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900" style={{ marginBottom: '0.5rem' }}>Lähetä sähköpostia</h3>
                    <p className="text-gray-600" style={{ marginBottom: '0.75rem' }}>Vastaamme 24 tunnin sisällä</p>
                    <a 
                      href="mailto:info@siivousote.fi"
                      className="inline-block bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-semibold"
                      style={{ padding: '0.5rem 1.5rem' }}
                    >
                      info@siivousote.fi
                    </a>
                  </div>
                </div>
              </div>

              {/* Form Card */}
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border-l-4 border-purple-500" style={{ padding: '1.5rem' }}>
                <div className="flex items-start" style={{ gap: '1rem' }}>
                  <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900" style={{ marginBottom: '0.5rem' }}>Täytä tarjouslomake</h3>
                    <p className="text-gray-600" style={{ marginBottom: '0.75rem' }}>Saat räätälöidyn tarjouksen tarpeisiisi</p>
                    <Link 
                      href="/order"
                      className="inline-block bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors font-semibold"
                      style={{ padding: '0.5rem 1.5rem' }}
                    >
                      Pyydä tarjous →
                    </Link>
                  </div>
                </div>
              </div>

              {/* YouTube Card */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl border-l-4 border-red-500" style={{ padding: '1.5rem' }}>
                <div className="flex items-start" style={{ gap: '1rem' }}>
                  <div className="bg-red-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Youtube className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900" style={{ marginBottom: '0.5rem' }}>Katso videoitamme</h3>
                    <p className="text-gray-600" style={{ marginBottom: '0.75rem' }}>Tutustu palveluihimme YouTube-kanavaltamme</p>
                    <a 
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-semibold"
                      style={{ padding: '0.5rem 1.5rem' }}
                    >
                      YouTube-kanava →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div>
            <h2 className="heading-2" style={{ marginBottom: '2rem' }}>Toimistomme sijainti</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-[500px] flex items-center justify-center relative">
                <div className="text-center z-10" style={{ padding: '2rem' }}>
                  <MapPin className="h-16 w-16 text-[#003580] mx-auto" style={{ marginBottom: '1rem' }} />
                  <h3 className="text-xl font-bold text-gray-800" style={{ marginBottom: '0.5rem' }}>Riihimäki</h3>
                  <p className="text-gray-600" style={{ marginBottom: '1.5rem' }}>
                    Petsamonkatu<br />
                    11120 Riihimäki, Suomi
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Riihimäki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#003580] hover:bg-[#002b66] text-white rounded-lg transition-colors font-semibold"
                    style={{ padding: '0.75rem 1.5rem' }}
                  >
                    Avaa Google Mapsissa →
                  </a>
                </div>
                {/* Decorative elements */}
                <div className="absolute bg-[#003580] rounded-full" style={{ top: '2.5rem', left: '2.5rem', width: '5rem', height: '5rem', opacity: 0.1 }}></div>
                <div className="absolute bg-[#0047ab] rounded-full" style={{ bottom: '2.5rem', right: '2.5rem', width: '8rem', height: '8rem', opacity: 0.1 }}></div>
              </div>
              
              {/* Business Hours Info */}
              <div className="bg-[#003580] text-white" style={{ padding: '1.5rem' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold" style={{ marginBottom: '0.25rem' }}>Aukioloajat</h4>
                    <p className="text-gray-200">Maanantai - Perjantai</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">8:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 section-padding">
        <div className="section-container">
          <h2 className="heading-2 text-center" style={{ marginBottom: '3rem' }}>Usein kysytyt kysymykset</h2>
          <div style={{ maxWidth: '48rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <details className="bg-white rounded-lg shadow-md group" style={{ padding: '1.5rem' }}>
              <summary className="font-semibold text-[#003580] cursor-pointer list-none flex items-center justify-between">
                Kuinka nopeasti voitte aloittaa?
                <span className="text-2xl group-open:rotate-45 transition-transform" style={{ marginLeft: '1rem' }}>+</span>
              </summary>
              <p className="text-gray-600" style={{ marginTop: '1rem' }}>
                Voimme yleensä aloittaa palvelun 1-2 viikon sisällä yhteydenotosta. 
                Kiireellisissä tapauksissa pystymme usein järjestämään nopeammankin aloituksen.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md group" style={{ padding: '1.5rem' }}>
              <summary className="font-semibold text-[#003580] cursor-pointer list-none flex items-center justify-between">
                Onko henkilökuntanne vakuutettu?
                <span className="text-2xl group-open:rotate-45 transition-transform" style={{ marginLeft: '1rem' }}>+</span>
              </summary>
              <p className="text-gray-600" style={{ marginTop: '1rem' }}>
                Kyllä, kaikki työntekijämme ovat täysin vakuutettuja ja taustaltaan tarkastettuja. 
                Voit luottaa siihen, että tilasi ovat turvallisissa käsissä.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md group" style={{ padding: '1.5rem' }}>
              <summary className="font-semibold text-[#003580] cursor-pointer list-none flex items-center justify-between">
                Mitä siivousvälineitä käytätte?
                <span className="text-2xl group-open:rotate-45 transition-transform" style={{ marginLeft: '1rem' }}>+</span>
              </summary>
              <p className="text-gray-600" style={{ marginTop: '1rem' }}>
                Käytämme ympäristöystävällisiä ja tehokkaita puhdistusaineita sekä ammattitason 
                siivousvälineitä. Kaikki välineet ja aineet sisältyvät palvelun hintaan.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-md group" style={{ padding: '1.5rem' }}>
              <summary className="font-semibold text-[#003580] cursor-pointer list-none flex items-center justify-between">
                Voitteko tulla myös viikonloppuisin?
                <span className="text-2xl group-open:rotate-45 transition-transform" style={{ marginLeft: '1rem' }}>+</span>
              </summary>
              <p className="text-gray-600" style={{ marginTop: '1rem' }}>
                Kyllä, tarjoamme myös viikonloppu- ja iltapalveluja erikseen sovittaessa. 
                Räätälöimme aikataulut teidän tarpeittenne mukaan.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#003580] text-white section-padding">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ marginBottom: '1.5rem' }}>
            Valmis aloittamaan yhteistyön?
          </h2>
          <p className="text-xl text-gray-100 mx-auto" style={{ marginBottom: '2rem',  }}>
            Ota yhteyttä jo tänään ja saat ilmaisen tarjouksen 24 tunnin sisällä!
          </p>
          <div className="flex flex-col sm:flex-row justify-center" style={{ gap: '1rem' }}>
            <Link href="/order" className="btn-primary bg-white text-[#003580] hover:bg-gray-100">
              {t('nav.order')}
            </Link>
            <a href="tel:+358401234567" className="btn-secondary border-white text-white hover:bg-white/10">
              Soita: +358 40 123 4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}