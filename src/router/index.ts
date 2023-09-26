import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        name: 'TheHomePage',
        path: '/',
        component: () => import('~/components/pages/TheHomePage.vue'),
        props: true
    },
    {
        name: 'Register',
        path: '/Register',
        component: () => import('~/components/pages/TheRegisterPage.vue')
    },
    {
        name: 'TheProductsPage',
        path: '/products',
        component: () => import('~/components/pages/TheProductsPage.vue'),
        props: true
    },
    {
        name: 'TheProduct',
        path: '/product/:id',
        component: () => import('~/components/pages/TheProductView.vue'),
        props: true
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (localStorage.getItem("user")) {
            next();
        } else {
            alert("You must register to sell products");
            next("/");
        }
    } else {
        next();
    }
});
export default router;