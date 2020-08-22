
// ref: https://umijs.org/config/
import * as routes from './route.js'
const path = require('path')


const resolve = function (dir) {
  return path.join(__dirname, '.', dir)
}

export default {
  treeShaking: true,
  disableCSSModules:true,

  history:'hash',
  routes: [
    ...routes.default
  ],
  alias: {
    '@': resolve('../src'),
    '@PAGES': resolve('../src/pages'),
    '@SERVICES': resolve('../src/services'),
    '@CONFIG': resolve('../src/config'),
    '@UTILS': resolve('../src/utils')
  },

}
