/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        "check" : "url('./images/icon-check.svg')"
      },
      colors: {
        "primary-light": "#86E0C6",
        "primary": "#13C690",
        "primary-dark": "#10A376",
        "secondary": "#EDEDED",
      },
      boxShadow: {
        "button": "0px 8px 5px 0px rgba(0, 0, 0, 0.08), 0px 5px 2px 0px rgba(19, 198, 144, 0.25)",
      }
    },
  },
  plugins: [],
}

