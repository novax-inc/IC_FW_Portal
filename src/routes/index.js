import Vue from "vue"
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes =[
    {
        path :'/',
        name: 'Home',
        component: Home
    },
    {
        path :'/products/:id',
        name: 'Products',
        component: ()=> import ('../components/Products.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router