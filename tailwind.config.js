/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4A423C', // Deep Earthy Brown (for text focus)
          secondary: '#FA8B78', // Iconic Coral
          accent: '#D9C5B2', // Muted Clay/Beige
          background: '#FFFFFF',
          surface: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        display: ['Outfit', 'Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}