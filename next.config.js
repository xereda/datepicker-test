const { version } = require('./package.json');

module.exports = {
  output: 'standalone',
  swcMinify: true,
  optimizeFonts: true,
  publicRuntimeConfig: {
    version,
  },
};
