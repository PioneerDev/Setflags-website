// use export error,so change to module.exports
module.exports = [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/flaglists/index' },
        {path:'/newflags',component:'../pages/newflags/index'},
        {path:'/myflags',component:'../pages/myflags/index'}
      ]
    },
    {
      path: '/newflags',
      component: '../layouts/index',
      routes: [
        {path: '/newflags', component: '../pages/newflags/index'}
      ]
    }
  ]