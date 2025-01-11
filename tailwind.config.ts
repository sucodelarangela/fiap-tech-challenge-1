import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#FF5031",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "roboto-mono": ["Roboto mono", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
