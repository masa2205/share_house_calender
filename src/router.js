import Vue from 'vue'
import Router from 'vue-router'
import Test1 from './views/Test1'
import Test2 from './views/Test2'
import Counter from './components/Counter'
import store from "@/store.js"
import Chat from './views/Chat'
import Home from './views/Home'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/Test1',
        name: 'Test1',
        component: Test1,
        meta: {
          authRequired: false
        }
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
      },
      {
        path: "/sign-in",
        name: "signin",
        component: () => import("./views/Signin.vue")
      },  
      {
        path: "/join",
        name: "join",
        component: () => import("./views/Join.vue")
      },
      {
        path: '/Chat',
        name: 'Chat',
        component: Chat,
        meta: {
          authRequired: false
        }
      },
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          authRequired: false
        }
      }
    ]
  });

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.state.isAuthenticated) {
      next({
        path: "/sign-in"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;