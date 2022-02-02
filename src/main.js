import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

// import router from './routes'
import VueRouter from 'vue-router'

Vue.use(Buefy)
Vue.use(VueRouter)

const routes =[
  {
      path :'/',
      name: 'Home',
      component: ()=> import ('./components/Home.vue')
  },
  {
      path :'/products/:id',
      name: 'Products',
      // component : Products,
      component: ()=> import ('./components/Products.vue')
  }
]

Vue.config.productionTip = false

new Vue({
  router: new VueRouter({
    mode: 'history',
    routes
  }),
  render: h => h(App)
}).$mount('#app')
