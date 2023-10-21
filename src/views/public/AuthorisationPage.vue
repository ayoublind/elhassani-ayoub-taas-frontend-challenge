<template>
    <div class="wrapper-auth">
        <div class="mb-10">
            <welcome-logo />
            <h1 class="text-3xl font-bold mb-4">Welcome to {{ config.app_name }}</h1>
        </div>
        <a class="mt-10" :href="`https://github.com/login/oauth/authorize?scope=user:email&client_id=${config.client_id}`">
            <button class="bg-youcan text-white font-bold pt-4 pb-4 py-2 px-4 rounded">
                Authorize my Github account
            </button>
        </a>
    </div>
</template>
  
<script>
import config from "@/config"
import WelcomeLogo from '@/components/common/WelcomeLogo.vue'

export default {
    name: 'AuthorisationPage',
    components: { WelcomeLogo },
    computed: {
        config() {
            return config
        }
    }
}
</script>
<style>
.bg-youcan {
    background-color: #B83375;
}
</style>
