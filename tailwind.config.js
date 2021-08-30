module.exports = {
  prefix: 'tw-',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        'main-background': '#F4F1EC',
        brown: '#AE8F7A'
      }),
      height: {
        128: '512px',
        152: '608px'
      },
      letterSpacing: {
        wider: '0.3em',
        widest: '0.6em'
      },
      textColor: {
        brown: '#AE8F7A'
      },
      screens: {
        xs: '320px',
        sm: '640px'
      }
    },
    fontFamily: {
      'open-sans': ['"Open Sans"', 'sans-serif'],
      sacramento: ['Sacramento', 'sans-serif']
    },
    fill: (theme) => ({
      ...theme('colors'),
      'main-background': '#F4F1EC'
    }),
    scale: {
      600: '6',
      6000: '-6'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
