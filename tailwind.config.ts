import type {Config} from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        'gray-dark': '#828B8D',
        gray: '#CED4D7',
        'gray-light': '#F2F2F2',
        green: '#219653',
        red: '#EB5757',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '0',
        },
        screens: {
          'xl': '1280px',
          '2xl': '1360px',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;