const zlib = require('zlib');

const compressFile = (file) => {
  return new Promise((resolve, reject) => {
    zlib.gzip(file, (err, compressed) => {
      if (err) {
        reject('Compression failed');
      } else {
        resolve(compressed);
      }
    });
  });
};

module.exports = { compressFile };

