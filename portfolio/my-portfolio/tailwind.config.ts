import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'white-gradient': 'linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 23%)',
        'reflect-gradient':'linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.66) 100%)'
      },
      scale: {
        '85': '.85',
      },
      colors: {
        'gray-1':'#666666',
        'dark-gray':'#303030',
        'gray-blue': '#B1BCCA',
        'super-light': '#FAFAFA'
      },
      keyframes: {
        spin: {
          '100%': { transform: 'rotate(360deg)'}
        },
        slow: {
          '0%': { transform: 'rotate(-1440deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        slowReflect: {
          '0%': { transform: 'rotate(1400deg)' },
          '100%': { transform: 'rotate(-180deg)' }
        },
        translateDown: {
          '100%': { transform: 'translateY(120%)'}
        },
        translateUp: {
          '100%': { transform: 'translateY(-120%)'}
        },
        hoverBounce: {
          '0%': {transform: 'translateY(0)'},
          '100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-10px)'}
        }
      },
      animation: {
        'speed-up':'spin 2s cubic-bezier(.52,.29,.83,.13), spin 0.5s linear 2s 10, slow 4s ease-out 7s, translateDown 3s ease-out 11s',
        'speed-reflect': 'spin 2s cubic-bezier(.52,.29,.83,.13), spin 0.5s linear 2s 10, slowReflect 4s ease-out 7s, translateUp 3s ease-out 11s',
        'hover-bounce': 'hoverBounce 4s infinite ease-in-out'
      },
      transitionProperty: {
        'transition-duration': '3s'
      }
    },
  },
  plugins: [],
};
export default config;
