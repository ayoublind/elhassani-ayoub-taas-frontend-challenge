<template>
    <div>
        <h1 class="text-left text-1xl font-semibold text-gray dark:text-white">
            Commits for {{ branch }} / {{ repository.full_name }}
        </h1>
        <div class="mt-4">
            <div class="grid grid-cols-6 gap-4">
                <div class="ml-2 col-start-1 col-end-7" v-for="commit in commits" :key="commit.sha">
                    <commit-header :keyDate="commit[0]" />
                    <div class="ml-10 mb-3" v-for="item in commit[1]" :key="item.sha">
                        <commit-item :commit="item" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CommitHeader from './CommitHeader.vue'
import CommitItem from './CommitItem.vue'
export default {
    components: { CommitItem, CommitHeader },
    name: 'CommitsList',
    props: {
        commits: {
            type: Array,
            required: true
        },
        repository: {
            type: Object,
            required: true
        },
        branch: {
            type: String,
            required: true
        }
    },
}
</script>