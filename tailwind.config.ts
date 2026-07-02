import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FEFDFB",
          100: "#FAFAF8",
          200: "#F5F0E8",
          300: "#EDE5D8",
          400: "#E0D5C5",
        },
        charcoal: {
          900: "#0E0E0F",
          800: "#1A1A1A",
          700: "#2A2A2A",
          600: "#3A3A3A",
          500: "#4A4A4A",
          400: "#6A6A6A",
          300: "#8A8A8A",
        },
        coral: {
          50: "#FEF3F0",
          100: "#FDE0D9",
          200: "#FAB8A8",
          300: "#F59077",
          400: "#EE7058",
          500: "#E8755A",
          600: "#D4604A",
          700: "#B54D3C",
        },
        teal: {
          50: "#E8F5F3",
          100: "#C5E8E3",
          200: "#8DD0C8",
          300: "#55B8AD",
          400: "#2D9E92",
          500: "#2D8A7B",
          600: "#247569",
          700: "#1B5F55",
        },
        gold: {
          50: "#FDF9EC",
          100: "#FAF0CC",
          200: "#F4DC88",
          300: "#ECC644",
          400: "#D9AC28",
          500: "#C9A84C",
          600: "#B08B38",
          700: "#8A6C25",
        },
        royal: {
          50: "#E8F0F9",
          100: "#C3D7EF",
          200: "#87AFDF",
          300: "#4B87CF",
          400: "#2569BF",
          500: "#1B5E8E",
          600: "#164E78",
          700: "#103D5F",
        },
        emerald: {
          50: "#E8F5EE",
          100: "#C3E6D3",
          200: "#87CDA7",
          300: "#4BB47B",
          400: "#279B58",
          500: "#2E7D52",
          600: "#236845",
          700: "#185335",
        },
      },
      fontFamily: {
        clash: ["var(--font-clash)", "sans-serif"],
        general: ["var(--font-general)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "noise-texture": "url('/noise.png')",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "ease-in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
