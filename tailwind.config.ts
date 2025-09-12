import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'display': ['SF Pro Display', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'body': ['SF Pro Text', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        
        // Brand Colors
        brand: {
          red: "hsl(var(--brand-red))",
          "red-dark": "hsl(var(--brand-red-dark))",
          gray: "hsl(var(--brand-gray))",
          "gray-light": "hsl(var(--brand-gray-light))",
          "gray-dark": "hsl(var(--brand-gray-dark))",
          black: "hsl(var(--brand-black))",
        },
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          hover: "hsl(var(--secondary-hover))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          hover: "hsl(var(--accent-hover))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-brand': 'var(--gradient-brand)',
        'gradient-dark': 'var(--gradient-dark)',
        'gradient-subtle': 'var(--gradient-subtle)',
      },
      boxShadow: {
        'soft': '0 2px 20px -2px hsl(var(--brand-red) / 0.1)',
        'hard': '0 10px 30px -10px hsl(var(--brand-black) / 0.3)',
        'glow': '0 0 40px hsl(var(--brand-red) / 0.2)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "hexagon-float": {
          "0%": { transform: "translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-20px) rotate(90deg)" },
          "50%": { transform: "translateY(0px) rotate(180deg)" },
          "75%": { transform: "translateY(-20px) rotate(270deg)" },
          "100%": { transform: "translateY(0px) rotate(360deg)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "hexagon-float": "hexagon-float 20s infinite linear",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
