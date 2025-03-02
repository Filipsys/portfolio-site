import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        overpassMono: ["Overpass Mono", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        sidewaysMove: {
          "0%": { transform: "translateX(-50px)" },
          "50%": { transform: "translateX(50px)" },
          "100%": { transform: "translateX(-50px)" },
        },
        verticalMove: {
          "0%": { transform: "rotate(90deg)" },
          "50%": { transform: "rotate(-180deg)" },
          "100%": { transform: "rotate(90deg)" },
        },
        sidewaysGlitch: {
          "0%": { transform: "translateX(0)" },
          "40%": { transform: "translateX(1px)" },
          "60%": { transform: "translateX(-2px)" },
          "80%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(1px)" },
        },
        random1: {
          "0%": { transform: "translateX(0vw)" },
          "5%": { transform: "translateX(50vw, 50vw)" },
          "10%": { transform: "translate(100vw, 90vh)" },
          "15%": { transform: "translate(10vw, -20vh)" },
          "20%": { transform: "translateY(20vw)" },
          "25%": { transform: "translateY(90vw)" },
          "30%": { transform: "translate(50vw, 50vw)" },
          "35%": { transform: "translate(80vw, 80vh)" },
          "40%": { transform: "translateY(0vw)" },
          "45%": { transform: "translateY(90vw)" },
          "50%": { transform: "translateX(10vw, 90vh)" },
          "55%": { transform: "translateX(80vw)" },
          "60%": { transform: "translate(10vw, 90vh)" },
          "65%": { transform: "translate(80vw, 80vh)" },
          "70%": { transform: "translate(10vw, 90vh)" },
          "75%": { transform: "translate(90vh, 10vw)" },
          "80%": { transform: "translate(-100vw, 200vh)" },
          "85%": { transform: "translate(50vw, 10vh)" },
          "90%": { transform: "translateY(0vh)" },
          "95%": { transform: "translate(0vw, -90vh)" },
          "100%": { transform: "translateX(0vw)" },
        },
      },
      animation: {
        random1: "random1 3s linear infinite",
        sidewaysGlitch: "sidewaysGlitch 0.05s linear infinite",
        sidewaysMove: "sidewaysMove 0.5s linear infinite",
        verticalMove: "verticalMove 5s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
