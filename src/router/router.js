//App Import
import Vue from 'vue'
import VueRouter from 'vue-router'

//Components import
import UpcomingEvents from '../components/events/UpcomingEvents'
import About from '../components/about/About'
import Login from '../components/authentication/Login'
import Register from '../components/authentication/Register'
import Contacts from '../components/contacts/Contacts'
import AddEvent from '../components/events/AddEvent'
import Details from '../components/events/Details'
import PageNotFound from '../components/common/PageNotFound'

//Route guard
import auth from './route-guards/authentication'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: UpcomingEvents
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
    path: '/events/:id/details',
    name: 'Details',
    component: Details
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
});

router.beforeEach(auth);

export default router;
