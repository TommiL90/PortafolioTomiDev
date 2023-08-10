const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        backgroundSecondary: "var(--background-secondary)",
        foreground: "var(--foreground)",
        socialGitHub:"var(--socialGitHub)",
        socialGmail: "var(--socialGmail)",
        socialLinkedin: "var(--socialLinkedin)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        fade: {
          'from': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0px)'
          }
        },
        mobileActive: {
          'from': {
            opacity: '0',
            transform: 'translateY(50px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        },
        mobileInactive: {
          'from': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          'to': {
            opacity: '0',
            transform: 'translateY(50px)'
          }
        },
        blink: {
          '50%': {
            opacity: '0',
          }
        },
        fly: {
          'from': {
            position: 'relative',
            top: '0px'
          },
          'to': {
            position: 'relative',
            top: '-20px',
            bottom: '60px'
          }
        },
        load: {
          '50%': {
            width: '100%'
          },
          '100%': {
            width: '0',
            right: '0',
            left: 'unset'
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        mobileActive: 'mobileActive .5s ease-in',
        mobileInactive: 'mobileInactive .5s ease-in',
        blink: 'blink 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        fly: 'fly 2s alternate infinite',
        load: 'load .5s ease-in-out infinite',
        fade: 'fade 1s forwards'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
