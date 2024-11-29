import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        geistSans: "var(--font-geist-sans)",
        geistMono: "var(--font-geist-mono)",
      },
    },
  },
  plugins: [],
} satisfies Config;
