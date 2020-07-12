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
      path: '/myflagslists',
      component: '../layouts/simple/index',
      routes: [
        {path:'/myflagslists', component: '../pages/flaglists/index'}
      ]
    },
    {
      path: '/addflagsuccess',
      component: '../layouts/simple/index',
      routes:[
        {path:'/addflagsuccess', component:'../pages/addflagsuccess/index'}
      ]
    },
    {
      path: '/addflagfail',
      component: '../layouts/simple/index',
      routes:[
        {path:'/addflagfail', component:'../pages/addflagfail/index'}
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
