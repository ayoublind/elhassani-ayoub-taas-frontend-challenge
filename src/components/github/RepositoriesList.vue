<template>
    <div>
        {{ repos }}
    </div>
</template>
 
<script>
export default {
    computed: {
        repos() {
            return this.$store.getters["github/getAllRepos"]
        }
    },
    data() {
        return {
            value: null,
        }
    },
    watch: {
        value: function (val) {
            this.$emit('setreponame', val)
        },
    },
    created() {
        this.$store
            .dispatch("github/fetchAllRepos").catch((err) => {
                console.log("error while fetching repos :", err)
                // this.$router.push({ path: '/' })
            });
    }
}
</script>
 
<style></style>