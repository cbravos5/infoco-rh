/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'roboto': ['roboto', 'sans-serif']
    },
    screens: {
      xs: '480px',
      sm: '562px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1780px',
    },
    extend: {
      minWidth: {
        'xs':	'20rem', /* 320px */
        'sm':	'24rem', /* 384px */
        'md':	'28rem', /* 448px */
        'lg':	'32rem', /* 512px */
        'xl':	'36rem', /* 576px */
        '2xl':	'42rem', /* 672px */
        '3xl':	'48rem', /* 768px */
        '4xl':	'56rem', /* 896px */
        '5xl':	'64rem', /* 1024px */
        '6xl':	'72rem', /* 1152px */
        '7xl':	'80rem', /* 1280px */
      },
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      colors: {
        orange: { main: '#FF6A39', secondary: '#D7582E' },
        purple: { main: '#343579'  },
        dark: { main: '#424242' }
      }
    },
  },
  plugins: [],
}

