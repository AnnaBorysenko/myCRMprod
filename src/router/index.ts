// import {createRouter, createWebHistory} from "vue-router";
//
//
// const routes = [
//     {
//         name: 'TheHomePage',
//         path: '/',
//         component: () => import('~/components/pages/TheHomePage.vue')
//     },
//     {
//         name: 'Register',
//         path: '/Register',
//         component: () => import('~/components/pages/TheRegisterPage.vue')
//     },
//     {
//         name: 'TheProductsPage',
//         path: '/TheProductsPage',
//         component: () => import('~/components/pages/TheProductsPage.vue'),
//         props: true
//     },
//     {
//         name: 'TheProduct',
//         path: '/TheProduct',
//         component: () => import('~/components/pages/TheProductPrewPage.vue'),
//         props: true
//     }
//
// ];
// const router = createRouter({
//     history: createWebHistory(),
//     routes,
// //   scrollBehavior(to) {
// //     const scroll = {};
// //     if (to.meta.toTop) scroll.top = 0;
// //     if (to.meta.smoothScroll) scroll.behavior = "smooth";
// //     return scroll;
// //   },
// // });
// // router.afterEach(() => {
// //   store.dispatch("clearItems", {
// //     modules: ["categories", "forums", "posts", "threads"],
// //   });
// // });
// //
// // router.beforeEach(async (to, from) => {
// //   await store.dispatch("auth/initAuthentication");
// //   store.dispatch("unsubscribeAllSnapshots");
// //   if (to.meta.requiresAuth && !store.state.auth.authId) {
// //     return { name: "SignIn", query: { redirectTo: to.path } };
// //   }
// //   if (to.meta.requiresGuest && store.state.auth.authId) {
// //     return { name: "Home" };
// //   }
// });
//
// export default router;



import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        name: 'TheHomePage',
        path: '/',
        component: () => import('~/components/pages/TheHomePage.vue')
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
        path: '/product/prew/:id',
        component: () => import('~/components/pages/TheProductPrewPage.vue'),
        props: true
    },
    {
        name: 'TheProductMain',
        path: '/product/:id',
        component: () => import('~/components/pages/TheProductMainForm.vue'),
        props: true
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

/* Check that the user is logged in if not show alert and redirect to the home page */
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