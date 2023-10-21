<template>
    <div>
        <span class="mr-2">{{ userinfo.name }}</span>
    </div>
</template>
 
<script>
export default {
    computed: {
        userinfo() {
            return this.$store.getters["auth/Userinfo"]
        },
    },
    created() {
        this.$store
            .dispatch("auth/FetchUserInfo").catch(() => {
            });
    }
}
</script>
 
<style></style>