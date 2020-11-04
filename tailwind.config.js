const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./**/*.tsx'],
  theme: {
    fontFamily: {
      // serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
      sans: ['Biryani', ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      // padding: '1rem',
    },
    extend: {
      colors: {
        primary: {
          500: '#a2b8cd',
          // 900: defaultTheme.colors.blue[900],
          900: '#0E2439',
        },
        accent: {
          light: defaultTheme.colors.yellow[200],
          default: defaultTheme.colors.yellow[400],
        },
      },
    },
  },
  variants: {
    textColor: ['group-hover'],
  },
  plugins: [],
};
