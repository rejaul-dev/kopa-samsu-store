/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#baffb2",

          secondary: "#e587d1",

          accent: "#ccfeff",

          neutral: "#232A39",

          "base-100": "#FFFFFF",

          info: "#7688E5",

          success: "#10655E",

          warning: "#F4CA4E",

          error: "#E5577D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
