/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        theme: "#00458f",
        "theme-light": "#cce0f5",
        green: '#39C294',
        red: '#E0124D',
        mono: {
          '50': '#FBFBFB',
          '100': '#F7F7F7',
          '200': '#EBEBEB',
          '300': '#DCDCDC',
          '400': '#B2B2B2',
          '500': '#808080',
          '600': '#636363',
          '700': '#515151',
          '800': '#3F3F3F',
          '900': '#2E2E2E',
        }
      }
    },
  },
  plugins: []
};