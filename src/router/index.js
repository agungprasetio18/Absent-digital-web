import { createRouter, createWebHistory } from 'vue-router'

//views
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'

//layouts
import Auth from '../layouts/Auth.vue'
import Admin from '../layouts/Admin.vue'


//firebase
import firebase from 'firebase/app';
import "firebase/auth";

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'dashboard',
    component: Admin,
    meta: {requiresAuth: true},
    children: [
      {
        path: '/dashboard',
        component: Dashboard
      }
      
    ]
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=> {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if(requiresAuth && !isAuthenticated){
      next('/auth')
  } else {
    next()
  }
})

export default router
