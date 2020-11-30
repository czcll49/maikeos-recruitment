import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'

Vue.use(Router)

// 配置路由路径
const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
]

// 将路径注入到Router中
const router = new Router({
    'mode': 'history',
    routes
})

// 导出路由
export default router;
