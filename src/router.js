import Router from 'vue-router'

import IndexPage from './components/IndexPage'
import AboutPage from './components/AboutPage'

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