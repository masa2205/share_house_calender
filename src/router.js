import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Test1 from './views/Test1'
import Test2 from './views/Test2'
import Counter from './components/Counter'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
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
      },
      {
        path: '/Counter',
        name: 'Counter',
        component: Counter
      }
    ]
  })
  