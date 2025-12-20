/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "corner-primary":
          "linear-gradient(to bottom right, #9665FE, #4C01EC, transparent, #4C01EC, #9665FE)",
        "corner-primary-bg":
          "linear-gradient(to bottom right, #9665FE33, #4C01EC33, transparent, #4C01EC33, #9665FE33)",
        "corner-secondary":
          "linear-gradient(to bottom left, #9665FE, #4C01EC, transparent, #4C01EC, #9665FE)",
        "corner-secondary-bg":
          "linear-gradient(to bottom left, #9665FE33, #4C01EC33, transparent, #4C01EC33, #9665FE33)",
      }),
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#9665FE",
        secondary: "#4C01EC",
        background: "#1E1B39",
        dark: "#090C23",
        errors: "#F03D3E",
        navbar: "#161B3A",
      },
      animation: {
        rotate: "rotate 7s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(360deg) scale(10)" },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};