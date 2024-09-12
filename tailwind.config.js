/** @type {import('tailwindcss').Config} */
const Color = require('color'); // Use the 'color' package to manipulate colors

// Helper function to generate shades based on specific lightness values
function generateShades(baseColor, lightnessValues) {
  const color = Color(baseColor);
  const shades = {};
  lightnessValues.forEach((lightness, index) => {
    shades[`${(index + 1)}00`] = color.lightness(lightness).hsl().string();
  });
  return shades;
}

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        generalSansBold: ['"GeneralSans-Bold"', 'sans-serif'],
        generalSansMedium: ['"GeneralSans-Medium"', 'sans-serif'],
        generalSansExtralight: ['"GeneralSans-Extralight"', 'sans-serif'],
        generalSansLight: ['"GeneralSans-Light"', 'sans-serif'],
        generalSansRegular: ['"GeneralSans-Regular"', 'sans-serif'],
        outfitRegular: ['"Outfit-Regular"', 'sans-serif'],
        outfitMedium: ['"Outfit-Medium"', 'sans-serif'],
        quilonRegular: ['"Quilon-Regular"', 'sans-serif'],
        quilonBold: ['"Quilon-Bold"', 'sans-serif'],
        quilonSemibold: ['"Quilon-Semibold"', 'sans-serif'],
        quilonMedium: ['"Quilon-Medium"', 'sans-serif'],
      },
      colors: {
        theme: {
          // Generates the shades with fixed lightness percentages
          ...generateShades('hsl(209, 70%, 10%)', [10, 15, 20, 25, 30, 35, 40, 45, 50]),
        },
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
        },
      },
    },
  },
  plugins: [],
};
