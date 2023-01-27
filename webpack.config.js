const path = require('path');

module.exports = {
  entry: './app/ConvertisseurNombresRomains.js',
  output: {
    filename: 'ConvertisseurNombresRomains.js',
    path: path.resolve(__dirname, 'dist'),
  },
};