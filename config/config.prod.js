const argv = process.argv
const argvobj = {}
if(argv.length > 2) {
  argv.forEach((ele)=>{
    if(ele.indexOf('=')>-1) {
      const oneitem = ele.split('=')
      argvobj[oneitem[0]] = oneitem[1]
    }
  })
}
export default {
  define:{
    "process.env.BASEURL":process.env.BASEURL?process.env.BASEURL:'https://setflags.droneidentity.eu',
    "process.env.CLIENTID": process.env.BASEURL?process.env.BASEURL:'bcec843a-d431-4bf0-8e82-cc10079d20ac'
  },
  outputPath:'dist',
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
    }]
  ],
}
