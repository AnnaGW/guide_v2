const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require('postcss-preset-env');
const ESLintPlugin = require('eslint-webpack-plugin');

 
module.exports = (env, argv) => {
  const isProd = argv.mode === 'production'
  const isDev = !isProd
  
  console.log('isProd', isProd)
  console.log('isDev', isDev)
    
  const filename = ext => isProd ? `[name].[contenthash].bundle.${ext}` : `[name].bundle.${ext}`
  
  const plugins = () => {
    const base =[
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new CopyPlugin({
        patterns: [
          { 
            from: path.resolve(__dirname, 'src/images'), 
            to: path.resolve(__dirname, 'dist/images') 
          },
          { 
            from: path.resolve(__dirname, 'src', 'favicon.ico'), 
            to: path.resolve(__dirname, 'dist') 
          }
        ],
      }),
      new MiniCssExtractPlugin({
        filename: filename('css')
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      }),
    ]
    if (isDev) {
      base.push(new ESLintPlugin())
    }
    return base
  }
  
  return {
    target: 'web', 
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: [
        'core-js/stable',
        'regenerator-runtime/runtime',
        './index.js'
      ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      filename: filename('js')
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@core': path.resolve(__dirname, 'src', 'core'),
      }
    },
    devServer: {
      port: '3000',
      open: true,
      hot: true,
      watchFiles: './'
    },
    devtool: isDev ? 'source-map' : false,
    plugins: plugins(),
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [          
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    postcssPresetEnv,                  
                  ],
                },
              },
            },
            "sass-loader",
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ],
    }
  }
}