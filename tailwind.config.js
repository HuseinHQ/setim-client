/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      colors: {
        dongker: '#0F0E17',
        blue: '#7F5AF0',
        'darker-blue': '#6c4ad1',
        white: '#FFFFFE',
        gray: '#94A1B2'
      },
      backgroundImage: {
        'setim-background': "url('/login-background.png')"
      }
    }
  },
  plugins: []
}
