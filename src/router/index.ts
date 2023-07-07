
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    name: 'TheHomePage',
    path: '/',
    component: () => import('~/components/pages/TheHomePage.vue')
  },
  {
    name: 'SingIn',
    path: '/SingIn',
    component: () => import('~/components/pages/SignIn.vue')
  },
  {
    name: 'Register',
    path: '/Register',
    component: () => import('~/components/pages/TheRegisterPage.vue')
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
//   scrollBehavior(to) {
//     const scroll = {};
//     if (to.meta.toTop) scroll.top = 0;
//     if (to.meta.smoothScroll) scroll.behavior = "smooth";
//     return scroll;
//   },
// });
// router.afterEach(() => {
//   store.dispatch("clearItems", {
//     modules: ["categories", "forums", "posts", "threads"],
//   });
// });
//
// router.beforeEach(async (to, from) => {
//   await store.dispatch("auth/initAuthentication");
//   store.dispatch("unsubscribeAllSnapshots");
//   if (to.meta.requiresAuth && !store.state.auth.authId) {
//     return { name: "SignIn", query: { redirectTo: to.path } };
//   }
//   if (to.meta.requiresGuest && store.state.auth.authId) {
//     return { name: "Home" };
//   }
});

export default router;
