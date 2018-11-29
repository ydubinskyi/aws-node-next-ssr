const withSass = require('@zeit/next-sass');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withSass({
  assetPrefix: isProd ? 'https://90vfxtmcq6.execute-api.eu-west-3.amazonaws.com/dev/' : '',
  publicRuntimeConfig: {
    prefix: isProd ? 'dev' : '',
  }
});
