import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F6F6F6",
        primary: "#0071DA",
        main: "#7E7E7E",
        heading: "#515151",
        separator: "#F3F5F9",
        gray: "#E9E9E9",
        error: "#F5222D",
        yellow: "#FAAD14",
        waring: "#FFFBF0",
      },
    },
  },
  plugins: [],
};
export default config