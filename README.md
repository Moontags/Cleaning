# 🧹 Siivousote - Professional Cleaning Services Website

Responsive bilingual (Finnish/English) B2B cleaning services website built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![React](https://img.shields.io/badge/React-19.1.0-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.14-38bdf8)
![pnpm](https://img.shields.io/badge/pnpm-10.20.0-orange)

## 🌟 Features

- **Modern Design**: Clean, professional UI with Finnish blue color scheme (#003580)
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Bilingual Support**: Complete Finnish (FI) and English (EN) translations via React Context
- **TypeScript**: Full type safety throughout the application
- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Fast Performance**: Built with Next.js 15 App Router and Turbopack
- **GDPR Compliant**: Cookie consent system with vanilla-cookieconsent
- **Analytics**: Conditional Google Analytics loading based on user consent
- **Email Integration**: Contact form with Nodemailer for quote requests
- **Accessible**: WCAG compliant with proper ARIA labels

## 📋 Pages

1. **Home** (`/`) - Hero section, services overview, benefits
2. **About** (`/about`) - Company story, values, statistics
3. **Pricing** (`/pricing`) - Service packages, comparison table, FAQ
4. **Contact** (`/contact`) - Contact information, map, FAQ
5. **Order** (`/order`) - Quote request form with validation

## 🚀 Tech Stack

- **Framework**: [Next.js 15.5.4](https://nextjs.org/) (App Router with Turbopack)
- **React**: 19.1.0 with new React Compiler
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5.x (strict mode)
- **Styling**: [Tailwind CSS 4.1.14](https://tailwindcss.com/) with PostCSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: Google Analytics via [@next/third-parties](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
- **Cookie Consent**: [vanilla-cookieconsent](https://github.com/orestbida/cookieconsent) 3.1.0
- **Email**: [Nodemailer](https://nodemailer.com/) 7.x
- **Package Manager**: [pnpm](https://pnpm.io/) 10.20.0
- **Deployment**: [Vercel](https://vercel.com/)

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: 20.x or higher
- **pnpm**: 10.20.0 (install with `npm install -g pnpm@10.20.0`)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/siivousote.git
cd siivousote
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Configure environment (optional)**

If you want to use your own email service, create a `.env.local` file:
```bash
# Not required - email credentials are currently hardcoded in src/app/lib/email.ts
# SMTP_USER=your-email@example.com
# SMTP_PASS=your-password
```

4. **Run development server**
```bash
pnpm dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

### Available Commands

```bash
# Development server with Turbopack (hot reload)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

> **Note**: This project uses `pnpm` exclusively. The `package-lock.json` has been removed in favor of `pnpm-lock.yaml`. Do not use `npm` or `yarn`.

## 📁 Project Structure

```
siivousote/
├── src/
│   ├── app/
│   │   ├── about/page.tsx           # About page
│   │   ├── pricing/page.tsx         # Pricing page
│   │   ├── contact/page.tsx         # Contact page
│   │   ├── order/page.tsx           # Quote request form
│   │   ├── api/
│   │   │   └── contact/route.ts     # Contact form API endpoint
│   │   ├── lib/
│   │   │   └── email.ts             # Nodemailer email service
│   │   ├── layout.tsx               # Root layout with SEO
│   │   ├── page.tsx                 # Home page
│   │   └── globals.css              # Global styles
│   ├── components/
│   │   ├── analytics/
│   │   │   ├── Analytics.tsx        # GA component with consent
│   │   │   └── index.ts
│   │   ├── consent-dialog/
│   │   │   ├── ConsentDialog.tsx    # Cookie consent UI
│   │   │   ├── translations/
│   │   │   │   ├── en.json          # English translations
│   │   │   │   └── fi.json          # Finnish translations
│   │   │   └── index.ts
│   │   ├── Header.tsx               # Navigation header
│   │   ├── Footer.tsx               # Site footer
│   │   ├── Hero.tsx                 # Hero section
│   │   ├── Card.tsx                 # Reusable card
│   │   ├── WhyChoose.tsx            # Benefits section
│   │   ├── CustomQuote.tsx          # Quote CTA
│   │   └── WaveBottom.tsx           # Wave decoration
│   ├── contexts/
│   │   └── LanguageContext.tsx      # i18n context
│   └── config/
│       └── google.ts                # GA tracking ID
├── public/
│   ├── logo.svg                     # Company logo
│   └── logo.png                     # Company logo (PNG)
├── tailwind.config.ts               # Tailwind configuration
├── postcss.config.mjs               # PostCSS configuration
├── tsconfig.json                    # TypeScript configuration
└── pnpm-lock.yaml                   # pnpm lockfile
```

## 🎨 Design Choices

### Color Scheme
- **Primary Blue**: `#003580` (Finnish flag blue)
- **Dark Blue**: `#002b66`
- **Light Blue**: `#0047ab`
- **White**: `#ffffff`

### Typography
- System font stack for optimal performance
- Responsive font sizes using `clamp()`
- Clear hierarchy with consistent spacing

### Components
- **Header**: Sticky navigation with language switcher
- **Footer**: Four-column layout with contact info
- **Cards**: Shadow-based elevation with hover effects
- **Buttons**: Two variants (primary & secondary)
- **Forms**: Validated inputs with clear error states

## 🌍 Internationalization

The site supports Finnish (fi) and English (en) with a custom React Context-based translation system:

```typescript
// Usage example
import { useLanguage } from '@/contexts/LanguageContext';

const { t, language, setLanguage } = useLanguage();

// Render translations
<h1>{t('home.hero.title')}</h1>

// Switch language
<button onClick={() => setLanguage('en')}>English</button>
```

**Key Points:**

- All translations stored in `src/contexts/LanguageContext.tsx`
- Uses dot notation for keys (e.g., `'home.hero.title'`)
- Client-side only (requires `'use client'` directive)
- Language state managed via React Context

**Adding new translations:**

1. Add key to both `fi` and `en` objects in `LanguageContext.tsx`
2. Use `t('your.key.here')` to render the translation

## 📱 Responsive Design

Breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Path Aliases

The project uses `@/*` for `./src/*` imports (configured in `tsconfig.json`):

```typescript
import Header from '@/components/Header';
import { useLanguage } from '@/contexts/LanguageContext';
```

### Tailwind Configuration

Custom colors and spacing defined in `tailwind.config.ts`:

- Primary colors: `#003580` (default), `#002b66` (dark), `#0047ab` (light)
- Custom spacing: `18` (4.5rem), `22` (5.5rem)

### Google Analytics

Analytics ID stored in `src/config/google.ts`. To change:

```typescript
export const GA_ID = "YOUR-GA-ID";
```

### Email Configuration

Email settings are in `src/app/lib/email.ts`. Currently hardcoded (should be moved to environment variables):

```typescript
host: "posti.zoner.fi",
port: 465,
secure: true,
auth: {
  user: "noreply@siivousote.fi",
  pass: "***" // Should be in .env.local
}
```

## 📊 Performance

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Turbopack**: Fast refresh and optimized builds

## 🔒 Privacy & Analytics

### Cookie Consent System

The site implements GDPR-compliant cookie consent:

- Uses `vanilla-cookieconsent` library
- Two categories: Necessary (always on) and Analytics (optional)
- Bilingual consent dialog (FI/EN)
- User preferences stored in browser

### Analytics Integration

- Conditional loading based on consent
- Only loads when user accepts analytics cookies
- Event-driven architecture using custom events
- Tracking ID: `G-SHMNVJ096J` (configurable in `src/config/google.ts`)

## 🔮 Future Enhancements

- [ ] Move email credentials to environment variables
- [ ] Add CMS integration (Sanity/Contentful)
- [ ] Add blog section for SEO
- [ ] Integrate Google Maps API on contact page
- [ ] Add customer testimonials section
- [ ] Add image optimization with next/image
- [ ] Create admin dashboard for quote management
- [ ] Implement rate limiting for API endpoints

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Development Guidelines:**

- Use `pnpm` for package management
- Follow TypeScript strict mode conventions
- Add translations to both `fi` and `en` in LanguageContext
- Use `@/*` path aliases for imports
- Test on mobile, tablet, and desktop breakpoints

## 🐛 Known Issues

- Email credentials are hardcoded in `src/app/lib/email.ts` (should use environment variables)
- No rate limiting on contact form API endpoint

## 📚 Documentation

For detailed architecture and development guidelines, see [CLAUDE.md](CLAUDE.md).

## 👨‍💻 Developer

Built by [Mediasata](https://mediasata.com)

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons by [Lucide](https://lucide.dev/)
- Color palette inspired by Finnish flag
- Cookie consent by [vanilla-cookieconsent](https://github.com/orestbida/cookieconsent)

## 📧 Contact

- **Email**: [info@siivousote.fi](mailto:info@siivousote.fi)
- **Phone**: 040 218 3270
- **Location**: Riihimäki, Finland

---

**⭐ If you find this project useful, please consider giving it a star on GitHub!**
