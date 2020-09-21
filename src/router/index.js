import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import Home from '../views/home/Home.vue'
import Logoin from '../views/logo/Logoin.vue'

import Admin from '../views/home/Admin.vue'
import Appli from '../views/home/Appli.vue'
import Role from '../views/home/Role.vue'
import Userlog from '../views/home/Userlog.vue'
import Syslog from '../views/home/Syslog.vue'

Vue.use(VueRouter)


const routes = [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/logoin',
            component: Logoin
        }, {
            path: '/home',
            component: Home,
            meta: { name: '应用管理', id: '1' },
            redirect: '/home/appli',
            children: [{
                    path: "/home/appli",
                    component: Appli,
                    meta: { name: '用户管理', id: '1-1' }

                },
                {
                    path: '/home/role',
                    component: Role,
                    meta: { name: '角色管理', id: '1-2 ' }

                },
            ]
        },
        {
            path: '/log',
            meta: { name: '日志管理', id: '2' },
            children: [{
                    path: '/log/syslog',
                    component: Syslog,
                    meta: { name: '系统日志', id: '2-1' }
                },
                {
                    path: '/log/userlog',
                    component: Userlog,
                    meta: { name: '用户行为', id: '2-2' }
                },
                {
                    path: '/log/admin',
                    component: Admin,
                    meta: { name: '管理员日志', id: '2-3' }
                }
            ]
        }


    ]
    // 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    if (to.path === '/logoin') {
        if (sessionStorage.getItem('name')) {
            router.push('/home')
        } else {
            next()
        }
    }

    if (sessionStorage.getItem('name')) {
        next()
    } else {
        router.push('/logoin')
    }
})

export default router