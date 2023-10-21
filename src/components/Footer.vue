<template>
    <div class="w-full border-t-2 px-8 py-6 lg:flex justify-between items-center">
        <p class="mb-2 lg:mb-0">
            © Copyright to
            <a href="https://github.com/ayoublind" target="_blank">ayoub</a>
            {{ new Date().getFullYear() }}
        </p>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer'
}
</script>