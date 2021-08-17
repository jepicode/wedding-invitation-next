module.exports = {
  prefix: 'tw-',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        'main-background': '#F4F1EC'
      })
    },
    fontFamily: {
      'open-sans': ['"Open Sans"', 'sans-serif'],
      sacramento: ['Sacramento', 'sans-serif']
    },
    letterSpacing: {
      widest: '0.6em'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
