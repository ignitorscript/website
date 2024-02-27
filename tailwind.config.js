/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/js/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: 'hsl(var(--text) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        success: 'hsl(var(--success) / <alpha-value>)',
        destructive: 'hsl(var(--destructive) / <alpha-value>)',
        warning: 'hsl(var(--warning) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
