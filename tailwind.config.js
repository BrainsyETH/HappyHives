/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        honey: {
          50: "#FFFEF5",
          100: "#FFF3CD",
          200: "#FFE082",
          300: "#FFD54F",
          400: "#FFCA28",
          500: "#F5A623",
          600: "#E09100",
          700: "#4A3728",
        },
      },
      fontFamily: {
        heading: ["Fredoka", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
