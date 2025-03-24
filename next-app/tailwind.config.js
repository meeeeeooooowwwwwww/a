/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          50: '#FFFFFF',    // Crisp White
          100: '#FFF5F7',   // Very Light Pink
          200: '#FFC1CC',   // Soft Blush Pink
          300: '#FF9999',   // Peachy Pink
          400: '#FF69B4',   // Hot Pink
          500: '#FF1493',   // Deep Pink
          600: '#C71585',   // Medium Violet Red
        },
        // Contrast Colors
        charcoal: '#2E2E2E',  // Deep Charcoal for text
        slate: '#4A4A4A',     // Slate Gray for secondary text
        // Accent Colors
        lavender: '#E6E6FA',
        mint: '#A8E4A0',
        // Neutral Tones
        neutral: {
          50: '#FFFFFF',    // Crisp White
          100: '#F5F5F5',   // Light Gray
          200: '#E5E5E5',   // Off White
          300: '#D3D3D3',   // Shadow Gray
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717'
        },
        // Semantic Colors
        background: '#FFFFFF',     // Default background
        text: '#2E2E2E',          // Default text color
        'nav-bg': '#FFF5F7',      // Navigation background
        'card-bg': '#FFFFFF',     // Card background
        'footer-bg': '#FFF5F7',   // Footer background
        'input-border': '#D3D3D3' // Form input borders
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'input': '0 0 5px rgba(255, 105, 180, 0.3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 