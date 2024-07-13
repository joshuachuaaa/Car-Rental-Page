import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'bebas': ['"Bebas Neue"', 'cursive'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'londrina': ['"Londrina Outline"', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        "light-dark": "#121212",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'xxs': '330px',
      'xs-400': '400px',
      'xs': '500px',
      'sm': '600px',
      'semi': '680px',
      'md': '768px',
      'md-lg': '900px',
      'lg': '1024px',
      'lg-xl': '1200px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
export default config;
