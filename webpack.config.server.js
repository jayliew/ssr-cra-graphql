const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.less']
  },
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
  module: {
    rules: [

      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        exclude: [/\.js$/, /\.html$/, /\.json$/],
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
          publicPath: '/',
          emitFile: false,
        },
      },
    ],
  },
};


///////////////////////////

          // {
          //   test: /\.less$/,
          //   use:[
          //     {
          //       loader: 'less-loader',
          //       options: {
          //         modifyVars: {}, // custom theme overrides go here...
          //         javascriptEnabled: true
          //       }
          //     }
          //   ]
          // },

/////////////////////////


// {
// test: /\.less$/,
// use: ['isomorphic-style-loader', { loader: 'less-loader' }]
// },
//////////////////////////

// {
// test: /\.css$/,
// use: ['isomorphic-style-loader', { loader: 'css-loader' }]
// },

/////////////

      // {
      //     test: /\.less$/,
      //     use: [
      //         {
      //             loader: 'style-loader'
      //         }, {
      //             loader: 'css-loader'
      //         },
      //         {
      //             loader: 'less-loader',
      //             options: {
      //                 javascriptEnabled: true
      //             }
      //         }
      //         ]
      // },
