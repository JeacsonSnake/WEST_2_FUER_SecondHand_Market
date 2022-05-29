import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import store from '../store'
import HomePage from '../views/HomePage.vue'
import SearchPage from '../views/SearchPage'
import UserPage from '../views/UserPage.vue'
import FootPrintPage from '../views/FootPrintPage.vue'
import CollectionPage from '../views/CollectionPage.vue'
import BuyInPage from '../views/BuyInPage';
import SoldAwayPage from '../views/SoldAwayPage';
import GoodsDisplayPage from '../views/GoodsDisplayPage.vue';
import OrderPage from '../views/OrderPage'
Vue.use(VueRouter)

const routes = [
    {
        name: 'homePage',
        path: '/',
        component: HomePage,
        
    },

    {
        name: 'searchPage',
        path: '/search',
        component: SearchPage,
        meta: { needAuth: true },
        props($route) {
            return {
                searchItem: $route.query.searchItem,
            }
        }
    },

    {
        name: 'goodsDisplayPage',
        path: '/goods',
        component: GoodsDisplayPage,
        meta:{needAuth: true},
    },

        {
        name: 'orderPage',
        path: '/order',
        component: OrderPage,
        meta:{needAuth: true},
    },

    {
        name: 'userPage',
        path: '/user',
        component: UserPage,
        meta:{needAuth: true},
        children: [
            {
                name: 'footPrintPage',
                path: 'footPrint',
                component: FootPrintPage,
            },
            {
                name: 'CollectionPage',
                path: 'collection',
                component: CollectionPage,
            },
            {
                name: 'BuyInPage',
                path: 'buyIn',
                component: BuyInPage,
            },
            {
                name: 'SoldAwayPage',
                path: 'soldAway',
                component: SoldAwayPage,
            },
        ]
    },

    {
        path: '/login',
        name: 'login',
        component: Login,
        meta:{noBar: true}
    },
    
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta:{noBar: true}
    },

]

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition && to.meta.keepAlive) {
            return savedPosition;
        }
        return { x: 0, y: 0 };
    },
})

router.beforeEach((to, from, next) => {
    if (to.meta.noBar) {
        store.state.ifBar = false;
        
    } else {
        store.state.ifBar = true;
    }
        next();
    // if (!to.meta.needAuth) {
    //     next();       
    // } else {
    //     if (store.state.isAuth) {
    //         next();
    //     } else {
    //         alert("需要登录才可以进行后续操作!!");
    //         next({
    //             path: '/login',
    //             query: {
    //                 redirect: to.fullPath
    //             }
    //         })
    //     }
    // }
})

export default router
