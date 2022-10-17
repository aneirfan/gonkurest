/* eslint-disable import/no-extraneous-dependencies */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images/heros');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach((image) => {
    // convert hero image lebar 1200px
    sharp(`${target}/${image}`)
      .resize(1200)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-1200.jpg`,
        ),
      );

    // convert hero image lebar 1000px
    sharp(`${target}/${image}`)
      .resize(1000)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-1000.jpg`,
        ),
      );

    // convert hero image lebar 600px
    sharp(`${target}/${image}`)
      .resize(600)
      .toFile(
        path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-600.jpg`,
        ),
      );
  });
