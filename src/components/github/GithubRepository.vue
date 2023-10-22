<template>
    <div>
        <div>
            <h1 class="text-2xl font-semibold text-gray-800 dark:text-white">
                {{ repository.full_name }}
            </h1>
        </div>
        <branchs-list @selectBranch="handleBranchSelection" :branches="branches" />
        <!-- commits -->
        <div class="mt-4" v-if="branchSelected">
            <commits-list key="commits-list" :repository="repository" :branch="branchSelected" :commits="commits" />
        </div>
    </div>
</template>
<script>
import BranchsList from './BranchsList.vue'
import CommitsList from './CommitsList.vue'
export default {
    components: { BranchsList, CommitsList },
    name: 'GithubRepository',
    data() {
        return {
            branchSelected: null
        }
    },
    props: {
        repository: {
            type: Object,
            required: true
        },
        branches: {
            type: Array,
            required: true
        }
    },
    methods: {
        commitsFormatter(commits) {
            let result = {};
            commits.forEach(item => {
                let key = new Date(item.commit.committer.date);
                key = key.getFullYear() + '-' + (key.getMonth() + 1) + '-' + key.getDate()

                if (!result[key]) {
                    result[key] = [];
                }
                result[key].push(item);
            });

            Object.values(result).forEach((el) => {
                el.sort(function (a, b) {
                    return (new Date(new Date(b.commit.committer.date).getTime() - a.commit.committer.date).getTime());
                });
                return el
            })
            return Object.entries(result);
        },
        async handleBranchSelection(branch) {
            await this.$store.dispatch("github/fetchAllCommits", {
                repo: this.repository.full_name,
                branch: { name: branch }
            }).then(result => {
                this.commits = this.commitsFormatter(result)
            }).catch((err) => {
                console.log("error while fetching commits :", err)
                this.commits = []
            })
            this.branchSelected = branch || null
        }
    }
}
</script>