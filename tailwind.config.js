/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef4fa',
          100: '#d9e6f2',
          700: '#1e3a5f',
          800: '#16294a',
          900: '#0f1e38',
        },
      },
    },
  },
  plugins: [],
}
