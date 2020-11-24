module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    filter: {
      // defaults to {}
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)',
    },
    backdropFilter: {
      // defaults to {}
      none: 'none',
      // blur: 'blur(60px)',
      brightness: 'brightness(0.6)',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '20px',
    },
    boxShadow: {
      profile: '0px 0px 24px 0px rgba(0,0,0,0.16);',
    },
    extend: {
      colors: {
        primary: '#f1f1f1',
        black: '#333333',
        gray: '#f4f4f4',
        siteText: '#707070',
        blue: '#0099FF',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        montserratLight: ['Montserrat-light'],
        montserratBold: ['Montserrat-Bold'],
        cunia: ['Cunia'],
        Roboto: ['Roboto-regular'],
        SegoeUIRegular: ['SegoeUI-Regular'],
        SegoeUIBold: ['SegoeUI-Bold'],
        SegoeUILight: ['SegoeUI-Light'],
        SegoeUISemiLight: ['SegoeUI-SemiLight'],
        SegoeUISemiBold: ['SegoeUI-SemiBold'],
      },
    },
  },
  variants: {
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'],
  },
  plugins: [require('tailwindcss-filters')],
};
