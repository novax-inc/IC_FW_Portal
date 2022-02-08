import Vue from "vue"
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Category from '../components/Category.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/category',
        name: 'Category',
        component: Category,
        props: true
    },
    {
        path: '/products/:id',
        name: 'Products',
        component: () => import('../components/Products.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 };
      }
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
