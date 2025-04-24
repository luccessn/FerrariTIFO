/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
        "fade-in": "fadeIn 1.5s ease-in-out forwards",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
    screens: {
      ssm: "480px",
      sfm: "500px",
      smm: "600px",
      sm: "740px",
      md: "800px",
      mmd: "910px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1555px",
      xxxl: "1800px",
    },
  },
  plugins: [],
};
