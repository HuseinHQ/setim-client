import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import HomePage from '../views/HomePage.vue'
import DetailPage from '../views/DetailPage.vue'
import LibraryPage from '../views/LibraryPage.vue'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/games/:id',
      name: 'detail',
      component: DetailPage
    },
    {
      path: '/libraries',
      name: 'library',
      component: LibraryPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  if ((to.path === '/login' || to.path === '/register') && localStorage.getItem('access_token')) {
    Toast.fire({
      icon: 'info',
      title: 'You already Signed in!'
    })
    next('/')
  } else if (to.path === '/libraries' && !localStorage.getItem('access_token')) {
    Toast.fire({
      icon: 'error',
      title: 'You have to Sign in before accessing library!'
    })
    next('/login')
  } else if (to.path === '/profile') {
    Toast.fire({
      icon: 'info',
      title: "Sorry this feature isn't available yet!"
    })
  } else {
    next()
  }
})

export default router
