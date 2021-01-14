import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home'
import About from '../components/about/About'
import Login from '../components/authentication/Login'
import Register from '../components/authentication/Register'
import Contacts from '../components/contacts/Contacts'
import AddEvent from '../components/events/AddEvent'
import PageNotFound from '../components/common/PageNotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/add-event',
    name: 'AddEvent',
    component: AddEvent
  },
  {
    path: '/*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
