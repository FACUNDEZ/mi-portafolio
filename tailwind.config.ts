import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        bounceX: {
          '0%': {
            transform: 'translateX(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '25%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '50%': {
            transform: 'translateX(25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '75%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '100%': {
            transform: 'translateX(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
        },
        translateX: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        opacityNav: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
        translateXR: {
          '0%': { transform: 'translateX(100%)'},
          '100%': { transform: 'translateX(0%)' },
        },
        translateY: {
          '0%': { transform: 'translateY(400%)'},
          '100%': { transform: 'translateY(0%)' },
        },
        translateYT: {
          '0%': { transform: 'translateY(-400%)'},
          '100%': { transform: 'translateY(0%)' },
        },
        translateBoxX: {
          '0%': { transform: 'translateX(-130%)'},
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        bounceX: 'bounceX 1.5s infinite ease-in-out',
        translateX: 'translateX 1.5s ease-in-out', 
        translateXR: 'translateXR 1.5s ease-in-out',
        translateY: 'translateY 1.5s ease-in-out',
        opacityNav: 'opacityNav 0.3s ease-in-out',
        translateYT: 'translateYT 1.5s ease-in-out',
        translateBoxX: 'translateBoxX 3s ease-in-out',
      },
    },
  },
  plugins: []
}
export default config
