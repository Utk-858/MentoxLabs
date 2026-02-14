/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4277FF',
          light: '#6B92FF',
          dark: '#2D5BDB',
        },
        gray: {
          darker: '#2C2C2C',
          dark: '#3D3D3D',
          medium: '#666666',
          light: '#999999',
        },
        background: {
          light: '#E8F2FF',
          lighter: '#F0F7FF',
        },
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        heading: ['Farro', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
