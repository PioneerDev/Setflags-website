// use export error,so change to module.exports
module.exports = [
    {
      path: '/flagdetail',
      component: '../layouts/simple/index',
      routes: [
        {path:'/flagdetail',component: '../pages/flagdetail/index'}
      ]     
    },
    {
      path: '/myflags',
      component: '../layouts/simple/index',
      routes: [
        {path:'/myflags', component: '../pages/myflaglists/index'}
      ]
    },
    {
      path: '/',
      component: '../layouts/basic/index',
      routes:[
        { path: '/', component: '../pages/flaglists/index' },
        {path:'/newflags',component:'../pages/newflags/index'},
        {path:'/myflags',component:'../pages/myflags/index'}        
      ]
    }
  ]
