/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // 🎨 COLORS (central theme)
      colors: {
        primary: "#E5BA73", 
        danger: "#ff0000",     
        text: "#1F1F1F",        // main text
        muted: "#2F3E2F",       // secondary text
        light: "#FFFFFF",
        dark: "#111111",
      },

      // 🔤 FONTS (your existing setup kept)
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        "source-sans": ["var(--font-source-sans)", "sans-serif"],
        custom: [
          "var(--font-playfair)",
          "var(--font-source-sans)",
          "serif",
        ],
      },
    },
  },

  plugins: [],
};