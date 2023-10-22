<template>
    <div>
        <div class="flex items-center relative">
            <div class="mr-4">
                <img :src="commit.author.avatar_url" :alt="commit.author.name" class="w-12 h-12 rounded-full shadow-lg">
            </div>
            <div class="mt-4 text-left">
                <div class="mb-2">
                    <h2 class="font-bold">{{ commit?.author?.login }}</h2>
                </div>
                <div>
                    <a :href="commit.html_url" target="_blank">
                        <b>{{ commit?.commit?.message }}</b>
                        <span class="ml-1 font-light text-gray-500 dark:text-gray-400">
                            at {{ hourFormatter(commit?.commit?.committer?.date) }}
                        </span>
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import moment from 'moment';
export default {
    name: 'CommitItem',
    props: {
        commit: {
            type: Object,
            required: true
        },
    },
    methods: {
        hourFormatter(date) {
            var now = new Date(date);
            return "Committed at " + moment(now).format("HH:MM");
        }
    }
}
</script>