import Router from 'vue-router'

import IndexPage from './pages/IndexPage'
import AboutPage from './pages/AboutPage'

const router = new Router({
    'mode': 'history',
    'routes': [
        {
            path: '/',
            component: IndexPage,
        },
        {
            path: '/about',
            component: AboutPage,
        },

    ],
    scrollBehavior() {
        return {x: 0, y: 0}
    }
})

export default router