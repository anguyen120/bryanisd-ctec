const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
        sans: ['Oxygen', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          "50": "#42a3e8",
          "100": "#3899de",
          "200": "#2e8fd4",
          "300": "#2485ca",
          "400": "#1a7bc0",
          "500": "#1071b6",
          "600": "#0667ac",
          "700": "#005da2",
          "800": "#005398",
          "900": "#00498e"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
