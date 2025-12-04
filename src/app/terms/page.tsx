"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {language === 'fi' ? 'Siivousote – Sopimusehdot' : 'Siivousote – Terms of Service'}
          </h1>
          <p className="text-gray-600">
            {language === 'fi' 
              ? 'Voimassa 1.12.2025 alkaen • Siivousote / Y-tunnus 2166541–5 • www.siivousote.fi'
              : 'Effective from 1.12.2025 • Siivousote / Business ID 2166541–5 • www.siivousote.fi'
            }
          </p>
        </header>

        {language === 'fi' ? (
          <>
            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Yleistä</h2>
              <p className="text-gray-700">
                Nämä sopimusehdot koskevat Siivousotteen tarjoamia siivous- ja ylläpitopalveluja sekä verkkosivun ja sovelluksen kautta tehtyjä varauksia. Asiakas hyväksyy ehdot tehdessään tilauksen.
              </p>
            </section>

        <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Palvelun tilaaminen</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Palvelu tilataan verkkosivun, sovelluksen, puhelimen tai sähköpostin kautta.</li>
            <li>Varaus vahvistuu, kun Palveluntarjoaja lähettää vahvistusviestin.</li>
            <li>Minimiveloitus on 2 tuntia, ellei toisin sovita.</li>
            <li>Palvelu voi olla kertaluonteinen tai toistuva (sopimusasiakkaat).</li>
          </ul>
        </section>

        <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Palvelun sisältö</h2>
          <p className="text-gray-700 mb-3">
            <strong>Perussiivous</strong> sisältää muun muassa imuroinnin, lattioiden puhdistuksen, pintojen pyyhinnän, WC- ja keittiötilojen puhdistuksen, roskien poiston ja yleisen järjestelyn asiakkaan ohjeiden mukaisesti.
          </p>
          <p className="text-gray-700 mb-3">
            <strong>Palvelun ulkopuolelle jäävät</strong> esimerkiksi ikkunoiden pesu, rakennus- ja remonttisiivoukset, biosiivous, vaativat erikoispuhdistukset ja esineiden siirtely yli 20 kg, ellei toisin sovita.
          </p>
          <p className="text-gray-700">
            <strong>Lisäpalvelut</strong> kuten ikkunanpesu, muuttosiivous ja loppusiivous tilataan erikseen ja hinnoitellaan kohdekohtaisesti.
          </p>
        </section>

        <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Hinnasto ja maksuehdot</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Hinnat ovat tuntiperusteisia <em>alkaen</em>-hintoja. Lopullinen hinta määräytyy kohteen koon, sijainnin ja vaativuuden mukaan.</li>
            <li>Hintoihin sisältyvät siivousvälineet ja -aineet, ellei toisin sovita.</li>
            <li>Yksityisasiakkaille lasku lähetetään työn jälkeen. Yritysasiakkaille laskutus 7–14 pv netto, ellei toisin sovita.</li>
            <li>Viivästyskorko ja muistutusmaksu peritään lain mukaisesti (muistutusmaksu 5 €).</li>
            <li>Mahdolliset matkakulut veloitetaan erikseen kaupunkialueen ulkopuolella.</li>
          </ul>
        </section>

        <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Peruutus- ja muutosehdot</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Peruutus maksutta 24 h ennen varattua aikaa.</li>
            <li>Alle 24 h peruutus: 50 % varatun ajan hinnasta.</li>
            <li>Alle 6 h peruutus tai asiakkaan poissaolo: 100 % palvelun hinnasta.</li>
            <li>Palveluntarjoajalla oikeus siirtää tai peruuttaa palvelu esimerkiksi sairaustapauksissa.</li>
          </ul>
        </section>

        <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Vastuut ja vahingot</h2>
          <p className="text-gray-700">
            Palveluntarjoajalla on vastuuvakuutus, joka kattaa työn aikana aiheutuneet vahingot. Asiakkaan tulee ilmoittaa vahingosta 48 tunnin kuluessa palvelun suorittamisesta. Palveluntarjoaja ei vastaa normaalista kulumisesta tai ennestään huonokuntoisista esineistä.
          </p>
        </section>

        <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Asiakkaan velvollisuudet</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Mahdollistaa pääsyn tiloihin sovittuna aikana.</li>
            <li>Ilmoittaa lemmikeistä ja erityisohjeista etukäteen.</li>
            <li>Suojata arvotavarat ja varmistaa, ettei vaarallisia aineita ole esillä.</li>
          </ul>
        </section>

        <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Reklamaatiot ja laatutakuu</h2>
          <p className="text-gray-700">
            Reklamaatio tulee tehdä 24–48 h kuluessa. Laatuvirheet korjataan maksutta mahdollisimman pian korjauksen mahdollistamiseksi.
          </p>
        </section>

        <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Tietosuoja (GDPR)</h2>
          <p className="text-gray-700">
            Asiakkaan henkilötietoja käsitellään vain sopimuksen täytäntöönpanoa, laskutusta ja asiakasviestintää varten. Lisätiedot löytyvät erillisestä tietosuojaselosteesta.
          </p>
        </section>

        <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Sopimuksen päättäminen</h2>
          <p className="text-gray-700">
            Toistuvat sopimukset irtisanotaan 30 päivän irtisanomisajalla. Palveluntarjoaja voi lopettaa sopimuksen välittömästi, jos asiakas laiminlyö maksut tai kohde on vaarallinen.
          </p>
        </section>

        <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Hinnanmuutokset</h2>
          <p className="text-gray-700">
            Muutoksista ilmoitetaan asiakkaalle vähintään 30 päivää etukäteen.
          </p>
        </section>

        <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Sovellettava laki ja riitojen ratkaisu</h2>
          <p className="text-gray-700">
            Näihin ehtoihin sovelletaan Suomen lakia. Riitatilanteissa osapuolet pyrkivät ensisijaisesti neuvottelemaan; tarvittaessa asia käsitellään Palveluntarjoajan kotipaikan käräjäoikeudessa.
          </p>
        </section>

        <footer className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-600">
          <p className="mb-2">
            Viimeksi päivitetty: 1.12.2025 • Siivousote / Y-tunnus 2166541–5 • <a href="https://www.siivousote.fi" className="text-[#0ea5a4] hover:underline">www.siivousote.fi</a>
          </p>
          <p>
            Suosittelemme juridista tarkastusta ennen virallista käyttöönottoa.
          </p>
        </footer>
          </>
        ) : (
          <>
            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. General</h2>
              <p className="text-gray-700">
                These terms of service apply to cleaning and maintenance services provided by Siivousote , as well as bookings made through the website and application. The customer accepts the terms when placing an order.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Ordering Service</h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Service is ordered through the website, application, phone, or email.</li>
                <li>Booking is confirmed when the Service Provider sends a confirmation message.</li>
                <li>Minimum charge is 2 hours, unless otherwise agreed.</li>
                <li>Service can be one-time or recurring (contract customers).</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Service Content</h2>
              <p className="text-gray-700 mb-3">
                <strong>Basic cleaning</strong> includes vacuuming, floor cleaning, surface wiping, bathroom and kitchen cleaning, trash removal, and general organization according to customer instructions.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Not included in service:</strong> window cleaning, construction and renovation cleaning, biohazard cleaning, demanding specialized cleaning, and moving items over 20 kg, unless otherwise agreed.
              </p>
              <p className="text-gray-700">
                <strong>Additional services</strong> such as window cleaning, move-out cleaning, and post-construction cleaning are ordered separately and priced case-by-case.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Pricing and Payment Terms</h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Prices are hourly <em>starting from</em> prices. Final price is determined by property size, location, and complexity.</li>
                <li>Prices include cleaning equipment and supplies, unless otherwise agreed.</li>
                <li>Private customers receive invoice after service. Business customers: invoice 7–14 days net, unless otherwise agreed.</li>
                <li>Late payment interest and reminder fee charged according to law (reminder fee €5).</li>
                <li>Possible travel costs charged separately outside city area.</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Cancellation and Change Terms</h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Free cancellation 24 hours before scheduled time.</li>
                <li>Less than 24 hours cancellation: 50% of scheduled time price.</li>
                <li>Less than 6 hours cancellation or customer absence: 100% of service price.</li>
                <li>Service Provider has the right to reschedule or cancel service in cases such as illness.</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Liability and Damages</h2>
              <p className="text-gray-700">
                Service Provider has liability insurance covering damages during work. Customer must report damages within 48 hours of service completion. Service Provider is not liable for normal wear and tear or pre-existing poor condition items.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Customer Obligations</h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Enable access to premises at agreed time.</li>
                <li>Inform about pets and special instructions in advance.</li>
                <li>Secure valuables and ensure no hazardous materials are exposed.</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Complaints and Quality Guarantee</h2>
              <p className="text-gray-700">
                Complaints must be made within 24–48 hours. Quality defects are corrected free of charge as soon as possible to enable correction.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Data Protection (GDPR)</h2>
              <p className="text-gray-700">
                Customer personal data is processed only for contract fulfillment, invoicing, and customer communication. More information can be found in separate privacy policy.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contract Termination</h2>
              <p className="text-gray-700">
                Recurring contracts are terminated with 30 days&apos; notice. Service Provider may terminate contract immediately if customer fails to pay or property is dangerous.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Price Changes</h2>
              <p className="text-gray-700">
                Changes are communicated to customer at least 30 days in advance.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Applicable Law and Dispute Resolution</h2>
              <p className="text-gray-700">
                These terms are governed by Finnish law. In disputes, parties primarily aim to negotiate; if necessary, matter is handled in Service Provider&apos;s home district court.
              </p>
            </section>

            <footer className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-600">
              <p className="mb-2">
                Last updated: 1.12.2025 • Siivousote / Business ID 2166541–5 • <a href="https://www.siivousote.fi" className="text-[#0ea5a4] hover:underline">www.siivousote.fi</a>
              </p>
              <p>
                We recommend legal review before official implementation.
              </p>
            </footer>
          </>
        )}
      </div>
    </div>
  );
}
