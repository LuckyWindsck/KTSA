import images from './images';

const locale = 'zh_tw';

export default {
  locale: 'zh_tw',
  slideshow: {
    slides: [
      {
        title: '20190125-一夜台北',
        url: images.EVENTS['20190125-一夜台北']['20190125-一夜台北1'],
      },
      {
        title: '20181013-SFC秋祭',
        url: images.EVENTS['20181013-SFC秋祭']['20181011'],
      },
      {
        title: '20190622-慶早交流活動',
        url: images.EVENTS['20190622-慶早交流活動']['20190622慶早交流'],
      },
    ],
    changeInterval: 3000,
  },
  ktsa: {
    contacts: {
      facebook: {
        url: 'https://www.facebook.com/keiotaiwan/',
        image: () => images.HOME.facebook[locale],
      },
      line: {
        url: 'https://linecorp.com/',
        image: () => images.HOME.line[locale],
      },
      mail: {
        url: 'keiotaiwaneseofficial@gmail.com',
        image: () => undefined,
      },
      twitter: {
        url: 'https://twitter.com/keiotaiwan/',
        image: () => undefined,
      },
    },
  },
  campuses: [
    {
      name: {
        en: 'Mita',
        ja: '三田',
        zh_tw: '三田',
      },
      address: '',
      url: '',
    },
    {
      name: {
        en: 'Hiyoshi',
        ja: '日吉',
        zh_tw: '日吉',
      },
      address: '',
      url: '',
    },
    {
      name: {
        en: 'SFC',
        ja: '湘南藤沢',
        zh_tw: '湘南藤澤',
      },
      address: '',
      url: 'https://www.sfc.keio.ac.jp/',
    },
  ],
};
