<template>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-wrap">

            <side-bar-component />

            <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''"
                id="main-content">

                <nav-bar />

                <div class="p-6 bg-gray-100 mb-20">
                    <router-view />
                </div>

                <Footer />

            </div>
        </div>
    </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
import NavBar from '@/components/NavBar.vue'
import SideBarComponent from '@/components/SideBarComponent.vue'

export default {
    name: "HomePage",
    data() {
        return {
        }
    },
    mounted() {
        this.$store.dispatch('auth/fetchUser')
    },
    components: {
        Footer,
        NavBar,
        SideBarComponent
    }
}
</script>