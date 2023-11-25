/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  // prefix: 'bar-',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mons: ['Montserrat', ...defaultTheme.fontFamily.sans],
        opensan: ['Open sans', ...defaultTheme.fontFamily.sans],
        dmsans: ['"DM Sans"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary-color': 'rgba(90,11,77,1)',
        'transparent-white': 'rgb(248, 248, 248)',
        'light-text': 'rgb(137, 137, 145)',
        'primary-color-light': 'rgba(90,11,77,0.1)',
        'primary-text-color': 'rgb(236,194,229)',
      },
      keyframes: {
        marquee: {
          '0% ': {transform: 'translateZ(0)'},
          '100%': { transform:' translate3d(-100%,0,0)'}
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'marquee-slower': 'marquee 125s linear infinite',
      }

    },
  },
  plugins: [],
}
