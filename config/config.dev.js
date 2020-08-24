export default {
  define:{
    "process.env.BASEURL":'https://setflags.droneidentity.eu',
    "process.env.CLIENTID": 'bcec843a-d431-4bf0-8e82-cc10079d20ac'
  },
  outputPath:'docs',
  base: '/',
  publicPath :'/',
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
    [
      'umi-plugin-gh-pages'
    ]
  ],
}