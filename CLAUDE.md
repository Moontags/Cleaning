# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Siivousote is a bilingual (Finnish/English) B2B cleaning service website built with Next.js 15, React 19, and TypeScript. The site targets businesses in the Capital Region and Kanta-Häme area of Finland.

## Development Commands

```bash
# Start development server with Turbopack
pnpm dev

# Build for production (uses Turbopack)
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

**Important:** This project uses **pnpm** as the package manager (version 10.20.0). The `package-lock.json` has been removed in favor of `pnpm-lock.yaml`. Always use `pnpm` commands, not `npm`.

## Architecture

### Internationalization System

The application uses a custom React Context-based i18n system (`src/contexts/LanguageContext.tsx`):

- All translations are stored in a single context file as nested objects
- Supports Finnish (`fi`) and English (`en`)
- Translation keys use dot notation (e.g., `'home.hero.title'`)
- The `useLanguage()` hook provides: `language`, `setLanguage()`, and `t()` function
- Language state is client-side only (uses `'use client'` directive)

**When adding new text:**
1. Add translation keys to both `fi` and `en` objects in `LanguageContext.tsx`
2. Use the `t()` function to render translations: `{t('your.key.here')}`

### Layout Structure

- Root layout wraps all pages with `LanguageProvider` → `Header` → content → `Footer`
- Header is sticky with backdrop blur and includes language switcher
- All page components live in `src/app/[route]/page.tsx` following Next.js App Router conventions
- Global styles defined in `src/app/globals.css`

### Styling Approach

- **Tailwind CSS** with custom configuration for the Finnish blue color scheme
- Custom colors: `primary` (`#003580`), `primary-dark` (`#002b66`), `primary-light` (`#0047ab`)
- Mix of Tailwind classes and inline styles for consistency
- Responsive breakpoints: mobile (<640px), tablet (640px-1024px), desktop (>1024px)

### Path Aliases

Uses `@/*` for `./src/*` imports (configured in `tsconfig.json`):
```typescript
import Header from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
```

### Email Integration

The project includes a Nodemailer-based email system for contact form submissions:

- **Email library:** `src/app/lib/email.ts` - contains `sendContactEmail()` function
- **API endpoint:** `src/app/api/contact/route.ts` - POST handler for form submissions
- **SMTP config:** Hardcoded in email.ts (host: `posti.zoner.fi`, port: 465, secure: true)
- **Credentials:** Currently hardcoded in the file (should be moved to environment variables)
- **Form validation:** API validates required fields and email format before sending
- **Email format:** Sends bilingual (FI/EN) HTML and plain text emails to `info@siivousote.fi`

**Security note:** Email credentials are currently hardcoded and should be moved to environment variables.

### Pages Structure

1. **Home** (`/`) - Hero, services overview, benefits
2. **About** (`/about`) - Company story, values, statistics
3. **Pricing** (`/pricing`) - Service packages, comparison, FAQ
4. **Contact** (`/contact`) - Contact info, map integration planned
5. **Order** (`/order`) - Quote request form

## Technology Stack

- **Framework:** Next.js 15.5.4 (App Router with Turbopack)
- **React:** 19.1.0 (with new compiler runtime)
- **TypeScript:** 5.x with strict mode enabled
- **Styling:** Tailwind CSS 4.1.14 with PostCSS
- **Icons:** Lucide React
- **Email:** Nodemailer 7.x
- **Analytics:** Google Analytics via @next/third-parties
- **Cookie Consent:** vanilla-cookieconsent 3.1.0
- **Package Manager:** pnpm 10.20.0

## Key Design Patterns

- **Client Components:** All interactive components (Header, Footer, LanguageContext, ConsentDialog) use `'use client'` directive
- **Server Components:** Page components are server components by default
- **Type Safety:** Full TypeScript coverage with strict compiler options
- **Responsive First:** Mobile-first approach with Tailwind responsive utilities

### Cookie Consent & Analytics

The site implements GDPR-compliant cookie consent using vanilla-cookieconsent:

- **Consent component:** `src/components/consent-dialog/ConsentDialog.tsx`
- **Analytics component:** `src/components/analytics/Analytics.tsx` - conditionally loads GA based on consent
- **Google Analytics ID:** Stored in `src/config/google.ts` (GA_ID: G-SHMNVJ096J)
- **Categories:** Necessary (always enabled, read-only) and Analytics (optional)
- **Integration:** Consent state triggers Google Analytics via custom events
- **Translations:** Bilingual consent dialog with separate translation files in `consent-dialog/translations/`
- **Events:** Dispatches `consent-granted-analytics` and `consent-denied-analytics` window events

Google Analytics is integrated via `@next/third-parties` and only loads when analytics consent is granted. The Analytics component listens to consent events and only renders the GoogleAnalytics component when enabled.

### SEO & Metadata

The root layout ([src/app/layout.tsx](src/app/layout.tsx)) includes comprehensive SEO setup:

- **Structured data:** JSON-LD schema for LocalBusiness with complete company info
- **Open Graph:** Full OG tags for social media sharing
- **Twitter Cards:** Configured for proper Twitter previews
- **Multi-language support:** Alternates and canonical URLs configured
- **Icons & favicons:** Multiple sizes and formats including SVG logo at `/public/logo.svg`
- **Logo:** Updated logo files in public directory (logo.svg and logo.png)

### Component Organization

- **Shared components:** Located in `src/components/` (Header, Footer, Card, Hero, WhyChoose, CustomQuote, WaveBottom, etc.)
- **Feature components:** Analytics and consent-dialog in subdirectories with their own dependencies
  - `analytics/` - Analytics.tsx with index.ts barrel export
  - `consent-dialog/` - ConsentDialog.tsx with bilingual translations (en.json, fi.json)
- **Context providers:** Single `LanguageContext.tsx` manages all i18n state
- **API routes:** Contact form handler at `src/app/api/contact/route.ts`
- **Configuration:** Google Analytics ID in `src/config/google.ts`

## Recent Changes (Last 5 Commits)

- **Analytics & Consent:** Added GDPR-compliant cookie consent with vanilla-cookieconsent and conditional Google Analytics loading
- **New Logo:** Updated logo files (logo.svg and logo.png) with new branding
- **Package Manager Migration:** Switched from npm to pnpm (removed package-lock.json, added pnpm-lock.yaml)
- **Favicon Cleanup:** Removed redundant favicon folder
- **Gitignore Update:** Added `Cleaning/` directory to .gitignore to exclude nested Cleaning repo
