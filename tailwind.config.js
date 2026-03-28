/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#0F0F0F'
        },
        surface: {
          DEFAULT: '#F5F5F3',
          dark: '#1A1A1A'
        },
        primary: {
          DEFAULT: '#111111',
          dark: '#FFFFFF'
        },
        accent: '#3ABFB0',
        textPrimary: {
          DEFAULT: '#111111',
          dark: '#FFFFFF'
        },
        textMuted: {
          DEFAULT: '#888888',
          dark: '#AAAAAA'
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
