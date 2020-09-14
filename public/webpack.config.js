const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const config = {
    entry: {
      app: './index.js',
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name].bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
        ],
      },
    plugins: [
        new WebpackPwaManifest({
          fingerprints: false,
          name: 'Progressive Budget app',
          short_name: 'Budget',
          description: 'An application that allows you to track your budget expenses even when you are offline and then gets calculated total when back to online.',
          background_color: '#01579b',
          theme_color: '#ffffff',
          'theme-color': '#ffffff',
          start_url: '/',
          icons: [
            {
              src: path.resolve('icons/icon-192x192.png'),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: path.join('assets', 'icons'),
            },
          ],
         
        }),
      ],
      
}
module.exports = config;