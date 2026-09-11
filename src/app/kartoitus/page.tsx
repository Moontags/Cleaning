"use client";

import { useState } from "react";
import { Printer } from "lucide-react";
import { Logo } from "@/components/Logo";
import "./kartoitus.css";

/* Sisäinen kartoituslomake asiakaskäynneille. Sivua ei linkitetä navigaatiosta
   eikä lomaketta lähetetä minnekään — tila on paikallinen ja tuloste on lopputulos. */

const BASIC_FIELDS = [
  { name: "customer", label: "Asiakas / yritys" },
  { name: "address", label: "Osoite" },
  { name: "contactPerson", label: "Yhteyshenkilö" },
  { name: "contactInfo", label: "Puhelin / sähköposti" },
  { name: "visitDate", label: "Käynnin päivämäärä" },
  { name: "surveyor", label: "Kartoituksen tekijä" },
] as const;

const AREA_FIELDS = [
  { name: "areaTotal", label: "Kokonais-m²" },
  { name: "areaOffice", label: "Toimistotila m²" },
  { name: "areaHall", label: "Halli / varastotila m²" },
  { name: "wcCount", label: "WC-tilat, lkm" },
  { name: "kitchenCount", label: "Keittiö / taukotila, lkm" },
] as const;

const SCHEDULE_FIELDS = [
  { name: "preferredTime", label: "Toivottu siivousaika" },
  { name: "startDate", label: "Toivottu aloitusajankohta" },
] as const;

const PRACTICAL_FIELDS = [
  { name: "access", label: "Avaimet / kulkuoikeus / hälytinkoodi" },
  { name: "currentService", label: "Nykyinen siivouspalvelu / koetut ongelmat" },
  { name: "timeEstimate", label: "Arvio työajasta / kerta" },
] as const;

const TASKS = [
  "Imurointi",
  "Lattioiden moppaus",
  "Pölyjen pyyhintä",
  "WC:n perusteellinen puhdistus",
  "Keittiö / taukotila",
  "Roskien tyhjennys",
  "Ovet ja lasipinnat",
  "Peilit",
  "Kosketuspinnat",
  "Portaat",
  "Sosiaalitilat / pukuhuoneet",
  "Hallin / tuotannon lattiat",
];

const FEATURES = [
  "Paljon pölyä / muuta likaa",
  "Öljyä, rasvaa tai vaikeaa likaa",
  "Tarvitaan koneellista lattianpesua",
  "Korkeita tai vaikeasti saavutettavia pintoja",
  "Sähkö- tai turvallisuusriskejä tiloissa",
  "Tarvitaan turvakenkiä / suojavaatteita / perehdytys",
];

const FREQUENCIES = ["1", "2", "3", "5"];

const SUPPLY_OPTIONS = [
  "Sisältyy hintaan",
  "Laskutus kulutuksen mukaan",
  "Asiakas hankkii itse",
];

const PRIORITIES = [
  "Hinta",
  "Siivouksen laatu",
  "Joustavuus",
  "Sama henkilö hoitaa kohteen",
];

const YES_NO = ["Kyllä", "Ei"];

function FieldRow({
  name,
  label,
  value,
  onChange,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const id = `k-${name}`;

  return (
    <div className="k-row">
      <label className="k-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type="text"
        className="k-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function GroupRow({
  name,
  label,
  children,
}: {
  name: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="k-row" role="group" aria-labelledby={`k-${name}-label`}>
      <span className="k-label" id={`k-${name}-label`}>
        {label}
      </span>
      <div className="k-opts">{children}</div>
    </div>
  );
}

function CheckOption({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="k-check">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span>{label}</span>
    </label>
  );
}

function RadioOption({
  name,
  label,
  value,
  selected,
  onChange,
}: {
  name: string;
  label: string;
  value: string;
  selected: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="k-check">
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        onChange={() => onChange(value)}
      />
      <span>{label}</span>
    </label>
  );
}

export default function KartoitusPage() {
  const [fields, setFields] = useState<Record<string, string>>({});
  const [floorPlan, setFloorPlan] = useState("");
  const [frequency, setFrequency] = useState("");
  const [frequencyOther, setFrequencyOther] = useState("");
  const [staffPresent, setStaffPresent] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [supplies, setSupplies] = useState("");
  const [priority, setPriority] = useState("");

  const setField = (name: string, value: string) =>
    setFields((prev) => ({ ...prev, [name]: value }));

  const toggle = (
    value: string,
    selected: string[],
    setSelected: (next: string[]) => void
  ) =>
    setSelected(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value]
    );

  const textRows = (
    group: ReadonlyArray<{ readonly name: string; readonly label: string }>
  ) =>
    group.map((field) => (
      <FieldRow
        key={field.name}
        name={field.name}
        label={field.label}
        value={fields[field.name] ?? ""}
        onChange={(value) => setField(field.name, value)}
      />
    ));

  return (
    <div className="k-page">
      {/* Työkalupalkki — ei tulostu */}
      <div className="k-toolbar k-noprint">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Kartoituslomake</h2>
          <p className="k-toolbar-hint">
            Täytä kohdekäynnillä ja tulosta tarvittaessa asiakkaalle. Tietoja ei
            tallenneta.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="btn-primary k-print-btn"
        >
          <Printer className="h-5 w-5" />
          <span>Tulosta</span>
        </button>
      </div>

      <form className="k-doc" onSubmit={(e) => e.preventDefault()}>
        <div className="k-doc-head">
          <div className="k-brand">
            <Logo color="#655c4e" className="k-logo" />
            <span className="k-brand-name">SIIVOUSOTE</span>
          </div>
          <h1 className="k-doc-title">
            Kartoituslomake — tarjouspyynnön kohdekäynti
          </h1>
        </div>

        {/* 1. Kohteen perustiedot */}
        <section className="k-section">
          <h3 className="k-section-title">Kohteen perustiedot</h3>
          <div className="k-rows">{textRows(BASIC_FIELDS)}</div>
        </section>

        {/* 2. Tilat ja pinta-ala */}
        <section className="k-section">
          <h3 className="k-section-title">Tilat ja pinta-ala</h3>
          <div className="k-rows">
            {textRows(AREA_FIELDS)}
            <GroupRow name="floorPlan" label="Onko pohjapiirros saatavilla?">
              {YES_NO.map((option) => (
                <RadioOption
                  key={option}
                  name="floorPlan"
                  label={option}
                  value={option}
                  selected={floorPlan}
                  onChange={setFloorPlan}
                />
              ))}
            </GroupRow>
          </div>
        </section>

        {/* 3. Siivouksen tiheys ja ajankohta */}
        <section className="k-section">
          <h3 className="k-section-title">Siivouksen tiheys ja ajankohta</h3>
          <div className="k-rows">
            <GroupRow name="frequency" label="Siivouskertoja / viikko">
              {FREQUENCIES.map((option) => (
                <RadioOption
                  key={option}
                  name="frequency"
                  label={option}
                  value={option}
                  selected={frequency}
                  onChange={setFrequency}
                />
              ))}
              <label className="k-check">
                <input
                  type="radio"
                  name="frequency"
                  value="Muu"
                  checked={frequency === "Muu"}
                  onChange={() => setFrequency("Muu")}
                />
                <span>Muu:</span>
                <input
                  type="text"
                  className="k-input k-input--inline"
                  aria-label="Muu siivoustiheys"
                  value={frequencyOther}
                  onChange={(e) => setFrequencyOther(e.target.value)}
                />
              </label>
            </GroupRow>
            {textRows(SCHEDULE_FIELDS)}
            <GroupRow
              name="staffPresent"
              label="Pitääkö tapahtua henkilöstön ollessa paikalla?"
            >
              {YES_NO.map((option) => (
                <RadioOption
                  key={option}
                  name="staffPresent"
                  label={option}
                  value={option}
                  selected={staffPresent}
                  onChange={setStaffPresent}
                />
              ))}
            </GroupRow>
          </div>
        </section>

        {/* 4. Siivottavat tehtävät */}
        <section className="k-section">
          <h3 className="k-section-title">Siivottavat tehtävät</h3>
          <div className="k-grid2">
            {TASKS.map((task) => (
              <CheckOption
                key={task}
                label={task}
                checked={tasks.includes(task)}
                onChange={() => toggle(task, tasks, setTasks)}
              />
            ))}
          </div>
        </section>

        {/* 5. Erityispiirteet */}
        <section className="k-section">
          <h3 className="k-section-title">
            Erityispiirteet (teollisuus- / hallitilat)
          </h3>
          <div className="k-grid2">
            {FEATURES.map((feature) => (
              <CheckOption
                key={feature}
                label={feature}
                checked={features.includes(feature)}
                onChange={() => toggle(feature, features, setFeatures)}
              />
            ))}
          </div>
        </section>

        {/* 6. Kulutustarvikkeet */}
        <section className="k-section">
          <h3 className="k-section-title">Kulutustarvikkeet</h3>
          <div className="k-rows">
            <GroupRow
              name="supplies"
              label="WC-paperit / käsipyyhkeet / käsisaippua / roskapussit"
            >
              {SUPPLY_OPTIONS.map((option) => (
                <RadioOption
                  key={option}
                  name="supplies"
                  label={option}
                  value={option}
                  selected={supplies}
                  onChange={setSupplies}
                />
              ))}
            </GroupRow>
            <FieldRow
              name="suppliesNotes"
              label="Muut huomiot tarvikkeista"
              value={fields.suppliesNotes ?? ""}
              onChange={(value) => setField("suppliesNotes", value)}
            />
          </div>
        </section>

        {/* 7. Käytännön asiat ja nykytilanne */}
        <section className="k-section">
          <h3 className="k-section-title">Käytännön asiat ja nykytilanne</h3>
          <div className="k-rows">{textRows(PRACTICAL_FIELDS)}</div>
        </section>

        {/* 8. Loppukysymys */}
        <section className="k-section">
          <p className="k-question" id="k-priority-label">
            Mikä teille on tärkeintä siivouspalvelussa?
          </p>
          <div className="k-opts" role="group" aria-labelledby="k-priority-label">
            {PRIORITIES.map((option) => (
              <RadioOption
                key={option}
                name="priority"
                label={option}
                value={option}
                selected={priority}
                onChange={setPriority}
              />
            ))}
          </div>
        </section>

        <p className="k-print-foot">
          Siivousote · Petsamonkatu 27 as. 6, 11120 Riihimäki · info@siivousote.fi
          · 040 218 3270
        </p>
      </form>
    </div>
  );
}
