import Vue from 'vue'
import VueRouter from 'vue-router'
import PageHome from '../views/PageHome/PageHome.vue'
import PageLogin from '../views/PageLogin/PageLogin.vue'

Vue.use(VueRouter)

const routes = [
  //esse é o padrão para todas as rotas.
  {
    path: '/',
    name: 'Login',
    component: PageLogin
  },
  //cado utilizar o /login, o componente PageLogin será exibido, tambem apenas com o "/" como na rota padrão.
  {
    path: '/login',
    name: 'Login',
    component: PageLogin
  },
  {
    path: '/home',
    name: 'Home',
    component: PageHome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
