// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      merchant: ["Merchant Copy", "sans-serif"],
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#B6639B", //pink: "#B6639B",

          secondary: "#DAAFCD", // lightpink: "#DAAFCD",

          accent: "#483D7F", //purple: "#483D7F",

          neutral: "#D8D2F5", //lightpurple: "#D8D2F5",

          "base-100": "#2A303C",

          info: "#F5F5F5", // gray: "#F5F5F5",

          success: "#E7ADD5", // footerlightpurple: "#E7ADD5",

          warning: "#FBBD23",

          error: "#F87272",

          white: "#FFFFFF",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
