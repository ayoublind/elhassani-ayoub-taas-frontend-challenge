import { createRouter, createWebHistory } from "vue-router"

import HomePage from "@/views/dashboard/HomePage.vue"
import NotFoundPage from "@/views/public/NotFoundPage.vue"
import AuthorisationPage from "@/views/public/AuthorisationPage.vue"
import ContactPage from "@/views/public/ContactPage.vue"
import AboutPage from "@/views/public/AboutPage.vue"
import { loadLayoutMiddleware } from "@/middleware/loadLayoutMiddleware"

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: [
        {
            path: "/",
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
        {
            path: "/:pathMatch(.*)*",
            component: NotFoundPage,
            meta: {
                layout: "UnauthorizedLayout"
            }
        }
    ],
})
router.beforeEach(loadLayoutMiddleware)
export default router