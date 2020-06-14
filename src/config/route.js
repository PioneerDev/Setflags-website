// use export error,so change to module.exports
module.exports = [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/flaglists/index' },
        {path:'/newflags',component:'../pages/newflags/index'},
        {path:'/myflags',component:'../pages/myflags/index'},
        // {path:'/myflagss',component:'../pages/myflags/index'},
        {path:'/flagdetail',component:'../pages/flagdetail/index'}
      ]
    }
  ]
