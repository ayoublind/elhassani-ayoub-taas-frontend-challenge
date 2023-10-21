<template>
    <div>
        <welcome-logo />
        <router-view></router-view>
    </div>
</template>
  
<script>
import WelcomeLogo from '@/components/common/WelcomeLogo.vue'
export default {
    components: { WelcomeLogo },
    name: 'UnauthorizedLayout',
}
</script>