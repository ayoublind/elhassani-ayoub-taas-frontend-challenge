<template>
    <div id="main-body">
        <div class="">
            <side-bar-component @selectRepository="handleSelectingRepository" />

            <div class=" flex flex-col w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen overlay">

                <nav-bar />

                <div class="grow p-6 bg-gray-100 mb-20">
                    <div v-if="selectedRepo">
                        <github-repository :repository="selectedRepo" :branches="branches" />
                    </div>
                    <div v-else>
                        <h1 class=" text-2xl font-semibold text-gray-800 dark:text-white">
                            Please select a Repository first to be able to see the issues/Branches
                        </h1>
                    </div>
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
import GithubRepository from '@/components/github/GithubRepository.vue'

export default {
    name: "HomePage",
    data() {
        return {
            selectedRepo: null,
            branches: []
        }
    },
    mounted() {
        this.$store.dispatch('auth/fetchUser')
    },
    methods: {
        async handleSelectingRepository(repo) {
            this.selectedRepo = null
            this.branches = []
            this.$store.commit('github/setSelectedRepo', repo)
            await this.$store.dispatch("github/fetchAllBranchs", repo.full_name).then(result => {
                this.branches = result
            }).catch((err) => {
                console.log("error while fetching branches :", err)
                this.branches = []
            })
            this.selectedRepo = repo
        }
    },
    components: {
        Footer,
        NavBar,
        SideBarComponent,
        GithubRepository
    }
}
</script>