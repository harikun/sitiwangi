// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#B6639B",

          secondary: "#DAAFCD",

          white: "#FFFFFF",

          accent: "#1FB2A6",

          neutral: "#191D24",

          "base-100": "#2A303C",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",

          purple: "#474444",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
