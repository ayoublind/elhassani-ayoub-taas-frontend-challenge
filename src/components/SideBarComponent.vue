<template>
    <div class="w-1/2 md:w-1/3 hidden lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30"
        id="main-nav">

        <div class="w-full h-20 border-b flex px-4 items-center mb-8">
            <Logo />
        </div>

        <div class="mb-4 px-4">
            <div style="height: 700px;" class=" overflow-y-auto">
                <div v-if="reposLoading">
                    <skeleton-list />
                </div>
                <ul v-else class="space-y-4 text-left text-gray-500 dark:text-gray-400">
                    <li class="flex items-center space-x-3" v-for="(repo, index) in repos" :key="index">
                        <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5.917 5.724 10.5 15 1.5" />
                        </svg>
                        <span>{{ repo.full_name }}</span>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
import Logo from './Logo.vue'
import SkeletonList from '@/components/common/SkeletonList.vue'

export default {
    components: { Logo, SkeletonList },
    name: 'SideBarComponent',
    data() {
        return {
            repos: [],
            reposLoading: true
        }
    },
    methods: {
        async getAllReposFromApi() {
            this.reposLoading = true
            return await this.$store
                .dispatch("github/fetchAllRepos").then(result => {
                    this.reposLoading = false
                    return result
                }).catch((err) => {
                    console.log("error while fetching repos :", err)
                    this.reposLoading = false
                    return []
                });
        }
    },
    async mounted() {
        this.repos = await this.getAllReposFromApi()
    }
}
</script>