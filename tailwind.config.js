module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '3%',
    },
    extend: {
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
