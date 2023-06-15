import path from 'path';
import { Configuration } from 'webpack';


const config: Configuration = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias : {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes'),
  },
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },
  // Autres configurations Webpack
};

export default config;
