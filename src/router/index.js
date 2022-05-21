import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Rigister from '../views/Register.vue'
import store from '../store'
import HomePage from '../views/HomePage.vue'
import SearchPage from '../views/SearchPage'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'homePage',
        component: HomePage,
    },

    {
        path: '/search',
        name: 'searchPage',
        component: SearchPage,
    },

    {
        path: '/login',
        name: 'login',
        component: Login,
        meta:{noBar: true}
    },
    {
        path: '/rigister',
        name: 'rigister',
        component: Rigister,
        meta:{noBar: true}
    },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.noBar) {
        store.state.ifBar = false;
        next();
        
    } else {
        store.state.ifBar = true;
        next();
    }
})

export default router
