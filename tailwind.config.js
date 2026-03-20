/** @type {import('tailwindcss').Config} */
export default {
   darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       animation: {
        'fade-green': 'fadeGreenToDark 2s ease-in-out infinite',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
      },
      keyframes: {
        fadeGreenToDark: {
          '0%, 100%': { 
            backgroundColor: '#00ff88',
            boxShadow: '0 0 12px rgba(0, 255, 136, 0.6)'
          },
          '50%': { 
            backgroundColor: '#003d20',
            boxShadow: '0 0 2px rgba(0, 255, 136, 0.1)'
          },
        },
        pulseGreen: {
          '0%, 100%': { 
            opacity: '1',
            transform: 'scale(1)',
            backgroundColor: '#00ff88'
          },
          '50%': { 
            opacity: '0.4',
            transform: 'scale(0.95)',
            backgroundColor: '#004d26'
          },
        }
      }
    },
  },
  plugins: [],
}
  