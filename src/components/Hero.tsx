"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WaveBottom from "@/components/WaveBottom";

interface HeroProps {
  variant: "main" | "service" | "simple";
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePriority?: boolean;
  ctaButton?: {
    text: string;
    href?: string;
    icon?: React.ComponentType<{ className?: string }>;
  };
  maxWidth?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function Hero({
  variant,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imagePriority,
  ctaButton,
  maxWidth,
  titleClassName,
  subtitleClassName,
}: HeroProps) {
  const config = {
    main: {
      background: "bg-gradient-to-br from-[#003580] via-[#0047ab] to-[#0056d6]",
      showWave: true,
      padding: "section-padding",
      alignment: "text-center",
      containerMaxWidth: maxWidth || "64rem",
      titleClass: `text-4xl md:text-5xl lg:text-7xl font-bold animate-fade-in ${
        titleClassName || ""
      }`,
      subtitleClass: `text-xl md:text-2xl text-blue-50 leading-relaxed ${
        subtitleClassName || ""
      }`,
      showAnimation: true,
      decorativeCircles: {
        top: "top-20 left-10 w-72 h-72",
        bottom: "bottom-20 right-10 w-96 h-96",
      },
      // MUOKKAUS 1: Matalampi korkeus mobiilissa (24rem)
      minHeightClass: "min-h-[20rem] md:min-h-[var(--hero-height)]",
      // MUOKKAUS 2: Lisätty luokka sisällön kohdistamiseen alas vain mobiilissa
      contentPositionClass: "flex flex-col justify-end md:justify-center",
    },
    service: {
      background: "bg-gradient-to-br from-[#003580] via-[#0047ab] to-[#003580]",
      showWave: false,
      padding: "",
      alignment: "",
      containerMaxWidth: maxWidth || "3xl",
      titleClass: `text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
        titleClassName || ""
      }`,
      subtitleClass: `text-base md:text-lg text-blue-100 leading-relaxed ${
        subtitleClassName || ""
      }`,
      showAnimation: false,
      decorativeCircles: {
        top: "top-20 left-20 w-96 h-96",
        bottom: "bottom-20 right-20 w-80 h-80",
      },
      paddingClass: "pt-12 pb-12 md:pt-24 md:pb-24",
    },
    simple: {
      background: "bg-gradient-to-br from-[#003580] to-[#0047ab]",
      showWave: false,
      padding: "section-padding",
      alignment: "text-center",
      containerMaxWidth: "max-w-4xl",
      titleClass: `text-4xl md:text-5xl font-bold ${titleClassName || ""}`,
      subtitleClass: `text-xl md:text-2xl text-gray-100 leading-relaxed ${
        subtitleClassName || ""
      }`,
      showAnimation: false,
      decorativeCircles: null,
    },
  }[variant];

  return (
    <>
      <section
        className={`relative ${
          variant === "main" ? config.minHeightClass : ""
        } ${config.background} text-white overflow-hidden`}
      >
        {/** Render background image if provided */}
        {/** Image is placed before decorative circles so overlay and circles remain visible */}
        {/** Use a very small SVG blurDataURL fallback when placeholder not provided */}
        {imageSrc && (
          <>
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-cover object-center"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI3Ij48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2ZlM2ZmIi8+PC9zdmc+"
              priority={imagePriority}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-primary/80 via-black/40 to-primary/80" />
          </>
        )}
        {config.decorativeCircles && (
          <div className="absolute inset-0 opacity-10">
            <div
              className={`absolute ${config.decorativeCircles.top} bg-white rounded-full blur-3xl`}
            ></div>
            <div
              className={`absolute ${config.decorativeCircles.bottom} bg-blue-300 rounded-full blur-3xl`}
            ></div>
          </div>
        )}

        <div
          // KORJAUS TÄHÄN: Lisätty flex-säiliö ja pystysuunnan kohdistus
          className={`section-container ${config.padding} ${
            variant === "service" ? config.paddingClass : ""
          } relative z-10 h-full ${
            variant === "main" ? config.contentPositionClass : ""
          }`}
        >
          <div
            className={config.alignment}
            style={
              variant === "main"
                ? { maxWidth: config.containerMaxWidth, margin: "0 auto" }
                : undefined
            }
          >
            {variant === "service" && (
              <div className={`max-w-${config.containerMaxWidth}`}>
                <h1
                  className={config.titleClass}
                  style={{ marginBottom: "1.5rem" }}
                >
                  {title}
                </h1>
                <p
                  className={config.subtitleClass}
                  style={{ marginBottom: "2rem" }}
                >
                  {subtitle}
                </p>
                {ctaButton && (
                  <Link
                    href={ctaButton.href || "/order"}
                    className="inline-flex items-center gap-2 bg-white text-[#003580] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:gap-3"
                  >
                    {ctaButton.text}
                    {ctaButton.icon ? (
                      <ctaButton.icon className="w-5 h-5" />
                    ) : (
                      <ArrowRight className="w-5 h-5" />
                    )}
                  </Link>
                )}
              </div>
            )}

            {variant !== "service" && (
              <>
                <h1
                  className={config.titleClass}
                  style={{ marginBottom: "1.5rem" }}
                >
                  {title}
                </h1>
                <p className={config.subtitleClass}>{subtitle}</p>
              </>
            )}
          </div>
        </div>

        {config.showWave && <WaveBottom />}
      </section>

      {config.showAnimation && (
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
        `}</style>
      )}
    </>
  );
}
