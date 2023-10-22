<template>
    <div class="sticky top-0 z-50">
        <div class="w-full h-20 px-6 bg-gray-100 border-b flex items-center justify-between">

            <!-- left navbar -->
            <div class="flex">

            </div>

            <!-- right navbar -->
            <div class="flex items-center relative">
                <div v-if="user && user.avatar_url">
                    <img :src="user.avatar_url" :alt="user.name" class="w-12 h-12 rounded-full shadow-lg">
                </div>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'NavBar',
    data() {
        return {
        }
    },
    computed: {
        user() {
            return this.$store.getters["auth/getUser"]
        },
    },
    methods: {
    }
}
</script>