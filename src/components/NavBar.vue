<template>
    <div>
        <span class="mr-2">{{ userinfo.name }}</span>
    </div>
</template>
 
<script>
export default {
    computed: {
        userinfo() {
            return this.$store.getters["auth/getUser"]
        },
    },
    created() {
        this.$store
            .dispatch("auth/fetchUser").catch(() => {
            });
    }
}
</script>
 
<style></style>