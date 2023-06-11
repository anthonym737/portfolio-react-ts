import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },
  // Autres configurations Webpack
};

export default config;
