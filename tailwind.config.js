/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
      },
      colors: {
        primary: {
          50: '#f0f0ff',
          100: '#e0e1ff',
          200: '#c7c9fe',
          300: '#a5a8fc',
          400: '#8184f8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        surface: {
          light: '#fafafa',
          DEFAULT: '#ffffff',
          dark: '#0a0a0f',
          'dark-card': '#141420',
          'dark-elevated': '#1c1c2e',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.06)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.08)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 40px rgba(99, 102, 241, 0.15)',
        'glow-dark': '0 0 40px rgba(99, 102, 241, 0.25)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h1: {
              color: '#111827',
              fontWeight: '800',
            },
            h2: {
              color: '#1f2937',
              fontWeight: '700',
            },
            h3: {
              color: '#1f2937',
              fontWeight: '600',
            },
            'ul': {
              listStyleType: 'none',
              paddingLeft: '1.5em',
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '0',
              marginBottom: '0.5em',
            },
            'ul > li::before': {
              content: '""',
              width: '0.5em',
              height: '0.5em',
              borderRadius: '50%',
              backgroundColor: '#d1d5db',
              position: 'absolute',
              left: '-1em',
              top: '0.6em',
            },
            a: {
              color: '#4f46e5',
              textDecoration: 'none',
              '&:hover': {
                color: '#4338ca',
              },
            },
            code: {
              color: '#1f2937',
              backgroundColor: '#f3f4f6',
              borderRadius: '0.25rem',
              padding: '0.125rem 0.25rem',
            },
          },
        },
        invert: {
          css: {
            color: '#d1d5db',
            h1: { color: '#f9fafb' },
            h2: { color: '#f3f4f6' },
            h3: { color: '#f3f4f6' },
            a: {
              color: '#818cf8',
              '&:hover': { color: '#a5b4fc' },
            },
            code: {
              color: '#e5e7eb',
              backgroundColor: '#1f2937',
            },
            'ul > li::before': {
              backgroundColor: '#4b5563',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
