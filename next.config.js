// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      // Ignore source map warnings from node_modules
      if (!isServer) {
        config.module.rules.push({
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: /node_modules/,
        });
      }
      return config;
    },
  };
  