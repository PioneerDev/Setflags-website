
// ref: https://umijs.org/config/
import * as routes from './src/config/route.js'
const path = require('path')

export default {
  treeShaking: true,
  routes: [
    ...routes.default
  ],
  alias: {'@': resolve(__dirname, '../src'),},
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
