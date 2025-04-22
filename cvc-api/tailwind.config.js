/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // add any additional paths for your custom components
  ],
    theme: {
      extend: {
        colors: {
          "color-1": "hsl(var(--color-1))",
          "color-2": "hsl(var(--color-2))",
          "color-3": "hsl(var(--color-3))",
          "color-4": "hsl(var(--color-4))",
          "color-5": "hsl(var(--color-5))",
          sidebar: {
            DEFAULT: 'hsl(var(--sidebar-background))',
            foreground: 'hsl(var(--sidebar-foreground))',
            primary: 'hsl(var(--sidebar-primary))',
            'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
            accent: 'hsl(var(--sidebar-accent))',
            'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
            border: 'hsl(var(--sidebar-border))',
            ring: 'hsl(var(--sidebar-ring))',
          },
        },
        animation: {
          rainbow: "rainbow var(--speed, 2s) infinite linear",
        },
        keyframes: {
          rainbow: {
            "0%": { "background-position": "0%" },
            "100%": { "background-position": "200%" },
          },
        },
      },
    },
  };
  