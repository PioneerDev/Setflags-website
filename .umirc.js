
// ref: https://umijs.org/config/
import * as routes from './src/config/route.js'
const path = require('path')


const resolve = function (dir) {
  return path.join(__dirname, '.', dir)
}

export default {
  treeShaking: true,
  disableCSSModules:true,
  outputPath:'docs',
  base: '/Setflags-website/',
  publicPath :'/Setflags-website/',
  routes: [
    ...routes.default
  ],
  alias: {
    '@': resolve('src'),
    '@PAGES': resolve('src/pages'),
    '@SERVICES': resolve('src/services'),
    '@CONFIG': resolve('src/config'),
    '@UTILS': resolve('src/utils')
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'umi_materialUI_template',
      dll: true,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
