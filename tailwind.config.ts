import type {Config} from 'tailwindcss'
import {nextui} from "@nextui-org/react"

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
    nextui({
      themes: {
        light: {
          colors: {
            background: "#ECEDEE", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
          }
        },
        dark: {
          colors: {
            background: "#11181C", // or DEFAULT
            foreground: "#ECEDEE", // or 50 to 900 DEFAULT
          }
        },
      }
    })
  ]
}
export default config
