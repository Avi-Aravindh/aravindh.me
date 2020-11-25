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
      blur: 'blur(10px)',
      brightness: 'brightness(0.6)',
      opacity: 'opacity(0.48)',
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
        blueBackground: '#0099FF33',
        blueText: '#0099FFFF',
        watermarkText: '#666666',
      },
      fontFamily: {
        SegoeUIRegular: ['SegoeUI-Regular'],
        SegoeUIBold: ['SegoeUI-Bold'],
        SegoeUILight: ['SegoeUI-Light'],
        SegoeUISemiLight: ['SegoeUI-SemiLight'],
        SegoeUISemiBold: ['SegoeUI-SemiBold'],
      },
      fontSize: {
        '8xl': '100px',
        '10xl': '125px',
      },
      opacity: {
        33: '.33',
        20: '.20',
      },
      margin: {
        five: '5%',
        eight: '8%',
        md1: '10%',
        md2: '13%',
        twenty: '20%',
        twentyfive: '25%',
        thirty: '30%',
      },
    },
  },
  variants: {
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'],
  },
  plugins: [require('tailwindcss-filters')],
};
