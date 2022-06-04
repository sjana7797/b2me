module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "bounce-low-slow": {
          "0%, 100%": {
            transform: `translateY(-5%)`,
          },
          "50%": {
            transform: "translateY(0)",
          },
        },
        marquee: {
          from: { transform: `translateX(0)` },
          to: { transform: `translateX(-50%)` },
        },
      },
      animation: {
        "bounce-low-slow": "bounce-low-slow 5s ease-in-out infinite",
        marquee: "marquee 15s linear infinite;",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
