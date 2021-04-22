const withTM = require('next-transpile-modules')(['@gripeless/pico', 'fp-ts-fluture', 'fp-ts']); // pass the modules you would like to see transpiled

module.exports = withTM(({
    webpack: (config, options) => {
        config.module.rules.push({
          test: /\.(ttf|eot|svg|woff|woff2|png|jpe?g|gif)$/,
          loaders: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            publicPath: `/_next/static/files`,
            outputPath: 'static/files'
          },
        })
    
        return config
      },
  }));

