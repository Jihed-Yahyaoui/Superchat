import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          'from': {opacity: '0', transform: 'translateY(2rem)'},
          'to': {opacity: '1', transform: 'translateY(0)'},
        }
      },
      animation: {
        'fadeIn': "fadeIn ease-out 0.7s"
      }
    },
  },
  plugins: [],
}
export default config
