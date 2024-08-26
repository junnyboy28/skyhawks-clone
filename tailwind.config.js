module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('/images/header-bg.png')",
      },
      height: {
        '7.5': '1.875rem', // 30px
      },
      width: {
        '7.5': '1.875rem', // 30px
      },
    },
  },
  plugins: [],
} 