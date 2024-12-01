/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#f2f3f5",
          200: "#ebedef",
          300: "#e3e5e8",
          400: "#d4d7dc",
          600: "#4f545c",
          700: "#36393f",
          800: "#2f3136",
          900: "#202225",
        },
      },
      keyframes: {
        gradient: {
          to: {
            "background-position": "-200% 0",
          },
        },
      },
      animation: {
        gradient: "gradient 2s linear infinite",
      },
      backgroundImage: {
        "gradient-rainbow":
          "linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%)",
      },
    },
  },
  plugins: [],
};
