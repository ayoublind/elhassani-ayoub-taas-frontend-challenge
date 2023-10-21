<template>
    <div>
        <Navbar></Navbar>
        <router-view></router-view>
    </div>
</template>
    
<script>
import Navbar from "@/components/NavBar";
export default {
    name: "MainLayout",
    components: { Navbar },
};
</script>