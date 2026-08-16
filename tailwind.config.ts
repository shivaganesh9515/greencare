import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-lime': '#D9F99D',
        'neutral-surface': '#F9FAFB',
        'text-primary': '#111827',
        'text-secondary': '#4B5563',
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'Inter Tight', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'card': '0 20px 40px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
export default config;
