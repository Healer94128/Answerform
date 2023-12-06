/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bar': '0px 1px 14px 0px rgba(0, 0, 0, 0.12), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 3px 5px -1px rgba(0, 0, 0, 0.20)',
        'answer-save-btn': '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)',
        'answer-card': '0px 1px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.20)',
      },
      backgroundColor: {
        'answer-save-btn': '#35836D' 
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      textColor: {
        'secondary': '#00000099',
      },
      lineHeight: {
        'custom': '0.4px',
      },
    },
  },
  plugins: [],
}
