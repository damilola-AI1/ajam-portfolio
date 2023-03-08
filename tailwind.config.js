/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      dropShadow: {
        "shadowOrange": "0px 5px 10px rgba(240, 34, 72, 0.5)",
        "shadowPurple": "0px 5px 10px  rgba(9, 2, 94, 0.5)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      boxShadow: {
        "cardshadow": "0px 0px 2px rgba(240, 34, 72, 0.6)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
