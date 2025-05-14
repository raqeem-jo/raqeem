/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#8ECAE6', // Light blue
          DEFAULT: '#219EBC', // Medium blue
          dark: '#023047', // Dark blue
        },
        accent: {
          light: '#DBC4F0', // Light purple
          DEFAULT: '#B088F9', // Medium purple
          dark: '#7F56D9', // Dark purple
        },
        neutral: {
          100: '#F8FAFC', // Off-white
          800: '#1E293B', // Near black
        }
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
        heading: ['Cairo', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '24px',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        DEFAULT: '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
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
};