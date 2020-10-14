import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@pages/home/Home.vue'
import First from '@pages/01/First.vue'
import Second from '@pages/02/Second.vue'
import Third from '@pages/03/Third.vue'
import Fourth from '@pages/04/Fourth.vue'
import Fifth from '@pages/05/Fifth.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/Jin/',
  routes: [
    {
      path: '/',
      component: Home,
      name: Home.name,
      meta: { title: 'Home' }
    },
    {
      path: '/unashamed',
      component: First,
      name: First.name,
      meta: { title: 'Unashamed' }
    },
    {
      path: '/art-at-heart',
      component: Second,
      name: Second.name,
      meta: { title: 'Art At Heart' }
    },
    {
      path: '/dreamlist',
      component: Third,
      name: Third.name,
      meta: { title: 'Dreamlist' }
    },
    {
      path: '/scanny',
      component: Fourth,
      name: Fourth.name,
      meta: { title: 'Scanny' }
    },
    {
      path: '/flip',
      component: Fifth,
      name: Fifth.name,
      meta: { title: 'Flip' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title)
    document.title = to.meta.title
  
  next()
})

export default router
