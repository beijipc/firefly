'use strict';

let path = require('path');
let webpack = require('webpack');
let pkg = require(path.join(__dirname, './../package.json'));

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

// Add needed plugins here
// let autoprefixer = require('autoprefixer-loader');
let BowerWebpackPlugin = require('bower-webpack-plugin');
let WebpackMd5Hash = require('webpack-md5-hash'); //文件内容MD5戳
let ExtractTextPlugin = require('extract-text-webpack-plugin'); //抽取css
let AssetsPlugin = require('assets-webpack-plugin'); //静态资源表
let HtmlWebpackPlugin = require('html-webpack-plugin'); //html注入

let config = Object.assign({}, baseConfig, {
  entry: {
    // base : ['core-js'], //不抽core-js（因为体量太大）,让它按需合并到app.js中。
    vendors : ['react', 'react-dom', 'react-router', 'react-cookie', 'promise-polyfill', 'whatwg-fetch', 'classnames'], //抽公共库
    app : path.join(__dirname, '../src/index') //应用入口
  },
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new WebpackMd5Hash(),
    new webpack.optimize.CommonsChunkPlugin(['vendors'], '[name].[chunkhash:6].js'), // 抽取公共通用
    new ExtractTextPlugin(
      'styles.[contenthash:6].css',
      {allChunks: true}
    ), //抽取样式块，并打上内容hash。
    new AssetsPlugin({
      path: './'+process.env.REACT_WEBPACK_ENV,
      filename: 'static.json'
    }),// 静态资源表
    new HtmlWebpackPlugin({
      title : pkg.name,
      version : pkg.version,
      description: pkg.description,
      keywords: pkg.keywords.join(','),
      template: './src/template.html',
      filename: './../index.html',
      favicon: './src/favicon.ico',
      // CDN: CDN,
      minify:{},
      showErrors: true,
      inject: 'body',//true || 'head' || 'body',
      hash: false
    }), // html注入
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.AggressiveMergingPlugin(), //合并。因与react-router按需加载相违背，所以禁用
    new webpack.NoErrorsPlugin()
  ],
  module: defaultSettings.getDefaultModules()
});

// 设置资源CDN
if(!!pkg.publishCDN){
  console.log('加CDN');
  config.output.publicPath = pkg.publishCDN+'/'+process.env.REACT_WEBPACK_ENV
}
// 入口输出配置
config.output.filename = '[name].[chunkhash:6].js';
// 模块输出配置
config.output.chunkFilename = 'modules/[name].[chunkhash:6].js';

// Add needed loaders to the defaults here
// extract css
config.module.loaders[0].loader = ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader');
// extract sass
config.module.loaders[1].loader = ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader?outputStyle=expanded&indentedSyntax');
// extract scss
config.module.loaders[2].loader = ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!sass-loader?outputStyle=expanded');
// extract less
config.module.loaders[3].loader = ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader');

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
