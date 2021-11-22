const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
        sans: ["Oxygen", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          50: "#42a3e8",
          100: "#3899de",
          200: "#2e8fd4",
          300: "#2485ca",
          400: "#1a7bc0",
          500: "#1071b6",
          600: "#0667ac",
          700: "#005da2",
          800: "#005398",
          900: "#00498e",
        },
        green: {
          50: "#85ff9e",
          100: "#7bff94",
          200: "#71fb8a",
          300: "#67f180",
          400: "#5de776",
          500: "#53dd6c",
          600: "#49d362",
          700: "#3fc958",
          800: "#35bf4e",
          900: "#2bb544",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "bryan-ctec": {
          primary: "#1071b6" /* Primary color */,
          "primary-focus": "#0667ac" /* Primary color - focused */,
          "primary-content":
            "#ffffff" /* Foreground content color to use on primary color */,

          secondary: "#53dd6c" /* Secondary color */,
          "secondary-focus": "#49d362" /* Secondary color - focused */,
          "secondary-content":
            "#232222" /* Foreground content color to use on secondary color */,

          accent: "#75819b" /* Accent color */,
          "accent-focus": "#6b7791" /* Accent color - focused */,
          "accent-content":
            "#ffffff" /* Foreground content color to use on accent color */,

          neutral: "#3d4451" /* Neutral color */,
          "neutral-focus": "#2a2e37" /* Neutral color - focused */,
          "neutral-content":
            "#ffffff" /* Foreground content color to use on neutral color */,

          "base-100":
            "#ffffff" /* Base color of page, used for blank backgrounds */,
          "base-200": "#f9fafb" /* Base color, a little darker */,
          "base-300": "#d1d5db" /* Base color, even more darker */,
          "base-content":
            "#1f2937" /* Foreground content color to use on base color */,

          info: "#2094f3" /* Info */,
          success: "#009485" /* Success */,
          warning: "#ff9900" /* Warning */,
          error: "#ff5724" /* Error */,
        },
      },
    ],
  },
};
