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
        'light-text': 'rgb(137, 137, 145)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
