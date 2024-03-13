import type { Config } from 'tailwindcss'

import { transformedBackgroundImages } from './tailwindConfig/backgroundImage'
import { colors } from './tailwindConfig/colors'
import { safeListClasses } from './tailwindConfig/mcf-safe-list'
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [...safeListClasses],
  theme: {
    extend: {
      colors: { ...colors },
      backgroundImage: transformedBackgroundImages,
      keyframes: {
        'reverse': {
          to: {
            transform: 'rotate(-360deg)'
          }
        },
        'scroll-x': {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        }
      },
      animation: {
        'spin-reverse': 'reverse 1s linear infinite',
        'horizontal-scroll': 'scroll-x 20s linear infinite'
      },
      fontFamily: {
        'kanit': ['var(--kanit)', ...fontFamily.sans],
        'josephin-sans': ['var(--josephin_sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
export default config
