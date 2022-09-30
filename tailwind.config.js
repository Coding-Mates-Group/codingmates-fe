/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-main": "rgba(77, 48, 220, 1)",
        secondary: "#C2F46F",
        monoBlack: "#000000",
        "purple-dark":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), #4D30DC",
        "monoBlack-500": "rgba(0,0,0,0.5)",
        monoGray: "rgba(204, 204, 204, 1)",
        "modal-bg": "rgba(255, 255, 255, 0.95)",
      },
      fontFamily: {
        UncutSans: ["UncutSans", "sans serif"],
      },
      boxShadow: {
        "elevation-1": "0px 2px 4px rgba(0, 0, 0, 0.24)",
        "elevation-2":
          "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 8px rgba(0, 0, 0, 0.16);",
        "elevation-3": "0px 8px 16px rgba(0, 0, 0, 0.12)",
        "elevation-4": "0px 16px 24px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
