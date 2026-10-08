/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0b1f33',
        teal: { brand: '#0e7490' },
        brand: { red: '#e11d2f', deep: '#a80f1d', teal: '#0e7490' },
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(11,31,51,0.18), 0 2px 6px rgba(11,31,51,0.05)',
        lift: '0 18px 40px -14px rgba(14,116,144,0.35)',
      },
    },
  },
  plugins: [],
}
