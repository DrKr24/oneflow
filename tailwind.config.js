/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        Roboto: "Roboto, san-serif",
        "Work-Sans": "Work Sans, san-serif",
      },
      colors: {
        light: "#fff",
        lightalter: "#f2dce4",
        lightgray: "#013a4c",
        yellow: "#FFD063",
        footergray: "#99b0b7",
      },
      screens: {
        lg: { max: "1368px" },
        sm: { max: "1024px" },
        "md-custom": { max: "840px" },
        "md-custom-mobile": { min: "841px" },
        md: { max: "768px" },
        "sma-l": { max: "580px" },
        "sma-x": { max: "440px" },
      },
    },
  },
  plugins: [],
};
