# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Siivousote is a bilingual (Finnish/English) B2B cleaning service website built with Next.js 15, React 19, and TypeScript. The site targets businesses in the Capital Region and Kanta-Häme area of Finland.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production (uses Turbopack)
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

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

The project includes a Nodemailer-based email system (`src/app/lib/email.ts`):
- Uses SMTP configuration from environment variables
- Designed for contact form submissions
- Requires `.env.local` with: `SMTP_USER`, `SMTP_PASS`, `SMTP_SECURE`, `SMTP_FROM`
- Email service: `posti.zoner.fi` on port 465

### Pages Structure

1. **Home** (`/`) - Hero, services overview, benefits
2. **About** (`/about`) - Company story, values, statistics
3. **Pricing** (`/pricing`) - Service packages, comparison, FAQ
4. **Contact** (`/contact`) - Contact info, map integration planned
5. **Order** (`/order`) - Quote request form

## Technology Stack

- **Framework:** Next.js 15 (App Router with Turbopack)
- **React:** 19.1.0 (with new compiler runtime)
- **TypeScript:** 5.x with strict mode enabled
- **Styling:** Tailwind CSS 4.x with PostCSS
- **Icons:** Lucide React
- **Email:** Nodemailer 7.x
- **Package Manager:** npm 11.4.2

## Key Design Patterns

- **Client Components:** All interactive components (Header, Footer, LanguageContext) use `'use client'` directive
- **Server Components:** Page components are server components by default
- **Type Safety:** Full TypeScript coverage with strict compiler options
- **Responsive First:** Mobile-first approach with Tailwind responsive utilities
