/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        indigoBlue: "#4F46E5", // Main indigo color
        lightBlue: "#6366F1", // Lighter variant
        orange: "#F97316", // Accent orange
        lightOrange: "#FB923C", // Lighter orange
        lightGray: "#F7FAFC", // Light gray
      },
      backgroundImage: {
        'diagonal-gradient': 'linear-gradient(135deg, #4F46E5, #6366F1, #FB923C)', // Dijagonalni gradijent
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

