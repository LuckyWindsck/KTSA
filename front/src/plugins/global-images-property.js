/**
 * Recursively scan this directory for the images and automatically add into
 * instance properties with their "pathname".
 *
 * Eg. ./a/b/c.jpg -> Vue.prototype.a.b.c
 */

export default {
  install(vue) {
    const $images = {};
    const files = require.context('@/images', true, /\.(png|jpg|gif)$/i);
    files.keys().forEach((key) => {
      let pointer = $images;
      key.match(/\.\/(?<filePath>.*)\..*/).groups.filePath // Eg. ./a/b/c.jpg -> a/b/c
        .split('/')
        .forEach((e, i, a) => {
          if (!Object.prototype.hasOwnProperty.call(pointer, e)) {
            pointer[e] = i <= a.length - 2
              ? {} // directory
              : files(key); // file
          }
          pointer = pointer[e]; // move pointer to child directory
        });
    });
    Object.assign(vue.prototype, { $images });
  },
};
