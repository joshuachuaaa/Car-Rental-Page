import type { Config } from "tailwindcss";

const config: Config = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xxs'  : '330px',
      'xs-400' : '400px',

      'xs' : '500px',
      // => @media (min-width: 400px) { ... }
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'rubik' : ["Rubik", 'sans-serif'],
        'bebas': ['"Bebas Neue"', 'cursive'], // Define 'bebas' font
        'roboto': ['"Roboto"', 'sans-serif'], // Define 'roboto' font
        'londrina' :["Londrina Outline", 'sans-serif'],
        'open-sans' : [  "Open Sans", 'sans-serif']
      
      },
      colors:{
        "light-dark" : "#121212"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
