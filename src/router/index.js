import { createRouter, createWebHistory } from "vue-router"

import HomePage from "@/views/dashboard/HomePage.vue"
// import NotFoundPage from "@/views/public/NotFoundPage.vue"
import AuthorisationPage from "@/views/public/AuthorisationPage.vue"
import ContactPage from "@/views/public/ContactPage.vue"
import AboutPage from "@/views/public/AboutPage.vue"
import { loadLayoutMiddleware } from "@/middleware/loadLayoutMiddleware"
import store from "@/store"

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: [
        {
            path: "/home",
            component: HomePage,
            meta: {
                layout: "MainLayout"
            }
        },
        {
            path: "/about",
            component: AboutPage,
            meta: {
                layout: "MainLayout"
            }
        },
        {
            path: "/contact",
            component: ContactPage,
            meta: {
                layout: "MainLayout"
            }
        },
        {
            path: "",
            component: AuthorisationPage,
            meta: {
                layout: "UnauthorizedLayout"
            }
        },
        // {
        //     path: "/:pathMatch(.*)*",
        //     component: NotFoundPage,
        //     meta: {
        //         layout: "UnauthorizedLayout"
        //     }
        // }
    ],
})
router.beforeEach((route) => {
    loadLayoutMiddleware(route)
    if (route.path == "/" && store.getters["auth/isAuthenticated"] == true) {
        return router.push({ path: "/home" })
    }
    const code = route.query.code
    if (code) {
        store.dispatch("auth/getAccessToken", code)
            .then((res) => {
                if (!res.data.error) {
                    router.push({ path: "/home" })
                } else {
                    console.log("error :", res.data.error)
                    router.push({ path: "/" })
                }
            })
            .catch((err) => {
                console.log(err)
            });
    } else {
        console.log("no code")
    }
})
export default router