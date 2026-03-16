
export default {
  content: [
  './src/**/*.{js,ts,jsx,tsx,mdx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            DEFAULT: '#0C4A6E',
            dark: '#082f49',
            light: '#e0f2fe'
          },
          orange: '#f97316',
          whatsapp: {
            DEFAULT: '#25D366',
            hover: '#1ebe5d'
          }
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
