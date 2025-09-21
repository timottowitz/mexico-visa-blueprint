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
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'hsl(var(--foreground))',
            '--tw-prose-headings': 'hsl(var(--foreground))',
            '--tw-prose-lead': 'hsl(var(--muted-foreground))',
            '--tw-prose-links': 'hsl(var(--primary))',
            '--tw-prose-bold': 'hsl(var(--foreground))',
            '--tw-prose-counters': 'hsl(var(--muted-foreground))',
            '--tw-prose-bullets': 'hsl(var(--muted-foreground))',
            '--tw-prose-hr': 'hsl(var(--border))',
            '--tw-prose-quotes': 'hsl(var(--foreground))',
            '--tw-prose-quote-borders': 'hsl(var(--primary))',
            '--tw-prose-captions': 'hsl(var(--muted-foreground))',
            '--tw-prose-code': 'hsl(var(--foreground))',
            '--tw-prose-pre-code': 'hsl(var(--muted-foreground))',
            '--tw-prose-pre-bg': 'hsl(var(--muted))',
            '--tw-prose-th-borders': 'hsl(var(--border))',
            '--tw-prose-td-borders': 'hsl(var(--border))',
            color: 'var(--tw-prose-body)',
            maxWidth: 'none',
            h1: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '800',
              fontSize: '2.25rem',
              marginTop: '0',
              marginBottom: '0.8888889em',
              lineHeight: '1.1111111',
            },
            h2: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '700',
              fontSize: '1.875rem',
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.3333333',
            },
            h3: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
              fontSize: '1.5rem',
              marginTop: '1.6em',
              marginBottom: '0.6em',
              lineHeight: '1.6',
            },
            h4: {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              lineHeight: '1.5',
            },
            'h2 strong, h3 strong, h4 strong': {
              fontWeight: 'inherit',
            },
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            'ol > li': {
              paddingLeft: '0.375em',
            },
            'ul > li': {
              paddingLeft: '0.375em',
            },
            '> ul > li p': {
              marginTop: '0.75em',
              marginBottom: '0.75em',
            },
            '> ul > li > *:first-child': {
              marginTop: '1.25em',
            },
            '> ul > li > *:last-child': {
              marginBottom: '1.25em',
            },
            '> ol > li > *:first-child': {
              marginTop: '1.25em',
            },
            '> ol > li > *:last-child': {
              marginBottom: '1.25em',
            },
            'ul ul, ul ol, ol ul, ol ol': {
              marginTop: '0.75em',
              marginBottom: '0.75em',
            },
            hr: {
              borderColor: 'var(--tw-prose-hr)',
              borderTopWidth: 1,
              marginTop: '3em',
              marginBottom: '3em',
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: 'var(--tw-prose-quotes)',
              borderLeftWidth: '0.25rem',
              borderLeftColor: 'var(--tw-prose-quote-borders)',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginTop: '1.6em',
              marginBottom: '1.6em',
              paddingLeft: '1em',
            },
            a: {
              color: 'var(--tw-prose-links)',
              textDecoration: 'underline',
              fontWeight: '500',
            },
            'a:hover': {
              color: 'hsl(var(--primary-hover))',
            },
            strong: {
              color: 'var(--tw-prose-bold)',
              fontWeight: '600',
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left',
              marginTop: '2em',
              marginBottom: '2em',
              fontSize: '0.875em',
              lineHeight: '1.7142857',
            },
            thead: {
              borderBottomWidth: '1px',
              borderBottomColor: 'var(--tw-prose-th-borders)',
            },
            'thead th': {
              color: 'var(--tw-prose-headings)',
              fontWeight: '600',
              verticalAlign: 'bottom',
              paddingRight: '0.5714286em',
              paddingBottom: '0.5714286em',
              paddingLeft: '0.5714286em',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: 'var(--tw-prose-td-borders)',
            },
            'tbody td': {
              verticalAlign: 'baseline',
              paddingTop: '0.5714286em',
              paddingRight: '0.5714286em',
              paddingBottom: '0.5714286em',
              paddingLeft: '0.5714286em',
            },
          },
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          muted: "hsl(var(--accent-muted))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
