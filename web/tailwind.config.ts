import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      backgroundImage: {
        app: 'url(/app-bg.png)'
      },
      colors: {
        ignite: {
          500: '#129E57'
        },
        gray: {
          900: "#121214",
          600: "#323238",
          800: "#202024",
          300: '#8D8D99',
          100: "#E1E1E6"
        },
        yellow: {
          700: '#E5CD3D',
          500: '#F7DD43'
        }
      }
    },
  },
  plugins: [],
}
export default config
