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
            'box-shadow': `0px 0px 0.5rem ${variables['--KTSA-bg-caption']}`,
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
          return {
            display: 'list-item',
            'padding-left': `${Number(padLeft)}rem`,
            'border-color': border === 'true' ? `${variables['--KTSA-fg-blue']}` : '',
            'border-top': border === 'true' ? '0.125rem dotted' : '',
            'list-style': 'disc',
            'list-style-position': 'inside',
            'line-height': '3em',
            'font-size': '1.5rem',
          };
        },
      },
    },
    precss: {},
    autoprefixer: {},
  },
};
