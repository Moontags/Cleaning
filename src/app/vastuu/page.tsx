"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function ResponsibilityPage() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="border-b border-gray-200 pb-6 mb-8">
          <div className="flex items-center gap-6 mb-4">
            <Image
              src="/images/siivousote_logo_550x550.png"
              alt="Siivousote logo"
              width={120}
              height={120}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {t('responsibility.title')}
              </h1>
              <p className="text-gray-600">
                {t('responsibility.subtitle')}
              </p>
            </div>
          </div>
        </header>

        {language === 'fi' ? (
          <>
            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Yrityksen lähtökohdat</h2>
              <p className="text-gray-700 mb-3">
                Siivousote on Riihimäeltä käsin toimiva siivousyritys, joka palvelee
                yrityksiä ja taloyhtiöitä. Toimintamme perustuu
                luotettavuuteen, avoimuuteen ja vastuullisiin toimintatapoihin.
              </p>
              <p className="text-gray-700">
                Tämä vastuullisuus- ja ympäristöohjelma ohjaa päivittäistä toimintaamme ja toimii
                pohjana palveluidemme jatkuvalle kehittämiselle.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Vastuullisuuden periaatteet</h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Toimimme lakien ja viranomaismääräysten mukaisesti</li>
                <li>Noudatamme sovittuja aikatauluja ja laatukriteerejä</li>
                <li>Kohtelemme asiakkaita ja yhteistyökumppaneita tasapuolisesti</li>
                <li>Kehitämme toimintaamme jatkuvasti</li>
                <li>Huomioimme ympäristövaikutukset kaikessa toiminnassa</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Ympäristövastuu käytännössä</h2>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">3.1 Siivousaineet ja kemikaalit</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Käytämme ensisijaisesti ympäristömerkittyjä tai vähän kuormittavia siivousaineita</li>
                <li>Annostelemme kemikaalit valmistajan ohjeiden mukaisesti</li>
                <li>Seuraamme ja pyrimme vähentämään kemikaalien kulutusta</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">3.2 Veden ja energian käyttö</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Hyödynnämme mikrokuitumenetelmiä veden ja kemikaalien säästämiseksi</li>
                <li>Vältämme tarpeetonta veden ja sähkön käyttöä</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">3.3 Jätteiden lajittelu ja kierrätys</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Lajittelemme syntyvät jätteet mahdollisuuksien mukaan</li>
                <li>Noudatamme asiakkaan jätehuolto-ohjeita</li>
                <li>Vältämme kertakäyttötuotteita aina kun mahdollista</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Sosiaalinen vastuu</h2>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">4.1 Työntekijät ja työturvallisuus</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Noudatamme työlainsäädäntöä ja työehtosopimuksia</li>
                <li>Huolehdimme perehdytyksestä ja turvallisista työmenetelmistä</li>
                <li>Käytämme asianmukaisia työvälineitä ja suojavarusteita</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">4.2 Asiakasturvallisuus ja luottamus</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Kunnioitamme asiakkaiden tiloja ja omaisuutta</li>
                <li>Käsittelemme asiakastietoja luottamuksellisesti</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Hankinnat ja yhteistyökumppanit</h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Suosimme kotimaisia ja vastuullisia toimittajia</li>
                <li>Huomioimme ympäristönäkökohdat hankinnoissa</li>
                <li>Teemme yhteistyötä vastuullisesti toimivien kumppaneiden kanssa</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Seuranta ja kehittäminen</h2>
              <p className="text-gray-700">
                Vastuullisuus- ja ympäristöohjelmaa tarkastellaan säännöllisesti ja päivitetään
                tarvittaessa. Tavoitteena on jatkuva parantaminen muun muassa kemikaalien,
                veden ja energian käytössä.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Viestintä ja avoimuus</h2>
              <p className="text-gray-700">
                Siivousote viestii vastuullisuudestaan avoimesti asiakkaille ja
                yhteistyökumppaneilleen. Tämä dokumentti on saatavilla yrityksen
                verkkosivuilla.
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Company Foundation</h2>
              <p className="text-gray-700 mb-3">
                Siivousote is a cleaning company operating from Riihimäki, serving
                businesses and housing associations. Our operations are based on
                reliability, transparency, and responsible business practices.
              </p>
              <p className="text-gray-700">
                This responsibility and environmental program guides our daily operations and serves
                as the foundation for continuous improvement of our services.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Responsibility Principles</h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>We comply with laws and regulatory requirements</li>
                <li>We adhere to agreed schedules and quality criteria</li>
                <li>We treat customers and partners equally</li>
                <li>We continuously develop our operations</li>
                <li>We consider environmental impacts in all our activities</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Environmental Responsibility in Practice</h2>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">3.1 Cleaning Products and Chemicals</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>We primarily use eco-labeled or low-impact cleaning products</li>
                <li>We dose chemicals according to manufacturer&apos;s instructions</li>
                <li>We monitor and aim to reduce chemical consumption</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">3.2 Water and Energy Use</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>We utilize microfiber methods to save water and chemicals</li>
                <li>We avoid unnecessary use of water and electricity</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">3.3 Waste Sorting and Recycling</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>We sort generated waste whenever possible</li>
                <li>We follow client&apos;s waste management guidelines</li>
                <li>We avoid single-use products whenever possible</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Social Responsibility</h2>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">4.1 Employees and Occupational Safety</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>We comply with labor legislation and collective agreements</li>
                <li>We ensure proper onboarding and safe work methods</li>
                <li>We use appropriate work tools and protective equipment</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">4.2 Customer Safety and Trust</h3>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>We respect our clients&apos; premises and property</li>
                <li>We handle customer data confidentially</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Procurement and Partners</h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>We prefer domestic and responsible suppliers</li>
                <li>We consider environmental aspects in procurement</li>
                <li>We collaborate with responsibly operating partners</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Monitoring and Development</h2>
              <p className="text-gray-700">
                The responsibility and environmental program is reviewed regularly and updated
                as needed. The goal is continuous improvement in areas such as chemical,
                water, and energy use.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Communication and Transparency</h2>
              <p className="text-gray-700">
                Siivousote communicates openly about its responsibility to customers and
                partners. This document is available on the company&apos;s website.
              </p>
            </section>
          </>
        )}

        <footer className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            {language === 'fi' 
              ? 'Siivousote / Y-tunnus 2166541–5 • www.siivousote.fi'
              : 'Siivousote / Business ID 2166541–5 • www.siivousote.fi'
            }
          </p>
        </footer>
      </div>
    </div>
  );
}
