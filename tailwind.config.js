/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable manual dark mode toggle
  theme: {
    extend: {
      colors: {
        // Light Mode Palette
        cream: '#F2F0E9',      // Soft Warm Beige (Base BG)
        charcoal: '#2C2C2C',   // Dark Text

        // Dark Mode Palette
        deep: {
          bg: '#1A1E23',       // Deep Blue-Gray (Dark Base BG)
          card: '#252A30',     // Slightly lighter for cards
          text: '#E5E5E5',     // Soft Off-White
        },

        // Muted Accents (Shared/Adaptive)
        pastel: {
          blue: '#A4B5C4',     // Dusty Blue
          green: '#B8C5B3',    // Muted Sage
          lavender: '#C8BDC9', // Wisteria
          clay: '#DDBEA9',     // Muted Peach

          // Darker/Desaturated variants for Dark Mode
          dark: {
            blue: '#7D8FA1',
            green: '#8F9E8A',
            lavender: '#9D8EA0',
            clay: '#B09585',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
