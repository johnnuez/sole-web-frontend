module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      maxWidth: '7xl',
      padding: '7%',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
