<template>
    <div>
        <div class="flex items-center relative mt-4">
            <div>
                <svg class="h-4 w-4 inline-block align-middle text-gray-500" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <line x1="1.05" y1="12" x2="7" y2="12" />
                    <line x1="17.01" y1="12" x2="22.96" y2="12" />
                </svg>
            </div>

            <div class="ml-4">
                {{ headerFormatter(keyDate) }}
            </div>
        </div>

    </div>
</template>
<script>
import moment from 'moment'
export default {
    name: 'CommitHeader',
    props: {
        keyDate: {
            type: String,
            required: true
        },
    },
    methods: {
        headerFormatter(date) {
            let now = new Date(date);
            return "Commits on " + moment(now).format("MMMM Do YYYY");
        }
    }
}
</script>