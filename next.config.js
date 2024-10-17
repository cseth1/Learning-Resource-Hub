module.exports = {
    productionBrowserSourceMaps: false,  // Disable source maps in production
    webpack: (config) => {
      config.devtool = false;  // Disable source maps in development
      return config;
    },
  };
  