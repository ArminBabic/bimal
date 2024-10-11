/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        headings: "var(--headings)",
      },
    },

    screens: {
      xs: "400px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1160px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1310px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1500px",

      "4xl": "1600px",
      "5xl": "2000px",
      "6xl": "2400px",
      "7xl": "2800px",
    },
  },
  plugins: [],
};
