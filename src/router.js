import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Test1 from './components/Test1'
import Test2 from './components/Test2'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/Test1',
        name: 'Test1',
        component: Test1
      },
      {
        path: '/Test2',
        name: 'Test2',
        component: Test2
      }
    ]
  })
  