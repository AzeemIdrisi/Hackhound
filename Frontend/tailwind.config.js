const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors:{
      'base':{
        'primary':'#509EB7',
        'accent':'#6D6C6F'
      },
      'gray':{
        '1':'#ACACAC',
        '2':'#C0C0C0',
        '3':'#D7D7D7',
        '4':'#EBEBEB',
        '5':'#FFFFFF',
        '6':'#343434',
        '7':'#252525',
        '8':'#1D1D1D',
        '9':'#151515',
        '10':'#000000',
      },
      'semantics':{
        '1':'#0ECE15',
        '2':'#CE0E0E',
        '3':'#CEC60E',
      }
    },
    backgroundColor:{
      'base':{
        'primary':'#509EB7',
        'accent':'#6D6C6F'
      },
      'gray':{
        '1':'#ACACAC',
        '2':'#C0C0C0',
        '3':'#D7D7D7',
        '4':'#EBEBEB',
        '5':'#FFFFFF',
        '6':'#343434',
        '7':'#252525',
        '8':'#1D1D1D',
        '9':'#151515',
        '10':'#000000',
      },
      'semantics':{
        '1':'#0ECE15',
        '2':'#CE0E0E',
        '3':'#CEC60E',
      }
    },
    borderColor:{
      'base':{
        'primary':'#509EB7',
        'accent':'#6D6C6F'
      },
      'gray':{
        '1':'#ACACAC',
        '2':'#C0C0C0',
        '3':'#D7D7D7',
        '4':'#EBEBEB',
        '5':'#FFFFFF',
        '6':'#343434',
        '7':'#252525',
        '8':'#1D1D1D',
        '9':'#151515',
        '10':'#000000',
      },
      'semantics':{
        '1':'#0ECE15',
        '2':'#CE0E0E',
        '3':'#CEC60E',
      }
    },
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [addVariablesForColors],
}
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
