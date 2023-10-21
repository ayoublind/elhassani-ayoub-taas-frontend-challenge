<template>
    <div class="flex flex-col justify-center items-center h-[40vh]">
        <div
            class="flex w-full flex-col rounded-md bg-cover px-[10px] py-[10px] md:px-[40px] md:py-[40px] max-w-[95%] xl:max-w-[800px] w-[95%]">
            <img src="@/assets/youcan-logo.svg" alt="YouCan Logo" />
        </div>
    </div>
</template>

<script>

export default {
    name: 'WelcomeLogo',
    props: {
        msg: String
    }
}
</script>