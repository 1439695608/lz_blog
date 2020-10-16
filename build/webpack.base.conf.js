'use strict'
require('babel-polyfill')
const path = require('path')
const utils = require('./utils')
const glob = require('glob')
const webpack = require('webpack')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 下面代码用来分析JS组成时使用，勿删
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// plugins.push(
//   new BundleAnalyzerPlugin()
// )

//
// var run_product_id = null;
// var build_array = n3641ull;
// run_product_id = 3641;
// build_array = ['common', '999', String(run_product_id)];

// 定义工具
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function getWebappEntriesAndPlugins () {
  let bigshotEntryFiles = []
  let webapp_modules_name = [
    'indexPage',
    'article',
    'addWord'
  ].join(',')
  console.log('====================================================')
  console.log('=')
  console.log('= webapp_modules_name ->', webapp_modules_name)
  console.log('=')
  console.log('====================================================\n\n\n')
  console.log(glob.sync('./src/pages/*{' + webapp_modules_name + '}*/*.js'))
  console.log(glob.sync('./src/pages/indexPage/*.js'))
  glob.sync('./src/pages/*{' + webapp_modules_name + '}*/*.js').forEach(function (entryFile) {
    // 生产打包所有产品，开发打包指定subModule的产品
    console.log(11111, entryFile)
    let version = entryFile.split('/')[4]
    console.log(version)
    if (version !== 'basic.js') {
      bigshotEntryFiles.push(entryFile)
    }
  })
  console.log(bigshotEntryFiles)
  let bigshotEntries = {}
  let bigshotPlugins = []
  for (let bigshotEntryFilesKey in bigshotEntryFiles) {
    let version = bigshotEntryFiles[bigshotEntryFilesKey].split('/')[3]
    let fileName = bigshotEntryFiles[bigshotEntryFilesKey].split('/')[4].split('.')[0]
    // 创建入口文件
    if (config.tpl.isLoadBabelPolyfill == true) {
      // 加载babel-polyfill版本，可解决不同浏览器兼容问题
      bigshotEntries[version + '_' + fileName] = ['babel-polyfill', bigshotEntryFiles[bigshotEntryFilesKey]]
    } else {
      bigshotEntries[version + '_' + fileName] = [bigshotEntryFiles[bigshotEntryFilesKey]]
    }
    // 创建html插件，每个入口文件对应一个html
    bigshotPlugins.push(new HtmlWebpackPlugin({
      // 生成文件名
      filename: './pages/' + version + '/' + fileName + '.html',
      // 取模版位置
      template: './src/template/index.html',
      // 需加载的入口名
      chunks: [version + '_' + fileName],
      inject: true,
      cache: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        removeAttributeQuotes: false
      }
    }))
  }
  return {'entries': bigshotEntries, 'plugins': bigshotPlugins}
}

let entries = {}
let plugins = []

function initEntriesAndPlugins () {
  switch (config.tpl.mainModule) {
    case 'pages':
      let entriesAndPlugins = getWebappEntriesAndPlugins()
      entries = entriesAndPlugins.entries
      plugins = entriesAndPlugins.plugins
      break
    // case 'vue':
    //   let bigshot = getBigshotEntriesAndPlugins()
    //   let webapp = getWebappEntriesAndPlugins()
    //   entries = bigshot.entries
    //   for (let key in webapp.entries) {
    //     entries[key] = webapp.entries[key]
    //   }
    //   plugins = bigshot.plugins.concat(webapp.plugins)
    //   break
    default:
      break
  }
}

initEntriesAndPlugins()
/**
 * 页面配置
 * @type {Array}
 */
plugins.push(new VueLoaderPlugin())

// 自动加载模块，不必到处import或require
plugins.push(
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
)

module.exports = {
  //  webpack4.0使用
  optimization: {
    minimize: false
  },
  context: path.resolve(__dirname, '../'),
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'jquery': 'jquery',
      'numeric-keyboard$': 'numeric-keyboard/dist/numeric_keyboard.vue.js'
    }
  },
  plugins: plugins,
  module: {
    rules: [
      ...(config.dev.useEslint ? [] : []),
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   exclude: /node_modules/,
      //   options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
      //     // cache: true,
      //     emitWarning: true,
      //     outputReport: {
      //       filePath: 'eslint_report-[hash].html',
      //       formatter: require('eslint/lib/formatters/html')
      //     }
      //   }
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
