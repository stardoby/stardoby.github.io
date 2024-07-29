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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
          '0%': { transform: 'rotate(1440deg)' },
          '100%': { transform: 'rotate(-180deg)' }
        }
      },
      animation: {
        'speed-up':'spin 2s cubic-bezier(.52,.29,.83,.13), spin 0.5s linear 2s 10, slow 4s ease-out 7s',
        'speed-reflect': 'spin 2s cubic-bezier(.52,.29,.83,.13), spin 0.5s linear 2s 10, slowReflect 4s ease-out 7s'
      },
      transitionProperty: {
        'transition-duration': '3s'
      }
    },
  },
  plugins: [],
};
export default config;
