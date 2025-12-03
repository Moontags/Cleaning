"use client";

import "vanilla-cookieconsent/dist/cookieconsent.css";
import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";

import translationsEn from "./translations/en.json";
import translationsFi from "./translations/fi.json";

export const ConsentDialog = () => {
  useEffect(() => {
    CookieConsent.run({
      categories: {
        necessary: {
          enabled: true, // this category is enabled by default
          readOnly: true, // this category cannot be disabled
        },
        analytics: {
          enabled: true,
        },
      },
      onConsent: ({ cookie }) => {
        if (cookie.categories.includes("analytics")) {
          // Enable Google Analytics when user accepts analytics cookies
          window.dispatchEvent(new Event("consent-granted-analytics"));
        }
      },
      onChange: ({ cookie, changedCategories }) => {
        if (changedCategories.includes("analytics")) {
          if (cookie.categories.includes("analytics")) {
            window.dispatchEvent(new Event("consent-granted-analytics"));
          } else {
            window.dispatchEvent(new Event("consent-denied-analytics"));
          }
        }
      },
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom right",
          flipButtons: false,
          equalWeightButtons: true,
        },
        preferencesModal: {
          layout: "box",
          // position: 'left right',
          flipButtons: false,
          equalWeightButtons: true,
        },
      },

      language: {
        default: "en",
        autoDetect: "document",
        translations: {
          en: translationsEn,
          fi: translationsFi,
        },
      },
    });
  }, []);

  return null;
};
