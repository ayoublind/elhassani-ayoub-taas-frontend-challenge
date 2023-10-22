<template>
    <div>

        <div class="flex">
            <div class="flex-none w-14">
                <svg class="h-4 w-4 inline-block align-middle  text-gray-500" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="6" y1="3" x2="6" y2="15" />
                    <circle cx="18" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M18 9a9 9 0 0 1-9 9" />
                </svg>
            </div>
            <div class="flex-1 w-64">
                <select id="branches" @change="branchSelected"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="" selected>Select a Branch</option>
                    <option v-for="(branch, index) in branches" :value="branch.name" :key="index">{{ branch.name }}</option>
                </select>
            </div>
        </div>

    </div>
</template>
 
<script>
export default {
    name: 'BranchsList',
    props: {
        branches: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            value: null,
        }
    },
    methods: {
        branchSelected(event) {
            this.$emit('selectBranch', event.target.value)
        }
    }
}
</script>
 
<style></style>