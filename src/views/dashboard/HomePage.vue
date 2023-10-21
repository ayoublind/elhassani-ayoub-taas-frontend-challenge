<template>
    <div class="md:container md:mx-auto">
        <repositories-list />
    </div>
</template>
<script>
import RepositoriesList from '@/components/github/RepositoriesList.vue'
export default {
    name: "HomePage",
    components: {
        RepositoriesList
    }
}
</script>