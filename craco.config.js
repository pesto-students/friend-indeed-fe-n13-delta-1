const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@theme': 'dark',
              '@primary-color': "#C3E5AE",
              '@secondary-color': "#073042",
              '@border-radius-base': '10px',
              '@checkbox-border-radius': '2px',
              '@card-radius': '10px',
              '@rate-star-size': '15px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};