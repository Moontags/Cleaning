"use client";

import Link from "next/link";
import React from "react";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface CardProps {
  icon?: IconType;
  title: string;
  description?: string;
  priceFrom?: string | number;
  priceUnit?: string;
  features?: string[];
  ctaText?: string;
  ctaHref?: string;
}

export default function Card({ icon: Icon, title, description, priceFrom, priceUnit, features = [], ctaText, ctaHref = "/order" }: CardProps) {
  return (
    <article className="group relative bg-[#fbf8f2] border border-[#e7ded0] rounded-xl overflow-hidden flex flex-col transform hover:-translate-y-1 hover:bg-[#f3eee5] hover:border-[#d5c9b6] transition-all duration-200">
      <div className="relative z-10 flex flex-col flex-grow p-6">
        {Icon && (
          <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 border border-white/20 bg-white/10 text-[#36302a]" style={{ marginBottom: '0.75rem' }}>
            <Icon className="h-6 w-6" />
          </div>
        )}

        <h3 className="text-xl font-semibold text-[#36302a]" style={{ marginBottom: '0.5rem' }}>
          {title}
        </h3>

        {description && <p className="text-gray-700 leading-relaxed text-sm" style={{ marginBottom: '1rem' }}>{description}</p>}

        {(priceFrom || priceUnit) && (
          <div style={{ marginBottom: '1rem' }}>
            <div className="flex items-baseline">
              <span className="text-3xl md:text-4xl font-bold text-[#36302a]">{priceFrom}</span>
              {priceUnit && <span className="text-gray-600 font-medium" style={{ marginLeft: '0.5rem' }}>{priceUnit}</span>}
            </div>
          </div>
        )}

        {features.length > 0 && (
          <ul className="flex-grow" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
            {features.map((f, i) => (
              <li key={i} className="flex items-start">
                <div className="bg-gray-50 rounded-full p-1 flex-shrink-0" style={{ marginRight: '0.75rem' }}>
                  <svg className="h-4 w-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-gray-700 text-sm leading-tight">{f}</span>
              </li>
            ))}
          </ul>
        )}

        {ctaText && (
          <div className="mt-auto">
            <Link href={ctaHref} className="inline-block bg-gray-700 text-white rounded-full border border-gray-700 hover:bg-gray-800 hover:border-gray-800 transition-colors duration-200 font-semibold text-center" style={{ padding: '0.5rem 1rem' }}>
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
