/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ed00a0",

          "secondary": "#007600",

          "accent": "#00ab29",

          "neutral": "#090304",

          "base-100": "#ffffff",

          "info": "#00a7fe",

          "success": "#007d00",

          "warning": "#f45400",

          "error": "#ff7090",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

