const variables = {
  '--KTSA-bg-layout': '#e4e4e4',
  '--KTSA-bg-caption': '#767d9a',
  '--KTSA-fg-blue': '#061466',
  '--KTSA-fg-red': '#ce0715',
  '--KTSA-fg-yellow': '#d79e02',
  '--KTSA-bg-blue': '#b7bdca',
  '--KTSA-bg-red': '#e0b8bc',
  '--KTSA-bg-yellow': '#e9e1b5',
};

module.exports = {
  plugins: {
    'postcss-css-variables': { variables },
    'postcss-mixins': {
      mixins: {
        ktsa_section() {
          return {
            border: `0.2rem solid ${variables['--KTSA-fg-blue']}`,
            'box-shadow': `0 0 0.5rem ${variables['--KTSA-bg-caption']}`,
          };
        },
        ktsa_page_title() {
          return {
            padding: '1em 0 1em 1em',
            'border-color': 'black',
            'border-bottom': `0.2rem solid ${variables['--KTSA-fg-blue']}`,
            'background-color': `${variables['--KTSA-bg-blue']}`,
            'font-size': '1.5em',
            'font-weight': 'bold',
          };
        },
        ktsa_page_content() {
          return {
            padding: '2em',
          };
        },
        ktsa_nav(mixin, padLeft = 2, border = 'true') {
          const css = {
            'padding-left': `${Number(padLeft)}rem`,
            'line-height': '4.5rem',
            'font-size': '1.5rem',
          };
          if (border === 'true') {
            Object.assign(css, {
              'border-color': `${variables['--KTSA-fg-blue']}`,
              'border-top': '0.125rem dotted',
            });
          }
          return css;
        },
      },
    },
    precss: {},
    autoprefixer: {},
  },
};
