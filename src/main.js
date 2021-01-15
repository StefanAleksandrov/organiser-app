import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import firebaseAuth from 'firebase/firebase-auth'
import firebaseConfig from './components/config/firebaseConfig'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false
Vue.use(firebase)
Vue.use(firebaseAuth)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
