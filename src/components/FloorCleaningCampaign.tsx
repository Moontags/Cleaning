"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ClipboardList, Droplets, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const quoteHref = "/order?service=machine_floor_cleaning";

export function FloorCleaningHero() {
  const { t } = useLanguage();
  return (
    <section className="floor-campaign-hero" aria-labelledby="floor-campaign-title">
      <div className="floor-campaign-hero-background" aria-hidden="true">
        <Image src="/images/kirkas-kaytava.png" alt="" fill priority sizes="100vw" className="floor-campaign-cover" />
      </div>
      <div className="section-container floor-campaign-hero-grid">
        <div className="floor-campaign-copy">
          <p className="floor-campaign-eyebrow"><span />{t("campaign.hero.eyebrow")}</p>
          <h1 id="floor-campaign-title">{t("campaign.hero.title")}<br /><span>{t("campaign.hero.titleAccent")}</span></h1>
          <p className="floor-campaign-lead">{t("campaign.hero.description")}</p>
          <div className="floor-campaign-actions">
            <Link href={quoteHref} className="btn-primary floor-campaign-button">{t("campaign.quote")}<ArrowUpRight size={19} aria-hidden="true" /></Link>
            <a href="#tyon-jalki" className="floor-campaign-text-link">{t("campaign.seeResults")}<ArrowDown size={17} aria-hidden="true" /></a>
          </div>
          <div className="floor-campaign-price">
            <strong>{t("pricing.floor.from")}</strong>
            <span>{t("pricing.floor.consumer")} · {t("pricing.floor.minimum")}</span>
          </div>
          <p className="floor-campaign-location"><MapPin size={16} aria-hidden="true" />{t("campaign.region")}</p>
        </div>
        <div className="floor-campaign-hero-caption">
          <strong>{t("campaign.hero.caption")}</strong>
        </div>
      </div>
    </section>
  );
}

export function FloorCleaningResults() {
  const { t } = useLanguage();
  return (
    <section id="tyon-jalki" className="section-container floor-campaign-section" aria-labelledby="floor-results-title">
      <div className="floor-campaign-section-heading">
        <div><p className="floor-campaign-eyebrow">{t("campaign.results.eyebrow")}</p><h2 id="floor-results-title">{t("campaign.results.title")}</h2></div>
        <p>{t("campaign.results.description")}</p>
      </div>
      <div className="floor-campaign-comparison">
        <figure>
          <div className="floor-campaign-comparison-image"><Image src="/images/konepesu-ennen.jpeg" alt={t("campaign.results.beforeAlt")} fill sizes="(max-width: 767px) 100vw, 50vw" className="floor-campaign-cover" /><span className="floor-campaign-image-tag">{t("campaign.results.before")}</span></div>
          <figcaption>{t("campaign.results.beforeCaption")}</figcaption>
        </figure>
        <figure>
          <div className="floor-campaign-comparison-image"><Image src="/images/konepesu-jalkeen.png" alt={t("campaign.results.afterAlt")} fill sizes="(max-width: 767px) 100vw, 50vw" className="floor-campaign-cover" /><span className="floor-campaign-image-tag floor-campaign-image-tag-after">{t("campaign.results.after")}</span></div>
          <figcaption>{t("campaign.results.afterCaption")}</figcaption>
        </figure>
      </div>
      <div
        id="kaytava-vertailu"
        className="floor-campaign-comparison"
        style={{ marginTop: "2.5rem" }}
      >
        {(["before", "after"] as const).map((stage) => (
          <figure key={stage}>
            <div
              className="floor-campaign-comparison-image [--corridor-ratio:9/20] md:[--corridor-ratio:4/3]"
              style={{ aspectRatio: "var(--corridor-ratio)" }}
            >
              <Image
                src={stage === "before" ? "/images/kaytava-ennen.jpg" : "/images/kaytava-jalkeen.jpg"}
                alt={t(`campaign.results.corridor.${stage}Alt`)}
                fill
                sizes="(max-width: 767px) 45vw, 50vw"
                className={`floor-campaign-cover ${stage === "after" ? "[--corridor-position:65%] md:[--corridor-position:100%]" : "[--corridor-position:65%]"}`}
                style={{ objectPosition: "center var(--corridor-position)" }}
              />
              <span className={`floor-campaign-image-tag ${stage === "after" ? "floor-campaign-image-tag-after" : ""}`}>
                {t(`campaign.results.${stage}`)}
              </span>
            </div>
            <figcaption>{t(`campaign.results.corridor.${stage}Caption`)}</figcaption>
          </figure>
        ))}
      </div>
      <div className="floor-campaign-results-footer"><p>{t("campaign.results.note")}</p><Link href={quoteHref} className="floor-campaign-text-link">{t("campaign.results.cta")}<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
    </section>
  );
}

export function FloorCleaningProcess() {
  const { t } = useLanguage();
  const steps = [{ key: "assessment", icon: ClipboardList }, { key: "wash", icon: Droplets }, { key: "finish", icon: Sparkles }];
  return (
    <section className="floor-campaign-process" aria-labelledby="floor-process-title">
      <div className="section-container floor-campaign-process-inner">
        <div className="floor-campaign-process-heading"><p className="floor-campaign-eyebrow">{t("campaign.process.eyebrow")}</p><h2 id="floor-process-title">{t("campaign.process.title")}</h2><p>{t("campaign.process.description")}</p><Link href="/services/machine-floor-cleaning" className="floor-campaign-text-link">{t("home.floor.explore")}<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
        <ol className="floor-campaign-steps">{steps.map(({key, icon: Icon}, index) => <li key={key}><span className="floor-campaign-step-icon"><Icon size={22} aria-hidden="true" /></span><div><span className="floor-campaign-step-number">0{index + 1}</span><h3>{t(`campaign.process.${key}.title`)}</h3><p>{t(`campaign.process.${key}.description`)}</p></div></li>)}</ol>
      </div>
    </section>
  );
}

export function FloorCleaningGallery() {
  const { t } = useLanguage();
  const photos = [{src:"/images/siivous-tyovaihe.jpeg",key:"preparation"}, {src:"/images/puhdas-lattia.jpeg",key:"finish"}, {src:"/images/toimiston-lattia.png",key:"office"}];
  return (
    <section className="section-container floor-campaign-section floor-campaign-gallery" aria-labelledby="floor-gallery-title">
      <div className="floor-campaign-section-heading"><div><p className="floor-campaign-eyebrow">{t("campaign.gallery.eyebrow")}</p><h2 id="floor-gallery-title">{t("campaign.gallery.title")}</h2></div><p>{t("campaign.gallery.description")}</p></div>
      <div className="floor-campaign-gallery-grid">{photos.map(({src,key})=><figure key={key}><div className="floor-campaign-gallery-image"><Image src={src} alt={t(`campaign.gallery.${key}.alt`)} fill sizes={key === "preparation" ? "(max-width: 767px) 100vw, 55vw" : "(max-width: 767px) 100vw, 45vw"} className="floor-campaign-cover" /></div><figcaption><span>{t(`campaign.gallery.${key}.label`)}</span><h3>{t(`campaign.gallery.${key}.title`)}</h3></figcaption></figure>)}</div>
    </section>
  );
}
