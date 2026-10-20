/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030508',
          900: '#070A11',
          850: '#0B101D',
          800: '#111827',
          700: '#1F2937',
          600: '#374151',
        },
        brand: {
          emerald: '#10B981',
          mint: '#05F29B',
          cyan: '#06B6D4',
          sky: '#38BDF8',
          indigo: '#6366F1',
          purple: '#8B5CF6',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-glow': 'radial-gradient(circle at 50% 0%, rgba(5, 242, 155, 0.12), transparent 50%), radial-gradient(circle at 100% 50%, rgba(99, 102, 241, 0.1), transparent 45%)',
        'subtle-grid': 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 0)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
