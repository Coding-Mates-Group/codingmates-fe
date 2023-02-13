/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

const spacing = Array(51)
  .fill()
  .reduce((acc, _, index) => {
    const value = index * 2;
    acc[value] = `${value / 10}rem`;
    return acc;
  }, {});

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    spacing,
    extend: {
      fontSize: {
        12: '1.2rem',
        14: '1.4rem',
        16: '1.6rem',
        18: '1.8rem',
        24: '2.4rem',
        36: '3.6rem',
      },
      fontFamily: {
        sans: ['UncutSans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          10: '#F4F4F4',
          20: '#C6C6C6',
          30: '#AEAEB2',
          40: '#8E8E93',
          50: '#636366',
          60: '#48484A',
          70: '#363639',
          80: '#2C2C2E',
          90: '#1C1C1E',
        },
        purple: {
          10: '#EEE7FB',
          20: '#D2C4F6',
          30: '#B39DF1',
          40: '#9374EC',
          50: '#7854E8',
          60: '#5935E2',
        },
        green: {
          30: '#BFDC30',
          40: '#8BAA00',
          50: '#718A01',
        },
        orange: {
          30: '#F55939',
          40: '#DC4D30',
          50: '#B33C25',
        },
        dark: {
          purple: {
            10: '#B39DF1',
            20: '#8C6DEC',
            30: '#7051E3',
            40: '#5038C6',
            50: '#39309A',
            60: '#20237E',
          },
          green: {
            30: '#B6CD46',
            40: '#98B02B',
            50: '#7A8F17',
          },
          orange: {
            30: '#EF674B',
            40: '#CE4D33',
            50: '#9B3D2B',
          },
        },
      },
    },
  },
  plugins: [],
};
