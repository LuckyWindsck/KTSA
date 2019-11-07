const images = {};
const files = require.context('../images', true, /\.(png|jpg|gif)$/i);

files.keys().forEach((key) => {
  let pointer = images;
  key.match(/\.\/(.*)\..*/)[1]
    .split('/')
    .forEach((e, i, a) => {
      if (!Object.prototype.hasOwnProperty.call(pointer, e)) {
        if (i <= a.length - 2) {
          pointer[e] = {};
        } else if (i === a.length - 1) {
          pointer[e] = files(key);
        }
      }
      pointer = pointer[e];
    });
});

export default images;
