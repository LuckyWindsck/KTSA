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
        vertical_align_center() {
          return {
            display: 'flex',
            'align-items': 'center',
          };
        },
        ktsa_section() {
          return {
            border: `0.25rem solid ${variables['--KTSA-fg-blue']}`,
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
        ktsa_aside_arrow() {
          return {
            width: 'auto',
            position: 'absolute',
            top: '50%',
            padding: '16px',
            'border-radius': '0 3px 3px 0',
            'margin-top': '-22px',
            color: 'white',
            'font-weight': 'bold',
            'font-size': '18px',
            transition: '0.6s ease',
            cursor: 'pointer',
            'user-select': 'none',
          };
        },
        ktsa_search() {
          return {
            padding: '0',
            border: `0.1rem solid ${variables['--KTSA-fg-blue']}`,
            'border-radius': '0.5rem',
          };
        },
      },
    },
    precss: {},
    autoprefixer: {},
  },
};
