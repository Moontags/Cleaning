import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Huom: Tailwind 4 lukee paletin globals.css:n @theme-lohkosta.
        // Nämä pidetään samoina, jotta arvot eivät eroa kahdessa paikassa.
        primary: {
          DEFAULT: '#009549',
          dark: '#00803f',
          darker: '#00682f',
          darkest: '#005527',
          light: '#00b457',
        },
        emerald: {
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          700: '#374151',
          800: '#1f2937',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
export default config