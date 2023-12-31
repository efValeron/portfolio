import type {Config} from 'tailwindcss'
import {nextui} from "@nextui-org/react"

const overrideColors = {
  primary: {
    DEFAULT: "#F5A524",
    50: "#FEFCE8",
    100: "#FDEDD3",
    200: "#FBDBA7",
    300: "#F9C97C",
    400: "#F7B750",
    500: "#F5A524",
    600: "#C4841D",
    700: "#936316",
    800: "#62420E",
    900: "#312107"
  },
  secondary: {
    DEFAULT: "#ef4444",
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d"
  }
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        "dark-glow": [
          "0 0px 20px rgba(236,237,238, 0.25)", // - light background color
          "0 0px 65px rgba(236,237,238, 0.1)"   // - light background color
        ],
        "light-glow": [
          "0 0px 20px rgba(17,24,28, 0.25)", // - light foreground color
          "0 0px 65px rgba(17,24,28, 0.1)"    // - light foreground color
        ],
      }
    }
  },
  darkMode: "class",
  plugins: [
    require('tailwindcss-debug-screens'),
    nextui({
      themes: {
        light: {
          colors: {
            background: "#fafafa", // or DEFAULT
            foreground: "#18181b", // or 50 to 900 DEFAULT
            ...overrideColors
          }
        },
        dark: {
          colors: {
            background: "#18181b", // or DEFAULT
            foreground: "#fafafa", // or 50 to 900 DEFAULT
            ...overrideColors
          }
        },
      }
    })
  ]
}
export default config
