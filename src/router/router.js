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
import PageUnderConstruction from '../components/common/PageUnderConstruction'
import Admin from '../components/administration/Admin'

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
    path: '/admin',
    name: 'Admin',
    component: Admin
  },

  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },

  {
    path: '/questions-and-answers',
    name: 'Q&A',
    component: PageUnderConstruction,
  },

  {
    path: '/profile',
    name: 'Profile',
    component: PageUnderConstruction,
  },

  {
    path: '/add-event',
    name: 'AddEvent',
    component: AddEvent
  },
  
  {
    path: '/events/:id/details',
    name: 'DetailsPublic',
    component: Details
  },
  
  {
    path: '/events/:uid/:id/details',
    name: 'DetailsPrivate',
    component: Details
  },
  
  {
    path: '/edit-event/:id',
    name: 'EditPublicEvent',
    component: AddEvent
  },
  
  {
    path: '/edit-event/:uid/:id',
    name: 'EditPrivateEvent',
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
});

router.beforeEach(auth);

export default router;
